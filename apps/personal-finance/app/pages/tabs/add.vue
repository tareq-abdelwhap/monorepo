<script setup lang="ts">
import { AddAllowance, AddExpense, AddIncome, AddSalary } from '#components';

const toggle = ref('salary');
const toggleData = ref([
  { name: 'Salary', value: 'salary', component: markRaw(AddSalary) },
  { name: 'Income', value: 'income', component: markRaw(AddIncome) },
  { name: 'Expense', value: 'expense', component: markRaw(AddExpense) },
  { name: 'Allowance', value: 'allowance', component: markRaw(AddAllowance) },
]);
</script>

<template>
  <LayoutPage page-title="Add New Entry">
    <div class="flex flex-col gap-2">
      <ion-segment v-model="toggle" mode="ios" class="p-1 col-span-2">
        <ion-segment-button
          v-for="item in toggleData"
          :key="item.value"
          :value="item.value"
          :content-id="item.value"
        >
          <ion-label>{{ item.name }}</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment-view>
        <ion-segment-content
          v-for="item in toggleData"
          :key="item.value"
          :id="item.value"
          class="mx-1"
        >
          <!-- <AddSalary :title="`Add ${item.name}`" /> -->
          <component :is="item.component" :title="`Add ${item.name}`" />
        </ion-segment-content>
      </ion-segment-view>
    </div>
  </LayoutPage>
</template>

<style scoped>
ion-segment-button::part(indicator-background) {
  background: var(--color-purple-800);
}
</style>
