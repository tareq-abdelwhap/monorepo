export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  const router = useIonRouter();

  if (!user.value && !to.path.startsWith('/auth')) {
    return router.replace('/auth');
  }

  if (user.value && to.path.startsWith('/auth')) {
    return router.replace('/tabs/home');
  }
});
