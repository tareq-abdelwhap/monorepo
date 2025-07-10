import type { Nuxt } from "nuxt/schema";
import type { ModuleOptions } from "@/src/types";

export const useViteExtendConfig = (nuxt: Nuxt, starter: ModuleOptions) => {
  nuxt.hook("vite:extendConfig", (config, { isClient }) => {
    if (starter.buildOptimizer.dropConsole) {
      // esbuild
      config.esbuild ||= {};
      config.esbuild.pure ||= [];
      config.esbuild.pure = [
        ...config.esbuild.pure,
        "console.assert",
        "console.clear",
        "console.context",
        "console.count",
        "console.countReset",
        "console.createTask",
        "console.debug",
        "console.dir",
        "console.dirxml",
        "console.error",
        "console.group",
        "console.groupCollapsed",
        "console.groupEnd",
        "console.info",
        "console.log",
        "console.memory",
        "console.profile",
        "console.profileEnd",
        "console.table",
        "console.time",
        "console.timeEnd",
        "console.timeLog",
        "console.timeStamp",
        "console.trace",
        "console.warn",
      ];
    }

    const chunks = Object.entries(starter.chunksControl);

    if (!chunks.length || !isClient || process.env.NODE_ENV !== "production") {
      return;
    }

    // @ts-expect-error manualChunks
    config.build.rollupOptions.output.manualChunks = (_id: string) => {
      for (const [name, ids] of chunks) {
        for (const id of ids) {
          if (_id.includes(id)) return name;
          return null;
        }
      }
    };
  });
};
