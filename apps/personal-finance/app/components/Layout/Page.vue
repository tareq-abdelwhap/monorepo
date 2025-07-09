<script lang="ts" setup>
defineProps<{ pageTitle: string }>();
</script>

<template>
  <ion-page>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<style>
ion-content {
  /* Dark Purple  */
  --background: #120829;

  /* White Text */
  --color: #fff;

  /* Width when its on pc screen */
  /* Query for pc only */
  @media (min-width: 768px) {
    width: 400px;
    display: flex;
    align-self: center;
  }
}
</style>
