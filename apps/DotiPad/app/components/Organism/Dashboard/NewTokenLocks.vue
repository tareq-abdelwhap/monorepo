<script lang="ts" setup>
const { t } = useI18n();
const newTokenLocks = ref([
  {
    title: t('dashboard.newTokenLocks.ethereumMainet'),
    svg: 'Ethereum',
    subTitle: `(${t('tokens', { count: useNumberFormat(135, false) })})`,
    body: [
      {
        svg: 'Link',
        tokenName: 'Link (Link)',
        tokenSubName: `Pairs index: 58292`,
        tokenLocked: useNumberFormat(2_000_000_000, false),
        tokenLockedPercentage: 15,
      },
      {
        svg: 'Rune.png',
        tokenName: 'RUNE (RUNE)',
        tokenSubName: `Pairs index: 32`,
        tokenLocked: useNumberFormat(12_000_000, false),
        tokenLockedPercentage: 40,
      },
      {
        svg: 'Beefy',
        tokenName: 'Beefy.finance (BIFI)',
        tokenSubName: `Pairs index: 223`,
        tokenLocked: useNumberFormat(6_000_000, false),
        tokenLockedPercentage: 10,
      },
    ],
  },
  {
    title: t('dashboard.newTokenLocks.binanceSmartChain'),
    svg: 'BNBChain',
    subTitle: `(${t('tokens', { count: useNumberFormat(50, false) })})`,
    body: [
      {
        svg: 'Ellipsis.png',
        tokenName: 'Ellipsis (EPS)',
        tokenSubName: `Pairs index: 58292`,
        tokenLocked: useNumberFormat(150_000_000, false),
        tokenLockedPercentage: 15,
      },
      {
        svg: 'Nevre.png',
        tokenName: 'Nevre Finance (NRV)',
        tokenSubName: `Pairs index: 92`,
        tokenLocked: useNumberFormat(8_200_000, false),
        tokenLockedPercentage: 24,
      },
      {
        svg: 'Alpaca.png',
        tokenName: 'Alpaca (ALPACA)',
        tokenSubName: `Pairs index: 223`,
        tokenLocked: useNumberFormat(10_000_000_000, false),
        tokenLockedPercentage: 90,
      },
    ],
  },
  {
    title: t('dashboard.newTokenLocks.maticChain'),
    svg: 'Polygon',
    subTitle: `(${t('tokens', { count: useNumberFormat(12, false) })})`,
    body: [
      {
        svg: 'Quickswap.png',
        tokenName: 'Quickswap (QUICK)',
        tokenSubName: `Pairs index: 58292`,
        tokenLocked: useNumberFormat(2_000_000_000, false),
        tokenLockedPercentage: 15,
      },
      {
        svg: 'Aave.png',
        tokenName: 'Aave (AAVE)',
        tokenSubName: `Pairs index: 92`,
        tokenLocked: useNumberFormat(12_000_000, false),
        tokenLockedPercentage: 40,
      },
      {
        svg: 'USDCoin',
        tokenName: 'USD Coin (USDC)',
        tokenSubName: `Pairs index: 223`,
        tokenLocked: useNumberFormat(6_000_000, false),
        tokenLockedPercentage: 10,
      },
    ],
  },
  {
    title: t('dashboard.newTokenLocks.xDaiChain'),
    svg: 'XDai',
    subTitle: `(${t('tokens', { count: useNumberFormat(50, false) })})`,
    body: [
      {
        svg: 'Honeyswap.png',
        tokenName: 'Honeyswap (HONEY)',
        tokenSubName: `Pairs index: 58292`,
        tokenLocked: useNumberFormat(150_000_000, false),
        tokenLockedPercentage: 15,
      },
      {
        svg: 'Sushiswap',
        tokenName: 'Sushiswap (SUSHI)',
        tokenSubName: `Pairs index: 92`,
        tokenLocked: useNumberFormat(8_200_000, false),
        tokenLockedPercentage: 24,
      },
      {
        svg: 'AMB',
        tokenName: 'AMB (AMB)',
        tokenSubName: `Pairs index: 223`,
        tokenLocked: useNumberFormat(10_000_000_000, false),
        tokenLockedPercentage: 90,
      },
    ],
  },
]);
</script>

<template>
  <div class="grid grid-cols-2 gap-y-6 gap-x-8">
    <!-- Header -->
    <div class="col-span-2">
      <AtomHeader
        :level="6"
        class="text-nun-h6 font-bold"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { duration: 100 },
        }"
      >
        {{ $t('dashboard.newTokenLocks.title') }}
      </AtomHeader>
    </div>

    <!-- Cards -->
    <MoleculeNewTokenLocksCard
      v-for="(item, idx) in newTokenLocks"
      :key="item.svg"
      :token-lock="item"
      v-motion
      :initial="{
        opacity: 0,
        x: idx % 2 === 0 ? 50 : -50,
      }"
      :visible="{
        opacity: 1,
        x: 0,
        transition: { duration: 500, delay: idx * 50 },
      }"
    />
  </div>
</template>

<style scoped></style>
