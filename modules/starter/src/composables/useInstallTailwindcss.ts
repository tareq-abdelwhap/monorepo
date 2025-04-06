import type { Nuxt } from "nuxt/schema";
import type { ModuleOptions } from "../types";
import { installModule, type Resolver } from "@nuxt/kit";
// import tailwindcss from "@tailwindcss/vite";

export const useInstallTailwindcss = async (
  nuxt: Nuxt,
  resolver: {
    rootResolver: Resolver;
    starterPath: string;
  },
  tailwindcssConfig: ModuleOptions["tailwindcss"]
) => {
  /* Tailwind 3 */
  if (
    tailwindcssConfig.config &&
    typeof tailwindcssConfig.config === "string"
  ) {
    tailwindcssConfig.config = resolver.rootResolver.resolve(
      resolver.starterPath,
      tailwindcssConfig.config
    );
  }

  if (tailwindcssConfig.cssPath && Array.isArray(tailwindcssConfig.cssPath)) {
    tailwindcssConfig.cssPath = [
      resolver.rootResolver.resolve(
        resolver.starterPath,
        tailwindcssConfig.cssPath[0]
      ),
      tailwindcssConfig.cssPath[1],
    ];
  }

  await installModule("@nuxtjs/tailwindcss", tailwindcssConfig);

  /* Tailwind 4 */
  // if (
  //   tailwindcssConfig.config &&
  //   typeof tailwindcssConfig.config === "string"
  // ) {
  //   tailwindcssConfig.config = resolver.rootResolver.resolve(
  //     resolver.starterPath,
  //     tailwindcssConfig.config
  //   );
  // }

  // if (tailwindcssConfig.cssPath && Array.isArray(tailwindcssConfig.cssPath)) {
  //   nuxt.options.css.push(
  //     resolver.rootResolver.resolve(
  //       resolver.starterPath,
  //       tailwindcssConfig.cssPath[0]
  //     )
  //   );
  // }

  // nuxt.hook("vite:extendConfig", (config) => {
  //   config.plugins ||= [];
  //   config.plugins.push(tailwindcss());
  // });
};
