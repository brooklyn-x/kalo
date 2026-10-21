<script lang="ts">
  import { untrack } from 'svelte';
  import Modal from './Modal.svelte';
  import { Plus, Trash2 } from 'lucide-svelte';
  import { data, saveRecipe, notify } from '#lib/data/store.ts';
  import { recipeFood, recipeTotals, fmt } from '#lib/domain/nutrition.ts';
  import { zero, type Recipe, type Ingredient } from '#lib/domain/types.ts';
  let { recipe, onclose }: { recipe?: Recipe; onclose: () => void } = $props();
  const initial = untrack(() => ({ recipe }));
  let name = $state(initial.recipe?.name || ''),
    ingredients = $state<Ingredient[]>(
      initial.recipe ? $state.snapshot(initial.recipe.ingredients) : [],
    ),
    servings = $state<number | undefined>(
      initial.recipe?.servings ?? undefined,
    ),
    cooked = $state<number | undefined>(
      initial.recipe?.cookedGrams ?? undefined,
    ),
    selected = $state(''),
    error = $state('');
  const foods = $derived($data.foods.filter((f) => !f.archived));
  const nutrients = $derived.by(() => {
    try {
      return recipeTotals(ingredients);
    } catch {
      return zero();
    }
  });
  function add() {
    const food = foods.find((f) => f.id === selected);
    if (!food) return;
    ingredients = [
      ...ingredients,
      {
        food: structuredClone(food),
        amount: 1,
        portionId: food.portions[0].id,
      },
    ];
    selected = '';
  }
  function submit(e: SubmitEvent) {
    e.preventDefault();
    error = '';
    try {
      const stamp = Date.now();
      const next: Recipe = {
        id: recipe?.id || crypto.randomUUID(),
        name: name.trim(),
        ingredients: $state.snapshot(ingredients),
        servings: servings ?? null,
        cookedGrams: cooked ?? null,
        nutrients: recipeTotals(ingredients),
        favorite: recipe?.favorite || false,
        schemaVersion: 1,
        createdAt: recipe?.createdAt || stamp,
        updatedAt: stamp,
      };
      recipeFood(next);
      saveRecipe(next);
      notify('Recipe saved. Previously logged portions stay unchanged.');
      onclose();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check the recipe.';
    }
  }
</script>

<Modal title={recipe ? 'Edit recipe' : 'New recipe'} {onclose}
  ><form class="stack" onsubmit={submit}>
    <label class="field"
      >Recipe name<input
        bind:value={name}
        placeholder="e.g. weekday dal"
        required
        maxlength="200"
      /></label
    >
    <div class="row" style="align-items:flex-end">
      <label class="field grow"
        >Add an ingredient<select bind:value={selected}
          ><option value="">choose a saved food</option
          >{#each foods as food}<option value={food.id}>{food.name}</option
            >{/each}</select
        ></label
      ><button
        type="button"
        class="icon-btn"
        style="min-height:47px;width:47px"
        disabled={!selected}
        onclick={add}
        aria-label="Add ingredient"><Plus size={18} /></button
      >
    </div>
    {#if !foods.length}<div class="banner">
        Save ingredient foods from the Add food page first, then build your
        recipe here.
      </div>{/if}
    {#each ingredients as ingredient, index}<div class="stack gap-sm">
        <div class="row between">
          <strong>{ingredient.food.name}</strong><button
            type="button"
            class="icon-btn danger"
            aria-label={`Remove ${ingredient.food.name}`}
            onclick={() =>
              (ingredients = ingredients.filter((_, i) => i !== index))}
            ><Trash2 size={15} /></button
          >
        </div>
        <div class="fields">
          <label class="field"
            >Quantity<input
              type="number"
              bind:value={ingredient.amount}
              min="0.001"
              max="100000"
              step="any"
              required
            /></label
          ><label class="field"
            >Portion<select bind:value={ingredient.portionId}
              >{#each ingredient.food.portions as portion}<option
                  value={portion.id}>{portion.label}</option
                >{/each}</select
            ></label
          >
        </div>
      </div>{/each}
    <div class="fields">
      <label class="field"
        >Makes this many servings<input
          type="number"
          bind:value={servings}
          min="0.01"
          max="100000"
          step="any"
          placeholder="e.g. 4"
        /></label
      ><label class="field"
        >Finished cooked weight · g<input
          type="number"
          bind:value={cooked}
          min="0.01"
          max="100000"
          step="any"
          placeholder="e.g. 800"
        /></label
      >
    </div>
    <p class="field-help">
      Enter either yield, or both. We use finished weight to calculate portions
      by grams.
    </p>
    <div class="food-nutrition-preview" style="margin:0">
      <div class="label">whole recipe</div>
      <div class="row wrap" style="margin-top:10px">
        <span class="num">{fmt(nutrients.kcal)}</span><small
          >kcal · {fmt(nutrients.p, 1)}g P · {fmt(nutrients.c, 1)}g C · {fmt(
            nutrients.f,
            1,
          )}g F</small
        >
      </div>
    </div>
    {#if error}<div class="form-error" role="alert">{error}</div>{/if}<button
      class="btn large full"
      type="submit">save recipe</button
    >
  </form></Modal
>
