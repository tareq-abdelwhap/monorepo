<script lang="ts" setup>
// const fetchHello = async () => {
//   const res = await fetch('https://dummyjson.com/test', { method: 'POST' });
//   return await res.json();
// };

// const {
//   // main query properties
//   asyncStatus,
//   refresh,
//   refetch,
//   // convenient aliases
//   error,
//   data,
//   status,
//   isLoading,
//   isPending,
//   isPlaceholderData,
// } = useQuery({
//   key: () => ['testsdfsdf'],
//   query: fetchHello,
//   staleTime: 1000,
// });
</script>

<template>
  <div class="flex-1 flex flex-col snap-y snap-mandatory overflow-y-scroll">
    <template-container
      as="section"
      id="home"
      class="flex-1 flex flex-col gap-6 items-center justify-center bg-bg-1"
    >
      <div class="flex flex-col gap-6 items-center justify-center">
        <h1 class="text-bg-text-u font-ubuntu text-brand-2">Developer</h1>
      </div>
    </template-container>

    <template-container
      as="section"
      id="about"
      class="flex-1 flex flex-col gap-6 items-center justify-center bg-bg-2"
    >
      <div class="flex flex-col gap-6 items-center justify-center">
        <h1 class="text-bg-text-u font-ubuntu text-brand-2">About</h1>
      </div>
    </template-container>
  </div>
</template>

<style scoped></style>
