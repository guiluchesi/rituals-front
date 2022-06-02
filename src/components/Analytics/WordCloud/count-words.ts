export interface WordCount {
  [word: string]: number;
}

export const countWords = (
  wordsArray: string[],
  startCount?: WordCount
): WordCount => {
  const wordCount = wordsArray.reduce((acc: WordCount, currentWord: string) => {
    const countedWords = Object.keys(acc);
    const existingWord = countedWords.includes(currentWord);

    return {
      ...acc,
      [currentWord]: existingWord ? acc[currentWord] + 1 : 1,
    };
  }, startCount ?? {});

  return wordCount;
};
