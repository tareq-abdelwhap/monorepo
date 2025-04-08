<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <svg
    v-if="!active"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 34"
    name="Hexagon"
    class="fill-none stroke-neutral-gray-8"
  >
    <path
      d="M1 14.3867V10.6283C1 9.41667 1.65667 8.30167 2.715 7.71334L6 5.88834"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 30.8883L17.6183 32.7667C16.6117 33.3267 15.3867 33.3267 14.38 32.7667L11 30.8883"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.595 16.0583V14.7033C10.595 14.2667 10.8317 13.865 11.2133 13.6533L14.1983 11.995"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.8017 22.005L16.5833 22.6817C16.22 22.8833 15.7783 22.8833 15.4167 22.6817L12.3967 21.0033"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.405 16.0583V19.2967C21.405 19.7333 21.1683 20.135 20.7867 20.3467L17.8017 22.005"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.405 16.0583V14.7033C21.405 14.2667 21.1683 13.865 20.7867 13.6533L17.8017 11.995"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1983 11.995L15.4167 11.3183C15.78 11.1167 16.2217 11.1167 16.5833 11.3183L17.8017 11.995"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.595 16.0583V19.2967C10.595 19.7333 10.8317 20.135 11.2133 20.3467L12.3967 21.005"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 19.6133V23.3716C31 24.5816 30.3433 25.6983 29.285 26.285L26 28.1116"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 14.3867V10.6283C31 9.41834 30.3433 8.30167 29.285 7.715L26 5.88834"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 3.11166L14.3817 1.23332C15.3883 0.673324 16.6133 0.673324 17.62 1.23332L21 3.11166"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 19.6133V23.3716C1 24.5816 1.65667 25.6983 2.715 26.285L6 28.1116"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 14.3867V10.6283C31 9.41834 30.3433 8.30167 29.285 7.715L26 5.88834"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 19.6133V23.3717C1 24.5817 1.65667 25.6983 2.715 26.285L6 28.1117"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 34"
    name="Hexagon"
    fill="none"
  >
    <path
      d="M1 14.3867V10.6283C1 9.41667 1.65667 8.30167 2.715 7.71334L6 5.88834"
      stroke="url(#paint0_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 30.8883L17.6183 32.7667C16.6117 33.3267 15.3867 33.3267 14.38 32.7667L11 30.8883"
      stroke="url(#paint1_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.595 16.0583V14.7033C10.595 14.2667 10.8317 13.865 11.2133 13.6533L14.1983 11.995"
      stroke="url(#paint2_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.8017 22.005L16.5833 22.6817C16.22 22.8833 15.7783 22.8833 15.4167 22.6817L12.3967 21.0033"
      stroke="url(#paint3_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.405 16.0583V19.2967C21.405 19.7333 21.1683 20.135 20.7867 20.3467L17.8017 22.005"
      stroke="url(#paint4_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.405 16.0583V14.7033C21.405 14.2667 21.1683 13.865 20.7867 13.6533L17.8017 11.995"
      stroke="url(#paint5_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1983 11.995L15.4167 11.3183C15.78 11.1167 16.2217 11.1167 16.5833 11.3183L17.8017 11.995"
      stroke="url(#paint6_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.595 16.0583V19.2967C10.595 19.7333 10.8317 20.135 11.2133 20.3467L12.3967 21.005"
      stroke="url(#paint7_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 19.6133V23.3716C31 24.5816 30.3433 25.6983 29.285 26.285L26 28.1116"
      stroke="url(#paint8_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 14.3867V10.6283C31 9.41834 30.3433 8.30167 29.285 7.715L26 5.88834"
      stroke="url(#paint9_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 3.11166L14.3817 1.23332C15.3883 0.673324 16.6133 0.673324 17.62 1.23332L21 3.11166"
      stroke="url(#paint10_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 19.6133V23.3716C1 24.5816 1.65667 25.6983 2.715 26.285L6 28.1116"
      stroke="url(#paint11_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 14.3867V10.6283C31 9.41834 30.3433 8.30167 29.285 7.715L26 5.88834"
      stroke="url(#paint12_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 19.6133V23.3717C1 24.5817 1.65667 25.6983 2.715 26.285L6 28.1117"
      stroke="url(#paint13_linear_7204_3718)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7204_3718"
        x1="0.19981"
        y1="13.4697"
        x2="7.22708"
        y2="13.1732"
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
        id="paint1_linear_7204_3718"
        x1="9.39962"
        y1="32.9387"
        x2="22.2299"
        y2="28.9351"
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
        id="paint2_linear_7204_3718"
        x1="10.0183"
        y1="15.6199"
        x2="15.0712"
        y2="15.2986"
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
        id="paint3_linear_7204_3718"
        x1="11.5317"
        y1="22.6355"
        x2="18.8147"
        y2="21.0924"
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
        id="paint4_linear_7204_3718"
        x1="17.225"
        y1="21.3634"
        x2="22.2888"
        y2="21.1433"
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
        id="paint5_linear_7204_3718"
        x1="17.225"
        y1="15.6199"
        x2="22.2779"
        y2="15.2986"
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
        id="paint6_linear_7204_3718"
        x1="13.6217"
        y1="12.2346"
        x2="18.5759"
        y2="11.4664"
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
        id="paint7_linear_7204_3718"
        x1="10.3067"
        y1="20.4713"
        x2="12.8416"
        y2="20.405"
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
        id="paint8_linear_7204_3718"
        x1="25.1998"
        y1="27.1947"
        x2="32.2271"
        y2="26.8982"
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
        id="paint9_linear_7204_3718"
        x1="25.1998"
        y1="13.4697"
        x2="32.2271"
        y2="13.1732"
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
        id="paint10_linear_7204_3718"
        x1="9.39962"
        y1="2.86368"
        x2="22.2299"
        y2="-1.13992"
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
        id="paint11_linear_7204_3718"
        x1="0.19981"
        y1="27.1947"
        x2="7.22708"
        y2="26.8982"
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
        id="paint12_linear_7204_3718"
        x1="25.1998"
        y1="13.4697"
        x2="32.2271"
        y2="13.1732"
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
        id="paint13_linear_7204_3718"
        x1="0.19981"
        y1="27.1947"
        x2="7.22708"
        y2="26.8982"
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
