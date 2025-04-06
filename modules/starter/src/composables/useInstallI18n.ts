import { installModule, type Resolver } from "@nuxt/kit";
import type { ModuleOptions } from "../types";
import type { LocaleObject } from "@nuxtjs/i18n";
import type { Nuxt } from "nuxt/schema";

export const useInstallI18n = async (
  nuxt: Nuxt,
  reslover: {
    rootResolver: Resolver;
    starterPath: string;
  },
  i18n: ModuleOptions["i18n"]
) => {
  nuxt.hook("i18n:registerModule", (register) => {
    i18n.restructureDir = reslover.rootResolver.resolve(
      reslover.starterPath,
      i18n.restructureDir
    );

    i18n.langDir = reslover.rootResolver.resolve(
      i18n.restructureDir,
      i18n.langDir
    );

    i18n.locales = i18n.locales?.map((locale: LocaleObject<string>) => {
      if (locale.file) {
        if (typeof locale.file === "string") {
          locale.file = reslover.rootResolver.resolve(
            i18n.langDir,
            locale.file
          );
        } else {
          locale.file.path = reslover.rootResolver.resolve(
            i18n.langDir,
            locale.file.path
          );
        }
      }
      if (Array.isArray(locale.files)) {
        locale.files = locale.files.map((file) => {
          if (typeof file === "string") {
            return reslover.rootResolver.resolve(i18n.langDir, file);
          } else {
            return {
              ...file,
              path: reslover.rootResolver.resolve(i18n.langDir, file.path),
            };
          }
        });
      }
      return locale;
    });

    register({ langDir: i18n.langDir, locales: i18n.locales });
  });

  await installModule("@nuxtjs/i18n", i18n);
};
