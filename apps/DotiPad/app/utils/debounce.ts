// export const useDebounce = () => {
//   let timeout: ReturnType<typeof setTimeout> | undefined;

//   return function (fn: () => void, waitFor: number) {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(fn, waitFor);
//   };
// };

const timeout = ref<ReturnType<typeof setTimeout>>();
export const debounce = (fn: () => void, waitFor: number) => {
  if (timeout.value) clearTimeout(timeout.value);

  timeout.value = setTimeout(fn, waitFor);
};
