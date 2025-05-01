import { readFileSync } from "node:fs";
import type { Messages, ModuleOptions } from "./types";
import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addPlugin,
  hasNuxtModule,
  installModule,
  addComponentsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
// export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "translation",
    configKey: "translation",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: "en",
    locales: [],
  },
  setup: async (_options, _nuxt) => {
    const localesResolver = createResolver(_nuxt.options.srcDir);
    const messages: Messages = {};

    for (const locale of _options.locales ?? []) {
      const filePath = localesResolver.resolve(locale.file);
      const fileContents = readFileSync(filePath, "utf-8");

      const _messages = JSON.parse(fileContents) as Messages;
      messages[locale.name] = _messages;
    }

    _nuxt.options.runtimeConfig.public.translation = { ..._options, messages };

    if (!hasNuxtModule("@nuxt/ui")) {
      await installModule("@nuxt/ui");
    }

    // @ts-expect-error import.meta.url is not defined
    const resolver = createResolver(import.meta.url);
    addImportsDir(resolver.resolve("./runtime/composables"));
    addPlugin(resolver.resolve("./runtime/plugins/translation"));
    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
    });
  },
});
