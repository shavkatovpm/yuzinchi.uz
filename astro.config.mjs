// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
    sitemap({
      // "/" sahifasi /uz bilan bir xil kontent va canonical'i /uz ga qaratilgan,
      // shuning uchun sitemap'da faqat /uz qoladi
      filter: (page) => page !== 'https://yuzinchi.uz/',
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
