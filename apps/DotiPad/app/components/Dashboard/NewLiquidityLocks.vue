<script lang="ts" setup>
const { t } = useI18n();
const newLiquidityLocksHeaders = ref([
  { name: 'pairs', title: t('dashboard.newLiquidityLocks.pairs') },
  { name: 'liquidity', title: t('dashboard.newLiquidityLocks.liquidity') },
  { name: 'locked', title: t('dashboard.newLiquidityLocks.locked') },
  { name: 'unlockDate', title: t('dashboard.newLiquidityLocks.unlockDate') },
  { name: 'view', title: '' },
]);

const newLiquidityLocks = ref([
  {
    pairs: 'EPS / BUSD',
    liquidity: useNumberFormat(5_492_202.5),
    locked: [useNumberFormat(2_196_881), 40],
    unlockDate: 'Next in 4 months',
    view: '',
  },
  {
    pairs: 'NRV / BNB',
    liquidity: useNumberFormat(529_612.85),
    locked: [useNumberFormat(317_767.71), 60],
    unlockDate: 'Next in 9 months',
    view: '',
  },
  {
    pairs: 'ALPACA / WBNB',
    liquidity: useNumberFormat(211_632.73),
    locked: [useNumberFormat(211_632.73), 100],
    unlockDate: 'Next in 12 months',
    view: '',
  },
  {
    pairs: 'TKO / BUSD',
    liquidity: useNumberFormat(2_262_683.22),
    locked: [useNumberFormat(2_224_217.61), 98.3],
    unlockDate: 'Next in a year',
    view: '',
  },
  {
    pairs: 'SAFEMOON / BNE',
    liquidity: useNumberFormat(8_619_005_291),
    locked: [useNumberFormat(7_757_104.762), 90],
    unlockDate: 'Next in 2 years',
    view: '',
  },
]);
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Header -->
    <h6
      class="text-nun-h6 font-bold"
      v-text="$t('dashboard.newLiquidityLocks.title')"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: { duration: 100 },
      }"
    />

    <!-- Cards -->
    <DashboardCard
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
    >
      <template #default>
        <div class="grid grid-cols-5">
          <!-- Header -->
          <div
            v-for="(header, idx) in newLiquidityLocksHeaders"
            :key="header.name"
            :class="[
              'p-4 border-b border-neutral-gray-22',
              idx && 'text-end',
              !idx && 'text-start',
            ]"
          >
            <span class="text-nun-regular font-bold" v-text="header.title" />
          </div>

          <!-- Body -->
          <template v-for="item in newLiquidityLocks" :key="item.pairs">
            <div
              v-for="(header, idx) in newLiquidityLocksHeaders"
              :class="[
                'flex items-center py-2 px-4 border-b border-neutral-gray-22',
                idx && 'justify-end',
              ]"
            >
              <AtomButton
                v-if="header.name === 'view'"
                class="!bg-neutral-gray-22"
              >
                <span
                  class="bg-gradient-3 bg-clip-text text-transparent"
                  v-text="$t('view')"
                />
              </AtomButton>

              <span
                v-else-if="typeof item[header.name] === 'string'"
                :class="['text-nun-sm', !idx && 'font-bold']"
                v-text="item[header.name]"
              />

              <div v-else class="flex flex-col">
                <span class="text-nun-sm" v-text="item[header.name][0]" />
                <div class="flex items-center gap-1 justify-end">
                  <AtomPieChart
                    :percentage="item[header.name][1]"
                    class="w-4 h-4"
                  />
                  <span
                    class="text-nun-sx text-success-green-5"
                    v-text="`${item[header.name][1]}%`"
                  />
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-center gap-2">
          <span
            class="text-nun-sm font-bold bg-gradient-3 bg-clip-text text-transparent"
            v-text="$t('viewAll')"
          />
          <span
            class="icon-[material-symbols--keyboard-arrow-right] rtl:rotate-180 w-6 h-6 bg-gradient-3 bg-clip-content text-transparent"
          />
        </div>
      </template>
    </DashboardCard>
  </div>
</template>

<style scoped></style>
