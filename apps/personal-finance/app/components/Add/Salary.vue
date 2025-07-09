<script setup lang="ts">
defineProps<{ title: string }>();

const fields = ref([
  { id: 'amount_cad', name: 'Amount (CAD)', placeholder: '0.00' },
  { id: 'exchange_rate', name: 'Exchange Rate', placeholder: '0.00' },
  { id: 'transfer_percentage', name: 'Transfer Fee (%)', placeholder: '0.00' },
]);

const financeStore = useFinanceStore();
const { salary } = storeToRefs(financeStore);

const EGPAmount = computed(
  () =>
    Math.floor(
      Number(salary.value.amount_cad) *
        Number(salary.value.exchange_rate) *
        100 || 0
    ) / 100
);
const transferFee = computed(
  () =>
    Math.floor(
      (Number(salary.value.transfer_percentage) / 100) *
        EGPAmount.value *
        100 || 0
    ) / 100
);

const netAmount = computed(() => EGPAmount.value - transferFee.value || 0);

watch(
  () => [EGPAmount.value, transferFee.value],
  () => {
    salary.value.amount_egp = EGPAmount.value;
    salary.value.net_amount_egp = netAmount.value;
  }
);
</script>

<template>
  <BaseCard :title="title">
    <form @submit.prevent="financeStore.addSalary" class="flex flex-col gap-4">
      <div v-for="field in fields" :key="field.id" class="flex flex-col">
        <label :for="`salary-${field.id}`" class="block text-sm ms-1">
          {{ field.name }}
        </label>
        <input
          :id="`salary-${field.id}`"
          v-model="salary[field.id as keyof typeof salary]"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          :placeholder="field.placeholder"
          required
        />
      </div>

      <div
        class="bg-green-800 rounded-lg px-3 py-2 flex flex-col gap-2 text-sm text-white"
      >
        <div class="flex items-center justify-between">
          <span class="text-gray-300" v-text="`Amount in EGP`" />
          <span v-text="formatCurrency(EGPAmount || 0, 'EGP')" />
        </div>

        <div class="flex items-center justify-between">
          <span class="text-gray-300" v-text="`Transfer Fees`" />
          <span
            class="text-red-400"
            v-text="formatCurrency(transferFee || 0, 'EGP')"
          />
        </div>

        <div class="flex items-center justify-between text-md font-semibold">
          <span v-text="`Net Amount`" />
          <span
            class="text-green-400"
            v-text="formatCurrency(netAmount || 0, 'EGP')"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <label for="salary-date" class="block text-sm ms-1"> Date </label>
        <input
          id="salary-date"
          v-model="salary.date"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          type="date"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="salary-notes" class="block text-sm ms-1">
          Notes (Optional)
        </label>
        <textarea
          id="salary-notes"
          v-model="salary.notes"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          placeholder="Additional notes"
          rows="2"
          style="resize: none"
        />
      </div>

      <!-- Save Salary Button -->
      <ion-button expand="block" type="submit"> Save Salary </ion-button>
    </form>
  </BaseCard>
</template>

<style scoped></style>
