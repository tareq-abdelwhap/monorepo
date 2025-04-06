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
  <LayoutPage :header="$t('menu.general.account')">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-4 z-0">
        <span
          class="text-nun-sm text-neutral-gray-8"
          v-text="$t('account.notLoggedIn')"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        />

        <BaseButton
          class="w-72"
          @click="() => (showLoginModal = true)"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <span
            class="bg-gradient-3 bg-clip-text text-transparent"
            v-text="$t('account.login')"
          />
        </BaseButton>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <DashboardCard
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex flex-col gap-6 py-3 px-1">
            <!-- Wallet Info -->
            <div class="flex items-center gap-3">
              <!-- wallet icon -->
              <span
                class="icon-[material-symbols--account-balance-wallet-outline] w-12 h-12"
              />

              <div
                v-if="walletStore.getSelectedWallet()"
                class="flex flex-col gap-1"
              >
                <div class="flex items-center gap-1">
                  <span
                    class="text-neutral-gray-8"
                    v-text="
                      useShortenText(
                        walletStore.getSelectedWallet()?.token || ''
                      ).toUpperCase()
                    "
                  />

                  <span
                    class="icon-[material-symbols--content-copy-outline-rounded] w-5 h-5 cursor-pointer"
                    @click="
                      () => copy(walletStore.getSelectedWallet()?.token || '')
                    "
                  />
                </div>

                <div class="flex items-center gap-3">
                  <SVG
                    :name="walletStore.getSelectedWallet()?.svg!"
                    class="w-5 h-5"
                  />

                  <div class="flex items-center gap-1">
                    <span
                      v-text="
                        useNumberFormat(
                          walletStore.getSelectedWallet()?.balance || 0,
                          false
                        )
                      "
                    />
                    <span v-text="walletStore.getSelectedWallet()?.shortName" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Dot Info -->
            <div
              class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6"
            >
              <div class="flex items-center gap-5">
                <BaseImage src="/imgs/logo.png" class="w-12 h-1w-12" />
                <span
                  class="text-nun-h6 font-bold"
                  v-text="'DOT'.toUpperCase()"
                />
              </div>

              <div class="grid grid-cols-4 gap-2">
                <span
                  class="text-nun-sm text-neutral-gray-8"
                  v-text="$t('account.balance')"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`ETH: ${10} DOT`"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`BSC: ${150} DOT`"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`xDai: ${10} DOT`"
                />
              </div>
            </div>

            <!-- IPAD Info -->
            <div
              class="bg-neutral-gray-22 rounded-2xl px-6 py-4 flex flex-col gap-6"
            >
              <div class="flex items-center gap-5">
                <BaseImage src="/imgs/logo2.png" class="w-12 h-1w-12" />
                <span
                  class="text-nun-h6 font-bold"
                  v-text="'IPAD'.toUpperCase()"
                />
              </div>

              <div class="grid grid-cols-4 gap-2">
                <span
                  class="text-nun-sm text-neutral-gray-8"
                  v-text="$t('account.balance')"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`ETH: ${0} IPAD`"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`BSC: ${80} IPAD`"
                />
                <span
                  class="text-nun-sm text-neutral-gray-5"
                  v-text="`xDai: ${2} IPAD`"
                />
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex flex-col gap-6 py-3 px-1 h-full">
            <span v-text="$t('account.yourTokenLock')" />

            <div class="flex items-center justify-between">
              <span
                class="text-nun-sm"
                v-text="$t('tokens', 0).toLowerCase()"
              />

              <span class="icon-[material-symbols--refresh-rounded] w-6 h-6" />
            </div>

            <div class="flex items-center justify-center h-full">
              <span
                class="text-nun-sm text-neutral-gray-8"
                v-text="$t('account.noTokenLocks')"
              />
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>

    <BaseModal v-model="showLoginModal" :header="$t('account.login')">
      <template #default="{ close, swap }">
        <div class="flex flex-col items-center gap-14">
          <span class="icon-[material-symbols--person] w-16 h-16" />

          <BaseTabs :tabs="tabs" @tab-change="tab => (activeTab = tab)" />

          <BaseButton
            v-if="activeTab === 0"
            class="w-full"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
            @click="close"
          >
            <span
              class="bg-gradient-3 bg-clip-text text-transparent"
              v-text="$t('account.signMessage')"
            />
          </BaseButton>

          <form
            @submit.prevent="close"
            autocomplete="off"
            v-else
            class="flex flex-col gap-14 w-full"
          >
            <div class="flex flex-col gap-6">
              <BaseInputText
                :placeholder="$t('account.username')"
                name="username"
                v-model="loginWithPassword.username"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0 }"
              />
              <BaseInputPassword
                :placeholder="$t('account.password')"
                name="password"
                v-model="loginWithPassword.password"
                v-motion
                :initial="{ opacity: 0, y: -20 }"
                :visible="{ opacity: 1, y: 0 }"
              />
            </div>

            <BaseButton
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
            <span
              class="text-nun-sm text-neutral-gray-8"
              v-text="$t('account.dontHaveAccount')"
            />

            <span
              class="bg-gradient-3 bg-clip-text text-transparent font-bold cursor-pointer"
              @click="() => swap(() => (showCreateAccountModal = true))"
              v-text="$t('account.createAccount')"
            />
          </div>
        </div>
      </template>
    </BaseModal>

    <BaseModal
      v-model="showCreateAccountModal"
      :header="$t('account.createAccount')"
    >
      <template #default="{ close, swap }">
        <div class="flex flex-col items-center gap-14">
          <BaseInputText
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
              <BaseImage src="/imgs/logo.png" class="w-12 h-1w-12" />
              <span
                class="text-nun-h6 font-bold"
                v-text="'DOT'.toUpperCase()"
              />
            </div>

            <div class="grid grid-cols-4 gap-2">
              <span
                class="text-nun-sm text-neutral-gray-8"
                v-text="$t('account.balance')"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`ETH: ${10} DOT`"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`BSC: ${150} DOT`"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`xDai: ${10} DOT`"
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
              <BaseImage src="/imgs/logo2.png" class="w-12 h-1w-12" />
              <span
                class="text-nun-h6 font-bold"
                v-text="'IPAD'.toUpperCase()"
              />
            </div>

            <div class="grid grid-cols-4 gap-2">
              <span
                class="text-nun-sm text-neutral-gray-8"
                v-text="$t('account.balance')"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`ETH: ${0} IPAD`"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`BSC: ${80} IPAD`"
              />
              <span
                class="text-nun-sm text-neutral-gray-5"
                v-text="`xDai: ${2} IPAD`"
              />
            </div>
          </div>

          <BaseButton
            class="bg-gradient-3 w-full"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visible="{ opacity: 1, y: 0 }"
            @click="close"
            :label="$t('account.signin')"
          />

          <div class="flex items-center gap-6 self-start">
            <span
              class="text-nun-sm text-neutral-gray-8"
              v-text="$t('account.haveAccount')"
            />

            <span
              class="bg-gradient-3 bg-clip-text text-transparent font-bold cursor-pointer"
              @click="() => swap(() => (showLoginModal = true))"
              v-text="$t('account.login')"
            />
          </div>
        </div>
      </template>
    </BaseModal>
  </LayoutPage>
</template>

<style scoped></style>
