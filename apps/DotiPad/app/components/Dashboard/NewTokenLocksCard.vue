<script lang="ts" setup>
defineProps<{
  tokenLock: {
    title: string;
    svg: string;
    subTitle: string;
    body: Array<{
      svg: string;
      tokenName: string;
      tokenSubName: string;
      tokenLocked: string;
      tokenLockedPercentage: number;
    }>;
  };
}>();
</script>

<template>
  <DashboardCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <SVG :name="tokenLock.svg" class="w-8 h-8" />
          <span class="text-nun-regular font-bold" v-text="tokenLock.title" />
        </div>

        <span
          class="text-nun-sm text-neutral-gray-8"
          v-text="tokenLock.subTitle"
        />
      </div>
    </template>

    <template #default>
      <div class="grid grid-cols-2">
        <!-- Header -->
        <div class="text-start p-4 border-b border-neutral-gray-22">
          <span
            class="text-nun-regular font-bold"
            v-text="$t('dashboard.newTokenLocks.tokenName')"
          />
        </div>
        <div class="text-end p-4 border-b border-neutral-gray-22">
          <span
            class="text-nun-regular font-bold"
            v-text="$t('dashboard.newTokenLocks.tokenLocked')"
          />
        </div>

        <!-- Body -->
        <template v-for="item in tokenLock.body" :key="item.svg">
          <div class="text-start py-2 px-4 border-b border-neutral-gray-22">
            <div class="flex items-center gap-2">
              <AtomImage
                v-if="item.svg.endsWith('.png')"
                :src="`/imgs/svg/${item.svg}`"
                :alt="item.svg"
              />
              <SVG v-else :name="item.svg" />

              <div class="flex flex-col">
                <span class="text-nun-sm font-bold" v-text="item.tokenName" />
                <span
                  class="text-nun-sx text-neutral-gray-8"
                  v-text="item.tokenSubName"
                />
              </div>
            </div>
          </div>
          <div class="text-end py-2 px-4 border-b border-neutral-gray-22">
            <div class="flex flex-col">
              <span class="text-nun-sm" v-text="item.tokenLocked" />
              <div class="flex items-center gap-1 justify-end">
                <AtomPieChart
                  :percentage="item.tokenLockedPercentage"
                  class="w-4 h-4"
                />
                <span
                  class="text-nun-sx text-success-green-5"
                  v-text="`${item.tokenLockedPercentage}%`"
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
</template>

<style scoped></style>
