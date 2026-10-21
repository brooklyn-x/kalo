<script lang="ts">
  import { Download, LogOut, RefreshCw } from 'lucide-svelte';
  import { data, saveProfile, notify, exportData } from '#lib/data/store.ts';
  import { logout } from '#lib/auth/session.ts';
  import TargetEditor from '#lib/components/TargetEditor.svelte';
  let name = $state($data.profile.name),
    timezone = $state($data.profile.timezone),
    theme = $state($data.profile.theme),
    trusted = $state(localStorage.getItem('kalo-trusted-device') === 'yes'),
    error = $state(''),
    exporting = $state(false),
    reloadNeeded = $state(false);
  function save(e: SubmitEvent) {
    e.preventDefault();
    error = '';
    try {
      saveProfile({
        name: name.trim(),
        timezone,
        theme,
        trustedDevice: trusted,
      });
      localStorage.setItem('kalo-trusted-device', trusted ? 'yes' : 'no');
      reloadNeeded = true;
      notify('Preferences saved. Reload to apply offline storage changes.');
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check your preferences.';
    }
  }
  async function download() {
    error = '';
    exporting = true;
    try {
      await exportData();
      notify('Your Kalo backup is downloaded.');
    } catch (e) {
      error = e instanceof Error ? e.message : 'Backup failed.';
    } finally {
      exporting = false;
    }
  }
</script>

<div class="page-head">
  <div>
    <div class="label">make it feel like you</div>
    <h1>Your space<span style="color:var(--teal)">.</span></h1>
    <p>A few thoughtful details, all yours to adjust.</p>
  </div>
  <button class="btn outline" onclick={logout}
    ><LogOut size={16} />sign out</button
  >
</div>
{#if error}<div class="banner error" role="alert">{error}</div>{/if}
<div class="grid2">
  <section class="card">
    <div class="setting-section">
      <h2>Personal preferences</h2>
      <form onsubmit={save} class="stack">
        <label class="field"
          >Your name<input bind:value={name} required maxlength="100" /></label
        ><label class="field"
          >Timezone<input
            bind:value={timezone}
            required
            placeholder="Asia/Kolkata"
          /><span class="field-help"
            >Use an IANA timezone, such as Asia/Kolkata or Europe/London.
            Existing diary dates remain unchanged.</span
          ></label
        ><label class="field"
          >Appearance<select bind:value={theme}
            ><option value="light">light</option><option value="dark"
              >dark</option
            ><option value="system">follow system</option></select
          ></label
        ><label
          class="row"
          style="align-items:flex-start;font-size:13px;line-height:1.6"
          ><input
            type="checkbox"
            bind:checked={trusted}
            style="margin-top:4px"
          /><span
            >Keep my diary available offline on this trusted computer.<small
              style="display:block"
              >Cloud data is also cached in this browser. Turn this off on a
              shared computer.</small
            ></span
          ></label
        ><button class="btn" type="submit">save preferences</button
        >{#if reloadNeeded}<button
            class="btn outline"
            type="button"
            disabled={$data.pending}
            onclick={() => location.reload()}
            ><RefreshCw size={14} />reload to apply storage preference</button
          ><small
            >Turning offline storage off stops using the persistent cache. Clear
            this site's browser data to remove a cache already stored on this
            computer.</small
          >{/if}
      </form>
    </div>
    <div class="setting-section">
      <h2>Your data, yours to keep.</h2>
      <p
        class="muted"
        style="font-size:13px;line-height:1.7;margin-bottom:20px"
      >
        Download your foods, recipes, diary, and target history as a versioned
        JSON backup. A complete cloud backup requires an internet connection.
      </p>
      <button class="btn outline" onclick={download} disabled={exporting}
        ><Download size={16} />{exporting
          ? 'preparing backup…'
          : 'export my data'}</button
      >
    </div>
  </section>
  <section class="card">
    <h2 style="margin-bottom:23px">Daily targets</h2>
    <TargetEditor /><a
      href="/onboarding"
      class="text-link"
      style="display:inline-block;margin-top:25px">revisit suggested targets</a
    >
  </section>
</div>
