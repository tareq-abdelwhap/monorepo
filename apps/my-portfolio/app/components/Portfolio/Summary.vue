<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-2 text-slate-300">
    <div
      class="col-span-1 text-3xl text-slate-300 text-start self-center ms-20 leading-[70px]"
      v-motion
      :initial="{ opacity: 0, y: -70 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <p class="leading-10">
        As a husband and a new father, I'm driven to provide a stable and
        fulfilling future for my family. My passion for web development has
        evolved into a mission to develop applications that not only solve
        real-world problems but also contribute to a better quality of life.
      </p>
    </div>
    <div
      class="col-span-1 text-3xl text-slate-300 text-start self-center ms-20 leading-[70px]"
    >
      <p class="leading-10">
        I believe in the power of collaboration and am excited to partner with
        like-minded individuals who share my vision. Together, we can bring
        groundbreaking ideas to life and create applications that truly resonate
        with people.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
