import { installModule } from "@nuxt/kit";
import type { Resolver } from "@nuxt/kit";
import type { ModuleOptions } from "../../types";
import type { LocaleObject } from "@nuxtjs/i18n";
import type { Nuxt } from "nuxt/schema";
import fs from "node:fs";

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
      i18n.restructureDir as string
    );

    i18n.langDir = reslover.rootResolver.resolve(
      i18n.restructureDir,
      i18n.langDir as string
    );

    // console.log("i18n.locales", i18n.locales);

    i18n.locales = (i18n.locales as LocaleObject<string>[] | undefined)?.map(
      (locale: LocaleObject<string>) => {
        if (locale.file) {
          if (typeof locale.file === "string") {
            locale.file = reslover.rootResolver.resolve(
              i18n.langDir as string,
              locale.file
            );
          } else {
            locale.file.path = reslover.rootResolver.resolve(
              i18n.langDir as string,
              locale.file.path
            );
          }
        }
        if (Array.isArray(locale.files)) {
          locale.files = locale.files.map((file) => {
            if (typeof file === "string") {
              return reslover.rootResolver.resolve(
                i18n.langDir as string,
                file
              );
            } else {
              return {
                ...file,
                path: reslover.rootResolver.resolve(
                  i18n.langDir as string,
                  file.path
                ),
              };
            }
          }) as LocaleObject<string>["files"];
        }
        return locale;
      }
    );

    if (
      !fs.existsSync(
        reslover.rootResolver.resolve(reslover.starterPath, "i18n")
      )
    ) {
      fs.mkdirSync(
        reslover.rootResolver.resolve(reslover.starterPath, "i18n"),
        { recursive: true }
      );
      fs.mkdirSync(
        reslover.rootResolver.resolve(reslover.starterPath, "i18n/locales"),
        { recursive: true }
      );

      // create the file with the default content
      fs.writeFileSync(
        reslover.rootResolver.resolve(
          reslover.starterPath,
          "i18n/i18n.config.ts"
        ),
        `export default defineI18nConfig(() => ({ legacy: false, locale: 'en', fallbackLocale: 'en', globalInjection: true }));`
      );

      if (i18n.locales?.length) {
        i18n.locales?.forEach(({ code }) => {
          fs.writeFileSync(
            reslover.rootResolver.resolve(
              reslover.starterPath,
              `i18n/locales/${code}.ts`
            ),
            `export default defineI18nLocale(async () => ({}));`
          );
        });
      } else {
        fs.writeFileSync(
          reslover.rootResolver.resolve(
            reslover.starterPath,
            "i18n/locales/en.ts"
          ),
          `export default defineI18nLocale(async () => ({}));`
        );
      }

      console.log(
        `Created ${reslover.rootResolver.resolve(
          reslover.starterPath,
          "i18n"
        )} directory. Please edit your i18n config in here.`
      );
    }

    register({ langDir: i18n.langDir, locales: i18n.locales });
  });

  await installModule("@nuxtjs/i18n", i18n);
};
