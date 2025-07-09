// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },
  ssr: false,

  nitro: {
    compressPublicAssets: false,
  },

  modules: ['../../modules/starter', '@nuxtjs/ionic', '@nuxtjs/supabase'],

  ionic: { css: { utilities: true } },

  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/callback',
    },
  },
});
