<script setup lang="ts">
defineProps<{ title: string }>();

const fields = ref([
  { id: 'title', name: 'Title', placeholder: 'Expense Title' },
  { id: 'amount_egp', name: 'Amount (EGP)', placeholder: '0.00' },
]);

const financeStore = useFinanceStore();
const { categories, expense } = storeToRefs(financeStore);
</script>

<template>
  <BaseCard :title="title">
    <form @submit.prevent="financeStore.addExpense" class="flex flex-col gap-4">
      <div v-for="field in fields" :key="field.id" class="flex flex-col">
        <label :for="`expense-${field.id}`" class="block text-sm ms-1">
          {{ field.name }}
        </label>
        <input
          :id="`expense-${field.id}`"
          v-model="expense[field.id as keyof typeof expense]"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          :placeholder="field.placeholder"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="expense-category" class="block text-sm ms-1">
          Category
        </label>
        <select
          id="expense-category"
          v-model="expense.category"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="flex flex-col">
        <label for="expense-date" class="block text-sm ms-1"> Date </label>
        <input
          id="expense-date"
          v-model="expense.date"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          type="date"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="expense-notes" class="block text-sm ms-1">
          Notes (Optional)
        </label>
        <textarea
          id="expense-notes"
          v-model="expense.notes"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          placeholder="Additional notes"
          rows="2"
          style="resize: none"
        />
      </div>

      <!-- Save Expense Button -->
      <ion-button expand="block" type="submit"> Save Expense </ion-button>
    </form>
  </BaseCard>
</template>

<style scoped></style>
