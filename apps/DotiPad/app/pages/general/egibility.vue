<script setup lang="ts">
const walletStore = useWalletStore();
</script>

<template>
  <OrganismPage>
    <template #header>
      <AtomHeader :level="4" class="text-nun-h4">
        {{ $t('egibility.status') }}:
        <AtomText
          v-if="!!walletStore.getSelectedWallet()"
          class="text-success-green-6"
          :text="$t('egibility.eligible')"
        />
        <AtomText
          v-else
          class="text-error-red-6"
          :text="$t('egibility.notEligible')"
        />
      </AtomHeader>
    </template>

    <div class="flex flex-col gap-14">
      <MoleculeCard
        class="!w-fit"
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-4 z-0">
            <AtomText
              class="text-nun-h6"
              :text="$t('egibility.howToGetWhitelisted')"
            />

            <AtomButton
              class="gradient-outline-3 w-fit"
              :label="$t('egibility.learnMore')"
            />
          </div>

          <div class="flex gap-10">
            <div class="flex flex-col gap-4">
              <AtomText
                class="text-nun-h6"
                :text="$t('egibility.tokenEquivalence')"
              />

              <div class="flex flex-col gap-2">
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`1 LP (Uniswap) = 100 DOT`"
                />
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`1 LP (PancakeSwap) = 20 DOT`"
                />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <AtomText
                class="text-nun-h6"
                :text="$t('egibility.noCoolDownPeriod')"
              />

              <div class="flex flex-col gap-2">
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`Wallets with balance >= 30,000 DOT`"
                />
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`To bypass the cool down period hold 30,000+ DOT`"
                />
              </div>
            </div>
          </div>
        </div>
      </MoleculeCard>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <AtomText
            class="text-nun-sm text-neutral-gray-8"
            :text="$t('egibility.lastCheckedAt', { at: new Date() })"
          />
          <AtomText
            class="font-bold"
            :text="$t('egibility.lastCheckedAbout', { about: `20 hours ago` })"
          />
        </div>

        <div class="flex flex-wrap gap-6">
          <MoleculeCard
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
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`Your DOT Holding`"
                />
                <AtomText
                  class="text-neutral-gray-8"
                  :text="`(on Ethereum chain)`"
                />
              </div>

              <AtomText
                class="text-nun-h5 font-bold bg-gradient-3 bg-clip-text text-transparent"
                :text="`${
                  !!walletStore.getSelectedWallet()
                    ? useNumberFormat(3557.528, false)
                    : 0
                } DOT`"
              />
            </div>
          </MoleculeCard>
        </div>
      </div>
    </div>
  </OrganismPage>
</template>

<style scoped></style>
