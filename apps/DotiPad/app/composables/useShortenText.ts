export const useShortenText = (text: string, length: number = 7) => {
  if (!text) return '';

  if (text.length <= length + 4) return text;

  return `${text.slice(0, length)}...${text.slice(-4)}`;
};
