import { z } from 'zod';
import type {
  Entry,
  Food,
  Ingredient,
  Nutrients,
  Recipe,
  Target,
} from './types';
import { zero } from './types';
const finite = z.number().finite().min(0).max(1_000_000);
export const nutrientsSchema = z.object({
  kcal: finite,
  p: finite,
  c: finite,
  f: finite,
});
export const positive = z.number().finite().positive().max(100_000);
export function knownNutrients(food: Food): Nutrients {
  return nutrientsSchema.parse(food.nutrients);
}
export function complete(food: Food) {
  return nutrientsSchema.safeParse(food.nutrients).success;
}
export function scale(
  food: Food,
  amount: number,
  portionId: string,
): Nutrients {
  positive.parse(amount);
  const portion = food.portions.find((p) => p.id === portionId);
  if (!portion) throw new Error('Choose a valid portion for this food.');
  positive.parse(portion.multiplier);
  const n = knownNutrients(food);
  const factor = amount * portion.multiplier;
  return nutrientsSchema.parse({
    kcal: n.kcal * factor,
    p: n.p * factor,
    c: n.c * factor,
    f: n.f * factor,
  });
}
export function totals(entries: Pick<Entry, 'nutrients'>[]): Nutrients {
  return entries.reduce((sum, entry) => {
    const n = entry.nutrients;
    return {
      kcal: sum.kcal + n.kcal,
      p: sum.p + n.p,
      c: sum.c + n.c,
      f: sum.f + n.f,
    };
  }, zero());
}
export function recipeTotals(ingredients: Ingredient[]) {
  if (!ingredients.length || ingredients.length > 100)
    throw new Error('Add between 1 and 100 ingredients.');
  return totals(
    ingredients.map((i) => ({
      nutrients: scale(i.food, i.amount, i.portionId),
    })),
  );
}
export function recipeFood(recipe: Recipe): Food {
  const portions = [];
  if (recipe.servings !== null) {
    positive.parse(recipe.servings);
    portions.push({
      id: 'serving',
      label: 'serving',
      multiplier: 1 / recipe.servings,
    });
  }
  if (recipe.cookedGrams !== null) {
    positive.parse(recipe.cookedGrams);
    portions.push({
      id: 'g',
      label: 'gram (cooked)',
      multiplier: 1 / recipe.cookedGrams,
    });
  }
  if (!portions.length)
    throw new Error('Set a serving count or finished cooked weight.');
  return {
    id: recipe.id,
    name: recipe.name,
    brand: 'Your recipe',
    category: 'recipe',
    nutrients: recipe.nutrients,
    referenceAmount: 1,
    referenceUnit: 'batch',
    portions,
    source: 'recipe',
    favorite: recipe.favorite,
    schemaVersion: 1,
    createdAt: recipe.createdAt,
    updatedAt: recipe.updatedAt,
  };
}
export function makeEntry(
  food: Food,
  amount: number,
  portionId: string,
  date: string,
  meal: Entry['meal'],
  id: string = crypto.randomUUID(),
): Entry {
  return {
    id,
    date,
    meal,
    amount,
    portionId,
    basis: JSON.parse(JSON.stringify(food)) as Food,
    nutrients: scale(food, amount, portionId),
    schemaVersion: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}
export const macroCalories = (n: Pick<Nutrients, 'p' | 'c' | 'f'>) =>
  n.p * 4 + n.c * 4 + n.f * 9;
export function targetFromPercent(
  kcal: number,
  p: number,
  c: number,
  f: number,
): Target {
  if (
    ![p, c, f].every((n) => Number.isFinite(n) && n >= 0) ||
    Math.abs(p + c + f - 100) > 0.01
  )
    throw new Error('Macro percentages must add up to 100%.');
  if (!Number.isFinite(kcal) || kcal <= 0 || kcal > 10000)
    throw new Error('Enter a valid calorie target.');
  return {
    kcal,
    p: (kcal * p) / 100 / 4,
    c: (kcal * c) / 100 / 4,
    f: (kcal * f) / 100 / 9,
  };
}
export function estimateTarget(
  age: number,
  height: number,
  weight: number,
  formula: 'female' | 'male',
  activity: number,
  goal: 'lose' | 'maintain' | 'gain',
): Target {
  if (
    age < 18 ||
    age > 100 ||
    height < 120 ||
    height > 230 ||
    weight < 35 ||
    weight > 300 ||
    ![1.2, 1.375, 1.55, 1.725].includes(activity)
  )
    throw new Error(
      'Use manual targets, or enter adult measurements within the supported ranges.',
    );
  const bmr =
    10 * weight + 6.25 * height - 5 * age + (formula === 'male' ? 5 : -161);
  const kcal =
    Math.round(
      (bmr * activity + (goal === 'lose' ? -250 : goal === 'gain' ? 250 : 0)) /
        10,
    ) * 10;
  if (kcal < 1200)
    throw new Error('Use a manually chosen target for these measurements.');
  return targetFromPercent(kcal, 30, 45, 25);
}
export const fmt = (n: number, digits = 0) =>
  new Intl.NumberFormat('en', { maximumFractionDigits: digits }).format(n);
