<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <svg
    v-if="!active"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    name="Check"
    class="fill-none stroke-neutral-gray-8"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.50947 15.5355C2.55685 13.5829 2.55685 10.4171 4.50947 8.46447L8.46446 4.50947C10.4171 2.55685 13.5829 2.55685 15.5355 4.50947L19.4905 8.46447C21.4431 10.4171 21.4431 13.5829 19.4905 15.5355L15.5355 19.4905C13.5829 21.4431 10.4171 21.4431 8.46446 19.4905L4.50947 15.5355Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.513 10.7065L11.3727 13.8468L9.48495 11.965"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    name="Check"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.50947 15.5355C2.55685 13.5829 2.55685 10.4171 4.50947 8.46447L8.46446 4.50947C10.4171 2.55685 13.5829 2.55685 15.5355 4.50947L19.4905 8.46447C21.4431 10.4171 21.4431 13.5829 19.4905 15.5355L15.5355 19.4905C13.5829 21.4431 10.4171 21.4431 8.46446 19.4905L4.50947 15.5355Z"
      stroke="url(#paint0_linear_7213_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.513 10.7065L11.3727 13.8468L9.48495 11.965"
      stroke="url(#paint1_linear_7213_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7213_3702"
        x1="9.04575"
        y1="23.601"
        x2="23.3828"
        y2="7.04856"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D16BA5" />
        <stop offset="0.222568" stop-color="#BA83CA" />
        <stop offset="0.436301" stop-color="#9A9AE1" />
        <stop offset="0.673642" stop-color="#69BFF8" />
        <stop offset="0.800406" stop-color="#52CFFE" />
        <stop offset="0.956406" stop-color="#5FFBF1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_7213_3702"
        x1="8.68027"
        y1="13.5079"
        x2="15.6675"
        y2="12.7056"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D16BA5" />
        <stop offset="0.222568" stop-color="#BA83CA" />
        <stop offset="0.436301" stop-color="#9A9AE1" />
        <stop offset="0.673642" stop-color="#69BFF8" />
        <stop offset="0.800406" stop-color="#52CFFE" />
        <stop offset="0.956406" stop-color="#5FFBF1" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped></style>
