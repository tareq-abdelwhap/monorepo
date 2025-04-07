<script setup lang="ts">
const walletStore = useWalletStore();
</script>

<template>
  <LayoutPage>
    <template #header>
      <h4 class="text-nun-h4">
        {{ $t('egibility.status') }}:
        <span
          v-if="!!walletStore.getSelectedWallet()"
          class="text-success-green-6"
          v-text="$t('egibility.eligible')"
        />
        <span
          v-else
          class="text-error-red-6"
          v-text="$t('egibility.notEligible')"
        />
      </h4>
    </template>

    <div class="flex flex-col gap-14">
      <DashboardCard
        class="!w-fit"
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-4 z-0">
            <span
              class="text-nun-h6"
              v-text="$t('egibility.howToGetWhitelisted')"
            />

            <AtomButton
              class="gradient-outline-3 w-fit"
              :label="$t('egibility.learnMore')"
            />
          </div>

          <div class="flex gap-10">
            <div class="flex flex-col gap-4">
              <span
                class="text-nun-h6"
                v-text="$t('egibility.tokenEquivalence')"
              />

              <div class="flex flex-col gap-2">
                <span
                  class="text-neutral-gray-8"
                  v-text="`1 LP (Uniswap) = 100 DOT`"
                />
                <span
                  class="text-neutral-gray-8"
                  v-text="`1 LP (PancakeSwap) = 20 DOT`"
                />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <span
                class="text-nun-h6"
                v-text="$t('egibility.noCoolDownPeriod')"
              />

              <div class="flex flex-col gap-2">
                <span
                  class="text-neutral-gray-8"
                  v-text="`Wallets with balance >= 30,000 DOT`"
                />
                <span
                  class="text-neutral-gray-8"
                  v-text="`To bypass the cool down period hold 30,000+ DOT`"
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span
            class="text-nun-sm text-neutral-gray-8"
            v-text="$t('egibility.lastCheckedAt', { at: new Date() })"
          />
          <span
            class="font-bold"
            v-text="$t('egibility.lastCheckedAbout', { about: `20 hours ago` })"
          />
        </div>

        <div class="flex flex-wrap gap-6">
          <DashboardCard
            class="!w-fit min-w-80"
            v-for="(_, idx) in 4"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: idx * 100 },
            }"
          >
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-neutral-gray-8" v-text="`Your DOT Holding`" />
                <span
                  class="text-neutral-gray-8"
                  v-text="`(on Ethereum chain)`"
                />
              </div>

              <span
                class="text-nun-h5 font-bold bg-gradient-3 bg-clip-text text-transparent"
                v-text="
                  `${
                    !!walletStore.getSelectedWallet()
                      ? useNumberFormat(3557.528, false)
                      : 0
                  } DOT`
                "
              />
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  </LayoutPage>
</template>

<style scoped></style>
