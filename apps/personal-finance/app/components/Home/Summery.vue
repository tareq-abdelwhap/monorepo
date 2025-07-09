<script lang="ts" setup>
import {
  HomeChartsAllowances,
  HomeChartsExpenses,
  HomeChartsIncomes,
} from '#components';

const financeStore = useFinanceStore();
const { summery } = storeToRefs(financeStore);

const toggle = ref('expenses');
const toggleData = ref([
  {
    name: 'Expenses',
    value: 'expenses',
    component: markRaw(HomeChartsExpenses),
  },
  {
    name: 'Allowances',
    value: 'allowances',
    component: markRaw(HomeChartsAllowances),
  },
  { name: 'Incomes', value: 'incomes', component: markRaw(HomeChartsIncomes) },
]);
</script>

<template>
  <div class="flex flex-col gap-10 items-center justify-center py-18">
    <div class="flex flex-col items-center justify-center gap-1">
      <span class="text-lg" v-text="`Remaining`" />
      <span
        class="font-semibold text-3xl"
        v-text="formatCurrency(summery.remaining, 'EGP')"
      />
    </div>

    <div class="flex flex-col items-center gap-4 w-full">
      <ion-segment v-model="toggle" mode="ios" class="p-1 w-80">
        <ion-segment-button
          v-for="item in toggleData"
          :key="item.value"
          :value="item.value"
          :content-id="item.value"
        >
          <ion-label>{{ item.name }}</ion-label>
        </ion-segment-button>
      </ion-segment>

      <div class="w-full">
        <ion-segment-view>
          <ion-segment-content
            v-for="item in toggleData"
            :key="item.value"
            :id="item.value"
            class="mx-1"
          >
            <component :is="item.component" />
          </ion-segment-content>
        </ion-segment-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-segment-button::part(indicator-background) {
  background: var(--color-purple-800);
}
</style>
