import { defineNuxtPlugin } from "#imports";
import useTranslation from "../composables/useTranslation";

export default defineNuxtPlugin(async () => {
  const { messages } = useTranslation();

  const t = (key: string): string => {
    if (key.includes(".")) {
      const parts = key.split(".");
      return (
        (parts.reduce((acc, part) => acc[part], messages.value) as string) ||
        key
      );
    }

    return messages.value[key] || key;
  };

  return {
    provide: { t },
  };
});
