<script setup lang="ts">
import { BaseButton, DashboardCard } from '#components';

const { t } = useI18n();
const dropdownValue = ref('');
const tabs = ref([t('browser.allTokens'), t('browser.watchlist')]);

const tableData = ref([
  { token: 'BNB', price: 1000, volume: 12000 },
  { token: 'BNB', price: 2000, volume: 11000 },
  { token: 'TWO', price: 3000, volume: 10000 },
  { token: 'Three', price: 4000, volume: 9000 },
  { token: 'FOUR', price: 5000, volume: 8000 },
  { token: 'FIVE', price: 6000, volume: 7000 },
  { token: 'TWO', price: 7000, volume: 6000 },
  { token: 'adsfasdf', price: 8000, volume: 5000 },
  { token: 'vvvv', price: 9000, volume: 4000 },
  { token: 'bsdfb', price: 10000, volume: 3000 },
  { token: 'acczxw', price: 11000, volume: 2000 },
  { token: 'saduuvu', price: 12000, volume: 1000 },
]);

const tableHeaders = computed(() => {
  if (tableData.value[0]) return Object.keys(tableData.value[0]);
  return [];
});
</script>

<template>
  <LayoutPage :header="$t('menu.browser.pairs')">
    <div class="flex flex-col gap-20">
      <!-- DropDown and Tabs -->
      <div class="grid grid-cols-3 items-start gap-10">
        <BaseDropdown
          :items="['PancakeSwap V1', 'PancakeSwap V2']"
          :placeholder="$t('browser.selectExchange')"
          v-model="dropdownValue"
          clear-value
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        />

        <DashboardCard
          class="col-span-2"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col items-center gap-4">
              <span
                class="text-nun-h6 font-bold"
                v-text="`${useNumberFormat(169.01)}M`"
              />

              <span
                class="text-nun-sm text-neutral-gray-8"
                v-text="$t('browser.totalValueLockedInPairs', { count: 2234 })"
              />
            </div>

            <BaseButton class="!bg-neutral-gray-22">
              <span
                class="bg-gradient-3 bg-clip-text text-transparent"
                v-text="$t('browser.lockWithdrawLiquidity')"
              />
            </BaseButton>
          </div>
        </DashboardCard>
      </div>

      <!-- Data Table -->
      <BaseDataTable
        :headers="tableHeaders"
        :data="tableData"
        :control="{ filter: false, search: true, sort: true, pagination: true }"
      />
    </div>
  </LayoutPage>
</template>

<style scoped></style>
