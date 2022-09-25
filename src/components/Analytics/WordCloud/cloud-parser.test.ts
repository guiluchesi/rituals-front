import { cloudParser } from "./cloud-parser";

describe("Cloud Parser", () => {
  it("should parse a word count to the TagCloud data format", () => {
    const wordCount = { a: 3, b: 2, c: 5 };

    const result = cloudParser(wordCount);

    expect(result).toEqual([
      {
        value: "a",
        count: 3,
      },
      {
        value: "b",
        count: 2,
      },
      {
        value: "c",
        count: 5,
      },
    ]);
  });
});
