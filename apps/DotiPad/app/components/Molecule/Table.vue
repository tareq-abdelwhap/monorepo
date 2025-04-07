<script lang="ts" setup>
defineProps<{
  headers: string[];
  data: any[];
}>();
</script>

<template>
  <div class="p-6 bg-neutral-gray-23 rounded-2xl z-0">
    <table class="w-full">
      <thead>
        <tr>
          <th
            v-for="(header, idx) in headers"
            :key="header"
            :class="[
              'text-nun-h6 font-bold',
              'p-4 border-b border-b-neutral-gray-22',
              idx ? 'text-end' : 'text-start',
            ]"
          >
            <AtomText :text="header" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, itemIdx) in data" :key="item">
          <td
            v-for="(header, idx) in headers"
            :key="header"
            :class="[
              'p-4 border-b-neutral-gray-22',
              idx ? 'text-end' : 'text-start',
              itemIdx + 1 < data.length && 'border-b',
            ]"
          >
            <AtomText :text="item[header]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
