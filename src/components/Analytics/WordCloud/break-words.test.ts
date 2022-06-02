import { breakWords } from "./break-words";

describe("Word Breaker", () => {
  it("should break a phrase in lower cased words", () => {
    const phrase = `I love our new clients`;
    const words = ["i", "love", "our", "new", "clients"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore ponctuations", () => {
    const phrase = `I, love, - our new clients.`;
    const words = ["i", "love", "our", "new", "clients"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore line breaks", () => {
    const phrase = `
      Meetings with new client
        - Tasks
        - Reports
    `;
    const words = ["meetings", "with", "new", "client", "tasks", "reports"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });
});
