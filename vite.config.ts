import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
export default defineConfig({
  envPrefix: ['VITE_', 'PUBLIC_'],
  server: { watch: { usePolling: true, interval: 300 } },
  plugins: [sveltekit({ adapter: adapter(), preprocess: vitePreprocess() })],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
