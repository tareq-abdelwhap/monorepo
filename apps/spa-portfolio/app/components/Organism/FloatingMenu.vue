<script lang="ts" setup>
/**
 * Why FloatingMenu is fit to be an Organism ?
 *  - It combines layout, logic, icons, state, and interactivity into a reusable section.
 *  - Multiple nested UI elements: <ul>, <li>, u-icon, v-for, conditionally styled.
 *  - Interactivity & State: It manages local state (active) and dynamic classes.
 *  - Independent Utility: It's not just styling or layout — it's a self-contained UI feature.
 */
const active = ref(1);
</script>

<template>
  <nav class="fixed mt-16 ms-16 z-50">
    <ul
      :class="[
        'bg-bg-2 border border-white',
        'flex flex-col gap-6 py-3 px-2.5 rounded-full',
        'w-fit z-50',
      ]"
    >
      <li
        v-for="_ in 6"
        :key="_"
        :class="[
          'size-10 flex items-center justify-center rounded-full cursor-pointer',
          _ === active && 'bg-white text-bg-1',
          'transition duration-300 ease-in-out',
        ]"
        @click="() => (active = _)"
      >
        <!-- outline Grid Icon -->
        <u-icon name="iconoir:view-grid" size="24" />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
