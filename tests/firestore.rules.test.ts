import { readFileSync } from 'node:fs';
import { afterAll, beforeAll, beforeEach, expect, it } from 'vitest';
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';
let env: RulesTestEnvironment;
beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-kalo',
    firestore: {
      rules: readFileSync('firestore.rules', 'utf8').replaceAll(
        'REPLACE_WITH_OWNER_UID',
        'owner',
      ),
    },
  });
});
beforeEach(async () => env.clearFirestore());
afterAll(async () => env?.cleanup());
const food = {
  id: 'rice',
  name: 'Test rice',
  brand: '',
  category: 'grains',
  nutrients: { kcal: 130, p: 2.7, c: 28, f: 0.3 },
  referenceAmount: 100,
  referenceUnit: 'g',
  portions: [{ id: 'g', label: 'gram', multiplier: 0.01 }],
  source: 'custom',
  favorite: false,
  schemaVersion: 1,
  createdAt: 1,
  updatedAt: 1,
};
const entry = {
  id: 'entry',
  date: '2026-10-20',
  meal: 'lunch',
  amount: 100,
  portionId: 'g',
  basis: food,
  nutrients: { kcal: 130, p: 2.7, c: 28, f: 0.3 },
  schemaVersion: 1,
  createdAt: 1,
  updatedAt: 1,
};
it('allows the owner to write and read a valid food', async () => {
  const db = env.authenticatedContext('owner').firestore();
  await assertSucceeds(setDoc(doc(db, 'users/owner/foods/rice'), food));
  expect(
    (await assertSucceeds(getDoc(doc(db, 'users/owner/foods/rice')))).data()
      ?.name,
  ).toBe('Test rice');
});
it('denies signed-out, non-owner, and cross-account access', async () => {
  for (const db of [
    env.unauthenticatedContext().firestore(),
    env.authenticatedContext('visitor').firestore(),
  ])
    await assertFails(getDoc(doc(db, 'users/owner/foods/rice')));
  await assertFails(
    setDoc(
      doc(
        env.authenticatedContext('owner').firestore(),
        'users/visitor/foods/rice',
      ),
      food,
    ),
  );
});
it('rejects negative nutrients and invalid diary meals', async () => {
  const db = env.authenticatedContext('owner').firestore();
  await assertFails(
    setDoc(doc(db, 'users/owner/foods/rice'), {
      ...food,
      nutrients: { ...food.nutrients, p: -1 },
    }),
  );
  await assertFails(
    setDoc(doc(db, 'users/owner/entries/entry'), { ...entry, meal: 'invalid' }),
  );
  await assertFails(
    setDoc(doc(db, 'users/owner/entries/entry'), { ...entry, amount: 0 }),
  );
});
it('preserves a diary snapshot when the library food changes', async () => {
  const db = env.authenticatedContext('owner').firestore();
  await assertSucceeds(setDoc(doc(db, 'users/owner/entries/entry'), entry));
  await assertSucceeds(
    setDoc(doc(db, 'users/owner/foods/rice'), {
      ...food,
      nutrients: { ...food.nutrients, kcal: 500 },
    }),
  );
  expect(
    (await getDoc(doc(db, 'users/owner/entries/entry'))).data()?.basis.nutrients
      .kcal,
  ).toBe(130);
});
it('enforces immutable target revisions and denies stale daily-cache writes', async () => {
  const db = env.authenticatedContext('owner').firestore();
  const ref = doc(db, 'users/owner/goalRevisions/goal');
  const revision = {
    id: 'goal',
    effectiveDate: '2026-10-20',
    target: { kcal: 2000, p: 150, c: 225, f: 55 },
    createdAt: 1,
    schemaVersion: 1,
  };
  await assertSucceeds(setDoc(ref, revision));
  await assertFails(
    setDoc(ref, { ...revision, target: { ...revision.target, kcal: 1000 } }),
  );
  await assertFails(
    setDoc(doc(db, 'users/owner/dayTargets/2026-10-20'), {
      id: '2026-10-20',
      target: revision.target,
      revisionId: 'goal',
      createdAt: 1,
      schemaVersion: 1,
    }),
  );
});
it('rejects recipes without a positive usable yield', async () => {
  const db = env.authenticatedContext('owner').firestore();
  const recipe = {
    id: 'r',
    name: 'Rice',
    ingredients: [{ food, amount: 100, portionId: 'g' }],
    nutrients: food.nutrients,
    servings: null,
    cookedGrams: null,
    favorite: false,
    schemaVersion: 1,
    createdAt: 1,
    updatedAt: 1,
  };
  await assertFails(setDoc(doc(db, 'users/owner/recipes/r'), recipe));
  await assertSucceeds(
    setDoc(doc(db, 'users/owner/recipes/r'), { ...recipe, servings: 2 }),
  );
});
it('replaying the same copy operation updates stable IDs without duplicating entries', async () => {
  const db = env.authenticatedContext('owner').firestore();
  for (let attempt = 0; attempt < 2; attempt++) {
    const batch = writeBatch(db);
    batch.set(doc(db, 'users/owner/entries/copy-0'), {
      ...entry,
      id: 'copy-0',
      copyOperationId: 'copy',
    });
    batch.set(doc(db, 'users/owner/mealCopies/copy'), {
      id: 'copy',
      destination: '2026-10-20',
      meal: 'lunch',
      entryIds: ['copy-0'],
      createdAt: 1,
      schemaVersion: 1,
    });
    await assertSucceeds(batch.commit());
  }
  expect(
    (await getDoc(doc(db, 'users/owner/entries/copy-0'))).data()
      ?.copyOperationId,
  ).toBe('copy');
});
