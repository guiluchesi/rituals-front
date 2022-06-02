import { countWords } from "./count-words";

describe("Word Counter", () => {
  it("should count words", () => {
    const words = ["a", "b", "c", "a", "b", "c", "a", "b", "c"];

    const result = countWords(words);

    expect(result).toEqual({ a: 3, b: 3, c: 3 });
  });

  it("should increment an existing if it is passed as param", () => {
    const words = ["a", "b"];

    const result = countWords(words, { a: 1 });

    expect(result).toEqual({ a: 2, b: 1 });
  });
});
