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
    url: 'https://poimpuiwljywwvoxubrx.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvaW1wdWl3bGp5d3d2b3h1YnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwOTE1NDYsImV4cCI6MjA2NzY2NzU0Nn0.0jyYcktKm4XssBmK97yvoaZtHq7urvqWL-ViL4VYeVg',
  },
});
