<script lang="ts">
  import {
    ChartNoAxesCombined,
    Flame,
    Activity,
    CalendarDays,
  } from 'lucide-svelte';
  import { data } from '#lib/data/store.ts';
  import { today, shiftDate, targetAt, prettyDate } from '#lib/domain/dates.ts';
  import { totals, fmt } from '#lib/domain/nutrition.ts';
  import { macroKeys, macroNames } from '#lib/domain/types.ts';
  let range = $state(7);
  const current = $derived(today($data.profile.timezone));
  const days = $derived(
    Array.from({ length: range }, (_, i) => {
      const date = shiftDate(current, i - range + 1);
      const entries = $data.entries.filter((e) => e.date === date);
      return {
        date,
        entries,
        values: totals(entries),
        target: targetAt($data.goals, $data.dayTargets, date),
      };
    }),
  );
  const completed = $derived(
    days.filter((d) => d.entries.length && d.date !== current),
  );
  const logged = $derived(days.filter((d) => d.entries.length));
  const average = $derived(
    completed.length
      ? totals(completed.map((d) => ({ nutrients: d.values }))).kcal /
          completed.length
      : 0,
  );
  const aggregate = $derived(
    totals(logged.map((d) => ({ nutrients: d.values }))),
  );
  const max = $derived(
    Math.max(
      1,
      ...days.map((d) => Math.max(d.values.kcal, d.target?.kcal || 0)),
    ),
  );
  const compared = $derived(completed.filter((d) => d.target));
</script>

<div class="page-head">
  <div>
    <div class="label">a little perspective</div>
    <h1>The bigger picture<span style="color:var(--teal)">.</span></h1>
    <p>Your real diary. A clearer view of your habits.</p>
  </div>
  <div class="tabs">
    <button class:active={range === 7} onclick={() => (range = 7)}
      >7 days</button
    ><button class:active={range === 30} onclick={() => (range = 30)}
      >30 days</button
    >
  </div>
</div>
{#if $data.fromCache && !$data.historyComplete}<section class="card empty">
    <h2>Your history needs a connection.</h2>
    <p>
      There is not enough cached diary data to show accurate progress. Reconnect
      to load your charts.
    </p>
  </section>{:else}<div class="stats-row">
    <section class="card stat mint">
      <div class="row between">
        <span class="label">average calories</span><Flame size={17} />
      </div>
      <div class="num">{completed.length ? fmt(average) : '—'}</div>
      <small
        >{completed.length} logged past {completed.length === 1
          ? 'day'
          : 'days'} · excludes today</small
      >
    </section>
    <section class="card stat yellow">
      <div class="row between">
        <span class="label" style="color:inherit">days logged</span
        ><CalendarDays size={17} />
      </div>
      <div class="num">
        {logged.length}<span style="font-size:22px"> / {range}</span>
      </div>
      <small style="color:inherit">today included when logged</small>
    </section>
    <section class="card stat">
      <div class="row between">
        <span class="label">at or below target</span><Activity size={17} />
      </div>
      <div class="num">
        {compared.length
          ? `${compared.filter((d) => d.values.kcal <= d.target!.kcal).length} / ${compared.length}`
          : '—'}
      </div>
      <small>logged past days with a saved target</small>
    </section>
  </div>
  <div class="grid2">
    <section class="card">
      <div class="row between">
        <h2>Calories, day by day</h2>
        <span class="label">kcal</span>
      </div>
      <div class="chart">
        {#each days as day}<div class="chart-col">
            <div
              class="chart-bar"
              class:over={day.target && day.values.kcal > day.target.kcal}
              class:today={day.date === current}
              style:height={`${day.entries.length ? Math.max(2, (day.values.kcal / max) * 155) : 2}px`}
              style:opacity={day.entries.length ? 1 : 0.15}
              title={`${prettyDate(day.date)}: ${day.entries.length ? fmt(day.values.kcal) + ' kcal' : 'not logged'}${day.target ? ` · target ${fmt(day.target.kcal)}` : ''}`}
            ></div>
            <small
              >{range === 7
                ? prettyDate(day.date, { weekday: 'narrow' })
                : days.indexOf(day) % 5 === 0
                  ? day.date.slice(-2)
                  : ''}</small
            >
          </div>{/each}
      </div>
      <div
        class="row wrap"
        style="margin-top:20px;font-size:10px;color:var(--muted)"
      >
        <span>● teal: at/below target</span><span>● orange: above</span><span
          >● cocoa: today (in progress)</span
        >
      </div>
      <small style="display:block;margin-top:12px"
        >Unlogged days are excluded from averages. An entry does not necessarily
        mean a complete day.</small
      >
    </section>
    <section class="card">
      <h2>Average macros</h2>
      <p class="muted" style="margin:12px 0 22px;font-size:13px">
        Across {logged.length} logged days. Includes today's partial intake.
      </p>
      {#each macroKeys as key}<div style="margin-bottom:23px">
          <div class="row between">
            <span class="macro-name" style="margin:0"
              ><i class="macro-dot {key}"></i>{macroNames[key]}</span
            ><span
              ><span class="num" style="font-size:29px"
                >{logged.length
                  ? fmt(aggregate[key] / logged.length, 1)
                  : '—'}</span
              > <small>g / day</small></span
            >
          </div>
          <div class="bar">
            <span
              class={key}
              style:width={`${aggregate.p + aggregate.c + aggregate.f ? (aggregate[key] / (aggregate.p + aggregate.c + aggregate.f)) * 100 : 0}%`}
            ></span>
          </div>
        </div>{/each}{#if !logged.length}<div
          class="row"
          style="font-size:13px;color:var(--muted)"
        >
          <ChartNoAxesCombined size={18} />Log a meal to start your story.
        </div>{/if}
    </section>
  </div>
{/if}
