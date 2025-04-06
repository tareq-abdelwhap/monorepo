<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <svg
    v-if="!active"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    name="Network"
    class="fill-none stroke-neutral-gray-8"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.9983 12.9983V12.9983C29.655 12.9983 31 14.3417 31 16V16C31 17.6567 29.6567 19.0017 27.9983 19.0017V19.0017C26.3417 19.0017 24.9967 17.6583 24.9967 16V16C25 14.3417 26.3433 12.9983 27.9983 12.9983Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 5.72665V5.72665C17.6567 5.72665 19.0017 7.06999 19.0017 8.72832V8.72832C19.0017 10.385 17.6583 11.73 16 11.73V11.73C14.3433 11.7283 12.9983 10.3867 12.9983 8.72832V8.72832C12.9983 7.06999 14.3417 5.72665 16 5.72665Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 20.2717V20.2717C17.6567 20.2717 19.0017 21.615 19.0017 23.2733V23.2733C19.0017 24.93 17.6583 26.275 16 26.275V26.275C14.3433 26.275 12.9983 24.9317 12.9983 23.2733V23.2733C12.9983 21.6133 14.3417 20.2717 16 20.2717Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 11.8333L18.6833 10.0333"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.4833 17.6167L22.6667 19.4167"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.00167 19.0017V19.0017C2.345 19.0017 1 17.6583 1 16V16C1 14.3433 2.34333 13 4.00167 13V13C5.65833 13 7.00333 14.3433 7.00333 16.0017V16.0017C7 17.6583 5.65667 19.0017 4.00167 19.0017Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 20.1667L13.3167 21.9667"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.51666 14.3833L9.33333 12.5833"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 26V27.6667C1 29.5083 2.49167 31 4.33333 31H6"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 6V4.33333C31 2.49167 29.5083 1 27.6667 1H26"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 1H4.33333C2.49167 1 1 2.49167 1 4.33333V6"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26 31H27.6667C29.5083 31 31 29.5083 31 27.6667V26"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    name="Network"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.9983 12.9983V12.9983C29.655 12.9983 31 14.3417 31 16V16C31 17.6567 29.6567 19.0017 27.9983 19.0017V19.0017C26.3417 19.0017 24.9967 17.6583 24.9967 16V16C25 14.3417 26.3433 12.9983 27.9983 12.9983Z"
      stroke="url(#paint0_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 5.72665V5.72665C17.6567 5.72665 19.0017 7.06999 19.0017 8.72832V8.72832C19.0017 10.385 17.6583 11.73 16 11.73V11.73C14.3433 11.7283 12.9983 10.3867 12.9983 8.72832V8.72832C12.9983 7.06999 14.3417 5.72665 16 5.72665Z"
      stroke="url(#paint1_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 20.2717V20.2717C17.6567 20.2717 19.0017 21.615 19.0017 23.2733V23.2733C19.0017 24.93 17.6583 26.275 16 26.275V26.275C14.3433 26.275 12.9983 24.9317 12.9983 23.2733V23.2733C12.9983 21.6133 14.3417 20.2717 16 20.2717Z"
      stroke="url(#paint2_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 11.8333L18.6833 10.0333"
      stroke="url(#paint3_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.4833 17.6167L22.6667 19.4167"
      stroke="url(#paint4_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.00167 19.0017V19.0017C2.345 19.0017 1 17.6583 1 16V16C1 14.3433 2.34333 13 4.00167 13V13C5.65833 13 7.00333 14.3433 7.00333 16.0017V16.0017C7 17.6583 5.65667 19.0017 4.00167 19.0017Z"
      stroke="url(#paint5_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 20.1667L13.3167 21.9667"
      stroke="url(#paint6_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.51666 14.3833L9.33333 12.5833"
      stroke="url(#paint7_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 26V27.6667C1 29.5083 2.49167 31 4.33333 31H6"
      stroke="url(#paint8_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 6V4.33333C31 2.49167 29.5083 1 27.6667 1H26"
      stroke="url(#paint9_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 1H4.33333C2.49167 1 1 2.49167 1 4.33333V6"
      stroke="url(#paint10_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26 31H27.6667C29.5083 31 31 29.5083 31 27.6667V26"
      stroke="url(#paint11_linear_7204_3702)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7204_3702"
        x1="24.0359"
        y1="18.3539"
        x2="32.4451"
        y2="17.7508"
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
        id="paint1_linear_7204_3702"
        x1="12.0376"
        y1="11.0823"
        x2="20.4467"
        y2="10.4792"
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
        id="paint2_linear_7204_3702"
        x1="12.0376"
        y1="25.6273"
        x2="20.4467"
        y2="25.0242"
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
        id="paint3_linear_7204_3702"
        x1="18.2326"
        y1="11.6391"
        x2="22.149"
        y2="11.1996"
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
        id="paint4_linear_7204_3702"
        x1="22.2159"
        y1="19.2225"
        x2="26.1323"
        y2="18.7829"
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
        id="paint5_linear_7204_3702"
        x1="0.0392392"
        y1="18.3541"
        x2="8.44839"
        y2="17.7509"
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
        id="paint6_linear_7204_3702"
        x1="10.0492"
        y1="21.7724"
        x2="13.9656"
        y2="21.3329"
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
        id="paint7_linear_7204_3702"
        x1="6.06589"
        y1="14.1891"
        x2="9.9823"
        y2="13.7496"
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
        id="paint8_linear_7204_3702"
        x1="0.19981"
        y1="30.4605"
        x2="7.20356"
        y2="29.9582"
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
        id="paint9_linear_7204_3702"
        x1="25.1998"
        y1="5.46052"
        x2="32.2036"
        y2="4.95823"
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
        id="paint10_linear_7204_3702"
        x1="0.19981"
        y1="5.46052"
        x2="7.20356"
        y2="4.95823"
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
        id="paint11_linear_7204_3702"
        x1="25.1998"
        y1="30.4605"
        x2="32.2036"
        y2="29.9582"
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
