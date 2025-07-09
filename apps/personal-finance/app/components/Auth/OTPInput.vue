<script lang="ts" setup>
const { length = 4 } = defineProps<{ length: number }>();

const modelValue = defineModel<string>({ default: '' });

// const otp = ref(['', '', '', '', '', '']);
const otp = ref(new Array(length).fill(''));
const otpInputs = useTemplateRef('otpInputs');

watch(otp.value, value => (modelValue.value = value.join('')));

const onInput = (index: number) => {
  const value = otp.value[index] as string;
  if (value.length === 1 && index < otp.value.length - 1) {
    // Focus next input
    const next = otpInputs.value[index + 1]?.$el.querySelector('input');
    next?.focus();
  }
};

const onBackspace = (index: number) => {
  if (otp.value[index] === '' && index > 0) {
    const prev = otpInputs.value[index - 1]?.$el.querySelector('input');
    prev?.focus();
  }
};

onMounted(() =>
  setTimeout(() => otpInputs.value[0]?.$el.querySelector('input')?.focus(), 0)
);
</script>

<template>
  <ion-grid>
    <ion-row class="flex items-center justify-center">
      <ion-col v-for="(_, index) in otp" :key="index">
        <ion-input
          ref="otpInputs"
          v-model="otp[index]"
          inputmode="numeric"
          maxlength="1"
          type="text"
          :class="[
            'text-center border border-gray-200 w-10 h-10',
            !index && 'rounded-s-xl',
            index === otp.length - 1 && 'rounded-e-xl',
          ]"
          :autofocus="index === 0"
          @input="() => onInput(index)"
          @keydown.backspace="() => onBackspace(index)"
        />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style></style>
