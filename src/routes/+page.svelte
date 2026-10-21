<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Plus,
    ArrowUpRight,
    Sun,
    Apple,
    Moon,
    Cookie,
    ArrowRight,
    Sprout,
  } from 'lucide-svelte';
  import { data } from '#lib/data/store.ts';
  import { today, prettyDate, targetAt } from '#lib/domain/dates.ts';
  import { totals, fmt } from '#lib/domain/nutrition.ts';
  import { meals } from '#lib/domain/types.ts';
  import Macros from '#lib/components/Macros.svelte';
  let now = $state(new Date());
  onMount(() => {
    const t = setInterval(() => (now = new Date()), 30000);
    return () => clearInterval(t);
  });
  const date = $derived(today($data.profile.timezone, now));
  const entries = $derived($data.entries.filter((e) => e.date === date));
  const values = $derived(totals(entries));
  const target = $derived(targetAt($data.goals, $data.dayTargets, date));
  const remaining = $derived((target?.kcal || 0) - values.kcal);
  const icons = { breakfast: Sun, lunch: Apple, dinner: Moon, snacks: Cookie };
</script>

<div class="page-head">
  <div>
    <div class="label">{prettyDate(date)}</div>
    <h1>Here's to a good day<span style="color:var(--teal)">.</span></h1>
    <p>
      {$data.profile.name ? `${$data.profile.name}, a` : 'A'} little awareness goes
      a long way.
    </p>
  </div>
  <a class="btn" href="/add"><Plus size={16} />add food</a>
</div>
{#if !$data.profile.onboardingDone}<div class="banner row between wrap">
    <span
      >Make this space yours. Set your name and daily targets to get started.</span
    ><a href="/onboarding" class="btn small"
      >set up my targets <ArrowRight size={14} /></a
    >
  </div>{/if}
{#if $data.fromCache && !$data.historyComplete}<section class="card empty">
    <h2>Your diary is not cached yet.</h2>
    <p>
      Reconnect once to load your history. You can still log a saved food or a
      manual entry.
    </p>
    <a class="btn" href="/add">add food</a>
  </section>{:else}<div class="hero-grid">
    <div class="stack">
      <section class="panel mint">
        <div class="row between">
          <h2>Today's balance</h2>
          {#if target}<span class="pill">goal {fmt(target.kcal)} kcal</span
            >{:else}<a href="/onboarding" class="pill"
              >set your target <ArrowUpRight size={12} /></a
            >{/if}
        </div>
        <div class="calorie-content">
          <div class="ring">
            <svg
              viewBox="0 0 210 210"
              aria-label="Calorie target progress"
              role="img"
              ><circle
                cx="105"
                cy="105"
                r="90"
                fill="none"
                stroke="var(--ring)"
                stroke-width="16"
              /><circle
                cx="105"
                cy="105"
                r="90"
                fill="none"
                stroke={target && remaining < 0
                  ? 'var(--orange)'
                  : 'var(--ink)'}
                stroke-width="16"
                stroke-linecap="round"
                stroke-dasharray="565.487"
                stroke-dashoffset={565.487 *
                  (1 - (target ? Math.min(1, values.kcal / target.kcal) : 0))}
              /></svg
            >
            <div class="ring-content">
              <span class="label"
                >{target
                  ? remaining < 0
                    ? 'over target'
                    : 'remaining'
                  : 'eaten today'}</span
              ><span class="num"
                >{fmt(target ? Math.abs(remaining) : values.kcal)}</span
              ><small>kcal</small>
            </div>
          </div>
          <div class="calorie-side">
            <div>
              <small>eaten</small><span class="num">{fmt(values.kcal)}</span>
              <small style="display:inline">kcal</small>
            </div>
            <div>
              <small>daily target</small><span class="num"
                >{target ? fmt(target.kcal) : '—'}</span
              > <small style="display:inline">kcal</small>
            </div>
          </div>
        </div>
        <hr class="divider" />
        <div class="row between">
          <small
            >{entries.length
              ? `${entries.length} food ${entries.length === 1 ? 'entry' : 'entries'} logged. Keep finding your balance.`
              : 'A fresh start. Make your first meal count.'}</small
          ><Sprout size={22} />
        </div>
      </section>
      <section class="card">
        <div class="row between" style="margin-bottom:25px">
          <h2>Your macros</h2>
          <a class="text-link" href="/settings">edit targets</a>
        </div>
        <Macros {values} {target} />
      </section>
    </div>
    <div class="stack">
      <section class="card">
        <div class="row between" style="margin-bottom:9px">
          <h2>On your plate</h2>
          <a class="text-link" href="/diary">open diary</a>
        </div>
        {#each meals as meal}{@const list = entries.filter(
            (e) => e.meal === meal,
          )}{@const Icon = icons[meal]}
          <div class="meal-row">
            <div class="meal-icon"><Icon size={19} /></div>
            <div class="grow">
              <strong>{meal}</strong><small
                >{list.length
                  ? `${list.length} ${list.length === 1 ? 'food' : 'foods'} logged`
                  : 'a little room for something good'}</small
              >
            </div>
            {#if list.length}<span class="num meal-kcal"
                >{fmt(totals(list).kcal)}</span
              >{/if}<a
              class="icon-btn"
              href={`/add?meal=${meal}&date=${date}`}
              aria-label={`Add to ${meal}`}><Plus size={16} /></a
            >
          </div>{/each}
      </section>
      <section class="panel dark-panel">
        <div class="label" style="margin-bottom:15px">
          your everyday, simplified
        </div>
        <h2 style="font-size:32px">Good habits.<br />At your pace.</h2>
        <p
          style="font-size:13px;line-height:1.7;margin:16px 0 22px;color:var(--brand-white)"
        >
          Save the meals you make, find the foods you love, and keep the bigger
          picture in view.
        </p>
        <a class="btn secondary" href="/recipes"
          >make a recipe <ArrowUpRight size={15} /></a
        >
      </section>
    </div>
  </div>
{/if}
