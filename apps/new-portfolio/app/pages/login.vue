<script setup lang="ts">
definePageMeta({ middleware: 'guest', layout: 'auth' });

const authStore = useAuthStore();
const { email, otp, errorMsg, loading, openOtpModal } = storeToRefs(authStore);
</script>

<template>
  <div
    class="h-screen w-full bg-black text-white flex justify-center items-center relative overflow-hidden bg-url('/imgs/slider01.jpg') bg-cover bg-center"
  >
    <div
      class="z-10 w-full max-w-md px-6 py-8 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
    >
      <h1 class="text-3xl font-bold text-white mb-2">Welcome Back</h1>
      <p class="mb-6 text-gray-400">Sign in to continue your journey</p>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            :class="[
              'p-3 bg-white/10',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:ring-2 focus:ring-white/20',
              'border rounded-md',
              !!errorMsg ? 'border-red-400' : 'border-white/20',
            ]"
          />
          <span
            v-if="errorMsg"
            class="text-red-400 text-sm"
            v-text="errorMsg"
          />
        </div>

        <button
          @click="authStore.login"
          :disabled="loading"
          class="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition disabled:opacity-50"
        >
          {{ loading ? 'Loading...' : 'Login / Sign Up' }}
        </button>
      </div>
    </div>

    <!-- OTP Modal -->
    <div
      v-if="openOtpModal"
      class="fixed inset-0 flex items-center justify-center bg-black/60 z-40"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 200 } }"
      :leave="{ opacity: 0, transition: { duration: 200 } }"
      @click="() => (openOtpModal = false)"
    >
      <div
        class="z-40 absolute w-full max-w-sm px-6 py-8 bg-black rounded-2xl border border-white/10"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 200 } }"
        :leave="{ opacity: 0, y: 40, transition: { duration: 200 } }"
        @click.stop
      >
        <p class="mb-6 text-gray-400 text-center">
          Enter the OTP sent to your email
        </p>

        <div class="flex flex-col gap-4">
          <input
            v-model="otp"
            type="text"
            maxlength="6"
            placeholder="OTP"
            class="p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-center"
          />

          <button
            @click="authStore.verifyOTP"
            :disabled="loading"
            class="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition disabled:opacity-50"
            v-text="loading ? 'Verifying...' : `Verify`"
          />

          <span
            v-if="errorMsg"
            class="text-red-400 text-sm mt-2"
            v-text="errorMsg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #aaa;
}
</style>
