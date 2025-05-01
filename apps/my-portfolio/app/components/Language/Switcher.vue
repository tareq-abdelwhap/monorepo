<script lang="ts" setup>
const { locale, locales } = useI18n();

type Locale = (typeof locales.value)[number];

const switchLocale = useSwitchLocalePath();

const availableLocale = computed(() => locales.value.find(i => i.code !== locale.value) as Locale);

const currentLocale = computed(() => locales.value.find(l => l.code === locale.value) as Locale);

useHead({
  htmlAttrs: {
    dir: currentLocale.value.dir || 'ltr',
  },
});
</script>

<template>
  <div>
    <nuxt-link
      :class="['flex gap-1 text-center px-3 py-1.5 rounded-full', 'bg-white bg-opacity-5 backdrop-blur-md shadow-lg']"
      :to="switchLocale(availableLocale.code)"
    >
      <div
        :class="[
          'cursor-pointer rounded-full',
          'hover:text-slate-300 w-12 h-5',
          'transition-[color transform] duration-200 ease-in-out',
          'flex items-center justify-center',
          'text-slate-300 text-sm bg-primary bg-opacity-10 backdrop-blur-md shadow-lg scale-110',
        ]"
      >
        {{ availableLocale.code.toLowerCase() }}
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped></style>
