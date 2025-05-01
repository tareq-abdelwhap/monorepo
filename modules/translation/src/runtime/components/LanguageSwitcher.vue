<script lang="ts" setup>
import useTranslation from "../composables/useTranslation";
const { locale, locales } = useTranslation();
</script>

<template>
  <USelectMenu
    v-model="locale"
    :options="locales"
    value-attribute="name"
    option-attribute="name"
  />
</template>

<style scoped></style>
