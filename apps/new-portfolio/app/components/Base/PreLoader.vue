<template>
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    class="animate-spin mx-auto text-indigo-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
  >
    <g transform="rotate(0 50 50)">
      <path
        d="M50 15 A35 35 0 0 1 85 50"
        stroke-width="10"
        stroke-linecap="round"
      />
    </g>
    <text x="50%" y="95%" text-anchor="middle" fill="white" font-size="10">
      Loading dev...
    </text>
  </svg>
</template>

<style scoped>
.animate-spin {
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
