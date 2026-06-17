// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import indexnow from 'astro-indexnow';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cloudyunicorn.com',
  integrations: [
    sitemap(),
    indexnow({
      key: 'b41c517ddeaa42dfae3a16b71b36e44a',
      enabled: true,
    }),
  ],
  server: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});