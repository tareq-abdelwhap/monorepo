<script setup lang="ts">
import { ref, computed } from 'vue';

const monthlyInstallment = ref(5000); // القسط الشهري
const totalMonths = ref(30); // إجمالي مدة القرض
const remainingMonths = ref(6); // عدد الشهور المتبقية
const earlySettlementRate = ref(0.05); // نسبة السداد المبكر (مثلاً 5%)

const paidMonths = computed(() => totalMonths.value - remainingMonths.value);

const remainingAmount = computed(
  () => monthlyInstallment.value * remainingMonths.value
);

const paidAmount = computed(() => monthlyInstallment.value * paidMonths.value);

const earlySettlementFee = computed(
  () => remainingAmount.value * earlySettlementRate.value
);

const totalToPayNow = computed(
  () => remainingAmount.value + earlySettlementFee.value
);
</script>

<template>
  <div class="p-4 max-w-xl mx-auto bg-white shadow rounded-xl space-y-4">
    <h2 class="text-2xl font-bold text-center">حاسبة السداد المبكر</h2>

    <div class="space-y-2">
      <label class="block">القسط الشهري (جنيه):</label>
      <input type="number" v-model="monthlyInstallment" class="input" />

      <br />

      <label class="block">عدد الشهور الكلي:</label>
      <input type="number" v-model="totalMonths" class="input" />

      <br />

      <label class="block">عدد الشهور المتبقية:</label>
      <input type="number" v-model="remainingMonths" class="input" />

      <br />

      <label class="block">نسبة السداد المبكر (%):</label>
      <input
        type="number"
        v-model="earlySettlementRate"
        step="0.01"
        class="input"
      />
    </div>

    <div class="mt-4 space-y-2 text-lg">
      <p>
        ✔️ مجموع الأقساط المتبقية:
        <strong>{{ remainingAmount.toLocaleString() }} جنيه</strong>
      </p>
      <p>
        📌 مجموع الأقساط المدفوعة:
        <strong>{{ paidAmount.toLocaleString() }} جنيه</strong>
      </p>
      <p>
        💸 رسوم السداد المبكر ({{ (earlySettlementRate * 100).toFixed(1) }}%):
        <strong>{{ earlySettlementFee.toLocaleString() }} جنيه</strong>
      </p>
      <hr />
      <p class="text-xl font-bold">
        📊 المبلغ الإجمالي المطلوب الآن:
        <span class="text-green-600"
          >{{ totalToPayNow.toLocaleString() }} جنيه</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
