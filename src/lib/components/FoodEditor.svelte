<script lang="ts">
  import { untrack } from 'svelte';
  import Modal from './Modal.svelte';
  import type { Food } from '#lib/domain/types.ts';
  import { knownNutrients } from '#lib/domain/nutrition.ts';
  import { saveFood, notify } from '#lib/data/store.ts';
  let {
    food,
    quick = false,
    onclose,
    oncreated,
  }: {
    food?: Food;
    quick?: boolean;
    onclose: () => void;
    oncreated?: (food: Food) => void;
  } = $props();
  const initial = untrack(() => ({ food, quick }));
  let name = $state(initial.food?.name || ''),
    brand = $state(initial.food?.brand || ''),
    unit = $state<'g' | 'ml' | 'serving'>(
      initial.food?.referenceUnit === 'ml'
        ? 'ml'
        : initial.food?.referenceUnit === 'serving' || initial.quick
          ? 'serving'
          : 'g',
    ),
    reference = $state(
      initial.food?.referenceAmount || (initial.quick ? 1 : 100),
    );
  let kcal = $state<number | undefined>(
      initial.food?.nutrients.kcal ?? undefined,
    ),
    p = $state<number | undefined>(initial.food?.nutrients.p ?? undefined),
    c = $state<number | undefined>(initial.food?.nutrients.c ?? undefined),
    f = $state<number | undefined>(initial.food?.nutrients.f ?? undefined);
  const household = initial.food?.portions.find(
    (portion) => portion.id === 'household',
  );
  let portionLabel = $state(household?.label.replace(/ \([^)]*\)$/, '') || ''),
    portionAmount = $state<number | undefined>(
      household
        ? household.multiplier * initial.food!.referenceAmount
        : undefined,
    ),
    error = $state('');
  function submit(e: SubmitEvent) {
    e.preventDefault();
    error = '';
    try {
      const timestamp = Date.now();
      if (!name.trim()) throw new Error('Give this food a name.');
      if (!reference || reference <= 0)
        throw new Error('Enter a positive reference amount.');
      const nutrients = { kcal: kcal!, p: p!, c: c!, f: f! };
      knownNutrients({ nutrients } as Food);
      const portions = [
        {
          id: 'base',
          label: `${reference} ${unit === 'serving' ? 'serving' : unit}`,
          multiplier: 1,
        },
      ];
      if (unit !== 'serving')
        portions.unshift({
          id: unit,
          label: unit === 'g' ? 'gram' : 'millilitre',
          multiplier: 1 / reference,
        });
      if (portionLabel.trim() && portionAmount && portionAmount > 0)
        portions.push({
          id: 'household',
          label: `${portionLabel.trim()} (${portionAmount} ${unit})`,
          multiplier: portionAmount / reference,
        });
      const saved: Food = {
        id: food?.source === 'custom' ? food.id : crypto.randomUUID(),
        name: name.trim(),
        brand: brand.trim(),
        category: 'custom',
        nutrients,
        referenceAmount: reference,
        referenceUnit: unit,
        portions,
        source: 'custom',
        favorite: food?.favorite || false,
        schemaVersion: 1,
        createdAt: food?.createdAt || timestamp,
        updatedAt: timestamp,
        ...(food?.sourceUrl
          ? {
              sourceUrl: food.sourceUrl,
              attribution: `Manually completed from ${food.attribution || food.source}`,
            }
          : {}),
      };
      if (!quick) {
        saveFood(saved);
        notify('Food saved to your library.');
      }
      oncreated?.(saved);
      onclose();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check the food details.';
    }
  }
</script>

<Modal title={quick ? 'Quick add' : 'Custom food'} {onclose}
  ><form onsubmit={submit} class="stack">
    <label class="field"
      >Food or meal name<input
        bind:value={name}
        placeholder="e.g. homemade dal"
        maxlength="200"
        required
      /></label
    >
    {#if !quick}<label class="field"
        >Brand or description <input
          bind:value={brand}
          placeholder="optional"
          maxlength="150"
        /></label
      >{/if}
    <div class="fields">
      <label class="field"
        >Nutrition is for<input
          type="number"
          bind:value={reference}
          min="0.01"
          max="100000"
          step="any"
          required
        /></label
      ><label class="field"
        >Reference unit<select bind:value={unit}
          ><option value="g">grams</option><option value="ml"
            >millilitres</option
          ><option value="serving">servings</option></select
        ></label
      >
    </div>
    <div class="fields">
      <label class="field"
        >Calories · kcal<input
          type="number"
          bind:value={kcal}
          min="0"
          max="1000000"
          step="any"
          required
        /></label
      ><label class="field"
        >Protein · g<input
          type="number"
          bind:value={p}
          min="0"
          max="1000000"
          step="any"
          required
        /></label
      ><label class="field"
        >Carbs · g<input
          type="number"
          bind:value={c}
          min="0"
          max="1000000"
          step="any"
          required
        /></label
      ><label class="field"
        >Fat · g<input
          type="number"
          bind:value={f}
          min="0"
          max="1000000"
          step="any"
          required
        /></label
      >
    </div>
    {#if !quick && unit !== 'serving'}<details>
        <summary class="text-link">add a household portion</summary>
        <div class="fields" style="margin-top:16px">
          <label class="field"
            >Portion name<input
              bind:value={portionLabel}
              placeholder="cup, bowl, roti…"
              maxlength="80"
            /></label
          ><label class="field"
            >Amount in {unit}<input
              type="number"
              bind:value={portionAmount}
              min="0.01"
              max="100000"
              step="any"
              placeholder="e.g. 150"
            /></label
          >
        </div>
        <p class="field-help" style="margin-top:8px">
          Use a measured amount for this food. A bowl or cup varies by food.
        </p>
      </details>{/if}
    {#if error}<div class="form-error" role="alert">{error}</div>{/if}<button
      class="btn large full"
      type="submit">{quick ? 'choose meal & log' : 'save food'}</button
    >
  </form></Modal
>
