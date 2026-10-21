<script lang="ts">
  import {
    macroKeys,
    macroNames,
    type Nutrients,
    type Target,
  } from '#lib/domain/types.ts';
  import { fmt } from '#lib/domain/nutrition.ts';
  let { values, target = null }: { values: Nutrients; target?: Target | null } =
    $props();
</script>

<div class="macro-grid">
  {#each macroKeys as key}<div>
      <div class="macro-name">
        <i class="macro-dot {key}"></i>{macroNames[key]}
      </div>
      <div>
        <span class="num macro-number">{fmt(values[key], 1)}</span><small>
          g{target ? ` / ${fmt(target[key])} g` : ''}</small
        >
      </div>
      <div class="bar">
        <span
          class={key}
          style:width={`${target && target[key] > 0 ? Math.min(100, (values[key] / target[key]) * 100) : 0}%`}
        ></span>
      </div>
    </div>{/each}
</div>
