<script lang="ts">
  import { ArrowUpRight, Flower2, Leaf, ArrowRight } from 'lucide-svelte';
  import { session, openPreview } from '#lib/auth/session.ts';
  import { googleSignIn } from '#lib/firebase/client.ts';
  let error = $state(''),
    busy = $state(false);
  async function login() {
    busy = true;
    error = '';
    try {
      await googleSignIn();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Could not sign in.';
    } finally {
      busy = false;
    }
  }
</script>

<div class="landing">
  <section class="landing-hero">
    <a class="wordmark" href="/">KALO<span>.</span></a>
    <div>
      <Flower2 class="flower" size={86} strokeWidth={1} />
      <h1>A LITTLE<br />MORE<br />BALANCE.</h1>
      <p style="margin-top:24px;max-width:330px;line-height:1.7;font-size:15px">
        Your meals. Your macros. Your kind of everyday.
      </p>
    </div>
    <div class="landing-footer">
      <span>GOOD FOOD. CLEARER DAYS.</span><Leaf size={18} />
    </div>
  </section>
  <section class="landing-content">
    <div class="label" style="margin-bottom:18px">a space just for you</div>
    <h2>{$session.status === 'setup' ? 'Hello, Kalo.' : 'Welcome back.'}</h2>
    <p>
      Make room for better habits. A simple, colorful place to track what fuels
      you—one meal at a time.
    </p>
    {#if $session.status === 'loading'}<div class="row">
        <span class="spinner"></span><small>Opening your space…</small>
      </div>
    {:else if $session.status === 'setup'}
      {#if import.meta.env.DEV}<div class="banner">
          The app is ready for Firebase setup. Connect your project using <code
            >.env.example</code
          >, or explore an empty local preview below.
        </div>
        <button class="btn large full" onclick={openPreview}
          >open local preview <ArrowRight size={17} /></button
        ><small style="margin-top:15px"
          >Development only. Preview entries stay in this browser and are not
          saved to Firebase.</small
        >
      {:else}<div class="banner">
          Kalo is being set up. Please check back shortly.
        </div>{/if}
    {:else}<button class="btn large full" onclick={login} disabled={busy}
        >{busy ? 'opening Google…' : 'continue with Google'}<ArrowUpRight
          size={18}
        /></button
      ><small class="center" style="margin-top:16px"
        >Your personal space. Access is restricted to the owner.</small
      >{/if}
    {#if error || $session.error}<p
        class="form-error"
        role="alert"
        style="margin-top:20px"
      >
        {error || $session.error}
      </p>{/if}
  </section>
</div>
