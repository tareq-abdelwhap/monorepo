<script lang="ts" setup>
const financeStore = useFinanceStore();
const { period, periods } = storeToRefs(financeStore);

watch(
  () => period.value,
  (val, old, onCleanup) => {
    const timeout = setTimeout(() => financeStore.fetchSummery(), 500);
    onCleanup(() => clearTimeout(timeout));
  }
);
</script>

<template>
  <ion-segment v-model="period" mode="ios" class="p-1">
    <ion-segment-button
      v-for="{ value, name } in periods"
      :key="value"
      :value="value"
    >
      <ion-label>{{ name }}</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<style scoped>
ion-segment-button::part(indicator-background) {
  background: var(--color-purple-800);
}

/* ion-segment {
  --background: #120829;
  --color: #000;
} */
</style>
