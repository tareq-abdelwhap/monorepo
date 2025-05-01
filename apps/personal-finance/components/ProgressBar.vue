<template>
  <div class="w-full">
    <div class="bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
      <div 
        class="h-full rounded-full transition-all duration-500 ease-out"
        :class="color || 'bg-primary-500'"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
    <div class="flex justify-between text-xs mt-1 text-gray-600 dark:text-gray-400">
      <span>{{ label || `${percentage}%` }}</span>
      <span v-if="showPercentage">{{ percentage }}%</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  percentage: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  color: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  showPercentage: {
    type: Boolean,
    default: false
  }
});
</script>