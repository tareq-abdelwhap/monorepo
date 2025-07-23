<script setup lang="ts">
import type { input } from '#build/ui';
import * as v from 'valibot';

definePageMeta({ middleware: 'guest', layout: 'auth' });

const authStore = useAuthStore();
const { loading, openOtpModal } = storeToRefs(authStore);

const loginState = reactive({ email: '' });
const emailSchema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
});

const otp = ref('');
const otpSchema = v.pipe(v.string(), v.length(6, 'Invalid OTP'));
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

      <u-form
        :state="loginState"
        :schema="emailSchema"
        class="flex flex-col gap-4"
        @submit.prevent="() => authStore.login(loginState.email)"
      >
        <u-form-field label="Email" name="email">
          <u-input
            v-model="loginState.email"
            placeholder="Email"
            size="xl"
            class="w-full"
            :ui="{
              base: 'bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 border border-white/20 rounded-md',
            }"
          />
        </u-form-field>

        <u-button
          type="submit"
          :loading="loading"
          class="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition disabled:opacity-50 w-fit"
          label="Login / Sign Up"
        />
      </u-form>
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
            @click="() => authStore.verifyOTP(loginState.email, otp)"
            :disabled="loading"
            class="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition disabled:opacity-50"
            v-text="loading ? 'Verifying...' : `Verify`"
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
