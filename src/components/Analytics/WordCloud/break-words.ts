import stopwords from "stopwords-pt";

export const regex = /[~!@#$%&*()_+\-\,\./`<>?'";:|{}[\]\s]+/g;

export const breakWords = (phrase: string): string[] => {
  const words = phrase
    .toLowerCase()
    .replace(regex, " ")
    .replace(/(\s|^)([0-9\s]*)(\s|$)/g, " ")
    .trim()
    .split(/\s/g)
    .filter(Boolean)
    .filter((word) => !stopwords.includes(word));

  return words;
};
