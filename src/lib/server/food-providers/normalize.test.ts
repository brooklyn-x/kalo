import { expect, it } from 'vitest';
import { normalizeOFF, normalizeUSDA } from './normalize';
it('normalizes USDA search and detail nutrient formats', () => {
  const a = normalizeUSDA({
    fdcId: 1,
    description: 'Rice',
    foodNutrients: [
      { nutrientId: 1008, value: 130 },
      { nutrientId: 1003, value: 2.7 },
      { nutrientId: 1005, value: 28 },
      { nutrientId: 1004, value: 0 },
    ],
  });
  expect(a.nutrients.f).toBe(0);
  expect(a.nutrients.kcal).toBe(130);
  const b = normalizeUSDA({
    fdcId: 2,
    foodNutrients: [{ nutrient: { id: 1008 }, amount: 200 }],
  });
  expect(b.nutrients.kcal).toBe(200);
  expect(b.nutrients.p).toBeNull();
});
it('retains missing values and does not infer arbitrary volume density', () => {
  const food = normalizeOFF({
    code: '123',
    product_name: 'Milk',
    nutrition_data_per: '100ml',
    nutriments: {
      'energy-kcal_100g': 50,
      proteins_100g: 3,
      carbohydrates_100g: 4,
    },
  });
  expect(food.referenceUnit).toBe('ml');
  expect(food.nutrients.f).toBeNull();
  expect(food.portions.some((p) => p.id === 'g')).toBe(false);
});
it('converts kJ labels to kcal without replacing a supplied calorie label', () => {
  expect(
    normalizeOFF({ code: '1', nutriments: { energy_100g: 418.4 } }).nutrients
      .kcal,
  ).toBeCloseTo(100);
  expect(
    normalizeOFF({
      code: '1',
      nutriments: { energy_100g: 418.4, 'energy-kcal_100g': 110 },
    }).nutrients.kcal,
  ).toBe(110);
});
it('does not infer density from a volume-labelled serving', () => {
  const oil = normalizeOFF({
    code: '9',
    nutrition_data_per: '100g',
    serving_size: '15 ml',
    serving_quantity: 15,
    serving_quantity_unit: 'ml',
    nutriments: {
      'energy-kcal_100g': 900,
      proteins_100g: 0,
      carbohydrates_100g: 0,
      fat_100g: 100,
    },
  });
  expect(oil.referenceUnit).toBe('g');
  expect(oil.portions.some((p) => p.id === 'ml' || p.id === 'serving')).toBe(
    false,
  );
});
