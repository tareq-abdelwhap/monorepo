// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  app: {
    head: {
      title: 'Finance Tracker',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Personal Finance Tracker for CAD to EGP Management' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0F766E' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ]
    }
  },
  pwa: {
    manifest: {
      name: 'Finance Tracker',
      short_name: 'FinTrack',
      description: 'Track your CAD income and EGP expenses',
      lang: 'en',
      theme_color: '#0F766E',
      background_color: '#f8fafc',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          options: {
            cacheName: 'google-fonts',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        }
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})