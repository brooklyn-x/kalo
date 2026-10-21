import type { DayTarget, GoalRevision, Target } from './types';
export function today(timezone: string, now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)!.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function shiftDate(date: string, amount: number) {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + amount);
  return d.toISOString().slice(0, 10);
}
export const prettyDate = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  },
) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString('en', {
    ...options,
    timeZone: 'UTC',
  });
export function goalAt(
  goals: GoalRevision[],
  date: string,
): GoalRevision | null {
  return (
    [...goals]
      .filter((g) => g.effectiveDate <= date)
      .sort(
        (a, b) =>
          b.effectiveDate.localeCompare(a.effectiveDate) ||
          b.createdAt - a.createdAt ||
          b.id.localeCompare(a.id),
      )[0] || null
  );
}
export function targetAt(
  goals: GoalRevision[],
  snapshots: DayTarget[],
  date: string,
): Target | null {
  const revision = goalAt(goals, date);
  if (revision) return revision.target;
  return snapshots.find((d) => d.id === date)?.target || null;
}

export function isDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T12:00:00Z`);
  return (
    Number.isFinite(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}
