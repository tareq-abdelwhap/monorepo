import type { Nuxt } from "nuxt/schema";
import type { ModuleOptions } from "../types";
import type { Resolver } from "@nuxt/kit";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import fs from "node:fs";

export const useInstallTailwindcss = async (
  nuxt: Nuxt,
  resolver: {
    moduleResolver: Resolver;
    rootResolver: Resolver;
    starterPath: string;
  },
  tailwindcssConfig: ModuleOptions["tailwindcss"]
) => {
  nuxt.options.alias ||= {};
  nuxt.options.alias["@nuxt-starter/tailwincss"] = resolve(
    __dirname,
    "./../src/runtime/tailwind.css"
  );
  console.log(__dirname);

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
