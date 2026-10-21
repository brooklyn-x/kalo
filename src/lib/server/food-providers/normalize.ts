import type { Food, NutritionLabel } from '#lib/domain/types.ts';
type RecordValue = Record<string, any>;
const num = (value: unknown) =>
  value !== null &&
  value !== undefined &&
  value !== '' &&
  Number.isFinite(Number(value)) &&
  Number(value) >= 0
    ? Number(value)
    : null;
function base(id: string, name: string, nutrients: NutritionLabel): Food {
  return {
    id,
    name,
    brand: '',
    category: 'food',
    nutrients,
    referenceAmount: 100,
    referenceUnit: 'g',
    portions: [
      { id: 'g', label: 'gram', multiplier: 0.01 },
      { id: '100g', label: '100 g', multiplier: 1 },
    ],
    source: 'custom',
    favorite: false,
    schemaVersion: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}
export function normalizeUSDA(raw: RecordValue): Food {
  const ns = raw.foodNutrients || [];
  const find = (id: number) => {
    const item = ns.find(
      (n: RecordValue) => (n.nutrientId ?? n.nutrient?.id) === id,
    );
    return num(item?.value ?? item?.amount);
  };
  const kcal = find(1008) ?? find(2047) ?? find(2048);
  const kj = find(1062);
  const food = base(
    `usda-${raw.fdcId}`,
    String(raw.description || 'Unnamed food'),
    {
      kcal: kcal ?? (kj === null ? null : kj / 4.184),
      p: find(1003),
      c: find(1005),
      f: find(1004),
    },
  );
  food.source = 'usda';
  food.sourceId = String(raw.fdcId);
  food.brand = String(
    raw.brandOwner || raw.brandName || 'USDA FoodData Central',
  );
  food.sourceUrl = `https://fdc.nal.usda.gov/food-details/${raw.fdcId}/nutrients`;
  food.attribution = 'USDA FoodData Central · CC0';
  for (const [index, p] of (raw.foodPortions || []).entries()) {
    const grams = num(p.gramWeight);
    if (grams && p.modifier)
      food.portions.push({
        id: `portion-${index}`,
        label: String(p.modifier),
        multiplier: grams / 100,
      });
  }
  const serving = num(raw.servingSize);
  if (serving && String(raw.servingSizeUnit).toLowerCase() === 'g')
    food.portions.push({
      id: 'serving',
      label: `serving (${serving} g)`,
      multiplier: serving / 100,
    });
  return food;
}
export function normalizeOFF(raw: RecordValue): Food {
  const n = raw.nutriments || {};
  const kcal = num(n['energy-kcal_100g']);
  const kj = num(n.energy_100g);
  const food = base(
    `off-${raw.code}`,
    String(raw.product_name || raw.product_name_en || 'Unnamed product'),
    {
      kcal: kcal ?? (kj === null ? null : kj / 4.184),
      p: num(n.proteins_100g),
      c: num(n.carbohydrates_100g),
      f: num(n.fat_100g),
    },
  );
  food.source = 'openfoodfacts';
  food.sourceId = String(raw.code);
  food.brand = String(raw.brands || 'Open Food Facts');
  food.sourceUrl = `https://world.openfoodfacts.org/product/${raw.code}`;
  food.attribution = 'Open Food Facts · ODbL';
  // OFF uses *_100g keys for both mass and volume. Preserve a labelled 100 ml basis.
  const per100ml = /100\s*ml/i.test(String(raw.nutrition_data_per || ''));
  if (per100ml) {
    food.referenceUnit = 'ml';
    food.portions = [
      { id: 'ml', label: 'millilitre', multiplier: 0.01 },
      { id: '100ml', label: '100 ml', multiplier: 1 },
    ];
  }
  const portion = num(raw.serving_quantity);
  const unit = String(raw.serving_quantity_unit || '');
  if (
    portion &&
    ((food.referenceUnit === 'g' && unit === 'g') ||
      (food.referenceUnit === 'ml' && unit === 'ml'))
  )
    food.portions.push({
      id: 'serving',
      label: String(raw.serving_size || 'serving'),
      multiplier: portion / 100,
    });
  return food;
}
