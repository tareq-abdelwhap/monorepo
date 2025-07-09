<script lang="ts" setup></script>

<template>
  <div class="text-base text-slate-300 text-start flex flex-col gap-10">
    <h3
      class="text-6xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      Hi, I'm
    </h3>

    <h1
      class="text-9xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      Tareq Abdelwhap
    </h1>

    <h2
      class="text-7xl font-semibold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 500 } }"
    >
      a Full Stack Web Developer
    </h2>

    <p
      class="text-2xl font-semibold leading-8 text-slate-500"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }"
    >
      I'm a dedicated web developer with a burning desire to create innovative
      applications that make a positive impact on people's lives. My journey
      began +5 years ago when I first discovered the power of coding and its
      potential to transform the world.
    </p>
  </div>
</template>

<style scoped></style>
