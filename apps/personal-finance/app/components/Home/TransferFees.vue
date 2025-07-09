<script lang="ts" setup>
const financeStore = useFinanceStore();
const { transferFees } = storeToRefs(financeStore);
</script>

<template>
  <BaseCard title="Transfer Fees">
    <span class="text-lg font-semibold" v-text="transferFees.amount" />
    <span
      class="text-xs text-gray-500"
      v-text="`Avg percentage: ${transferFees.percentage}%`"
    />
  </BaseCard>
</template>

<style scoped></style>
