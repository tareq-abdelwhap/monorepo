export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-03-10",
  modules: ["../src/module"],

  starter: {
    buildOptimizer: {
      dropConsole: true,
      nitro: { compressAssets: true, minify: true },
    },
    chunksControl: {},
  },
});
