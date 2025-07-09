<script setup lang="ts">
const authStore = useAuthStore();
const { loginError, otpError } = storeToRefs(authStore);

const credentials = reactive({ email: '' });

const otpModal = useTemplateRef('otp-modal');
const login = async (otp = false) => {
  const loading = await loadingController.create({ message: 'Signing in...' });
  loading.present();

  try {
    await authStore.login(credentials.email, otp);

    if (!loginError.value) otpModal.value.$el.present();
  } catch (error) {
    console.error(error);
  } finally {
    loading.dismiss();
  }
};

const otp = ref('');
const otpLength = 6;

const router = useIonRouter();
const verify = async () => {
  await authStore.verifyOTP({ email: credentials.email, otp: otp.value });

  otpModal.value.$el.dismiss();
  router.replace('/tabs/home');
};
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="flex justify-center items-center h-screen">
        <div class="border border-gray-200 rounded-lg shadows p-5">
          <form @submit.prevent="() => login()">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                v-model="credentials.email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <!-- <div class="flex items-center justify-between"> -->

            <ion-button expand="block" type="submit"> Sign In </ion-button>
            <span
              v-if="loginError"
              class="text-xs text-center text-red-600"
              @click="() => login(true)"
              v-text="loginError"
            />

            <ion-modal id="example-modal" ref="otp-modal">
              <form
                @submit.prevent="verify"
                class="flex flex-col items-center gap-5 p-5"
              >
                <div class="flex flex-col gap-1 justify-center items-center">
                  <h3 class="!m-0" v-text="`OTP Verification`" />
                  <span
                    class="text-gray-500 text-sm"
                    v-text="`Check your email for a verification code`"
                  />
                </div>

                <div class="flex flex-col gap-2 justify-center items-center">
                  <span
                    class="text-sm text-center"
                    v-text="
                      `Enter the 6-digit code sent to ${credentials.email}`
                    "
                  />
                  <AuthOTPInput v-model="otp" :length="otpLength" />

                  <!-- resend -->
                  <span
                    class="text-sm text-blue-600 cursor-pointer hover:underline"
                    @click="() => login()"
                    v-text="`send again`"
                  />
                  <span
                    v-if="otpError"
                    class="text-xs text-center text-red-600"
                    @click="() => login(true)"
                    v-text="otpError"
                  />
                </div>

                <ion-button
                  class="w-full"
                  type="submit"
                  :disabled="otp.length !== otpLength"
                >
                  Verify
                </ion-button>
              </form>
            </ion-modal>

            <!-- </div> -->
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
ion-modal#example-modal {
  --width: 85%;
  --height: fit-content;
  --border-radius: 10px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal#example-modal h1 {
  margin: 20px 20px 10px 20px;
}
</style>
