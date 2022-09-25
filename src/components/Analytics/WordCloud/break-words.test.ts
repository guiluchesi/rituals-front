import { breakWords, regex } from "./break-words";

describe("Regex", () => {
  it.each([
    [
      `
      Reuniões com novos clientes
        - Tarefas
        - Relatórios
    `,
      " Reuniões com novos clientes Tarefas Relatórios ",
    ],
    ["Eu, amo, - nossos novos clientes.", "Eu amo nossos novos clientes "],
    ["Adoro banana!", "Adoro banana "],
    ["Adoro\nquebra de linhas", "Adoro quebra de linhas"],
  ])("should remove non-alphanumeric characters", (phrase, expected) => {
    const result = phrase.replace(regex, " ");
    expect(result).toBe(expected);
  });
});

describe("Word Breaker", () => {
  it("should break a phrase in lower cased words", () => {
    const phrase = `Eu amo nossos clientes`;
    const words = ["amo", "clientes"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore ponctuations", () => {
    const phrase = `Eu, amo, - nossos novos clientes.`;
    const words = ["amo", "clientes"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore line breaks", () => {
    const phrase = `
      Reuniões com novos clientes
        - Tarefas
        - Relatórios
    `;

    const words = ["reuniões", "clientes", "tarefas", "relatórios"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should remove numbers alone", () => {
    const phrase = `1. Eu amo 100% dos nossos 92 clientes do Q3 pagando 2k em 1-2 meses 3`;
    const words = ["amo", "clientes", "q3", "pagando", "2k"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });
});
