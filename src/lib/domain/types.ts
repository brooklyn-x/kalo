export type Meal = 'breakfast' | 'lunch' | 'dinner' | 'snacks';
export const meals: Meal[] = ['breakfast', 'lunch', 'dinner', 'snacks'];
export const macroKeys = ['p', 'c', 'f'] as const;
export const macroNames = { p: 'Protein', c: 'Carbs', f: 'Fat' };
export interface Nutrients {
  kcal: number;
  p: number;
  c: number;
  f: number;
}
export type NutritionLabel = { [K in keyof Nutrients]: number | null };
export interface Portion {
  id: string;
  label: string;
  multiplier: number;
}
export interface Food {
  id: string;
  name: string;
  brand: string;
  category: string;
  nutrients: NutritionLabel;
  referenceAmount: number;
  referenceUnit: 'g' | 'ml' | 'serving' | 'batch';
  portions: Portion[];
  source: 'custom' | 'usda' | 'openfoodfacts' | 'recipe';
  sourceId?: string;
  sourceUrl?: string;
  attribution?: string;
  favorite: boolean;
  archived?: boolean;
  schemaVersion: 1;
  createdAt: number;
  updatedAt: number;
}
export interface Entry {
  id: string;
  date: string;
  meal: Meal;
  amount: number;
  portionId: string;
  basis: Food;
  nutrients: Nutrients;
  copyOperationId?: string;
  schemaVersion: 1;
  createdAt: number;
  updatedAt: number;
}
export interface Ingredient {
  food: Food;
  amount: number;
  portionId: string;
}
export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  servings: number | null;
  cookedGrams: number | null;
  nutrients: Nutrients;
  favorite: boolean;
  schemaVersion: 1;
  createdAt: number;
  updatedAt: number;
}
export interface Target extends Nutrients {}
export interface GoalRevision {
  id: string;
  effectiveDate: string;
  target: Target;
  createdAt: number;
  schemaVersion: 1;
}
export interface DayTarget {
  id: string;
  target: Target | null;
  revisionId: string | null;
  createdAt: number;
  schemaVersion: 1;
}
export interface Profile {
  name: string;
  timezone: string;
  theme: 'light' | 'dark' | 'system';
  trustedDevice: boolean;
  onboardingDone: boolean;
  age: number;
  height: number;
  weight: number;
  formula: 'female' | 'male';
  activity: number;
  goal: 'lose' | 'maintain' | 'gain';
  schemaVersion: 1;
  updatedAt: number;
}
export interface DataState {
  profile: Profile;
  foods: Food[];
  recipes: Recipe[];
  entries: Entry[];
  goals: GoalRevision[];
  dayTargets: DayTarget[];
  loaded: boolean;
  historyComplete: boolean;
  pending: boolean;
  fromCache: boolean;
  error: string;
}
export const zero = (): Nutrients => ({ kcal: 0, p: 0, c: 0, f: 0 });
export const defaultProfile = (): Profile => ({
  name: '',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
  theme: 'light',
  trustedDevice: false,
  onboardingDone: false,
  age: 30,
  height: 170,
  weight: 70,
  formula: 'female',
  activity: 1.375,
  goal: 'maintain',
  schemaVersion: 1,
  updatedAt: 0,
});
export const emptyData = (): DataState => ({
  profile: defaultProfile(),
  foods: [],
  recipes: [],
  entries: [],
  goals: [],
  dayTargets: [],
  loaded: false,
  historyComplete: false,
  pending: false,
  fromCache: false,
  error: '',
});
