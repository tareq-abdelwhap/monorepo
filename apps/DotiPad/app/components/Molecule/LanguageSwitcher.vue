<script lang="ts" setup>
const { locale, locales } = useI18n();

const otherLocale = computed(() =>
  locales.value.find(l => l.code !== locale.value)
);

const i18nHead = useLocaleHead();
useHead(() => ({
  htmlAttrs: {
    dir: i18nHead.value.htmlAttrs!.dir,
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}));
</script>

<template>
  <SwitchLocalePathLink
    :locale="otherLocale!.code"
    class="flex items-center text-main-black-text text-sans-h5"
  >
    <slot :locale="otherLocale">
      <AtomIcon
        v-if="otherLocale?.code === 'en'"
        name="icon-[circle-flags--lang-en]"
        class="w-8 h-8"
      />
      <AtomIcon v-else name="icon-[circle-flags--lang-ar]" class="w-8 h-8" />
    </slot>
  </SwitchLocalePathLink>
</template>

<style scoped></style>
