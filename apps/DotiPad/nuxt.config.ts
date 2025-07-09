export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',

  nitro: { preset: 'netlify' },

  modules: ['nuxt-starter', '@vueuse/motion/nuxt'],

  starter: {
    googleFonts: {
      families: { Nunito: [400, 600, 700] },
    },
    i18n: {
      baseUrl: 'http://localhost:3000',
      locales: [
        {
          code: 'en',
          language: 'en-US',
          name: 'English',
          file: 'en.ts',
          dir: 'ltr',
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
      lazy: true,
    },
  },
});
