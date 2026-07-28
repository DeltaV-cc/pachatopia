// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://deltav-cc.github.io/pachatopia',
  base: '/pachatopia/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: {
        fr: 'fr',
        en: 'en',
        es: 'es',
      },
    },
  })]
});