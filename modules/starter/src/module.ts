import type { ModuleOptions } from "./types";
import {
  createResolver,
  defineNuxtModule,
  hasNuxtModule,
  installModule,
} from "@nuxt/kit";
import { useRuntimeOptions } from "./runtime/composables/useRuntimeOptions";
import { useViteExtendConfig } from "./runtime/composables/useViteExtendConfigHook";
import { useNitroConfig } from "./runtime/composables/useNitroConfig";
// import { useInstallI18n } from "./runtime/composables/useInstallI18n";
import { useInstallTailwindcss } from "./runtime/composables/useInstallTailwindcss";
import fs from "node:fs";
import { useInstallNuxtUI } from "./runtime/composables/useInstallNuxtUI";

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

    // tailwindcss: {
    //   cssPath: [`tailwind.css`, { injectPosition: "first" }],
    //   config: "tailwind.config",
    // },
    nuxtUI: {},

    pinia: {},

    i18n: {
      locales: [
        {
          code: "en",
          language: "en-US",
          name: "English",
          file: "en.ts",
        },
      ],

      restructureDir: "i18n",
      langDir: "locales",
      vueI18n: "starter/i18n.config.ts",
    },
  },

  // hooks: {},

  setup: async (_options, _nuxt) => {
    const rootResolver = createResolver(_nuxt.options.rootDir);
    const starterPath = rootResolver.resolve("starter");

    /* Module Options from Runtime Config */
    const { runtimeConfig } = _nuxt.options;
    const starter = useRuntimeOptions(runtimeConfig.public.starter, _options);

    if (!fs.existsSync(rootResolver.resolve(starterPath))) {
      fs.mkdirSync(rootResolver.resolve(starterPath), { recursive: true });
      console.log(`Created ${rootResolver.resolve(starterPath)} directory`);
    }

    /* Drop Console & Manual Chunks */
    useViteExtendConfig(_nuxt, starter);

    /* Nitro Settings for Compress Assetes and Minify */
    useNitroConfig(_nuxt, starter);

    /* Google Fonts */
    if (!hasNuxtModule("@nuxtjs/google-fonts")) {
      await installModule("@nuxtjs/google-fonts", starter.googleFonts);
    }

    /* Nuxt UI */
    if (!hasNuxtModule("@nuxt/ui")) {
      await Promise.all([
        installModule("@nuxt/ui", starter.nuxtUI),
        useInstallNuxtUI(_nuxt, { rootResolver, starterPath }),
      ]);
    }

    /* TailwindCSS */
    // await useInstallTailwindcss(
    //   _nuxt,
    //   { rootResolver, starterPath },
    //   starter.tailwindcss
    // );

    /* Pinia Store */

    if (!hasNuxtModule("@pinia/nuxt")) {
      await installModule("@pinia/nuxt", starter.pinia);
    }

    if (!hasNuxtModule("pinia")) {
      await installModule("pinia");
    }

    if (!hasNuxtModule("@pinia/colada-nuxt")) {
      await installModule("@pinia/colada-nuxt");
    }

    /* I18n */ // There is an Error in @nuxtjs/i18n
    // if (!hasNuxtModule("@nuxtjs/i18n")) {
    //   await useInstallI18n(_nuxt, { rootResolver, starterPath }, starter.i18n);
    // }

    /* Color Mode */
    /* Comming Soon */
  },
});
