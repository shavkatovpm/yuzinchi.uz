export const languages = {
  uz: "O'zbekcha",
  en: 'English',
  ru: 'Русский'
};

export const defaultLang = 'uz';

export const ui = {
  uz: {
    // Navigation
    'nav.home': 'Asosiy',
    'nav.services': 'Xizmatlar',
    'nav.blog': 'Blog',
    'nav.contact': 'Aloqa',

    // Hero Section
    'hero.title': 'Biznes uchun ishlaydigan reklama',
    'hero.subtitle': 'Instagram, Telegram va Google Ads orqali biznesingizga yangi mijozlar olib kelamiz',
    'hero.cta': "Bepul maslahat olish",
    'hero.cta.secondary': 'Xizmatlarni ko\'rish',

    // Problem Section
    'problem.title': 'Muammolarga yechim',
    'problem.item1.title': 'Reklamaga pul sarflaysiz, natija yo\'q',
    'problem.item1.desc': 'Biz faqat natija uchun harakat qilamiz',
    'problem.item2.title': 'Qaysi reklama turi ishlashini bilmaysiz',
    'problem.item2.desc': 'Reklamalarni test qilib, to\'g\'ri oqimni aniqlaymiz',
    'problem.item3.title': 'Vaqtingiz yoki tajribangiz yo\'q',
    'problem.item3.desc': 'Marketing bo\'yicha mas\'uliyatni o\'z zimmamizga olamiz',

    // Services Section
    'services.title': 'Xizmatlarimiz',
    'services.subtitle': 'Biznesingiz uchun eng samarali reklama kanallarini tanlaymiz',
    'services.label.what': 'Nima qilamiz?',
    'services.label.forWhom': 'Kimlar uchun?',
    'services.label.result': 'Qanday natija?',
    'services.label.price': 'Xizmat narxi',
    'services.price': '$250+ / oyiga',
    'services.instagram.what': 'Reklamangizni aniq auditoriyaga ko\'rsatamiz - yoshi, joyi, qiziqishlari bo\'yicha.',
    'services.instagram.forWhom': 'Onlayn savdo (shop, xizmat, kurs) qilayotganlar. Brendini tezroq tanitmoqchi bo\'lganlar. Yangi biznes boshlaganlar va savdoni oshirmoqchi bo\'lganlar.',
    'services.instagram.result': 'Aniq maqsadli auditoriyadan murojaatlar keladi. Profilga real qiziqish va trafik oshadi. Lead va sotuvlar ko\'payadi. Reklama byudjeti bekorga ketmaydi, natija o\'lchanadi.',
    'services.telegram.what': 'Telegram Ads va mashhur kanallarda reklama. Bot orqali mijoz yig\'ish.',
    'services.telegram.forWhom': 'Telegram kanali yoki bot orqali sotuv qiladiganlar. Xizmatini tez ommaga chiqarishni xohlaganlar. O\'z auditoriyasini yig\'moqchi bo\'lgan brendlar. Kurslar, servislar, lokal va online bizneslar.',
    'services.telegram.result': 'Kerakli kanallardan sifatli obunachilar keladi. Xabarlar ko\'proq ko\'riladi va o\'qiladi. To\'g\'ridan-to\'g\'ri murojaatlar oshadi. Telegram ichida barqaror trafik shakllanadi.',
    'services.google.what': 'Sizni qidirayotganlarga reklama. Qidiruvda birinchi o\'rinda.',
    'services.google.forWhom': 'Mahsulot yoki xizmatini qidirayotgan mijozlarni ushlamoqchi bo\'lganlar. "Hoziroq sotib olish" bosqichidagi auditoriyaga chiqmoqchi bo\'lganlar. Lokal yoki global xizmat ko\'rsatuvchi bizneslar.',
    'services.google.result': 'Google qidiruvi orqali tayyor mijozlar keladi. Sotuv ehtimoli yuqori bo\'lgan trafik olinadi. Har bir klik va natija nazorat qilinadi. Reklama tez natija bera boshlaydi.',
    'services.learnMore': 'Batafsil ko\'rish',

    // Process Section
    'process.title': 'Qanday ishlaymiz?',
    'process.step1.title': 'Tahlil',
    'process.step1.desc': 'Biznesingizni va maqsadli auditoriyani o\'rganamiz',
    'process.step2.title': 'Strategiya',
    'process.step2.desc': 'Eng samarali reklama strategiyasini tuzamiz',
    'process.step3.title': 'Ishga tushirish',
    'process.step3.desc': 'Reklamalarni test qilib, optimallashtiramiz',
    'process.step4.title': 'Natija',
    'process.step4.desc': 'Eng yaxshi natija beradigan reklamalarni kengaytiramiz',

    // Target Audience
    'audience.title': 'Kimlar uchun?',
    'audience.item1': 'Kichik va o\'rta biznes egalari',
    'audience.item2': 'Onlayn do\'kon egalari',
    'audience.item3': 'Xizmat ko\'rsatuvchi kompaniyalar',
    'audience.item4': 'Startaplar va yangi loyihalar',

    // Why Us
    'whyus.title': 'Nega aynan biz?',
    'whyus.item1.title': 'Natijaga yo\'naltirilgan',
    'whyus.item1.desc': 'Faqat klik emas, haqiqiy mijozlar uchun ishlaymiz',
    'whyus.item2.title': 'Shaffof hisobot',
    'whyus.item2.desc': 'Har hafta batafsil hisobot olasiz',
    'whyus.item3.title': 'Doimiy optimizatsiya',
    'whyus.item3.desc': 'Reklamalarni doimo tahlil qilib, yaxshilaymiz',
    'whyus.item4.title': 'Tezkor aloqa',
    'whyus.item4.desc': 'Savollaringizga tez javob beramiz',

    // FAQ
    'faq.title': 'Ko\'p beriladigan savollar',
    'faq.q1': 'Minimal byudjet qancha?',
    'faq.a1': 'Minimal reklama byudjeti oyiga 500 000 so\'mdan boshlanadi. Lekin samarali natija uchun kamida 1-2 million so\'m tavsiya etamiz.',
    'faq.q2': 'Qancha vaqtda natija ko\'raman?',
    'faq.a2': 'Odatda birinchi natijalar 1-2 hafta ichida ko\'rinadi. Barqaror natijalar uchun 1-2 oy kerak bo\'ladi.',
    'faq.q3': 'Qaysi platforma yaxshiroq?',
    'faq.a3': 'Bu biznesingiz turiga bog\'liq. Biz tahlil qilib, sizga eng mos platformani tavsiya qilamiz.',
    'faq.q4': 'Shartnoma tuzasizlarmi?',
    'faq.a4': 'Ha, rasmiy shartnoma tuzamiz. Bu sizning va bizning huquqlarimizni himoya qiladi.',

    // CTA Section
    'cta.title': 'Biznesingizni o\'stirishga tayyormisiz?',
    'cta.subtitle': 'Bepul maslahat oling va biznesingiz uchun eng yaxshi strategiyani birgalikda tuzamiz',
    'cta.button': 'Bepul maslahat olish',

    // Contact
    'contact.title': 'Bog\'lanish',
    'contact.subtitle': 'Savollaringiz bormi? Biz bilan bog\'laning',
    'contact.name': 'Ismingiz',
    'contact.phone': 'Telefon raqamingiz',
    'contact.business': 'Biznes turi',
    'contact.message': 'Xabaringiz',
    'contact.submit': 'Yuborish',
    'contact.business.ecommerce': 'Onlayn do\'kon',
    'contact.business.services': 'Xizmatlar',
    'contact.business.horeca': 'Restoran/Kafe',
    'contact.business.education': 'Ta\'lim',
    'contact.business.other': 'Boshqa',

    // Footer
    'footer.description': 'Professional raqamli marketing xizmatlari. Instagram, Telegram va Google Ads orqali biznesingizni o\'stiring.',
    'footer.services': 'Xizmatlar',
    'footer.company': 'Kompaniya',
    'footer.contact': 'Aloqa',
    'footer.rights': 'Barcha huquqlar himoyalangan',

    // About Page
    'about.title': 'Biz haqimizda',
    'about.subtitle': 'Yuzinchi - professional raqamli marketing agentligi',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Foydali maqolalar va yangiliklar',
    'blog.readMore': 'Davomini o\'qish',

    // Meta
    'meta.title': 'Instagram Targeting, Telegram Ads va Google Ads bo\'yicha - Yuzinchi Marketing Agentligi',
    'meta.description': 'Instagram target, Telegram Ads va Google Ads bilan biznesingizga yangi mijozlar olib kelamiz. Toshkent va O\'zbekiston bo\'ylab professional reklama xizmatlari.'
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Advertising that works for business',
    'hero.subtitle': 'We bring new customers to your business through Instagram, Telegram and Google Ads',
    'hero.cta': 'Get Free Consultation',
    'hero.cta.secondary': 'View Services',

    // Problem Section
    'problem.title': 'Solutions to problems',
    'problem.item1.title': 'Spending on ads, no results',
    'problem.item1.desc': 'We work only for results',
    'problem.item2.title': 'Don\'t know which ad type works',
    'problem.item2.desc': 'We test ads and find the right approach',
    'problem.item3.title': 'No time or experience',
    'problem.item3.desc': 'We take full responsibility for marketing',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We choose the most effective advertising channels for your business',
    'services.label.what': 'What we do?',
    'services.label.forWhom': 'Who is it for?',
    'services.label.result': 'What results?',
    'services.label.price': 'Service price',
    'services.price': '$250+ / month',
    'services.instagram.what': 'Show ads to exact audience - by age, location, interests.',
    'services.instagram.forWhom': 'Online sellers (shops, services, courses). Those who want to promote their brand faster. New businesses looking to increase sales.',
    'services.instagram.result': 'Leads from targeted audience. Real interest and profile traffic increases. More leads and sales. Ad budget is not wasted, results are measurable.',
    'services.telegram.what': 'Telegram Ads and popular channels. Lead collection bots.',
    'services.telegram.forWhom': 'Those selling via Telegram channel or bot. Those who want to reach audience quickly. Brands building their audience. Courses, services, local and online businesses.',
    'services.telegram.result': 'Quality subscribers from relevant channels. Messages get more views and reads. Direct inquiries increase. Stable traffic within Telegram.',
    'services.google.what': 'Ads for people searching for you. First in search results.',
    'services.google.forWhom': 'Those who want to catch customers searching for their product. Those targeting "ready to buy" audience. Local or global service providers.',
    'services.google.result': 'Ready customers via Google search. High-conversion traffic. Every click and result is tracked. Ads start delivering results quickly.',
    'services.learnMore': 'Learn More',

    // Process Section
    'process.title': 'How we work?',
    'process.step1.title': 'Analysis',
    'process.step1.desc': 'We study your business and target audience',
    'process.step2.title': 'Strategy',
    'process.step2.desc': 'We create the most effective advertising strategy',
    'process.step3.title': 'Launch',
    'process.step3.desc': 'We test and optimize advertisements',
    'process.step4.title': 'Results',
    'process.step4.desc': 'We scale the ads that deliver the best results',

    // Target Audience
    'audience.title': 'Who is it for?',
    'audience.item1': 'Small and medium business owners',
    'audience.item2': 'Online store owners',
    'audience.item3': 'Service companies',
    'audience.item4': 'Startups and new projects',

    // Why Us
    'whyus.title': 'Why choose us?',
    'whyus.item1.title': 'Result-oriented',
    'whyus.item1.desc': 'We work for real customers, not just clicks',
    'whyus.item2.title': 'Transparent reporting',
    'whyus.item2.desc': 'You get detailed reports every week',
    'whyus.item3.title': 'Continuous optimization',
    'whyus.item3.desc': 'We constantly analyze and improve ads',
    'whyus.item4.title': 'Quick communication',
    'whyus.item4.desc': 'We respond to your questions quickly',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What is the minimum budget?',
    'faq.a1': 'The minimum advertising budget starts from 500,000 UZS per month. However, we recommend at least 1-2 million UZS for effective results.',
    'faq.q2': 'When will I see results?',
    'faq.a2': 'Usually, the first results are visible within 1-2 weeks. Stable results take 1-2 months.',
    'faq.q3': 'Which platform is better?',
    'faq.a3': 'It depends on your business type. We analyze and recommend the most suitable platform for you.',
    'faq.q4': 'Do you sign contracts?',
    'faq.a4': 'Yes, we sign official contracts. This protects your and our rights.',

    // CTA Section
    'cta.title': 'Ready to grow your business?',
    'cta.subtitle': 'Get a free consultation and let\'s create the best strategy for your business together',
    'cta.button': 'Get Free Consultation',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? Get in touch with us',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone Number',
    'contact.business': 'Business Type',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.business.ecommerce': 'E-commerce',
    'contact.business.services': 'Services',
    'contact.business.horeca': 'Restaurant/Cafe',
    'contact.business.education': 'Education',
    'contact.business.other': 'Other',

    // Footer
    'footer.description': 'Professional digital marketing services. Grow your business through Instagram, Telegram and Google Ads.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Yuzinchi - Professional Digital Marketing Agency',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Useful articles and news',
    'blog.readMore': 'Read More',

    // Meta
    'meta.title': 'Instagram Targeting, Telegram Ads and Google Ads - Yuzinchi Marketing Agency',
    'meta.description': 'We bring new customers to your business with Instagram targeting, Telegram Ads and Google Ads. Professional advertising services in Tashkent and across Uzbekistan.'
  },

  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',

    // Hero Section
    'hero.title': 'Реклама, которая работает для бизнеса',
    'hero.subtitle': 'Привлекаем новых клиентов для вашего бизнеса через Instagram, Telegram и Google Ads',
    'hero.cta': 'Получить бесплатную консультацию',
    'hero.cta.secondary': 'Смотреть услуги',

    // Problem Section
    'problem.title': 'Решения проблем',
    'problem.item1.title': 'Тратите на рекламу, результата нет',
    'problem.item1.desc': 'Мы работаем только на результат',
    'problem.item2.title': 'Не знаете какой тип рекламы работает',
    'problem.item2.desc': 'Тестируем рекламу и находим правильный подход',
    'problem.item3.title': 'Нет времени или опыта',
    'problem.item3.desc': 'Берём ответственность за маркетинг на себя',

    // Services Section
    'services.title': 'Наши услуги',
    'services.subtitle': 'Выбираем самые эффективные рекламные каналы для вашего бизнеса',
    'services.label.what': 'Что делаем?',
    'services.label.forWhom': 'Для кого?',
    'services.label.result': 'Какой результат?',
    'services.label.price': 'Стоимость услуги',
    'services.price': '$250+ / месяц',
    'services.instagram.what': 'Реклама точной аудитории - по возрасту, локации, интересам.',
    'services.instagram.forWhom': 'Онлайн-продавцы (магазины, услуги, курсы). Те, кто хочет быстрее продвинуть бренд. Новые бизнесы, желающие увеличить продажи.',
    'services.instagram.result': 'Заявки от целевой аудитории. Реальный интерес и трафик на профиль растёт. Больше лидов и продаж. Рекламный бюджет не тратится впустую, результат измерим.',
    'services.telegram.what': 'Telegram Ads и популярные каналы. Боты для сбора заявок.',
    'services.telegram.forWhom': 'Те, кто продаёт через Telegram канал или бот. Те, кто хочет быстро выйти на аудиторию. Бренды, собирающие свою аудиторию. Курсы, сервисы, локальный и онлайн бизнес.',
    'services.telegram.result': 'Качественные подписчики из нужных каналов. Сообщения получают больше просмотров и прочтений. Прямые обращения растут. Стабильный трафик внутри Telegram.',
    'services.google.what': 'Реклама для тех, кто вас ищет. Первые в поиске.',
    'services.google.forWhom': 'Те, кто хочет поймать клиентов, ищущих их продукт. Те, кто нацелен на аудиторию "готов купить". Локальные или глобальные поставщики услуг.',
    'services.google.result': 'Готовые клиенты через поиск Google. Трафик с высокой конверсией. Каждый клик и результат отслеживается. Реклама быстро начинает давать результаты.',
    'services.learnMore': 'Подробнее',

    // Process Section
    'process.title': 'Как мы работаем?',
    'process.step1.title': 'Анализ',
    'process.step1.desc': 'Изучаем ваш бизнес и целевую аудиторию',
    'process.step2.title': 'Стратегия',
    'process.step2.desc': 'Создаём самую эффективную рекламную стратегию',
    'process.step3.title': 'Запуск',
    'process.step3.desc': 'Тестируем и оптимизируем рекламу',
    'process.step4.title': 'Результат',
    'process.step4.desc': 'Масштабируем рекламу с лучшими результатами',

    // Target Audience
    'audience.title': 'Для кого?',
    'audience.item1': 'Владельцы малого и среднего бизнеса',
    'audience.item2': 'Владельцы интернет-магазинов',
    'audience.item3': 'Сервисные компании',
    'audience.item4': 'Стартапы и новые проекты',

    // Why Us
    'whyus.title': 'Почему именно мы?',
    'whyus.item1.title': 'Ориентированы на результат',
    'whyus.item1.desc': 'Работаем на реальных клиентов, а не просто клики',
    'whyus.item2.title': 'Прозрачная отчётность',
    'whyus.item2.desc': 'Каждую неделю получаете подробный отчёт',
    'whyus.item3.title': 'Постоянная оптимизация',
    'whyus.item3.desc': 'Постоянно анализируем и улучшаем рекламу',
    'whyus.item4.title': 'Быстрая связь',
    'whyus.item4.desc': 'Быстро отвечаем на ваши вопросы',

    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Какой минимальный бюджет?',
    'faq.a1': 'Минимальный рекламный бюджет начинается от 500 000 сум в месяц. Однако для эффективных результатов рекомендуем минимум 1-2 миллиона сум.',
    'faq.q2': 'Когда я увижу результаты?',
    'faq.a2': 'Обычно первые результаты видны в течение 1-2 недель. Стабильные результаты занимают 1-2 месяца.',
    'faq.q3': 'Какая платформа лучше?',
    'faq.a3': 'Это зависит от типа вашего бизнеса. Мы анализируем и рекомендуем наиболее подходящую платформу для вас.',
    'faq.q4': 'Заключаете ли вы контракты?',
    'faq.a4': 'Да, мы заключаем официальные контракты. Это защищает ваши и наши права.',

    // CTA Section
    'cta.title': 'Готовы развивать свой бизнес?',
    'cta.subtitle': 'Получите бесплатную консультацию, и мы вместе создадим лучшую стратегию для вашего бизнеса',
    'cta.button': 'Получить бесплатную консультацию',

    // Contact
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Есть вопросы? Свяжитесь с нами',
    'contact.name': 'Ваше имя',
    'contact.phone': 'Номер телефона',
    'contact.business': 'Тип бизнеса',
    'contact.message': 'Сообщение',
    'contact.submit': 'Отправить',
    'contact.business.ecommerce': 'Интернет-магазин',
    'contact.business.services': 'Услуги',
    'contact.business.horeca': 'Ресторан/Кафе',
    'contact.business.education': 'Образование',
    'contact.business.other': 'Другое',

    // Footer
    'footer.description': 'Профессиональные услуги цифрового маркетинга. Развивайте свой бизнес через Instagram, Telegram и Google Ads.',
    'footer.services': 'Услуги',
    'footer.company': 'Компания',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены',

    // About Page
    'about.title': 'О нас',
    'about.subtitle': 'Yuzinchi - Профессиональное агентство цифрового маркетинга',

    // Blog
    'blog.title': 'Блог',
    'blog.subtitle': 'Полезные статьи и новости',
    'blog.readMore': 'Читать далее',

    // Meta
    'meta.title': 'Instagram Targeting, Telegram Ads и Google Ads - Yuzinchi Marketing Agency',
    'meta.description': 'Привлекаем новых клиентов для вашего бизнеса через Instagram таргет, Telegram Ads и Google Ads. Профессиональные рекламные услуги в Ташкенте и по всему Узбекистану.'
  }
} as const;

// Service pages URLs per language
export const serviceUrls = {
  uz: {
    instagram: '/uz/xizmatlar/instagram-reklama',
    telegram: '/uz/xizmatlar/telegram-reklama',
    google: '/uz/xizmatlar/google-reklama',
    all: '/uz/xizmatlar'
  },
  en: {
    instagram: '/en/services/instagram-advertising',
    telegram: '/en/services/telegram-advertising',
    google: '/en/services/google-advertising',
    all: '/en/services'
  },
  ru: {
    instagram: '/ru/uslugi/instagram-reklama',
    telegram: '/ru/uslugi/telegram-reklama',
    google: '/ru/uslugi/google-reklama',
    all: '/ru/uslugi'
  }
};

// Page URLs per language
export const pageUrls = {
  uz: {
    home: '/',
    services: '/uz/xizmatlar',
    blog: '/uz/blog',
    contact: '/uz/aloqa'
  },
  en: {
    home: '/en',
    services: '/en/services',
    blog: '/en/blog',
    contact: '/en/contact'
  },
  ru: {
    home: '/ru',
    services: '/ru/uslugi',
    blog: '/ru/blog',
    contact: '/ru/kontakty'
  }
};
