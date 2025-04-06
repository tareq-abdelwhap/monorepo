export const useNumberFormat = (
  number: number,
  withCurrency: boolean = true,
  options?: Intl.NumberFormatOptions
) => {
  if (withCurrency) {
    options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      ...options,
    };
  }

  let newNumber = new Intl.NumberFormat('en-US', { ...options }).format(number);

  return newNumber;
};
