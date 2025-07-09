<script setup lang="ts"></script>

<template>
  <LayoutPage page-title="Dashboard">
    <div class="grid grid-cols-2 gap-2">
      <!-- Custom Perios -->
      <StatsCustomPeriod class="col-span-2" />

      <!-- Summery Card -->
      <HomeSummery class="col-span-2 pt-0" />

      <!-- CAD Income & Transfer Fees Card -->
      <!-- <HomeExchangeRate />
      <HomeTransferFees /> -->

      <!-- Spending Analysis Card -->
      <HomeSpendingAnalysis class="col-span-2" />

      <!-- Exchange Rate Trend Card -->
      <HomeExchangeRateTrend class="col-span-2" />
    </div>
  </LayoutPage>
</template>
