<script lang="ts" setup></script>

<template>
  <aside class="flex">
    <div
      :class="[
        'flex flex-col items-center justify-between',
        'border-e-2 border-e-neutral-gray-22',
        'pb-20',
        'w-20',
      ]"
    >
      <div class="flex flex-col items-center gap-10">
        <!-- Logo -->
        <div class="py-6 px-5 cursor-pointer">
          <AtomImage src="/imgs/logo.png" class="w-10" />
        </div>

        <!-- Menus -->
        <MoleculeAsideMenus />
      </div>

      <!-- Language -->
      <MoleculeLanguageSwitcher />
    </div>

    <!-- navigation -->
    <MoleculeAsideNav />
  </aside>
</template>

<style scoped></style>
