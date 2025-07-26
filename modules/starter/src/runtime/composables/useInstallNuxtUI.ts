import type { Nuxt } from "nuxt/schema";
import type { Resolver } from "@nuxt/kit";
import { dirname, resolve } from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

export const useInstallNuxtUI = async (
  nuxt: Nuxt,
  resolver: {
    rootResolver: Resolver;
    starterPath: string;
  }
) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // nuxt.options.alias ||= {};
  // nuxt.options.alias["@nuxt-starter/ui"] = resolve(__dirname, "./../ui.css");

  // check if file exists and if not create it with createFileSync

  const cssPath = resolver.rootResolver.resolve(resolver.starterPath, "ui.css");

  // check if file exists
  if (!fs.existsSync(cssPath)) {
    // create the file with the default content
    // fs.writeFileSync(cssPath, "@import '@nuxt-starter/ui';\n");
    fs.writeFileSync(cssPath, "@import 'tailwindcss';\n@import '@nuxt/ui';\n");

    console.log(`Created ${cssPath} file. Please add your NuxtUI Config here.`);
  }

  nuxt.options.css.push(cssPath);
};
