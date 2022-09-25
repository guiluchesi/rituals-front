import { WordCount } from "./count-words";

export interface TagCloudData {
  value: string;
  count: number;
}

export const cloudParser = (wordCount: WordCount): TagCloudData[] => {
  const wordCountsArray = Object.entries(wordCount).map((word) => {
    return {
      value: word[0],
      count: word[1],
    };
  });

  return wordCountsArray;
};
