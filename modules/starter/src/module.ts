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
import fs from "node:fs";

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
    const moduleResolver = createResolver(import.meta.url);
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

    /* TailwindCSS */
    await useInstallTailwindcss(
      _nuxt,
      { moduleResolver, rootResolver, starterPath },
      starter.tailwindcss
    );

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
