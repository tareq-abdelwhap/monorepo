<script setup lang="ts">
defineProps<{ title: string }>();

const fields = ref([
  { id: 'title', name: 'Title', placeholder: 'Income Title' },
  { id: 'amount_egp', name: 'Amount (EGP)', placeholder: '0.00' },
]);

const financeStore = useFinanceStore();
const { income } = storeToRefs(financeStore);
</script>

<template>
  <BaseCard :title="title">
    <form @submit.prevent="financeStore.addIncome" class="flex flex-col gap-4">
      <div v-for="field in fields" :key="field.id" class="flex flex-col">
        <label :for="`income-${field.id}`" class="block text-sm ms-1">
          {{ field.name }}
        </label>
        <input
          :id="`income-${field.id}`"
          v-model="income[field.id as keyof typeof income]"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          :placeholder="field.placeholder"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="income-date" class="block text-sm ms-1"> Date </label>
        <input
          id="income-date"
          v-model="income.date"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          type="date"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="income-notes" class="block text-sm ms-1">
          Notes (Optional)
        </label>
        <textarea
          id="income-notes"
          v-model="income.notes"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          placeholder="Additional notes"
          rows="2"
          style="resize: none"
        />
      </div>

      <!-- Save Income Button -->
      <ion-button expand="block" type="submit"> Save Income </ion-button>
    </form>
  </BaseCard>
</template>

<style scoped></style>
