<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <svg
    v-if="!active"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    name="Dashboard"
    class="fill-none stroke-neutral-gray-8"
  >
    <g id="Group">
      <path
        id="Path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.91667 12.25H4.33333C2.49167 12.25 1 10.7583 1 8.91667V4.33333C1 2.49167 2.49167 1 4.33333 1H8.91667C10.7583 1 12.25 2.49167 12.25 4.33333V8.91667C12.25 10.7583 10.7583 12.25 8.91667 12.25Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Path_2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.6667 12.25H23.0833C21.2417 12.25 19.75 10.7583 19.75 8.91667V4.33333C19.75 2.49167 21.2417 1 23.0833 1H27.6667C29.5083 1 31 2.49167 31 4.33333V8.91667C31 10.7583 29.5083 12.25 27.6667 12.25Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Path_3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.91667 31H4.33333C2.49167 31 1 29.5083 1 27.6667V23.0833C1 21.2417 2.49167 19.75 4.33333 19.75H8.91667C10.7583 19.75 12.25 21.2417 12.25 23.0833V27.6667C12.25 29.5083 10.7583 31 8.91667 31Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Path_4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.6667 31H23.0833C21.2417 31 19.75 29.5083 19.75 27.6667V23.0833C19.75 21.2417 21.2417 19.75 23.0833 19.75H27.6667C29.5083 19.75 31 21.2417 31 23.0833V27.6667C31 29.5083 29.5083 31 27.6667 31Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    name="Dashboard"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.91667 12.25H4.33333C2.49167 12.25 1 10.7583 1 8.91667V4.33333C1 2.49167 2.49167 1 4.33333 1H8.91667C10.7583 1 12.25 2.49167 12.25 4.33333V8.91667C12.25 10.7583 10.7583 12.25 8.91667 12.25Z"
      stroke="url(#paint0_linear_7204_3695)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.6667 12.25H23.0833C21.2417 12.25 19.75 10.7583 19.75 8.91667V4.33333C19.75 2.49167 21.2417 1 23.0833 1H27.6667C29.5083 1 31 2.49167 31 4.33333V8.91667C31 10.7583 29.5083 12.25 27.6667 12.25Z"
      stroke="url(#paint1_linear_7204_3695)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.91667 31H4.33333C2.49167 31 1 29.5083 1 27.6667V23.0833C1 21.2417 2.49167 19.75 4.33333 19.75H8.91667C10.7583 19.75 12.25 21.2417 12.25 23.0833V27.6667C12.25 29.5083 10.7583 31 8.91667 31Z"
      stroke="url(#paint2_linear_7204_3695)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.6667 31H23.0833C21.2417 31 19.75 29.5083 19.75 27.6667V23.0833C19.75 21.2417 21.2417 19.75 23.0833 19.75H27.6667C29.5083 19.75 31 21.2417 31 23.0833V27.6667C31 29.5083 29.5083 31 27.6667 31Z"
      stroke="url(#paint3_linear_7204_3695)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7204_3695"
        x1="-0.800426"
        y1="11.0362"
        x2="14.958"
        y2="9.90602"
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
        id="paint1_linear_7204_3695"
        x1="17.9496"
        y1="11.0362"
        x2="33.708"
        y2="9.90602"
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
        id="paint2_linear_7204_3695"
        x1="-0.800426"
        y1="29.7862"
        x2="14.958"
        y2="28.656"
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
        id="paint3_linear_7204_3695"
        x1="17.9496"
        y1="29.7862"
        x2="33.708"
        y2="28.656"
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
