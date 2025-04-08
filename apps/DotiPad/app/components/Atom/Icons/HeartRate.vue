<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <svg
    v-if="!active"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    name="HeartRate"
    class="fill-none stroke-neutral-gray-8"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 5V15C19 17.209 17.209 19 15 19H5C2.791 19 1 17.209 1 15V5C1 2.791 2.791 1 5 1H15C17.209 1 19 2.791 19 5Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 10H14.309C14.12 10 13.946 10.107 13.862 10.276L12.447 13.105C12.263 13.474 11.737 13.474 11.553 13.105L8.43 6.861C8.249 6.499 7.735 6.491 7.543 6.847L5.984 9.737C5.896 9.899 5.727 10 5.544 10H1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    name="HeartRate"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 5V15C19 17.209 17.209 19 15 19H5C2.791 19 1 17.209 1 15V5C1 2.791 2.791 1 5 1H15C17.209 1 19 2.791 19 5Z"
      stroke="url(#paint0_linear_7213_3683)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 10H14.309C14.12 10 13.946 10.107 13.862 10.276L12.447 13.105C12.263 13.474 11.737 13.474 11.553 13.105L8.43 6.861C8.249 6.499 7.735 6.491 7.543 6.847L5.984 9.737C5.896 9.899 5.727 10 5.544 10H1"
      stroke="url(#paint1_linear_7213_3683)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7213_3683"
        x1="-1.88068"
        y1="17.0579"
        x2="23.3328"
        y2="15.2496"
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
        id="paint1_linear_7213_3683"
        x1="-1.88068"
        y1="12.6484"
        x2="22.5802"
        y2="8.00268"
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
