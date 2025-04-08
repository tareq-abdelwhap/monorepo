<script setup lang="ts">
definePageMeta({
  alias: ['/', '/dashboard'],
});
</script>

<template>
  <OrganismPage :header="$t('menu.general.dashboard')">
    <div class="flex flex-col gap-12">
      <OrganismDashboardAnalysis />

      <OrganismDashboardNewTokenLocks />

      <OrganismDashboardNewLiquidityLocks />

      <OrganismDashboardNewLiquidityLocks />
    </div>
  </OrganismPage>
</template>

<style scoped></style>
