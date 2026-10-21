<script lang="ts">
  import { data, saveGoal, notify } from '#lib/data/store.ts';
  import { goalAt, today } from '#lib/domain/dates.ts';
  import {
    fmt,
    macroCalories,
    targetFromPercent,
  } from '#lib/domain/nutrition.ts';
  import {
    macroKeys,
    macroNames,
    type Target,
    type Profile,
  } from '#lib/domain/types.ts';
  let {
    ondone,
    profilePatch,
  }: { ondone?: () => void; profilePatch?: () => Partial<Profile> } = $props();
  const existing = goalAt($data.goals, today($data.profile.timezone))?.target;
  let kcal = $state(existing?.kcal ?? 2000),
    grams = $state({
      p: existing?.p ?? 150,
      c: existing?.c ?? 225,
      f: existing?.f ?? 55.6,
    }),
    percent = $state({ p: 30, c: 45, f: 25 }),
    mode = $state<'grams' | 'percent'>('grams'),
    error = $state('');
  const values = $derived.by(() => {
    if (mode === 'grams') return { kcal, ...grams };
    try {
      return targetFromPercent(kcal, percent.p, percent.c, percent.f);
    } catch {
      return null;
    }
  });
  const mismatch = $derived(values ? macroCalories(values) - kcal : 0);
  export function suggest(target: Target) {
    kcal = target.kcal;
    grams = { p: target.p, c: target.c, f: target.f };
    mode = 'grams';
  }
  function switchMode(next: 'grams' | 'percent') {
    if (values) {
      if (next === 'grams') grams = { p: values.p, c: values.c, f: values.f };
      else {
        percent = {
          p: ((values.p * 4) / values.kcal) * 100,
          c: ((values.c * 4) / values.kcal) * 100,
          f: ((values.f * 9) / values.kcal) * 100,
        };
      }
    }
    mode = next;
  }
  function submit(e: SubmitEvent) {
    e.preventDefault();
    error = '';
    try {
      if (!values) throw new Error('Percentages must total 100%.');
      saveGoal(values, profilePatch?.());
      notify('Your targets are saved. Earlier days stay unchanged.');
      ondone?.();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check the target values.';
    }
  }
</script>

<form class="stack" onsubmit={submit}>
  <label class="field"
    >Daily calorie target · kcal<input
      type="number"
      bind:value={kcal}
      min="1"
      max="10000"
      step="any"
      required
    /></label
  >
  <div class="row between wrap">
    <span class="label">macro targets</span>
    <div class="tabs" aria-label="Macro input units">
      <button
        type="button"
        class:active={mode === 'grams'}
        onclick={() => switchMode('grams')}>grams</button
      ><button
        type="button"
        class:active={mode === 'percent'}
        onclick={() => switchMode('percent')}>percentages</button
      >
    </div>
  </div>
  <div class="grid3">
    {#each macroKeys as key}<label class="field"
        >{macroNames[key]} · {mode === 'grams'
          ? 'g'
          : '%'}{#if mode === 'grams'}<input
            type="number"
            bind:value={grams[key]}
            min="0"
            max="1000000"
            step="any"
            required
          />{:else}<input
            type="number"
            bind:value={percent[key]}
            min="0"
            max="100"
            step="any"
            required
          />{/if}</label
      >{/each}
  </div>
  <div class="banner" style="margin:0">
    {#if values}Your macros account for <strong
        >{fmt(macroCalories(values))} kcal</strong
      >. {Math.abs(mismatch) < 1
        ? 'They match your calorie target.'
        : `${fmt(Math.abs(mismatch))} kcal ${mismatch > 0 ? 'above' : 'below'} your target. You can adjust either; we’ll keep your choices.`}{:else}Percentages
      total {fmt(percent.p + percent.c + percent.f, 1)}%. Adjust them to 100%.{/if}
  </div>
  {#if error}<div class="form-error" role="alert">{error}</div>{/if}<button
    class="btn large"
    type="submit">save daily targets</button
  ><small
    >Changes apply to today and later. Earlier days keep their original targets.</small
  >
</form>
