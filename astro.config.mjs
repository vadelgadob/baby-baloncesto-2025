// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://baby-baloncesto-narino.vercel.app',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://baby-baloncesto-narino.vercel.app/',
      ],
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
        },
      },
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});