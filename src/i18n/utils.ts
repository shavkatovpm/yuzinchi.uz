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
    '/xizmatlar': { uz: '/xizmatlar', en: '/services', ru: '/uslugi' },
    '/services': { uz: '/xizmatlar', en: '/services', ru: '/uslugi' },
    '/uslugi': { uz: '/xizmatlar', en: '/services', ru: '/uslugi' },
    '/biz-haqimizda': { uz: '/biz-haqimizda', en: '/about', ru: '/o-nas' },
    '/about': { uz: '/biz-haqimizda', en: '/about', ru: '/o-nas' },
    '/o-nas': { uz: '/biz-haqimizda', en: '/about', ru: '/o-nas' },
    '/aloqa': { uz: '/aloqa', en: '/contact', ru: '/kontakty' },
    '/contact': { uz: '/aloqa', en: '/contact', ru: '/kontakty' },
    '/kontakty': { uz: '/aloqa', en: '/contact', ru: '/kontakty' },
    '/blog': { uz: '/blog', en: '/blog', ru: '/blog' },
  };

  // Service page mappings
  const servicePageMappings: Record<string, Record<Lang, string>> = {
    '/xizmatlar/instagram-reklama': { uz: '/xizmatlar/instagram-reklama', en: '/services/instagram-advertising', ru: '/uslugi/instagram-reklama' },
    '/services/instagram-advertising': { uz: '/xizmatlar/instagram-reklama', en: '/services/instagram-advertising', ru: '/uslugi/instagram-reklama' },
    '/uslugi/instagram-reklama': { uz: '/xizmatlar/instagram-reklama', en: '/services/instagram-advertising', ru: '/uslugi/instagram-reklama' },
    '/xizmatlar/telegram-reklama': { uz: '/xizmatlar/telegram-reklama', en: '/services/telegram-advertising', ru: '/uslugi/telegram-reklama' },
    '/services/telegram-advertising': { uz: '/xizmatlar/telegram-reklama', en: '/services/telegram-advertising', ru: '/uslugi/telegram-reklama' },
    '/uslugi/telegram-reklama': { uz: '/xizmatlar/telegram-reklama', en: '/services/telegram-advertising', ru: '/uslugi/telegram-reklama' },
    '/xizmatlar/google-reklama': { uz: '/xizmatlar/google-reklama', en: '/services/google-advertising', ru: '/uslugi/google-reklama' },
    '/services/google-advertising': { uz: '/xizmatlar/google-reklama', en: '/services/google-advertising', ru: '/uslugi/google-reklama' },
    '/uslugi/google-reklama': { uz: '/xizmatlar/google-reklama', en: '/services/google-advertising', ru: '/uslugi/google-reklama' },
  };

  // First check service pages (more specific)
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
  const currentLang = getLangFromUrl(currentUrl);
  const route = getRouteFromUrl(currentUrl);

  return Object.keys(languages).map((lang) => {
    const translatedPath = translatePath(route, lang as Lang);
    return {
      lang: lang as Lang,
      url: `/${lang}${translatedPath}`
    };
  });
}

export { languages, defaultLang, pageUrls, serviceUrls };
