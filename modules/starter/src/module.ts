import type { ModuleOptions } from "./types";
import {
  createResolver,
  defineNuxtModule,
  hasNuxtModule,
  installModule,
} from "@nuxt/kit";
import { useRuntimeOptions } from "./composables/useRuntimeOptions";
import { useViteExtendConfig } from "./composables/useViteExtendConfigHook";
import { useNitroConfig } from "./composables/useNitroConfig";
import { useInstallI18n } from "./composables/useInstallI18n";
import { useInstallTailwindcss } from "./composables/useInstallTailwindcss";

export default defineNuxtModule<ModuleOptions>({
  meta: { name: "nuxt-starter", configKey: "starter" },

  // Default configuration options of the Nuxt module
  defaults: {
    buildOptimizer: {
      dropConsole: true,
      nitro: { compressAssets: true, minify: true },
    },
    chunksControl: {},

    googleFonts: {},

    tailwindcss: {
      cssPath: [`tailwind.css`, { injectPosition: "first" }],
      config: "tailwind.config",
    },

    pinia: {},

    i18n: {
      restructureDir: "i18n",
      langDir: "locales",
      vueI18n: "starter.i18n.config.ts",
    },
  },

  // hooks: {},

  setup: async (_options, _nuxt) => {
    const rootResolver = createResolver(_nuxt.options.rootDir);
    const starterPath = rootResolver.resolve("starter");

    /* Module Options from Runtime Config */
    const { runtimeConfig } = _nuxt.options;
    const starter = useRuntimeOptions(runtimeConfig.public.starter, _options);

    /* Drop Console & Manual Chunks */
    useViteExtendConfig(_nuxt, starter);

    /* Nitro Settings for Compress Assetes and Minify */
    useNitroConfig(_nuxt, starter);

    /* Google Fonts */
    if (!hasNuxtModule("@nuxtjs/google-fonts")) {
      await installModule("@nuxtjs/google-fonts", starter.googleFonts);
    }

    /* TailwindCSS */
    if (!hasNuxtModule("@nuxtjs/tailwindcss")) {
      await useInstallTailwindcss(
        _nuxt,
        { rootResolver, starterPath },
        starter.tailwindcss
      );
    }

    /* Pinia Store */
    if (!hasNuxtModule("@pinia/nuxt")) {
      await installModule("@pinia/nuxt", starter.pinia);
    }
    if (!hasNuxtModule("pinia")) {
      await installModule("pinia");
    }

    /* I18n */
    if (!hasNuxtModule("@nuxtjs/i18n")) {
      await useInstallI18n(_nuxt, { rootResolver, starterPath }, starter.i18n);
    }

    /* Color Mode */
    /* Comming Soon */
  },
});
