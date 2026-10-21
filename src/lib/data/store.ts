import { get, writable } from 'svelte/store';
import {
  collection,
  doc,
  onSnapshot,
  writeBatch,
  getDocsFromServer,
  getDocFromServer,
  waitForPendingWrites,
} from 'firebase/firestore';
import { db } from '#lib/firebase/client.ts';
import { session } from '#lib/auth/session.ts';
import {
  emptyData,
  type DataState,
  type Entry,
  type Food,
  type GoalRevision,
  type Profile,
  type Recipe,
  type Target,
} from '#lib/domain/types.ts';
import { goalAt, today, isDate } from '#lib/domain/dates.ts';
import {
  knownNutrients,
  makeEntry,
  positive,
  recipeTotals,
} from '#lib/domain/nutrition.ts';
export const data = writable<DataState>(emptyData());
export const notice = writable('');
let noticeTimer: ReturnType<typeof setTimeout>;
export function notify(message: string) {
  notice.set(message);
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.set(''), 5000);
}
const collections = [
  'foods',
  'recipes',
  'entries',
  'goalRevisions',
  'dayTargets',
] as const;
const keys = {
  foods: 'foods',
  recipes: 'recipes',
  entries: 'entries',
  goalRevisions: 'goals',
  dayTargets: 'dayTargets',
} as const;
type Change = {
  collection: (typeof collections)[number] | 'mealCopies';
  id: string;
  value?: unknown;
};
const previewKey = 'kalo-development-preview-v1';
export function connectData() {
  const s = get(session);
  data.set(emptyData());
  if (s.status === 'preview' && import.meta.env.DEV) {
    try {
      const saved = localStorage.getItem(previewKey);
      if (saved) data.set({ ...emptyData(), ...JSON.parse(saved) });
    } catch {
      localStorage.removeItem(previewKey);
    }
    data.update((d) => ({
      ...d,
      profile: d.profile.updatedAt
        ? d.profile
        : { ...d.profile, theme: 'light' },
      loaded: true,
      pending: false,
      historyComplete: true,
      error: '',
    }));
    const unsubscribe = data.subscribe((d) =>
      localStorage.setItem(previewKey, JSON.stringify(d)),
    );
    return () => {
      unsubscribe();
      data.set(emptyData());
    };
  }
  if (s.status !== 'owner' || !s.user) return () => {};
  const userPath = `users/${s.user.uid}`;
  const pending = new Map<string, boolean>();
  const cached = new Map<string, boolean>();
  const loaded = new Set<string>();
  const failure = (error: Error) =>
    data.update((d) => ({ ...d, error: error.message, loaded: true }));
  const stops = [
    onSnapshot(
      doc(db(), userPath),
      { includeMetadataChanges: true },
      (snap) => {
        loaded.add('profile');
        pending.set('profile', snap.metadata.hasPendingWrites);
        cached.set('profile', snap.metadata.fromCache);
        data.update((d) => ({
          ...d,
          profile: snap.exists()
            ? ({ ...d.profile, ...snap.data() } as Profile)
            : d.profile,
          loaded: loaded.size === 6,
          pending: [...pending.values()].some(Boolean),
          fromCache: [...cached.values()].some(Boolean),
        }));
      },
      failure,
    ),
  ];
  for (const name of collections)
    stops.push(
      onSnapshot(
        collection(db(), userPath, name),
        { includeMetadataChanges: true },
        (snap) => {
          loaded.add(name);
          pending.set(name, snap.metadata.hasPendingWrites);
          cached.set(name, snap.metadata.fromCache);
          const cacheKey = `kalo-cached-${s.user!.uid}-${name}`;
          if (!snap.metadata.fromCache)
            localStorage.setItem(
              cacheKey,
              JSON.stringify(snap.docs.map((doc) => doc.id)),
            );
          let historyComplete = get(data).historyComplete;
          if (name === 'entries') {
            const saved = localStorage.getItem(cacheKey);
            const expected: string[] = saved ? JSON.parse(saved) : [];
            const ids = new Set(snap.docs.map((doc) => doc.id));
            historyComplete =
              !snap.metadata.fromCache ||
              Boolean(saved && expected.every((id) => ids.has(id)));
          }
          data.update((d) => ({
            ...d,
            [keys[name]]: snap.docs.map((doc) => doc.data()),
            historyComplete,
            loaded: loaded.size === 6,
            pending: [...pending.values()].some(Boolean),
            fromCache: [...cached.values()].some(Boolean),
          }));
        },
        failure,
      ),
    );
  return () => {
    stops.forEach((stop) => stop());
    data.set(emptyData());
  };
}
function persist(changes: Change[], profile?: Profile) {
  // Svelte state can be proxied; freeze plain JSON at the persistence boundary.
  changes = changes.map((change) => ({
    ...change,
    ...(change.value === undefined
      ? {}
      : { value: JSON.parse(JSON.stringify(change.value)) }),
  }));
  if (profile) profile = JSON.parse(JSON.stringify(profile));
  const s = get(session);
  if (s.status === 'preview' && import.meta.env.DEV) {
    data.update((d) => {
      const next = JSON.parse(JSON.stringify(d)) as DataState;
      if (profile) next.profile = profile;
      for (const change of changes) {
        if (change.collection === 'mealCopies') continue;
        const key = keys[change.collection];
        const items = next[key] as unknown as { id: string }[];
        const index = items.findIndex((item) => item.id === change.id);
        if (change.value === undefined) {
          if (index >= 0) items.splice(index, 1);
        } else if (index >= 0) items[index] = change.value as { id: string };
        else items.push(change.value as { id: string });
      }
      return next;
    });
    return;
  }
  if (s.status !== 'owner' || !s.user)
    throw new Error('Sign in before saving.');
  const manifestKey = `kalo-cached-${s.user.uid}-entries`;
  const manifest = localStorage.getItem(manifestKey);
  if (manifest) {
    const ids = new Set<string>(JSON.parse(manifest));
    for (const change of changes.filter((c) => c.collection === 'entries')) {
      if (change.value === undefined) ids.delete(change.id);
      else ids.add(change.id);
    }
    localStorage.setItem(manifestKey, JSON.stringify([...ids]));
  }
  const batch = writeBatch(db());
  if (profile) batch.set(doc(db(), 'users', s.user.uid), profile);
  for (const c of changes) {
    const ref = doc(db(), 'users', s.user.uid, c.collection, c.id);
    if (c.value === undefined) batch.delete(ref);
    else batch.set(ref, c.value);
  }
  // Commit is intentionally not awaited: offline writes remain queued by Firestore.
  void batch.commit().catch((error) => {
    data.update((d) => ({
      ...d,
      error: `Could not sync your change: ${error.message}`,
    }));
    notify('A change could not sync. Review the error banner.');
  });
}
export function saveProfile(patch: Partial<Profile>) {
  const profile = { ...get(data).profile, ...patch, updatedAt: Date.now() };
  if (!profile.name.trim() || profile.name.length > 100)
    throw new Error('Enter your name (up to 100 characters).');
  new Intl.DateTimeFormat('en', { timeZone: profile.timezone });
  persist([], profile);
}
export function saveGoal(target: Target, profilePatch?: Partial<Profile>) {
  knownNutrients({ nutrients: target } as Food);
  if (target.kcal <= 0 || target.kcal > 10000)
    throw new Error('Enter a calorie target between 1 and 10,000.');
  const state = get(data),
    profile = { ...state.profile, ...profilePatch, updatedAt: Date.now() };
  const date = today(profile.timezone),
    id = crypto.randomUUID();
  const revision: GoalRevision = {
    id,
    effectiveDate: date,
    target,
    createdAt: Date.now(),
    schemaVersion: 1,
  };
  persist(
    [{ collection: 'goalRevisions', id, value: revision }],
    profilePatch ? profile : undefined,
  );
}
export function saveFood(food: Food) {
  knownNutrients(food);
  if (!food.name.trim() || food.name.length > 200)
    throw new Error('Give the food a name.');
  positive.parse(food.referenceAmount);
  for (const p of food.portions) positive.parse(p.multiplier);
  if (!food.portions.length || food.portions.length > 50)
    throw new Error('Choose a portion.');
  persist([
    {
      collection: 'foods',
      id: food.id,
      value: { ...food, updatedAt: Date.now() },
    },
  ]);
}
export function saveRecipe(recipe: Recipe) {
  if (!recipe.name.trim() || recipe.name.length > 200)
    throw new Error('Give the recipe a name.');
  persist([
    {
      collection: 'recipes',
      id: recipe.id,
      value: {
        ...recipe,
        nutrients: recipeTotals(recipe.ingredients),
        updatedAt: Date.now(),
      },
    },
  ]);
}
export function saveEntry(entry: Entry) {
  const d = get(data);
  const changes: Change[] = [
    { collection: 'entries', id: entry.id, value: entry },
  ];
  const now = today(d.profile.timezone);
  if (!isDate(entry.date) || entry.date > now)
    throw new Error('Choose today or a previous date.');
  persist(changes);
  notify('Diary updated.');
}
export function deleteEntry(entry: Entry) {
  persist([{ collection: 'entries', id: entry.id }]);
  notify('Entry removed. Use undo to restore it.');
}
export function copyMeal(
  entries: Entry[],
  destination: string,
  meal: Entry['meal'],
  operationId: string,
) {
  if (entries.length === 0 || entries.length > 100)
    throw new Error('Copy between 1 and 100 entries at a time.');
  const d = get(data);
  if (!isDate(destination) || destination > today(d.profile.timezone))
    throw new Error('Choose today or a previous date.');
  const copied = entries.map((e, index) => ({
    ...makeEntry(
      e.basis,
      e.amount,
      e.portionId,
      destination,
      meal,
      `${operationId}-${index}`,
    ),
    copyOperationId: operationId,
  }));
  const changes: Change[] = copied.map((e) => ({
    collection: 'entries',
    id: e.id,
    value: e,
  }));
  changes.push({
    collection: 'mealCopies',
    id: operationId,
    value: {
      id: operationId,
      destination,
      meal,
      entryIds: copied.map((e) => e.id),
      schemaVersion: 1,
      createdAt: Date.now(),
    },
  });
  persist(changes);
  notify('Meal copied.');
}
export async function exportData() {
  const s = get(session);
  let record: unknown = get(data);
  if (s.status === 'owner' && s.user) {
    if (!navigator.onLine)
      throw new Error('Reconnect to download a complete backup.');
    await waitForPendingWrites(db());
    const path = `users/${s.user.uid}`;
    const result: Record<string, unknown> = {
      profile: (await getDocFromServer(doc(db(), path))).data() || {},
    };
    for (const name of [...collections, 'mealCopies'])
      result[name] = (
        await getDocsFromServer(collection(db(), path, name))
      ).docs.map((d) => d.data());
    record = result;
  }
  const blob = new Blob(
    [
      JSON.stringify(
        {
          app: 'Kalo',
          schemaVersion: 1,
          exportedAt: new Date().toISOString(),
          mode: s.status === 'preview' ? 'development-preview' : 'complete',
          data: record,
        },
        null,
        2,
      ),
    ],
    { type: 'application/json' },
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `kalo-export-${today(get(data).profile.timezone)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}
