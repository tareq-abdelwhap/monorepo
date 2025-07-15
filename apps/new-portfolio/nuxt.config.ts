// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },

  nitro: { preset: 'netlify' },

  modules: [
    'nuxt-starter',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxtjs/supabase',
  ],

  swiper: {
    bundled: true, // makes all effects (like fade) available
  },

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/callback',
      exclude: ['/login', '/callback', `/^\/(?!$)[^\/]+$/`],
      include: ['/'],
    },
  },
});
