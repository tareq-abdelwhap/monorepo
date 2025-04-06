<script lang="ts" setup>
const services = ref([
  { name: 'ILO', svg: 'Ilo', route: '/browser/ilo' },
  {
    name: 'Token Minter',
    svg: 'TokenMinter',
    route: '/services/owner-developer/token-minter',
  },
  {
    name: 'Token Locker',
    svg: 'TokenLocker',
    route: '/services/owner-developer/token-locker',
  },
  {
    name: 'Liquidity Locker',
    svg: 'LiquidityLocker',
    route: '/services/owner-developer/liquidity-locker',
  },
  {
    name: 'Create ILO',
    svg: 'CreateIlo',
    route: '/services/owner-developer/create-ilo',
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <DashboardCard
      class="col-span-2"
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <BaseImage src="/imgs/logo.png" class="w-10 h-10" />
            <span
              class="text-nun-regular font-bold"
              v-text="$t('dashboard.dot')"
            />
          </div>

          <div class="flex items-center gap-2">
            <span class="text-nun-sm" v-text="$t('dashboard.buyDotOn')" />

            <div
              class="flex items-center gap-1 rounded-full bg-neutral-gray-22 py-1 px-2"
            >
              <SVG name="Pancakeswap" class="w-4 h-4" />
              <span class="text-nun-sx" v-text="$t('dashboard.pancakeswap')" />
            </div>

            <div
              class="flex items-center gap-1 rounded-full bg-neutral-gray-22 py-1 px-2"
            >
              <SVG name="Uniswap" class="w-4 h-4" />
              <span class="text-nun-sx" v-text="$t('dashboard.uniswap')" />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 z-0">
            <BaseButton
              class="!bg-neutral-gray-22 !rounded-2xl h-10 gradient-outline-3"
            >
              <BaseImage src="/imgs/logo.png" class="w-6 h-6" />
              <div class="flex items-center gap-2 text-nun-sm font-bold">
                <span v-text="'DOT'.toUpperCase()" />
                <span v-text="'|'" />
                <span v-text="useNumberFormat(320)" />
              </div>
            </BaseButton>

            <BaseButton class="!bg-neutral-gray-22 !rounded-2xl h-10">
              <BaseImage src="/imgs/logo2.png" class="w-6 h-6" />
              <div class="flex items-center gap-2 text-nun-sm font-bold">
                <span v-text="'IPAD'.toUpperCase()" />
                <span v-text="'|'" />
                <span v-text="useNumberFormat(22)" />
              </div>
            </BaseButton>
          </div>

          <!-- Charts by TradingView -->
          <div class="flex items-center gap-2 z-0">
            <span
              class="text-neutral-gray-8 text-nun-sm"
              v-text="$t('dashboard.chartByTradingView')"
            />
          </div>
        </div>
      </template>
    </DashboardCard>

    <div class="flex flex-col gap-4">
      <NuxtLinkLocale
        v-for="(service, idx) in services"
        :key="service.name"
        :to="service.route"
        class="bg-neutral-gray-23 rounded-2xl w-full py-4 px-6 flex items-center gap-4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: idx * 50 },
        }"
      >
        <SVG :name="service.svg" class="w-8 h-8" />
        <span v-text="service.name" />
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped></style>
