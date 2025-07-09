<script setup lang="ts">
const router = useIonRouter();
const authStore = useAuthStore();
const logout = async () => {
  const loading = await loadingController.create({ message: 'Logging Out...' });
  loading.present();

  await authStore.logout();

  loading.dismiss();
  router.replace('/auth');
};
</script>

<template>
  <LayoutPage page-title="Settings">
    <div class="flex flex-col gap-10">
      <div>
        <ion-label>Period Setting:</ion-label>
        <BasePeriod />
      </div>

      <ion-button @click="logout">
        <ion-label>Logout</ion-label>
        <ion-icon :icon="ioniconsLogOutOutline" />
      </ion-button>
    </div>
  </LayoutPage>
</template>
