/// <reference lib="webworker" />
import { immutable, assets as staticAssets } from '$app/manifest';
import { version } from '$app/env';
const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `kalo-${version}`;
const assets = [...immutable, ...staticAssets].map((item) => item.path);
// Each SSR document contains route-specific hydration data.
const routes = [
  '/',
  '/diary',
  '/add',
  '/recipes',
  '/progress',
  '/settings',
  '/onboarding',
  '/login',
];
sw.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(assets);
      await cache.addAll(routes);
    })(),
  );
});
sw.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (key.startsWith('kalo-') && key !== CACHE) await caches.delete(key);
      await sw.clients.claim();
    })(),
  );
});
sw.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (
    event.request.method !== 'GET' ||
    url.origin !== sw.location.origin ||
    url.pathname.startsWith('/api/')
  )
    return;
  if (assets.includes(url.pathname)) {
    event.respondWith(
      (async () =>
        (await caches.open(CACHE))
          .match(event.request)
          .then((cached) => cached || fetch(event.request)))(),
    );
    return;
  }
  if (event.request.mode === 'navigate')
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        try {
          const response = await fetch(event.request);
          if (
            routes.includes(url.pathname) &&
            response.ok &&
            response.headers.get('content-type')?.includes('text/html')
          )
            await cache.put(url.pathname, response.clone());
          return response;
        } catch {
          return (
            (await cache.match(url.pathname)) ||
            new Response('Connect once to make this page available offline.', {
              status: 503,
              headers: { 'content-type': 'text/plain' },
            })
          );
        }
      })(),
    );
});
