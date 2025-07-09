<script setup lang="ts">
import { Dialog } from '@capacitor/dialog';

const financeStore = useFinanceStore();
const { history } = storeToRefs(financeStore);

const toggle = ref('salary-history');
const toggleData = ref([
  {
    id: 'salary-history',
    name: 'Salary',
    value: 'salary',
    table: 'salaries',
    data: computed(() => history.value.salaries),
    fields: [
      { id: 'amount_cad', name: '(CAD)', currency: 'CAD' },
      { id: 'exchange_rate', name: 'Exchange Rate' },
      { id: 'amount_egp', name: 'Amount', currency: 'EGP' },
      { id: 'transfer_percentage', name: 'Transfer Fee' },
      { id: 'net_amount_egp', name: 'Net Amount', currency: 'EGP' },
      { id: 'notes', name: 'Notes' },
    ],
  },
  {
    id: 'income-history',
    name: 'Income',
    value: 'income',
    table: 'incomes',
    data: computed(() => history.value.incomes),
    fields: [
      { id: 'title', name: 'Title' },
      { id: 'amount_egp', name: 'Amount', currency: 'EGP' },
      { id: 'notes', name: 'Notes' },
    ],
  },
  {
    id: 'expense-history',
    name: 'Expense',
    value: 'expense',
    table: 'expenses',
    data: computed(() => history.value.expenses),
    fields: [
      { id: 'title', name: 'Title' },
      { id: 'category', name: 'Category' },
      { id: 'amount_egp', name: 'Amount', currency: 'EGP' },
      { id: 'notes', name: 'Notes' },
    ],
  },
  {
    id: 'allowance-history',
    name: 'Allowance',
    value: 'allowance',
    table: 'allowances',
    data: computed(() => history.value.allowances),
    fields: [
      { id: 'title', name: 'Title' },
      { id: 'recipient', name: 'Recipient' },
      { id: 'amount_egp', name: 'Amount', currency: 'EGP' },
      { id: 'notes', name: 'Notes' },
    ],
  },
]);

const confirmDelete = async (uuid: string, item: any) => {
  const { value } = await Dialog.confirm({
    title: `Delete ${item.name}`,
    message: `Are you sure want to DELETE ${
      item.data.find((item: any) => item.id === uuid).title
    } from ${item.name} ?`,
    okButtonTitle: 'Delete',
  });

  if (!value) return;

  financeStore.deleteEntry(uuid, item.table);
};
</script>

<template>
  <LayoutPage page-title="History">
    <div class="flex flex-col gap-10 h-full">
      <HistoryCard
        v-for="item in toggleData"
        :key="item.id"
        :title="`${item.name} History`"
        :fields="item.fields"
        :data="item.data || []"
        @delete="uuid => confirmDelete(uuid, item)"
      />

      <!-- Fixed Toggle Section -->
      <!-- <div class="flex flex-col gap-2">
        <ion-segment v-model="toggle" mode="ios" class="p-1">
          <ion-segment-button
            v-for="item in toggleData"
            :key="item.id"
            :value="item.id"
            :content-id="item.id"
          >
            <ion-label>{{ item.name }}</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div> -->

      <!-- Scrollable Content Section -->
      <!-- <div class="overflow-y-auto flex-1">
        <ion-segment-view>
          <ion-segment-content
            v-for="item in toggleData"
            :key="item.id"
            :id="item.id"
            class="mx-1"
          >
            <HistoryCard
              :title="`${item.name} History`"
              :fields="item.fields"
              :data="item.data || []"
              @delete="id => financeStore.deleteEntry(id, item.table)"
            />
          </ion-segment-content>
        </ion-segment-view>
      </div> -->
    </div>
  </LayoutPage>
</template>

<style scoped>
ion-segment-button::part(indicator-background) {
  background: var(--color-purple-800);
}
</style>
