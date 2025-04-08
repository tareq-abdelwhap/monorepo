<script lang="ts" setup>
const socialMediaIcons = ref([
  { name: 'twitter', svg: 'Twitter' },
  { name: 'telegram', svg: 'Telegram' },
  { name: 'gitbook', svg: 'Gitbook' },
  { name: 'medium', svg: 'Medium' },
]);

const showNetworkModal = ref(false);
const networkStore = useNetworkStore();

const showWalletModal = ref(false);
const walletStore = useWalletStore();
</script>

<template>
  <header
    :class="[
      'flex sticky top-0 items-center justify-between px-8 py-2 z-50',
      'bg-neutral-gray-24 border-b-2 border-b-neutral-gray-22',
    ]"
  >
    <!-- Social Media Icons -->
    <div class="flex items-center gap-4">
      <AtomSVG
        v-for="{ name, svg } in socialMediaIcons"
        :key="name"
        :name="svg"
        class="w-6 h-6 cursor-pointer"
      />
    </div>

    <!-- Wallet Buttons -->
    <div class="flex items-center gap-4 py-3">
      <AtomButton
        @click="() => (showNetworkModal = true)"
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 500 } }"
      >
        <AtomSVG
          :name="networkStore.getSelectedNetwork().svg"
          class="w-6 h-6"
        />

        <AtomText :text="networkStore.getSelectedNetwork().shortName" />
      </AtomButton>

      <AtomButton
        @click="() => (showWalletModal = true)"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        :label="$t('header.connectWallet')"
        :class="[
          !walletStore.getSelectedWallet() && '!bg-gradient-3 !rounded-2xl',
        ]"
      >
        <div
          v-if="walletStore.getSelectedWallet()"
          class="flex items-center gap-2 text-nun-regular font-bold"
        >
          <div
            :class="[
              'flex items-center gap-1',
              'bg-gradient-3 bg-clip-text text-transparent',
            ]"
          >
            <AtomText
              :text="
                useNumberFormat(walletStore.getSelectedWallet().balance, false)
              "
            />
            <AtomText :text="walletStore.getSelectedWallet().shortName" />
          </div>

          <AtomText :text="'|'" />

          <AtomText
            :text="
              useShortenText(
                walletStore.getSelectedWallet().token
              ).toUpperCase()
            "
          />
        </div>
      </AtomButton>
    </div>

    <MoleculeModal
      v-model="showNetworkModal"
      :header="$t('header.selectNetwork')"
    >
      <template #default="{ close }">
        <div class="flex flex-col gap-4">
          <div
            v-for="network in networkStore.getNetworks()"
            :key="network.shortName"
            :class="[
              'flex items-center gap-4',
              'py-4 px-6 rounded-2xl',
              'bg-neutral-gray-23',
              'cursor-pointer',
              networkStore.getSelectedNetwork().shortName ===
                network.shortName && 'gradient-outline-3',
              'hover:gradient-outline-3',
            ]"
            @click="
              () => [
                networkStore.setSelectedNetwork(network.shortName),
                close(),
              ]
            "
          >
            <AtomSVG :name="network.svg" class="w-10 h-10" />
            <AtomText
              :class="[
                'text-nun-h6 font-bold',
                networkStore.getSelectedNetwork().shortName ===
                  network.shortName &&
                  'bg-gradient-3 bg-clip-text text-transparent',
              ]"
              :text="network.name"
            />
          </div>
        </div>
      </template>
    </MoleculeModal>

    <MoleculeModal
      v-model="showWalletModal"
      :header="$t('header.connectWallet')"
    >
      <template #default="{ close }">
        <div class="flex flex-col gap-4">
          <div
            v-for="wallet in walletStore.getWallets()"
            :key="wallet.shortName"
            :class="[
              'flex items-center gap-4',
              'py-4 px-6 rounded-2xl',
              'bg-neutral-gray-23',
              'cursor-pointer',
              walletStore.getSelectedWallet()?.shortName === wallet.shortName &&
                'gradient-outline-3',
              'hover:gradient-outline-3',
            ]"
            @click="
              () => [walletStore.setSelectedWallet(wallet.shortName), close()]
            "
          >
            <AtomSVG :name="wallet.svg" class="w-10 h-10" />
            <AtomText
              :class="[
                'text-nun-h6 font-bold',
                walletStore.getSelectedWallet()?.shortName ===
                  wallet.shortName &&
                  'bg-gradient-3 bg-clip-text text-transparent',
              ]"
              :text="wallet.name"
            />
          </div>
        </div>
      </template>
    </MoleculeModal>
  </header>
</template>

<style scoped></style>
