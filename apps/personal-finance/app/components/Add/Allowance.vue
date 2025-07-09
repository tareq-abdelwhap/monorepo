<script setup lang="ts">
defineProps<{ title: string }>();

const fields = ref([
  { id: 'title', name: 'Title', placeholder: 'Allowance Title' },
  { id: 'recipient', name: 'Recipient', placeholder: 'Recipient Name' },
  { id: 'amount_egp', name: 'Amount (EGP)', placeholder: '0.00' },
]);

const financeStore = useFinanceStore();
const { allowance } = storeToRefs(financeStore);
</script>

<template>
  <BaseCard :title="title">
    <form
      @submit.prevent="financeStore.addAllowance"
      class="flex flex-col gap-4"
    >
      <div v-for="field in fields" :key="field.id" class="flex flex-col">
        <label :for="`allowance-${field.id}`" class="block text-sm ms-1">
          {{ field.name }}
        </label>
        <input
          :id="`allowance-${field.id}`"
          v-model="allowance[field.id as keyof typeof allowance]"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          :placeholder="field.placeholder"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="allowance-date" class="block text-sm ms-1"> Date </label>
        <input
          id="allowance-date"
          v-model="allowance.date"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          type="date"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="allowance-notes" class="block text-sm ms-1">
          Notes (Optional)
        </label>
        <textarea
          id="allowance-notes"
          v-model="allowance.notes"
          class="border border-gray-200 rounded-md py-1 px-2 w-full"
          placeholder="Additional notes"
          rows="2"
          style="resize: none"
        />
      </div>

      <!-- Save Allowance Button -->
      <ion-button expand="block" type="submit"> Save Allowance </ion-button>
    </form>
  </BaseCard>
</template>

<style scoped></style>
