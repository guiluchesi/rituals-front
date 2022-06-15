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
    const phrase = `Eu amo nossos 9 clientes`;
    const words = ["amo", "clientes"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore ponctuations", () => {
    const phrase = `Eu, amo, - nossos novos 4 clientes.`;
    const words = ["amo", "clientes"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });

  it("should ignore line breaks", () => {
    const phrase = `
      Reuniões com novos clientes
        - 2 Tarefas
        - 4 Relatórios
    `;

    const words = ["reuniões", "clientes", "tarefas", "relatórios"];

    const result = breakWords(phrase);

    expect(result).toEqual(words);
  });
});
