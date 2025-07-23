export const useAuthStore = defineStore('authStore', () => {
  const supabase = useSupabaseClient();

  // const email = ref('');
  // const otp = ref('');
  // const errorMsg = ref('');
  const loading = ref(false);
  const openOtpModal = ref(false);

  const login = async (email: string) => {
    loading.value = true;

    const { error } = await supabase.auth.signInWithOtp({ email });

    loading.value = false;

    if (error) throw error;

    openOtpModal.value = true;
  };

  const verifyOTP = async (email: string, token: string) => {
    try {
      loading.value = true;

      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      });

      if (error) throw error;

      const { error: sessionError } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      navigateTo({ path: '/' });
    } catch (error) {
      console.error(error);
      loading.value = false;
      throw error;
    }
  };

  return {
    // email,
    // otp,
    // errorMsg,
    loading,
    openOtpModal,

    login,
    verifyOTP,
  };
});
