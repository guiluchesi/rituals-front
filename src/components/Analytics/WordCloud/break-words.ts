import stopwords from "stopwords-pt";

export const regex = /[~!@#$%&*()_+\-\,\./`<>?'";:|{}[\]\s]+/g;

export const breakWords = (phrase: string): string[] => {
  const words = phrase
    .toLowerCase()
    .replace(/(\s\d+\s)/g, " ")
    .replace(regex, " ")
    .trim()
    .split(/\s/g)
    .filter(Boolean)
    .filter((word) => !stopwords.includes(word));

  return words;
};
