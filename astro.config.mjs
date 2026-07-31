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

  build: {
    // CSS'ni HTML ichiga joylashtiramiz. Tashqi stylesheet renderni bloklaydi:
    // brauzer uni yuklab bo'lmaguncha hech nima chizmaydi, bu esa kritik
    // zanjirga qo'shimcha yo'l-qaytish (round trip) qo'shadi va FCP/LCP ni kechiktiradi.
    // Gzipdan keyin ~10 KiB, ya'ni HTML ichiga sig'adigan hajm.
    inlineStylesheets: 'always'
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
