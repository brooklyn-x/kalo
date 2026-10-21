<script lang="ts">
  import { page } from '$app/state';
  import {
    Search,
    Plus,
    Heart,
    Utensils,
    ArrowUpRight,
    Pencil,
  } from 'lucide-svelte';
  import { data, saveFood, notify } from '#lib/data/store.ts';
  import { token } from '#lib/auth/session.ts';
  import { meals, type Food, type Meal } from '#lib/domain/types.ts';
  import { complete, fmt, recipeFood } from '#lib/domain/nutrition.ts';
  import { today } from '#lib/domain/dates.ts';
  import LogFood from '#lib/components/LogFood.svelte';
  import FoodEditor from '#lib/components/FoodEditor.svelte';
  let q = $state(''),
    filter = $state<'all' | 'favorites'>('all'),
    remote = $state<Food[]>([]),
    warnings = $state<string[]>([]),
    busy = $state(false),
    searched = $state(false),
    error = $state(''),
    selected = $state<Food | null>(null),
    editor = $state(false),
    quick = $state(false),
    editing = $state<Food | undefined>();
  const meal = $derived(
    meals.includes(page.url.searchParams.get('meal') as Meal)
      ? (page.url.searchParams.get('meal') as Meal)
      : 'breakfast',
  );
  const date = $derived(
    page.url.searchParams.get('date') || today($data.profile.timezone),
  );
  const library = $derived(
    [
      ...$data.foods.filter((f) => !f.archived),
      ...$data.recipes.map(recipeFood),
    ].filter(
      (f) =>
        (filter !== 'favorites' || f.favorite) &&
        (!q.trim() ||
          `${f.name} ${f.brand}`
            .toLowerCase()
            .includes(q.trim().toLowerCase())),
    ),
  );
  const cache = new Map<
    string,
    { foods: Food[]; warnings: string[]; at: number }
  >();
  let lastSearch = 0;
  function pick(food: Food) {
    if (complete(food)) selected = food;
    else {
      editing = food;
      quick = false;
      editor = true;
    }
  }
  async function search(e: SubmitEvent) {
    e.preventDefault();
    if (busy) return;
    error = '';
    warnings = [];
    const query = q.trim();
    if (query.length < 2) {
      error = 'Enter at least two characters.';
      return;
    }
    const saved = cache.get(query.toLowerCase());
    if (saved && Date.now() - saved.at < 300000) {
      remote = saved.foods;
      warnings = saved.warnings;
      searched = true;
      return;
    }
    if (Date.now() - lastSearch < 6000) {
      error = 'Give the food databases a moment, then try again.';
      return;
    }
    busy = true;
    try {
      const auth = await token();
      lastSearch = Date.now();
      const response = await fetch(
        `/api/foods/search?q=${encodeURIComponent(query)}`,
        {
          headers: { Authorization: `Bearer ${auth}` },
          signal: AbortSignal.timeout(15000),
        },
      );
      const body = await response.json();
      if (!response.ok) throw new Error(body.message || 'Food search failed.');
      remote = body.foods;
      warnings = body.warnings;
      cache.set(query.toLowerCase(), {
        foods: body.foods,
        warnings: body.warnings,
        at: Date.now(),
      });
      searched = true;
    } catch (e) {
      error = e instanceof Error ? e.message : 'Could not search foods.';
    } finally {
      busy = false;
    }
  }
  function favorite(food: Food) {
    try {
      saveFood({ ...food, favorite: !food.favorite });
      notify(food.favorite ? 'Favorite removed.' : 'Saved to favorites.');
    } catch (e) {
      error = e instanceof Error ? e.message : 'Complete the food first.';
    }
  }
</script>

<div class="page-head">
  <div>
    <div class="label">adding to {meal} · {date}</div>
    <h1>Something good<span style="color:var(--teal)">.</span></h1>
    <p>Find a food, make it yours, and keep the day moving.</p>
  </div>
  <div class="row wrap">
    <button
      class="btn outline"
      onclick={() => {
        editing = undefined;
        quick = true;
        editor = true;
      }}>quick add</button
    ><button
      class="btn"
      onclick={() => {
        editing = undefined;
        quick = false;
        editor = true;
      }}><Plus size={15} />custom food</button
    >
  </div>
