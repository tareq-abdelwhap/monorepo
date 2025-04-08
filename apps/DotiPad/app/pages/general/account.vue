<script setup lang="ts">
const walletStore = useWalletStore();

const copy = (text: string) => navigator.clipboard.writeText(text);

const showLoginModal = ref(false);
const activeTab = ref(0);
const tabs = ref(['With a Wallet', 'With a Password']);

const showCreateAccountModal = ref(false);
const loginWithPassword = ref({ username: '', password: '' });

watch(
  () => activeTab.value,
  () => {
    loginWithPassword.value = { username: '', password: '' };
  }
);

const createAccount = ref({ username: '' });
</script>

<template>
  <OrganismPage :header="$t('menu.general.account')">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-4 z-0">
        <AtomText
          class="text-nun-sm text-neutral-gray-8"
          :text="$t('account.notLoggedIn')"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        />

        <AtomButton
          class="w-72"
          @click="() => (showLoginModal = true)"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <AtomText
            class="bg-gradient-3 bg-clip-text text-transparent"
            :text="$t('account.login')"
          />
        </AtomButton>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <MoleculeCard
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex flex-col gap-6 py-3 px-1">
            <!-- Wallet Info -->
            <div class="flex items-center gap-3">
              <!-- wallet icon -->
              <AtomIcon
                name="icon-[material-symbols--account-balance-wallet-outline]"
                class="w-12 h-12"
              />

              <div
                v-if="walletStore.getSelectedWallet()"
                class="flex flex-col gap-1"
              >
                <div class="flex items-center gap-1">
                  <AtomText
                    class="text-neutral-gray-8"
                    :text="
                      useShortenText(
                        walletStore.getSelectedWallet().token
                      ).toUpperCase()
                    "
                  />

                  <AtomIcon
                    name="icon-[material-symbols--content-copy-outline-rounded]"
                    class="w-5 h-5 cursor-pointer"
                    @click="() => copy(walletStore.getSelectedWallet().token)"
                  />
                </div>

                <div class="flex items-center gap-3">
                  <AtomSVG
                    :name="walletStore.getSelectedWallet().svg"
                    class="w-5 h-5"
                  />

                  <div class="flex items-center gap-1">
                    <AtomText
                      :text="
                        useNumberFormat(
                          walletStore.getSelectedWallet().balance,
                          false
                        )
                      "
                    />
                    <AtomText
                      :text="walletStore.getSelectedWallet().shortName"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Dot Info -->
            <div
              class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6"
            >
              <div class="flex items-center gap-5">
                <AtomImage src="/imgs/logo.png" class="w-12 h-1w-12" />
                <AtomText
                  class="text-nun-h6 font-bold"
                  :text="'DOT'.toUpperCase()"
                />
              </div>

              <div class="grid grid-cols-4 gap-2">
                <AtomText
                  class="text-nun-sm text-neutral-gray-8"
                  :text="$t('account.balance')"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`ETH: ${10} DOT`"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`BSC: ${150} DOT`"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`xDai: ${10} DOT`"
                />
              </div>
            </div>

            <!-- IPAD Info -->
            <div
              class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6"
            >
              <div class="flex items-center gap-5">
                <AtomImage src="/imgs/logo2.png" class="w-12 h-1w-12" />
                <AtomText
                  class="text-nun-h6 font-bold"
                  :text="'IPAD'.toUpperCase()"
                />
              </div>

              <div class="grid grid-cols-4 gap-2">
                <AtomText
                  class="text-nun-sm text-neutral-gray-8"
                  :text="$t('account.balance')"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`ETH: ${0} IPAD`"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`BSC: ${80} IPAD`"
                />
                <AtomText
                  class="text-nun-sm text-neutral-gray-5"
                  :text="`xDai: ${2} IPAD`"
                />
              </div>
            </div>
          </div>
        </MoleculeCard>

        <MoleculeCard
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex flex-col gap-6 py-3 px-1 h-full">
            <AtomText :text="$t('account.yourTokenLock')" />

            <div class="flex items-center justify-between">
              <AtomText
                class="text-nun-sm"
                :text="$t('tokens', 0).toLowerCase()"
              />

              <AtomIcon name="icon-[material-symbols--refresh-rounded]" />
            </div>

            <div class="flex items-center justify-center h-full">
              <AtomText
                class="text-nun-sm text-neutral-gray-8"
                :text="$t('account.noTokenLocks')"
              />
            </div>
          </div>
        </MoleculeCard>
      </div>
    </div>

    <MoleculeModal v-model="showLoginModal" :header="$t('account.login')">
      <template #default="{ close, swap }">
        <div class="flex flex-col items-center gap-14">
          <AtomIcon name="icon-[material-symbols--person]" class="w-16 h-16" />

          <MoleculeTabs :tabs="tabs" @tab-change="tab => (activeTab = tab)" />

          <AtomButton
            v-if="activeTab === 0"
            class="w-full"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
            @click="close"
          >
            <AtomText
              class="bg-gradient-3 bg-clip-text text-transparent"
              :text="$t('account.signMessage')"
            />
          </AtomButton>

          <form
            @submit.prevent="close"
            autocomplete="off"
            v-else
            class="flex flex-col gap-14 w-full"
          >
            <div class="flex flex-col gap-6">
              <MoleculeInputText
                :placeholder="$t('account.username')"
                name="username"
                v-model="loginWithPassword.username"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0 }"
              />
              <MoleculeInputPassword
                :placeholder="$t('account.password')"
                name="password"
                v-model="loginWithPassword.password"
                v-motion
                :initial="{ opacity: 0, y: -20 }"
                :visible="{ opacity: 1, y: 0 }"
              />
            </div>

            <AtomButton
              type="submit"
              :label="$t('account.login')"
              :class="[
                'w-full',
                Object.values(loginWithPassword).every(Boolean) &&
                  'bg-gradient-3',
                !Object.values(loginWithPassword).every(Boolean) &&
                  'bg-neutral-gray-22',
              ]"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :disabled="!Object.values(loginWithPassword).every(Boolean)"
            />
          </form>

          <div class="flex items-center gap-6 self-start">
            <AtomText
              class="text-nun-sm text-neutral-gray-8"
              :text="$t('account.dontHaveAccount')"
            />

            <AtomText
              class="bg-gradient-3 bg-clip-text text-transparent font-bold cursor-pointer"
              @click="() => swap(() => (showCreateAccountModal = true))"
              :text="$t('account.createAccount')"
            />
          </div>
        </div>
      </template>
    </MoleculeModal>

    <MoleculeModal
      v-model="showCreateAccountModal"
      :header="$t('account.createAccount')"
    >
      <template #default="{ close, swap }">
        <div class="flex flex-col items-center gap-14">
          <MoleculeInputText
            :placeholder="$t('account.username')"
            name="username"
            v-model="createAccount.username"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
          />

          <!-- Dot Info -->
          <div
            class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6 w-full"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center gap-5">
              <AtomImage src="/imgs/logo.png" class="w-12 h-1w-12" />
              <AtomText
                class="text-nun-h6 font-bold"
                :text="'DOT'.toUpperCase()"
              />
            </div>

            <div class="grid grid-cols-4 gap-2">
              <AtomText
                class="text-nun-sm text-neutral-gray-8"
                :text="$t('account.balance')"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`ETH: ${10} DOT`"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`BSC: ${150} DOT`"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`xDai: ${10} DOT`"
              />
            </div>
          </div>

          <!-- IPAD Info -->
          <div
            class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6 w-full"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center gap-5">
              <AtomImage src="/imgs/logo2.png" class="w-12 h-1w-12" />
              <AtomText
                class="text-nun-h6 font-bold"
                :text="'IPAD'.toUpperCase()"
              />
            </div>

            <div class="grid grid-cols-4 gap-2">
              <AtomText
                class="text-nun-sm text-neutral-gray-8"
                :text="$t('account.balance')"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`ETH: ${0} IPAD`"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`BSC: ${80} IPAD`"
              />
              <AtomText
                class="text-nun-sm text-neutral-gray-5"
                :text="`xDai: ${2} IPAD`"
              />
            </div>
          </div>

          <AtomButton
            class="bg-gradient-3 w-full"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
            @click="close"
            :label="$t('account.signin')"
          />

          <div class="flex items-center gap-6 self-start">
            <AtomText
              class="text-nun-sm text-neutral-gray-8"
              :text="$t('account.haveAccount')"
            />

            <AtomText
              class="bg-gradient-3 bg-clip-text text-transparent font-bold cursor-pointer"
              @click="() => swap(() => (showLoginModal = true))"
              :text="$t('account.login')"
            />
          </div>
        </div>
      </template>
    </MoleculeModal>
  </OrganismPage>
</template>

<style scoped></style>
