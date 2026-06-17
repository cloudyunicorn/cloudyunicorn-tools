// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cloudyunicorn.com',
  integrations: [sitemap()],
  build: {
    // Inline all CSS into HTML to eliminate the stylesheet from the critical
    // request chain. The CSS is ~12 KB gzipped — acceptable for a small static
    // site where removing a network round-trip beats cross-page caching.
    inlineStylesheets: 'always',
  },
  server: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});