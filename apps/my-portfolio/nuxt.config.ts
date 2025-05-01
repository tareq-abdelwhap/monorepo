// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'ar',
        language: 'ar-EG',
        name: 'العربية',
        file: 'ar.ts',
        dir: 'rtl',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    lazy: true,
    vueI18n: 'i18n/i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
});
