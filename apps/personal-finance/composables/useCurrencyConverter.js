import { ref, computed } from 'vue';

export function useCurrencyConverter() {
  const cadAmount = ref(0);
  const egpRate = ref(0);
  const egpAmount = computed(() => cadAmount.value * egpRate.value);
  
  // Set CAD amount
  const setCADAmount = (amount) => {
    cadAmount.value = parseFloat(amount);
  };
  
  // Set EGP rate
  const setEGPRate = (rate) => {
    egpRate.value = parseFloat(rate);
  };
  
  // Convert CAD to EGP
  const convertCADtoEGP = (amountCAD, rate) => {
    return amountCAD * rate;
  };
  
  // Convert EGP to CAD
  const convertEGPtoCAD = (amountEGP, rate) => {
    if (rate === 0) return 0;
    return amountEGP / rate;
  };
  
  // Format currency
  const formatCurrency = (amount, currency = 'EGP') => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  };
  
  return {
    cadAmount,
    egpRate,
    egpAmount,
    setCADAmount,
    setEGPRate,
    convertCADtoEGP,
    convertEGPtoCAD,
    formatCurrency
  };
}