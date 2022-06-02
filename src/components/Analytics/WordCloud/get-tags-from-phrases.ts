import { TagCloudData } from "./cloud-parser";

import { breakWords } from "./break-words";
import { countWords } from "./count-words";
import { cloudParser } from "./cloud-parser";

export const getTagsFromPhrases = (phrases: string[]): TagCloudData[] => {
  const phrasesWords = phrases.map(breakWords);
  const wordCount = phrasesWords.reduce((countedWords, words) => {
    return countWords(words, countedWords);
  }, {});

  const a = cloudParser(wordCount);
  return a;
};
