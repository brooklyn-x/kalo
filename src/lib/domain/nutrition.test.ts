import { describe, expect, it } from 'vitest';
import {
  makeEntry,
  recipeFood,
  recipeTotals,
  scale,
  targetFromPercent,
  macroCalories,
} from './nutrition';
import { goalAt, targetAt, today, shiftDate, isDate } from './dates';
import type { Food, GoalRevision } from './types';
const food: Food = {
  id: 'rice',
  name: 'Rice',
  brand: '',
  category: 'grains',
  nutrients: { kcal: 130, p: 2.7, c: 28, f: 0.3 },
  referenceAmount: 100,
  referenceUnit: 'g',
  portions: [
    { id: 'g', label: 'gram', multiplier: 0.01 },
    { id: 'cup', label: 'cup (160 g)', multiplier: 1.6 },
  ],
  source: 'custom',
  favorite: false,
  schemaVersion: 1,
  createdAt: 1,
  updatedAt: 1,
};
describe('nutrition calculations', () => {
  it('scales grams and fractional household measures without premature rounding', () => {
    expect(scale(food, 150, 'g').kcal).toBe(195);
    expect(scale(food, 0.5, 'cup').c).toBeCloseTo(22.4);
  });
  it('rejects unsupported units and non-finite/negative amounts', () => {
    for (const n of [0, -1, NaN, Infinity])
      expect(() => scale(food, n, 'g')).toThrow();
    expect(() => scale(food, 1, 'bowl')).toThrow();
  });
  it('never treats a missing nutrient as zero', () =>
    expect(() =>
      scale({ ...food, nutrients: { ...food.nutrients, p: null } }, 1, 'cup'),
    ).toThrow());
  it('freezes reference nutrition and quantities when logged', () => {
    const f = structuredClone(food);
    const entry = makeEntry(f, 150, 'g', '2026-10-20', 'lunch', 'entry');
    f.nutrients.kcal = 500;
    expect(entry.nutrients.kcal).toBe(195);
    expect(scale(entry.basis, 200, 'g').kcal).toBe(260);
  });
  it('calculates recipes from servings and cooked yield consistently', () => {
    const ingredients = [{ food, amount: 300, portionId: 'g' }];
    const n = recipeTotals(ingredients);
    const f = recipeFood({
      id: 'recipe',
      name: 'Rice bowl',
      ingredients,
      nutrients: n,
      servings: 3,
      cookedGrams: 600,
      favorite: false,
      schemaVersion: 1,
      createdAt: 1,
      updatedAt: 1,
    });
    expect(scale(f, 0.5, 'serving').kcal).toBeCloseTo(65);
    expect(scale(f, 100, 'g').kcal).toBeCloseTo(65);
  });
  it('rejects invalid yields and percent totals', () => {
    expect(() =>
      recipeFood({
        id: 'r',
        name: 'x',
        ingredients: [],
        nutrients: { kcal: 0, p: 0, c: 0, f: 0 },
        servings: 0,
        cookedGrams: null,
        favorite: false,
        schemaVersion: 1,
        createdAt: 1,
        updatedAt: 1,
      }),
    ).toThrow();
    expect(() => targetFromPercent(2000, 30, 40, 20)).toThrow();
  });
  it('preserves declared calories separately from macro-derived calories', () => {
    expect(macroCalories({ p: 10, c: 20, f: 5 })).toBe(165);
    expect(targetFromPercent(2000, 30, 45, 25).p).toBe(150);
  });
});
describe('dates and targets', () => {
  it('rejects non-calendar dates and accepts leap dates', () => {
    expect(isDate('2026-02-31')).toBe(false);
    expect(isDate('2026-99-01')).toBe(false);
    expect(isDate('2024-02-29')).toBe(true);
    expect(isDate('')).toBe(false);
  });
  const goals: GoalRevision[] = [
    {
      id: 'a',
      effectiveDate: '2026-10-01',
      target: { kcal: 2000, p: 100, c: 250, f: 60 },
      createdAt: 1,
      schemaVersion: 1,
    },
    {
      id: 'b',
      effectiveDate: '2026-10-20',
      target: { kcal: 2200, p: 120, c: 260, f: 65 },
      createdAt: 2,
      schemaVersion: 1,
    },
  ];
  it('uses the owner timezone at UTC boundaries', () => {
    expect(today('Asia/Kolkata', new Date('2026-10-19T20:00:00Z'))).toBe(
      '2026-10-20',
    );
    expect(today('America/Los_Angeles', new Date('2026-10-20T02:00:00Z'))).toBe(
      '2026-10-19',
    );
  });
  it('shifts dates through month and year boundaries', () => {
    expect(shiftDate('2026-01-01', -1)).toBe('2025-12-31');
  });
  it('resolves immutable goal revisions ahead of a stale daily cache', () => {
    expect(goalAt(goals, '2026-10-10')?.id).toBe('a');
    expect(goalAt(goals, '2026-09-30')).toBeNull();
    expect(
      targetAt(
        goals,
        [
          {
            id: '2026-10-10',
            target: null,
            revisionId: null,
            createdAt: 1,
            schemaVersion: 1,
          },
        ],
        '2026-10-10',
      )?.kcal,
    ).toBe(2000);
  });
});
