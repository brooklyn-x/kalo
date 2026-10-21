<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { page } from '$app/state';
  import {
    Home,
    BookOpen,
    Plus,
    Utensils,
    ChartNoAxesCombined,
    Settings,
    ArrowUpRight,
    CloudOff,
    Check,
    LoaderCircle,
  } from 'lucide-svelte';
  import { session, startSession } from '#lib/auth/session.ts';
  import { data, connectData, notice } from '#lib/data/store.ts';
  import Landing from './Landing.svelte';
  let { children }: { children: Snippet } = $props();
  let online = $state(true);
  let clock = $state(new Date());
  const nav = [
    { href: '/', label: 'overview', icon: Home },
    { href: '/diary', label: 'food diary', icon: BookOpen },
    { href: '/add', label: 'add food', icon: Plus },
    { href: '/recipes', label: 'recipes', icon: Utensils },
    { href: '/progress', label: 'progress', icon: ChartNoAxesCombined },
    { href: '/settings', label: 'settings', icon: Settings },
  ];
  onMount(() => {
    const stop = startSession();
    const update = () => {
      online = navigator.onLine;
      clock = new Date();
    };
    update();
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    window.addEventListener('focus', update);
    const timer = setInterval(update, 30000);
    return () => {
      stop();
      clearInterval(timer);
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
      window.removeEventListener('focus', update);
    };
  });
  $effect(() => {
    const status = $session.status;
    if (status === 'owner' || status === 'preview') return connectData();
  });
  $effect(() => {
    const theme = $data.profile.theme;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () =>
      (document.documentElement.dataset.theme =
        theme === 'system' ? (mq.matches ? 'dark' : 'light') : theme);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  });
</script>

<svelte:head
  ><title>Kalo — your daily balance</title><meta
    name="description"
    content="Your personal food diary. Track calories and macros, save recipes, and find your everyday balance with Kalo."
  /></svelte:head
>
{#if $session.status === 'owner' || $session.status === 'preview'}
  <div class="shell">
    <aside class="sidebar">
      <a href="/" class="wordmark" aria-label="Kalo home">KALO<span>.</span></a>
      <div>
        <div class="side-caption">YOUR DAILY BALANCE</div>
        <nav class="nav" aria-label="Main navigation">
          {#each nav as item}<a
              href={item.href}
              class:active={page.url.pathname === item.href}
              class:add={item.href === '/add'}
              aria-current={page.url.pathname === item.href
                ? 'page'
                : undefined}
              ><item.icon size={18} strokeWidth={1.8} /><span>{item.label}</span
              ></a
            >{/each}
        </nav>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-note">
          <div class="row between">
            <h3>Small bites.<br />Big picture.</h3>
            <ArrowUpRight size={23} />
          </div>
          <p>
            A little awareness goes a long way. Keep showing up for yourself.
          </p>
        </div>
        <a class="row profile-link" href="/settings"
          ><span class="avatar"
            >{($data.profile.name || $session.user?.displayName || 'K')
              .charAt(0)
              .toUpperCase()}</span
          ><span class="grow"
            ><strong>{$data.profile.name || 'Your space'}</strong><small
              >personal account</small
            ></span
          ><Settings size={15} /></a
        >
      </div>
    </aside>
    <main class="workspace">
      <header class="topbar">
        <a class="wordmark mobile-wordmark" href="/" aria-label="Kalo home"
          >KALO<span>.</span></a
        ><span class="label">A little awareness. A lot of possibility.</span>
        <div class="row">
          <div class="status" aria-live="polite">
            {#if $session.status === 'preview'}<span class="status-dot"
              ></span>local preview{:else if !online}<CloudOff
                size={13}
              />offline · saved on this device{:else if $data.pending}<LoaderCircle
                size={13}
              />waiting to sync{:else if $data.fromCache}<span
                class="status-dot"
              ></span>connecting…{:else}<Check size={13} />all changes saved{/if}
          </div>
          <span class="pill outlined"
            >{clock.toLocaleDateString('en', {
              month: 'short',
              day: 'numeric',
              timeZone: $data.profile.timezone,
            })}</span
          >
        </div>
      </header>
      {#if $session.status === 'preview'}<div class="banner preview-banner">
          <span class="preview-full"
            >Development preview · entries stay in this browser. Connect
            Firebase for cloud sync and online food search.</span
          ><span class="preview-short"
            >Local preview · data stays on this device.</span
          >
        </div>{/if}
      {#if $data.error}<div class="banner error" role="alert">
          {$data.error}
        </div>{/if}
      {#if $data.fromCache && !$data.historyComplete && !online}<div
          class="banner"
        >
          Some diary history has not been downloaded to this computer. Reconnect
          to load it; saved foods and manual logging are still available.
        </div>{/if}
      {#if !$data.loaded || ($data.fromCache && !$data.historyComplete && online)}<div
          class="empty"
        >
          <span class="spinner"></span>
          <p>Opening your diary…</p>
        </div>{:else}<div class="fade-in">{@render children()}</div>{/if}
    </main>
    <nav class="mobile-nav" aria-label="Mobile navigation">
      {#each nav.filter((item) => item.href !== '/add') as item}<a
          href={item.href}
          class:active={page.url.pathname === item.href}
          aria-current={page.url.pathname === item.href ? 'page' : undefined}
          ><item.icon size={20} strokeWidth={1.8} /><span
            >{item.href === '/'
              ? 'home'
              : item.href === '/diary'
                ? 'diary'
                : item.href === '/progress'
                  ? 'progress'
                  : item.href === '/settings'
                    ? 'you'
                    : 'recipes'}</span
          ></a
        >{/each}
    </nav>
    {#if page.url.pathname !== '/add'}<a
        class="btn secondary mobile-add"
        href="/add"><Plus size={18} />add food</a
      >{/if}
  </div>
{:else}<Landing />{/if}
{#if $notice}<div class="toast" role="status">{$notice}</div>{/if}
