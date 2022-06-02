export const breakWords = (phrase: string): string[] => {
  const words = phrase.toLowerCase().split(/\W+/).filter(Boolean);
  return words;
};
