<script lang="ts" setup>
import { useElementBounding, useWindowSize } from '@vueuse/core';

const { items, clearValue, multiple } = defineProps<{
  items: string[] | number[];
  placeholder?: string;
  clearValue?: boolean;
  multiple?: boolean;
}>();

// type ModelType = string | number | string[] | number[];
const model = defineModel();

const emit = defineEmits<{
  (e: 'change', value: any): void;
}>();

watch(model, () => emit('change', model.value));

const uniquID = useId();
const motions = useMotions();

const isOpen = ref(false);

const close = async () => {
  await Promise.resolve([motions[`dropdown-menu-${uniquID}`]?.leave(() => {})]);
  isOpen.value = false;
};

const toggle = () => {
  if (isOpen.value) return close();
  isOpen.value = true;
};

const select = (index: number) => {
  multiple && (model.value ||= []);

  if (multiple && Array.isArray(model.value)) {
    model.value = model.value.includes(items[index])
      ? model.value.filter(i => i !== items[index])
      : [...model.value, items[index]];

    if (model.value && !(model.value as string[]).length) {
      model.value = undefined;
    }
  } else {
    model.value = items[index];
    close();
  }
};

const clearValueFn = async () => {
  if (!clearValue) return;

  await Promise.resolve(
    motions[`dropdown-selected-value-${uniquID}`]?.leave(() => {})
  );
  await close();
  model.value = undefined;
};

// when clicking outside of container close it
const containerRef = useTemplateRef('container');
const closeDropdown = (e: any) => {
  if (!containerRef.value?.contains(e.target)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});
onUnmounted(() => document.removeEventListener('click', closeDropdown));

// check if dropdown is out of viewport
const el = useTemplateRef(`dropdown-menu`);
const { bottom } = useElementBounding(el);
const { height: windowHeight } = useWindowSize();

const isOutside = ref(false);
watch(
  () => isOpen.value,
  () =>
    setTimeout(
      () => (isOutside.value = bottom.value + 20 > windowHeight.value),
      0
    )
);
</script>

<template>
  <div
    ref="container"
    :data-key="uniquID"
    :key="uniquID"
    class="dropdown-container relative w-full"
  >
    <!-- Dropdown Button -->
    <AtomButton :key="`button-${uniquID}`" @click="toggle" class="w-full h-14">
      <div class="w-full flex items-center justify-between gap-2">
        <div class="flex flex-col grow items-start gap-px">
          <AtomLabel
            v-if="placeholder"
            :class="[
              model && 'text-nun-sx font-normal text-neutral-gray-8',
              'transition-all duration-200 ease-in-out',
            ]"
            :text="placeholder"
          />

          <AtomText
            v-if="model"
            class="text-nowrap"
            :text="
              Array.isArray(model) && multiple
                ? $t('selected', model.length)
                : model as string
            "
            v-motion="`dropdown-selected-value-${uniquID}`"
            :initial="{ opacity: 0, y: -10 }"
            :visible="{ opacity: 1, y: 0 }"
            :leave="{ opacity: 0, y: -10, transition: { duration: 100 } }"
          />
        </div>

        <div :class="['flex items-center gap-1']">
          <AtomIcon
            v-if="!!model && clearValue"
            name="icon-[material-symbols--close-small-outline-rounded]"
            :class="[
              'text-error-red-6',
              'transition-transform duration-200 ease-in-out',
            ]"
            @click.stop="clearValueFn"
          />

          <AtomIcon
            name="icon-[material-symbols--keyboard-arrow-down-rounded]"
            :class="[
              isOpen && '-rotate-180',
              'transition-transform duration-200 ease-in-out',
            ]"
          />
        </div>
      </div>
    </AtomButton>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      :key="`menu-${uniquID}`"
      ref="dropdown-menu"
      :class="[
        'min-w-full my-2 rounded-xl bg-neutral-gray-18',
        'absolute',
        isOutside ? 'bottom-full' : 'top-full',
        'overflow-hidden',
      ]"
      v-motion="`dropdown-menu-${uniquID}`"
      :initial="{ opacity: 0, y: isOutside ? 20 : -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 200 } }"
      :leave="{
        opacity: 0,
        y: isOutside ? 10 : -10,
        transition: { duration: 100 },
      }"
    >
      <div :class="['p-1 max-h-[300px] overflow-y-auto']">
        <ul class="flex flex-col gap-1">
          <MoleculeDropdownItem
            v-for="(str, idx) in items"
            :key="str"
            :label="str"
            :selected="
              multiple
                ? Array.isArray(model) && model.includes(str)
                : model === str
            "
            @select="() => select(idx)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
