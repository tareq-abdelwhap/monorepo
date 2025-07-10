import type { Nuxt } from "nuxt/schema";
import type { ModuleOptions } from "@/src/types";

export const useNitroConfig = (nuxt: Nuxt, starter: ModuleOptions) => {
  nuxt.hook("nitro:config", (nitro) => {
    nitro.compressPublicAssets = starter.buildOptimizer.nitro.compressAssets;
    nitro.minify = starter.buildOptimizer.nitro.minify;
  });
};
