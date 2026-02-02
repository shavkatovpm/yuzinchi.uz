// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuzinchi.uz',

  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: {
          uz: 'uz',
          en: 'en',
          ru: 'ru'
        }
      }
    })
  ]
});
