<script lang="ts">
  import { untrack } from 'svelte';
  import Modal from './Modal.svelte';
  import Macros from './Macros.svelte';
  import {
    meals,
    type Food,
    type Entry,
    type Meal,
  } from '#lib/domain/types.ts';
  import { fmt, makeEntry, scale } from '#lib/domain/nutrition.ts';
  import { data, saveEntry } from '#lib/data/store.ts';
  import { today } from '#lib/domain/dates.ts';
  let {
    food,
    entry,
    initialMeal = 'breakfast',
    initialDate,
    onclose,
  }: {
    food: Food;
    entry?: Entry;
    initialMeal?: Meal;
    initialDate?: string;
    onclose: () => void;
  } = $props();
  const initial = untrack(() => ({ food, entry, initialMeal, initialDate }));
  const preferred = untrack(
    () =>
      initial.food.portions.find((p) =>
        ['serving', 'base', '100g', '100ml'].includes(p.id),
      ) || initial.food.portions[0],
  );
  let amount = $state(
      initial.entry?.amount || (['g', 'ml'].includes(preferred.id) ? 100 : 1),
    ),
    portionId = $state(initial.entry?.portionId || preferred.id),
    meal = $state<Meal>(initial.entry?.meal || initial.initialMeal),
    date = $state(
      initial.entry?.date ||
        initial.initialDate ||
        today($data.profile.timezone),
    ),
    error = $state('');
  const values = $derived.by(() => {
    try {
      return scale(food, amount, portionId);
    } catch {
      return { kcal: 0, p: 0, c: 0, f: 0 };
    }
  });
  function submit(e: SubmitEvent) {
    e.preventDefault();
    try {
      const next = makeEntry(food, amount, portionId, date, meal, entry?.id);
      if (entry) next.createdAt = entry.createdAt;
      saveEntry(next);
      onclose();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check your portion.';
    }
  }
</script>

<Modal title={entry ? 'Edit diary entry' : food.name} {onclose}>
  <form onsubmit={submit} class="stack">
    <div class="food-nutrition-preview">
      <div class="label">your portion</div>
      <div style="margin-top:10px">
        <span class="num">{fmt(values.kcal)}</span> <small>kcal</small>
      </div>
      <div style="margin-top:22px"><Macros {values} /></div>
    </div>
    <div class="fields">
      <label class="field"
        >Quantity<input
          type="number"
          bind:value={amount}
          min="0.001"
          max="100000"
          step="any"
          required
        /></label
      ><label class="field"
        >Portion<select bind:value={portionId}
          >{#each food.portions as portion}<option value={portion.id}
              >{portion.label}</option
            >{/each}</select
        ></label
      >
    </div>
    <div class="fields">
      <label class="field"
        >Meal<select bind:value={meal}
          >{#each meals as m}<option value={m}>{m}</option>{/each}</select
        ></label
      ><label class="field"
        >Date<input
          type="date"
          bind:value={date}
          max={today($data.profile.timezone)}
          required
        /></label
      >
    </div>
    {#if food.attribution}<small
        >{food.sourceUrl ? food.attribution : food.brand}{#if food.sourceUrl}
          · <a
            href={food.sourceUrl}
            target="_blank"
            rel="noreferrer"
            class="text-link">source</a
          >{/if}</small
      >{/if}
    {#if entry}<small
        >This entry uses the food nutrition saved when you logged it.</small
      >{/if}
    {#if error}<div class="form-error" role="alert">{error}</div>{/if}<button
      class="btn large full"
      type="submit"
      >{entry
        ? 'save changes'
        : `add to diary · ${fmt(values.kcal)} kcal`}</button
    >
  </form>
</Modal>
