import type { ModuleOptions as NuxtUIOptions } from "@nuxt/ui";
import type { ModuleOptions as TailwindcssOptions } from "@nuxtjs/tailwindcss";
import type { ModuleOptions as GoogleFontsOptions } from "@nuxtjs/google-fonts";
import type { ModuleOptions as PiniaOptions } from "@pinia/nuxt";
import type { ModuleOptions as I18nOptions } from "@nuxtjs/i18n";

type BuildOptimizer = {
  dropConsole: boolean;
  nitro: {
    compressAssets: boolean;
    minify: boolean;
  };
};

type ChunksControl = Record<string, string[]>;

export interface ModuleOptions {
  buildOptimizer: BuildOptimizer;
  chunksControl: ChunksControl;
  googleFonts: GoogleFontsOptions;
  tailwindcss: Partial<TailwindcssOptions>;
  nuxtUI: Partial<NuxtUIOptions>;
  pinia: PiniaOptions;
  i18n: I18nOptions;
}
