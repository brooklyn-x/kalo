<script lang="ts">
  import { page } from '$app/state';
  import {
    Plus,
    ChevronLeft,
    ChevronRight,
    Pencil,
    Trash2,
    Copy,
    BookOpen,
    Undo2,
  } from 'lucide-svelte';
  import { data, deleteEntry, saveEntry, copyMeal } from '#lib/data/store.ts';
  import { meals, type Entry, type Meal } from '#lib/domain/types.ts';
  import {
    today,
    shiftDate,
    prettyDate,
    targetAt,
    isDate,
  } from '#lib/domain/dates.ts';
  import { fmt, totals } from '#lib/domain/nutrition.ts';
  import Macros from '#lib/components/Macros.svelte';
  import LogFood from '#lib/components/LogFood.svelte';
  import Modal from '#lib/components/Modal.svelte';
  const initialDate = page.url.searchParams.get('date') || '';
  let date = $state(
      isDate(initialDate) && initialDate <= today($data.profile.timezone)
        ? initialDate
        : today($data.profile.timezone),
    ),
    editing = $state<Entry | null>(null),
    removed = $state<Entry | null>(null),
    copying = $state<Meal | null>(null),
    destination = $state(today($data.profile.timezone)),
    destinationMeal = $state<Meal>('breakfast'),
    operationId = $state(''),
    copyError = $state(''),
    copied = $state(false);
  const entries = $derived($data.entries.filter((e) => e.date === date));
  const values = $derived(totals(entries));
  const target = $derived(targetAt($data.goals, $data.dayTargets, date));
  function openCopy(meal: Meal) {
    copying = meal;
    destinationMeal = meal;
    destination = today($data.profile.timezone);
    operationId = crypto.randomUUID();
    copyError = '';
    copied = false;
  }
  function submitCopy(e: SubmitEvent) {
    e.preventDefault();
    if (!copying || copied) return;
    try {
      copyMeal(
        entries.filter((e) => e.meal === copying),
        destination,
        destinationMeal,
        operationId,
      );
      copied = true;
      copying = null;
    } catch (e) {
      copyError = e instanceof Error ? e.message : 'Could not copy this meal.';
    }
  }
</script>

<div class="page-head">
  <div>
    <div class="label">every bite, in one place</div>
    <h1>Food diary<span style="color:var(--teal)">.</span></h1>
    <p>A clearer picture of your day.</p>
  </div>
  <a href={`/add?date=${date}`} class="btn"><Plus size={16} />add food</a>
</div>
<div class="row between wrap" style="margin-bottom:20px">
  <h2 style="font-size:22px">{prettyDate(date)}</h2>
  <div class="date-control">
    <button
      class="icon-btn"
      aria-label="Previous day"
      onclick={() => (date = shiftDate(date, -1))}
      ><ChevronLeft size={18} /></button
    ><label
      ><span class="label" style="position:absolute;left:-9999px"
        >Diary date</span
      ><input
        type="date"
        value={date}
        onchange={(e) => {
          const value = e.currentTarget.value;
          if (isDate(value) && value <= today($data.profile.timezone))
            date = value;
        }}
        max={today($data.profile.timezone)}
        required
      /></label
    ><button
      class="icon-btn"
      aria-label="Next day"
      disabled={date >= today($data.profile.timezone)}
      onclick={() => (date = shiftDate(date, 1))}
      ><ChevronRight size={18} /></button
    >
  </div>
</div>
{#if removed}<div class="banner row between">
    <span>{removed.basis.name} removed.</span><button
      class="btn small outline"
      onclick={() => {
        saveEntry(removed!);
        removed = null;
      }}><Undo2 size={14} />undo</button
    >
  </div>{/if}
<section class="panel mint" style="margin-bottom:20px">
  <div class="row between wrap" style="margin-bottom:25px">
    <div>
      <span class="num" style="font-size:38px">{fmt(values.kcal)}</span>
      <small
        >kcal eaten{target
          ? ` / ${fmt(target.kcal)} target`
          : ' · no target set for this date'}</small
      >
    </div>
    {#if target}<span class="pill"
        >{fmt(Math.abs(target.kcal - values.kcal))} kcal {values.kcal >
        target.kcal
          ? 'over'
          : 'remaining'}</span
      >{/if}
  </div>
  <Macros {values} {target} />
</section>
<div class="grid2">
  {#each meals as meal}{@const list = entries.filter((e) => e.meal === meal)}
    <section class="card">
      <div class="row between" style="margin-bottom:8px">
        <h2>{meal}</h2>
        <div class="row gap-sm">
          <small>{fmt(totals(list).kcal)} kcal</small>{#if list.length}<button
              class="icon-btn"
              aria-label={`Copy ${meal}`}
              onclick={() => openCopy(meal)}><Copy size={15} /></button
            >{/if}
        </div>
      </div>
      {#each list as entry (entry.id)}<div class="food-row">
          <div class="grow">
            <strong class="food-name">{entry.basis.name}</strong><small
              >{fmt(entry.amount, 2)} × {entry.basis.portions.find(
                (p) => p.id === entry.portionId,
              )?.label}</small
            >
            <div class="macro-chips">
              <span><b>{fmt(entry.nutrients.p, 1)}</b>g P</span><span
                ><b>{fmt(entry.nutrients.c, 1)}</b>g C</span
              ><span><b>{fmt(entry.nutrients.f, 1)}</b>g F</span>
            </div>
          </div>
          <span class="num">{fmt(entry.nutrients.kcal)}</span><button
            class="icon-btn"
            aria-label={`Edit ${entry.basis.name}`}
            onclick={() => (editing = entry)}><Pencil size={14} /></button
          ><button
            class="icon-btn danger"
            aria-label={`Delete ${entry.basis.name}`}
            onclick={() => {
              deleteEntry(entry);
              removed = entry;
            }}><Trash2 size={14} /></button
          >
        </div>{:else}<div
          class="row"
          style="padding:27px 0;color:var(--muted);font-size:13px"
        >
          <BookOpen size={18} />{$data.fromCache && !$data.historyComplete
            ? 'This date is not fully available offline.'
            : 'Nothing logged yet. A fresh page.'}
        </div>{/each}<a
        class="text-link row gap-sm"
        style="margin-top:18px;display:inline-flex"
        href={`/add?meal=${meal}&date=${date}`}
        ><Plus size={13} />add to {meal}</a
      >
    </section>{/each}
</div>
{#if editing}<LogFood
    food={editing.basis}
    entry={editing}
    onclose={() => (editing = null)}
  />{/if}
{#if copying}<Modal title={`Copy ${copying}`} onclose={() => (copying = null)}
    ><form class="stack" onsubmit={submitCopy}>
      <p class="muted" style="font-size:13px;line-height:1.6">
        Add {entries.filter((e) => e.meal === copying).length} entries from {prettyDate(
          date,
        )} to the destination below. Existing entries stay in place.
      </p>
      <div class="fields">
        <label class="field"
          >Destination date<input
            type="date"
            bind:value={destination}
            max={today($data.profile.timezone)}
            required
          /></label
        ><label class="field"
          >Destination meal<select bind:value={destinationMeal}
            >{#each meals as meal}<option value={meal}>{meal}</option
              >{/each}</select
          ></label
        >
      </div>
      {#if copyError}<div class="form-error" role="alert">
          {copyError}
        </div>{/if}<button class="btn large" type="submit" disabled={copied}
        >confirm meal copy</button
      >
    </form></Modal
  >{/if}
