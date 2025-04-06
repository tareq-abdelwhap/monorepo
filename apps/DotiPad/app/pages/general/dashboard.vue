<script setup lang="ts">
definePageMeta({
  alias: ['/', '/dashboard'],
});
</script>

<template>
  <LayoutPage :header="$t('menu.general.dashboard')">
    <div class="flex flex-col gap-12">
      <DashboardAnalysis />

      <DashboardNewTokenLocks />

      <DashboardNewLiquidityLocks />

      <DashboardNewLiquidityLocks />
    </div>
  </LayoutPage>
</template>

<style scoped></style>
