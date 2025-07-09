<script lang="ts" setup>
const financeStore = useFinanceStore();
const { exchangeRate } = storeToRefs(financeStore);
</script>

<template>
  <BaseCard title="Exchange Rate">
    <span class="text-lg font-semibold" v-text="exchangeRate.leatest" />
    <span
      class="text-xs text-gray-500"
      v-text="`Avg: ${exchangeRate.average}`"
    />
  </BaseCard>
</template>

<style scoped></style>
