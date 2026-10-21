<script lang="ts">
  import { goto } from '$app/navigation';
  import { Sparkles, ArrowRight } from 'lucide-svelte';
  import { data } from '#lib/data/store.ts';
  import { estimateTarget } from '#lib/domain/nutrition.ts';
  import type { Target } from '#lib/domain/types.ts';
  import TargetEditor from '#lib/components/TargetEditor.svelte';
  let name = $state($data.profile.name || ''),
    age = $state($data.profile.age),
    height = $state($data.profile.height),
    weight = $state($data.profile.weight),
    formula = $state($data.profile.formula),
    activity = $state($data.profile.activity),
    goal = $state($data.profile.goal),
    error = $state('');
  let targetEditor: { suggest: (target: Target) => void };
  function estimate() {
    try {
      error = '';
      targetEditor.suggest(
        estimateTarget(age, height, weight, formula, activity, goal),
      );
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check your details.';
    }
  }
  function profile() {
    if (!name.trim())
      throw new Error('Enter your name above before saving your targets.');
    return {
      name: name.trim(),
      age,
      height,
      weight,
      formula,
      activity,
      goal,
      onboardingDone: true,
      trustedDevice: localStorage.getItem('kalo-trusted-device') === 'yes',
    };
  }
</script>

<div class="onboarding">
  <div class="page-head">
    <div>
      <div class="label">make yourself at home</div>
      <h1>Your kind of balance<span style="color:var(--teal)">.</span></h1>
      <p>Set your targets manually, or use an editable starting estimate.</p>
    </div>
  </div>
  <section class="card stack">
    <label class="field"
      >What should we call you?<input
        bind:value={name}
        placeholder="Your name"
        maxlength="100"
        required
      /></label
    >
    <details>
      <summary class="text-link">help me estimate my targets</summary>
      <div class="stack" style="margin-top:22px">
        <div class="fields">
          <label class="field"
            >Age<input
              type="number"
              bind:value={age}
              min="18"
              max="100"
            /></label
          ><label class="field"
            >Equation input<select bind:value={formula}
              ><option value="female">female equation</option><option
                value="male">male equation</option
              ></select
            ></label
          ><label class="field"
            >Height · cm<input
              type="number"
              bind:value={height}
              min="120"
              max="230"
              step="any"
            /></label
          ><label class="field"
            >Weight · kg<input
              type="number"
              bind:value={weight}
              min="35"
              max="300"
              step="any"
            /></label
          ><label class="field"
            >Activity<select bind:value={activity}
              ><option value={1.2}>mostly seated</option><option value={1.375}
                >lightly active</option
              ><option value={1.55}>moderately active</option><option
                value={1.725}>very active</option
              ></select
            ></label
          ><label class="field"
            >Goal<select bind:value={goal}
              ><option value="lose">lose weight</option><option value="maintain"
                >maintain weight</option
              ><option value="gain">gain weight</option></select
            ></label
          >
        </div>
        <small
          >Adult estimate using Mifflin–St Jeor, an activity multiplier, and a
          modest goal adjustment. You can change every target below. If this
          equation does not apply to you, use manual targets.</small
        ><button class="btn outline" onclick={estimate}
          ><Sparkles size={16} />suggest a starting target</button
        >{#if error}<div class="form-error" role="alert">{error}</div>{/if}
      </div>
    </details>
    <hr class="divider" style="margin:0" />
    <TargetEditor
      bind:this={targetEditor}
      profilePatch={profile}
      ondone={() => goto('/')}
    />
  </section>
  <a
    href="/"
    class="text-link row"
    style="justify-content:center;margin-top:24px"
    >back to overview <ArrowRight size={14} /></a
  >
</div>
