<script lang="ts" setup>
const { header = 'Header' } = defineProps<{
  header?: string;
}>();

const show = defineModel();

const emit = defineEmits<{
  close: [];
  swap: [];
}>();

const swapping = ref(false);

const motions = useMotions();

const close = async () => {
  swapping.value = false;
  await Promise.all([
    motions.modal?.leave(() => {}),
    motions.modalBackdrop?.leave(() => {}),
  ]);

  show.value = false;
  emit('close');
};

const swap = async (fn: () => void) => {
  swapping.value = true;

  await Promise.resolve(motions.modal?.leave(() => {}));
  show.value = false;
  emit('swap');

  fn();
};
</script>

<template>
  <div v-if="show" class="flex items-center justify-center fixed inset-0 z-50">
    <!-- Modal Backdrop -->
    <div
      class="absolute inset-0 bg-neutral-gray-22/60 backdrop-blur-md"
      @click="close"
      v-motion="'modalBackdrop'"
      :initial="{ opacity: swapping ? 1 : 0 }"
      :enter="{ opacity: 1, transition: { duration: 200 } }"
      :leave="{ opacity: 0, transition: { duration: 200 } }"
    />

    <!-- Modal -->
    <div
      :class="[
        'p-6 pb-10 rounded-2xl bg-neutral-gray-24 w-[605px]',
        'flex flex-col gap-12',
      ]"
      v-motion="'modal'"
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 200 } }"
      :leave="{ opacity: 0, y: 20, transition: { duration: 200 } }"
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between">
        <slot name="header">
          <AtomHeader
            :level="5"
            class="text-nun-h5 font-bold"
            v-text="header"
          />
        </slot>

        <AtomIcon
          name="icon-[material-symbols--close-rounded]"
          class="cursor-pointer"
          @click="close"
        />
      </div>

      <!-- Modal Body -->
      <slot :close="close" :swap="swap">
        <div>...</div>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
