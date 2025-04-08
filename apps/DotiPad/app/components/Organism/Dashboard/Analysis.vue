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
    <MoleculeCard
      class="col-span-2"
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <AtomImage src="/imgs/logo.png" class="w-10 h-10" />
            <AtomText
              class="text-nun-regular font-bold"
              :text="$t('dashboard.dot')"
            />
          </div>

          <div class="flex items-center gap-2">
            <AtomText class="text-nun-sm" :text="$t('dashboard.buyDotOn')" />

            <div
              class="flex items-center gap-1 rounded-full bg-neutral-gray-22 py-1 px-2"
            >
              <AtomSVG name="Pancakeswap" class="w-4 h-4" />
              <AtomText
                class="text-nun-sx"
                :text="$t('dashboard.pancakeswap')"
              />
            </div>

            <div
              class="flex items-center gap-1 rounded-full bg-neutral-gray-22 py-1 px-2"
            >
              <AtomSVG name="Uniswap" class="w-4 h-4" />
              <AtomText class="text-nun-sx" :text="$t('dashboard.uniswap')" />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 z-0">
            <AtomButton
              class="!bg-neutral-gray-22 !rounded-2xl h-10 gradient-outline-3"
            >
              <AtomImage src="/imgs/logo.png" class="w-6 h-6" />
              <div class="flex items-center gap-2 text-nun-sm font-bold">
                <AtomText :text="'DOT'.toUpperCase()" />
                <AtomText :text="'|'" />
                <AtomText :text="useNumberFormat(320)" />
              </div>
            </AtomButton>

            <AtomButton class="!bg-neutral-gray-22 !rounded-2xl h-10">
              <AtomImage src="/imgs/logo2.png" class="w-6 h-6" />
              <div class="flex items-center gap-2 text-nun-sm font-bold">
                <AtomText :text="'IPAD'.toUpperCase()" />
                <AtomText :text="'|'" />
                <AtomText :text="useNumberFormat(22)" />
              </div>
            </AtomButton>
          </div>

          <!-- Charts by TradingView -->
          <div class="flex items-center gap-2 z-0">
            <AtomText
              class="text-neutral-gray-8 text-nun-sm"
              :text="$t('dashboard.chartByTradingView')"
            />
          </div>
        </div>
      </template>
    </MoleculeCard>

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
        <AtomSVG :name="service.svg" class="w-8 h-8" />
        <AtomText :text="service.name" />
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped></style>
