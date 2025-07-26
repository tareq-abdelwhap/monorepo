import type { Nuxt } from "nuxt/schema";
import type { ModuleOptions } from "@/src/types";
import type { Resolver } from "@nuxt/kit";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

export const useInstallTailwindcss = async (
  nuxt: Nuxt,
  resolver: {
    rootResolver: Resolver;
    starterPath: string;
  },
  tailwindcssConfig: ModuleOptions["tailwindcss"]
) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  nuxt.options.alias ||= {};
  nuxt.options.alias["@nuxt-starter/tailwincss"] = resolve(
    __dirname,
    "./../tailwind.css"
  );

  if (tailwindcssConfig.cssPath && Array.isArray(tailwindcssConfig.cssPath)) {
    // check if file exists and if not create it with createFileSync

    const cssPath = resolver.rootResolver.resolve(
      resolver.starterPath,
      tailwindcssConfig.cssPath[0]
    );

    // check if file exists
    if (!fs.existsSync(cssPath)) {
      // create the file with the default content
      fs.writeFileSync(cssPath, "@import '@nuxt-starter/tailwincss';\n");

      console.log(
        `Created ${cssPath} file. Please add your tailwindcss styles here.`
      );
    }

    nuxt.options.css.push(cssPath);
  }

  nuxt.hook("vite:extendConfig", (config) => {
    config.plugins ||= [];
    config.plugins.push(tailwindcss());
  });
};
