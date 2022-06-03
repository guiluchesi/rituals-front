import { getTagsFromPhrases } from "./get-tags-from-phrases";

describe("Word Cloud", () => {
  it("should return the correct format of word count from phrases", () => {
    const phrase1 = `We had a meeting with the client`;
    const phrase2 = `we are having too much meetings for my taste`;
    const phrases = [phrase1, phrase2];

    const result = getTagsFromPhrases(phrases);

    expect(result).toEqual([
      { value: "we", count: 2 },
      { value: "had", count: 1 },
      { value: "meeting", count: 1 },
      { value: "with", count: 1 },
      { value: "the", count: 1 },
      { value: "client", count: 1 },
      { value: "are", count: 1 },
      { value: "having", count: 1 },
      { value: "too", count: 1 },
      { value: "much", count: 1 },
      { value: "meetings", count: 1 },
      { value: "my", count: 1 },
      { value: "taste", count: 1 },
    ]);
  });
});
