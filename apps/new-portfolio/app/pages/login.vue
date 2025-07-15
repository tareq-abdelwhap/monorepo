<script lang="ts" setup>
const supabase = useSupabaseClient();

let { data: home, error } = await supabase.from('homes').select();
</script>

<template>
  LOG IN PAGE
  <pre>{{ home }}</pre>
  <pre>{{ error }}</pre>
</template>

<style scoped></style>
