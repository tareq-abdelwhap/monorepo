export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();

  // If already logged in, redirect from /login to homepage
  if (user.value && useRoute().path === '/login') {
    return navigateTo('/');
  }
});
