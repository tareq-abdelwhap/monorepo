<script setup lang="ts">
defineProps<{
  title: string;
  fields: Array<{ id: string; name: string; currency?: string }>;
  data: (NewSalary | NewIncome | NewExpense | NewAllowance)[];
}>();

const emit = defineEmits<{
  (e: 'delete', item: string): void;
}>();
</script>

<template>
  <BaseCard :title="title">
    <div class="flex gap-4 overflow-auto">
      <BaseCard
        v-for="item in data"
        :key="item.id"
        :title="item.date"
        class="relative border border-gray-800 rounded-lg"
      >
        <div class="flex flex-col gap-1">
          <!-- Delete Button -->
          <ion-button
            fill="clear"
            color="danger"
            size="small"
            class="absolute top-0 end-0"
            @click="() => emit('delete', item.id!)"
          >
            <ion-icon slot="icon-only" :icon="ioniconsTrashOutline" />
          </ion-button>

          <div
            v-for="field in fields"
            :key="`${title.replaceAll(' ', '-').toLowerCase()}-${field.id}`"
            class="flex items-start justify-between gap-1"
          >
            <span class="text-sm text-gray-600" v-text="`${field.name}:`" />

            <span
              class="font-semibold text-md"
              v-text="field.currency ? formatCurrency(Number(item[field.id as keyof typeof item] || 0), field.currency as 'CAD' | 'EGP') : item[field.id as keyof typeof item]"
            />
          </div>
        </div>
      </BaseCard>
    </div>
  </BaseCard>
</template>

<style scoped></style>