</div>
<section class="card" style="margin-bottom:22px">
  <form class="search-box" onsubmit={search}>
    <label class="field"
      ><span class="label">Search your foods or online databases</span><input
        bind:value={q}
        placeholder="Try dal, rice, yogurt…"
        maxlength="100"
        aria-label="Search food"
      /></label
    ><button
      class="btn"
      style="align-self:flex-end;min-height:47px"
      type="submit"
      disabled={busy}
      ><Search size={17} />{busy ? 'searching…' : 'search online'}</button
    >
  </form>
  {#if error}<div class="form-error" role="alert" style="margin-top:16px">
      {error}
    </div>{/if}{#each warnings as warning}<div
      class="banner"
      style="margin:12px 0 0"
    >
      {warning}
    </div>{/each}
</section>
<div class="grid2">
  <section class="card">
    <div class="row between wrap" style="margin-bottom:10px">
      <h2>Your food library</h2>
      <div class="tabs">
        <button class:active={filter === 'all'} onclick={() => (filter = 'all')}
          >all</button
        ><button
          class:active={filter === 'favorites'}
          onclick={() => (filter = 'favorites')}>favorites</button
        >
      </div>
    </div>
    {#each library as food (food.id)}<div class="food-row">
        <span class="meal-icon"><Utensils size={17} /></span><button
          class="list-button"
          onclick={() => pick(food)}
          ><span class="food-name">{food.name}</span><small
            >{food.source === 'recipe'
              ? 'your recipe'
              : `${fmt(food.referenceAmount)} ${food.referenceUnit} · ${fmt(food.nutrients.kcal!)} kcal`}</small
          ></button
        >{#if food.source === 'custom'}<button
            class="icon-btn"
            aria-label={`Edit ${food.name}`}
            onclick={() => {
              editing = food;
              quick = false;
              editor = true;
            }}><Pencil size={15} /></button
          >{/if}{#if food.source !== 'recipe'}<button
            class="icon-btn"
            aria-label={`${food.favorite ? 'Remove' : 'Add'} favorite ${food.name}`}
            onclick={() => favorite(food)}
            ><Heart
              size={15}
              fill={food.favorite ? 'currentColor' : 'none'}
            /></button
          >{/if}<button
          class="icon-btn"
          aria-label={`Log ${food.name}`}
          onclick={() => pick(food)}><Plus size={17} /></button
        >
      </div>{:else}<div class="empty">
        <div class="empty-icon"><Utensils size={26} /></div>
        <h2>{q ? 'No saved match' : 'Your favorites start here'}</h2>
        <p>
          Save a custom food or search online. The foods you keep will be ready
          for next time.
        </p>
        <button
          class="btn outline small"
          onclick={() => {
            editing = undefined;
            quick = false;
            editor = true;
          }}>create your first food <Plus size={14} /></button
        >
      </div>{/each}
  </section>
  <section class="card">
    <div class="row between" style="margin-bottom:10px">
      <h2>Food discoveries</h2>
      <ArrowUpRight size={20} />
    </div>
    {#if busy}<div class="empty">
        <div class="spinner"></div>
        <p>Checking food databases…</p>
      </div>{:else}{#each remote as food (food.id)}<div class="food-row">
          <button class="list-button" onclick={() => pick(food)}
            ><span class="food-name">{food.name}</span><small
              >{food.brand} · {food.nutrients.kcal === null
                ? 'calories missing'
                : `${fmt(food.nutrients.kcal)} kcal / 100 ${food.referenceUnit}`}</small
            ><small
              >{food.source === 'usda'
                ? 'USDA FoodData Central'
                : 'Open Food Facts'}{!complete(food)
                ? ' · complete nutrition before logging'
                : ''}</small
            ></button
          ><button
            class="icon-btn"
            aria-label={`Save ${food.name}`}
            disabled={!complete(food)}
            onclick={() => {
              saveFood(food);
              notify('Food saved to your library.');
            }}><Heart size={15} /></button
          ><button
            class="icon-btn"
            aria-label={`Log ${food.name}`}
            onclick={() => pick(food)}><Plus size={17} /></button
          >
        </div>{:else}<div class="empty">
          <div
            class="empty-icon"
            style="background:var(--butter);color:var(--brand-ink)"
          >
            <Search size={25} />
          </div>
          <h2>{searched ? 'No match this time' : 'A world of good food'}</h2>
          <p>
            {searched
              ? 'Try another name, or add the food manually. Homemade dishes can be saved as your own recipes.'
              : 'Search Indian and international foods and packaged products. Your own recipes fill the gaps.'}
          </p>
          <small
            >Generic dish values are estimates. Check portions and source
            details.</small
          >
        </div>{/each}{/if}
  </section>
</div>
{#if editor}<FoodEditor
    food={editing}
    {quick}
    oncreated={quick || (Boolean(editing) && editing?.source !== 'custom')
      ? (food) => (selected = food)
      : undefined}
    onclose={() => {
      editor = false;
      editing = undefined;
    }}
  />{/if}
{#if selected}<LogFood
    food={selected}
    initialMeal={meal}
    initialDate={date}
    onclose={() => (selected = null)}
  />{/if}
