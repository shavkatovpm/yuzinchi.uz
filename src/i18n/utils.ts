import { ui, defaultLang, languages, pageUrls, serviceUrls } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length <= 1) return '';

  return '/' + parts.slice(1).join('/');
}

export function translatePath(path: string, targetLang: Lang): string {
  const pathMappings: Record<string, Record<Lang, string>> = {
    '/xizmatlar': { uz: '/xizmatlar', ru: '/uslugi' },
    '/uslugi': { uz: '/xizmatlar', ru: '/uslugi' },
    '/biz-haqimizda': { uz: '/biz-haqimizda', ru: '/o-nas' },
    '/o-nas': { uz: '/biz-haqimizda', ru: '/o-nas' },
    '/aloqa': { uz: '/aloqa', ru: '/kontakty' },
    '/kontakty': { uz: '/aloqa', ru: '/kontakty' },
    '/blog': { uz: '/blog', ru: '/blog' },
    '/maqolalar': { uz: '/maqolalar', ru: '/stati' },
    '/stati': { uz: '/maqolalar', ru: '/stati' },
  };

  // Service page mappings
  const servicePageMappings: Record<string, Record<Lang, string>> = {
    '/xizmatlar/telegram-reklama': { uz: '/xizmatlar/telegram-reklama', ru: '/uslugi/telegram-reklama' },
    '/uslugi/telegram-reklama': { uz: '/xizmatlar/telegram-reklama', ru: '/uslugi/telegram-reklama' },
    '/xizmatlar/google-reklama': { uz: '/xizmatlar/google-reklama', ru: '/uslugi/google-reklama' },
    '/uslugi/google-reklama': { uz: '/xizmatlar/google-reklama', ru: '/uslugi/google-reklama' },
  };

  // Article slug mappings
  const articleMappings: Record<string, Record<Lang, string>> = {
    '/maqolalar/telegramda-reklama-narxi-ozbekiston': { uz: '/maqolalar/telegramda-reklama-narxi-ozbekiston', ru: '/stati/reklama-v-telegram-uzbekistan' },
    '/stati/reklama-v-telegram-uzbekistan': { uz: '/maqolalar/telegramda-reklama-narxi-ozbekiston', ru: '/stati/reklama-v-telegram-uzbekistan' },
    '/maqolalar/google-seo-ads-ozbekistonda': { uz: '/maqolalar/google-seo-ads-ozbekistonda', ru: '/stati/google-seo-ads-v-uzbekistane' },
    '/stati/google-seo-ads-v-uzbekistane': { uz: '/maqolalar/google-seo-ads-ozbekistonda', ru: '/stati/google-seo-ads-v-uzbekistane' },
  };

  // First check article pages (most specific)
  for (const [pattern, translations] of Object.entries(articleMappings)) {
    if (path === pattern) {
      return translations[targetLang];
    }
  }

  // Then check service pages
  for (const [pattern, translations] of Object.entries(servicePageMappings)) {
    if (path === pattern || path.startsWith(pattern)) {
      return translations[targetLang];
    }
  }

  // Then check general pages
  for (const [pattern, translations] of Object.entries(pathMappings)) {
    if (path === pattern || path.startsWith(pattern + '/')) {
      const suffix = path.slice(pattern.length);
      return translations[targetLang] + suffix;
    }
  }

  return path;
}

export function getAlternateLinks(currentUrl: URL): Array<{ lang: Lang; url: string }> {
  const pathname = currentUrl.pathname;
  const route = getRouteFromUrl(currentUrl);

  // If we're on the root URL, return home pages for each language
  if (pathname === '/' || pathname === '') {
    return [
      { lang: 'uz', url: '/' },
      { lang: 'ru', url: '/ru' }
    ];
  }

  return Object.keys(languages).map((lang) => {
    const translatedPath = translatePath(route, lang as Lang);
    return {
      lang: lang as Lang,
      url: lang === 'uz' && translatedPath === '' ? '/' : `/${lang}${translatedPath}`
    };
  });
}

export { languages, defaultLang, pageUrls, serviceUrls };
