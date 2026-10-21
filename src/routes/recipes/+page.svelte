<script lang="ts">
  import { Plus, Utensils, Pencil, Heart } from 'lucide-svelte';
  import { data, saveRecipe } from '#lib/data/store.ts';
  import { fmt, recipeFood } from '#lib/domain/nutrition.ts';
  import type { Recipe, Food } from '#lib/domain/types.ts';
  import RecipeEditor from '#lib/components/RecipeEditor.svelte';
  import LogFood from '#lib/components/LogFood.svelte';
  let editor = $state(false),
    editing = $state<Recipe | undefined>(),
    selected = $state<Food | null>(null);
</script>

<div class="page-head">
  <div>
    <div class="label">made by you, saved for later</div>
    <h1>Your recipe book<span style="color:var(--teal)">.</span></h1>
    <p>A little prep today. A simpler tomorrow.</p>
  </div>
  <button
    class="btn"
    onclick={() => {
      editing = undefined;
      editor = true;
    }}><Plus size={16} />new recipe</button
  >
</div>
{#if $data.recipes.length}<div class="grid2">
    {#each $data.recipes as recipe}<article class="recipe-tile">
        <div class="row between">
          <div class="recipe-symbol"><Utensils size={23} /></div>
          <div class="row">
            <button
              class="icon-btn"
              aria-label={`Favorite ${recipe.name}`}
              onclick={() =>
                saveRecipe({ ...recipe, favorite: !recipe.favorite })}
              ><Heart
                size={16}
                fill={recipe.favorite ? 'currentColor' : 'none'}
              /></button
            ><button
              class="icon-btn"
              aria-label={`Edit ${recipe.name}`}
              onclick={() => {
                editing = recipe;
                editor = true;
              }}><Pencil size={16} /></button
            >
          </div>
        </div>
        <h2>{recipe.name}</h2>
        <small
          >{recipe.ingredients.length} ingredients · {recipe.servings
            ? `${fmt(recipe.servings, 1)} servings`
            : ''}{recipe.servings && recipe.cookedGrams
            ? ' · '
            : ''}{recipe.cookedGrams
            ? `${fmt(recipe.cookedGrams)} g cooked`
            : ''}</small
        >
        <div class="row between">
          <span
            ><span class="num" style="font-size:31px"
              >{fmt(recipe.nutrients.kcal)}</span
            > <small>kcal / whole recipe</small></span
          ><button
            class="btn small"
            onclick={() => (selected = recipeFood(recipe))}
            >log portion <Plus size={14} /></button
          >
        </div>
      </article>{/each}
  </div>{:else}<section class="panel mint">
    <div class="empty" style="padding-block:65px">
      <div class="empty-icon" style="background:var(--card)">
        <Utensils size={28} />
      </div>
      <h2 style="font-size:34px">Your kitchen, on repeat.</h2>
      <p>
        Build a recipe from saved ingredients. Log it by serving or finished
        cooked weight, and keep the foods you love close.
      </p>
      <button class="btn" onclick={() => (editor = true)}
        ><Plus size={16} />create a recipe</button
      ><a href="/add" class="text-link" style="margin-top:8px"
        >save ingredient foods first</a
      >
    </div>
  </section>{/if}
{#if editor}<RecipeEditor
    recipe={editing}
    onclose={() => {
      editor = false;
      editing = undefined;
    }}
  />{/if}{#if selected}<LogFood
    food={selected}
    onclose={() => (selected = null)}
  />{/if}
