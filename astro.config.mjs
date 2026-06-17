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
      key: '8521d9be856644f192b0c5cb2cb7ffc7',
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