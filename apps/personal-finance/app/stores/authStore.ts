export const useAuthStore = defineStore('AuthStore', () => {
  const supabase = useSupabaseClient();

  const loginError = ref<string | null>(null);
  const otpError = ref<string | null>(null);

  const login = async (email: string, otp = false) => {
    try {
      loginError.value = otpError.value = null;

      const { error } = await supabase.auth.signInWithOtp({ email });

      if (error) throw error;
    } catch (error: any) {
      if (otp) otpError.value = error.message;
      else loginError.value = 'Something went wrong!';
    }
  };

  const verifyOTP = async (payload: { email: string; otp: string }) => {
    const { email, otp: token } = payload;

    const loading = await loadingController.create({ message: 'Verifying...' });
    loading.present();

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      });

      if (error) throw error;

      const { error: sessionError } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      const toast = await toastController.create({
        message: 'Login successful!',
        duration: 1500,
        position: 'top',
      });

      await toast.present();
    } catch (error) {
      console.error(error);
    } finally {
      loading.dismiss();
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return {
    loginError,
    otpError,
    login,
    verifyOTP,
    logout,
  };
});
