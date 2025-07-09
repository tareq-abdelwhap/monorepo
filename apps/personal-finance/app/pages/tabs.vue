<script setup lang="ts">
const tabs = ref([
  {
    name: 'Home',
    tab: 'home',
    url: '/tabs/home',
    alias: '/',
    icon: ioniconsHomeOutline,
  },
  {
    name: 'Stats',
    tab: 'stats',
    url: '/tabs/stats',
    icon: ioniconsStatsChartOutline,
  },
  {
    name: 'Add',
    tab: 'add',
    url: '/tabs/add',
    icon: ioniconsAddCircleOutline,
  },
  {
    name: 'History',
    tab: 'history',
    url: '/tabs/history',
    icon: ioniconsTimeOutline,
  },
  {
    name: 'Settings',
    tab: 'settings',
    url: '/tabs/settings',
    icon: ioniconsSettingsOutline,
  },
]);

const ionRouter = useIonRouter();
const router = useRouter();
const financeStore = useFinanceStore();
financeStore.fetchSummery();

const isActive = (tab: any) =>
  [tab.alias, tab.url].includes(router.currentRoute.value.fullPath);
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet class="mb-16" />

        <div
          class="w-full fixed inset-x-0 bottom-1 px-2.5 flex justify-around items-center gap-2.5"
        >
          <div
            v-for="tab in tabs"
            :key="tab.tab"
            class="  "
            :class="[
              'relative overflow-hidden',
              'transition-all duration-300 ease-in-out',
              'flex items-center justify-center gap-1 rounded-full shadow-md bg-gray-800 cursor-pointer h-10',
              isActive(tab)
                ? 'w-32 bg-purple-950 text-white'
                : 'w-10 hover:bg-purple-950 hover:text-white',
            ]"
            @click="() => ionRouter.navigate(tab.url, 'forward', 'replace')"
          >
            <ion-icon class="size-5 flex" :icon="tab.icon" />

            <ion-label
              v-if="isActive(tab)"
              class="font-semibold whitespace-nowrap"
              key="label"
            >
              {{ tab.name }}
            </ion-label>
          </div>
        </div>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
