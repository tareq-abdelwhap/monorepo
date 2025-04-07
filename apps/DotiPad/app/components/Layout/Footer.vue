<script lang="ts" setup></script>

<template>
  <footer class="mt-auto">
    <div
      :class="[
        'border-t-2 border-t-neutral-gray-22',
        'py-20 container',
        'flex justify-between',
      ]"
    >
      <div class="w-fit">
        <AtomImage src="/imgs/footer-logo.png" />
      </div>

      <div class="flex gap-10 text-nun-sm">
        <div class="flex flex-col gap-4">
          <span v-text="$t('footer.careers')" />
          <span v-text="$t('footer.aboutDotipad')" />
          <span v-text="$t('footer.council')" />
          <span v-text="$t('footer.applyForLaunchpad')" />
        </div>

        <div class="flex flex-col gap-4">
          <span v-text="$t('footer.termsAndCondition')" />
          <span v-text="$t('footer.privacyPolicy')" />
          <span v-text="$t('footer.documentation')" />
          <span v-text="$t('footer.audits')" />
        </div>

        <div class="flex flex-col gap-4">
          <span v-text="$t('footer.documentation')" />
          <span v-text="$t('footer.dotipadJs')" />
        </div>
      </div>
    </div>

    <div class="py-6 container text-nun-sm border-t-2 border-t-neutral-gray-22">
      Dotipad © 2021 • support@dotipad.io • All rights reserved. Designed by
      Twenty-Two
    </div>
  </footer>
</template>

<style scoped></style>
