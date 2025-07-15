<script lang="ts" setup>
// logout from supabase
const supabase = useSupabaseClient();

const logout = async () => {
  await supabase.auth.signOut();
  navigateTo({ path: '/login' });
};
</script>

<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-black text-white"
  >
    <div class="flex flex-col gap-6">
      <span class="text-9xl font-bold">Hi</span>
      <!-- logout button -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<style scoped></style>
