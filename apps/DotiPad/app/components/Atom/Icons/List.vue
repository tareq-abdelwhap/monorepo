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
    name="List"
    class="fill-none stroke-neutral-gray-8"
  >
    <path
      d="M8.99956 19.0038H3.99748C3.46678 19.0038 2.95777 18.7932 2.58251 18.4179C2.20725 18.0426 1.99664 17.5336 1.99664 17.0029V2.99711C1.99664 2.46641 2.20725 1.95741 2.58251 1.58215C2.95777 1.20689 3.46678 0.996277 3.99748 0.996277H16.0025C16.5332 0.996277 17.0422 1.20689 17.4174 1.58215C17.7927 1.95741 18.0033 2.46641 18.0033 2.99711V7.99919"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.996246 5.99838H3.32722"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.996246 10H3.32722"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.87619 14.0017H3.32721"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.99875 5.99838H14.0017"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.99875 8.9996H10"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0037 19.0038L17.364 17.3641"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.7259 11.0004C16.7835 11.0004 18.4515 12.6684 18.4515 14.726C18.4515 16.7835 16.7835 18.4515 14.7259 18.4515C12.6684 18.4515 11.0004 16.7835 11.0004 14.726C11.0005 12.6685 12.6684 11.0006 14.7259 11.0004"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    name="List"
    fill="none"
  >
    <path
      d="M8.99956 19.0038H3.99748C3.46678 19.0038 2.95777 18.7932 2.58251 18.4179C2.20725 18.0426 1.99664 17.5336 1.99664 17.0029V2.99711C1.99664 2.46641 2.20725 1.95741 2.58251 1.58215C2.95777 1.20689 3.46678 0.996277 3.99748 0.996277H16.0025C16.5332 0.996277 17.0422 1.20689 17.4174 1.58215C17.7927 1.95741 18.0033 2.46641 18.0033 2.99711V7.99919"
      stroke="url(#paint0_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.996246 5.99838H3.32722"
      stroke="url(#paint1_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.996246 10H3.32722"
      stroke="url(#paint2_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.87619 14.0017H3.32721"
      stroke="url(#paint3_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.99875 5.99838H14.0017"
      stroke="url(#paint4_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.99875 8.9996H10"
      stroke="url(#paint5_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0037 19.0038L17.364 17.3641"
      stroke="url(#paint6_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.7259 11.0004C16.7835 11.0004 18.4515 12.6684 18.4515 14.726C18.4515 16.7835 16.7835 18.4515 14.7259 18.4515C12.6684 18.4515 11.0004 16.7835 11.0004 14.726C11.0005 12.6685 12.6684 11.0006 14.7259 11.0004"
      stroke="url(#paint7_linear_7213_3711)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7213_3711"
        x1="-0.56503"
        y1="17.0609"
        x2="21.8804"
        y2="15.63"
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
        id="paint1_linear_7213_3711"
        x1="0.623203"
        y1="6.39065"
        x2="3.81595"
        y2="5.85713"
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
        id="paint2_linear_7213_3711"
        x1="0.623203"
        y1="10.3923"
        x2="3.81595"
        y2="9.85878"
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
        id="paint3_linear_7213_3711"
        x1="0.483934"
        y1="14.3939"
        x2="3.83151"
        y2="13.8057"
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
        id="paint4_linear_7213_3711"
        x1="5.87802"
        y1="6.39065"
        x2="13.7531"
        y2="2.43717"
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
        id="paint5_linear_7213_3711"
        x1="6.51844"
        y1="9.39187"
        x2="10.5571"
        y2="8.52293"
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
        id="paint6_linear_7213_3711"
        x1="17.1016"
        y1="18.8268"
        x2="19.3984"
        y2="18.6621"
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
        id="paint7_linear_7213_3711"
        x1="9.80794"
        y1="17.6476"
        x2="20.2451"
        y2="16.8991"
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
