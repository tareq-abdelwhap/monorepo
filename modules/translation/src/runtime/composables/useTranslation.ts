import { computed, useCookie, useRuntimeConfig } from "#imports";
import type { ModuleOptions } from "~/src/types";

export default () => {
  const config = useRuntimeConfig();
  const translation = config.public.translation as ModuleOptions;
  const locale = useCookie("defaultLocale");
  const { locales } = translation;

  locale.value ||= translation.defaultLocale;

  const messages = computed(
    () => translation.messages?.[locale.value as string]
  );

  return { locale, locales, messages };
};
