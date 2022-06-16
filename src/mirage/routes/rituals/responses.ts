const data = [
  {
    id: "cunp0sguiu62cun447jcnuyoh1v7tsum",
    submitted: "2022-06-13T13:52:54Z",
    owner: "marcel",
    answers: [
      {
        fieldId: "muoKhHdgwdBo",
        fieldType: "short_text",
        question: "Quem está por aqui? 😀",
        properties: {},
        type: "text",
        text: "marcel",
      },
      {
        fieldId: "X5caiLW8nenf",
        fieldType: "opinion_scale",
        question: "Oi! Está tudo bem com você? ",
        properties: {
          start_at_one: false,
          steps: 6,
          labels: {
            left: "😣 Nem",
            center: "😐",
            right: "🤩 Tudo ótimo",
          },
        },
        type: "number",
        number: 5,
      },
      {
        fieldId: "2zraqs85Fi8q",
        fieldType: "long_text",
        question:
          "Quais são as coisas mais importantes que você fez esta semana? 🙌",
        properties: {
          description:
            "Conte sobre o que foram suas prioridades e as coisas que te deixaram com mais orgulho. Usar tópicos pode ajudar bastante também.",
        },
        type: "text",
        text: "Touchpoints com clientes\nCronograma de revisão Q2 e construção Q3 com Pixeon",
      },
      {
        fieldId: "GNiIXE7SquUn",
        fieldType: "long_text",
        question: "E para a próxima semana. Quais são as suas prioridades? 🧭",
        properties: {},
        type: "text",
        text: "revisões dos OKRs Q2 com Pixeon\nretomar o foco para a ferramenta de suporte\nrevisar os vídeos da Central dos Buddies\ngravar vídeo de PDI para a Central",
      },
      {
        fieldId: "s52wQwVXisc7",
        fieldType: "yes_no",
        question: "Alguma coisa bloqueia ou preocupa você? 🚧",
        properties: {},
        type: "boolean",
        boolean: false,
      },
      {
        fieldId: "aJRQDRitcFjc",
        fieldType: "long_text",
        question:
          "Você gostaria de compartilhar mais alguma coisa com o seu time? 🧙‍♂️",
        properties: {
          description:
            "Fique a vontade para compartilhar preocupações, conquistas ou simplesmente compartilhar uma frase inspiradora do Yoda ;).",
        },
      },
    ],
  },
  {
    id: "jlh9vihzsby9a85qcntogtjlh9vibfss",
    submitted: "2022-06-13T10:59:42Z",
    owner: "Rodrigo",
    answers: [
      {
        fieldId: "muoKhHdgwdBo",
        fieldType: "short_text",
        question: "Quem está por aqui? 😀",
        properties: {},
        type: "text",
        text: "Rodrigo",
      },
      {
        fieldId: "X5caiLW8nenf",
        fieldType: "opinion_scale",
        question: "Oi! Está tudo bem com você? ",
        properties: {
          start_at_one: false,
          steps: 6,
          labels: {
            left: "😣 Nem",
            center: "😐",
            right: "🤩 Tudo ótimo",
          },
        },
        type: "number",
        number: 5,
      },
      {
        fieldId: "2zraqs85Fi8q",
        fieldType: "long_text",
        question:
          "Quais são as coisas mais importantes que você fez esta semana? 🙌",
        properties: {
          description:
            "Conte sobre o que foram suas prioridades e as coisas que te deixaram com mais orgulho. Usar tópicos pode ajudar bastante também.",
        },
        type: "text",
        text: "Terminei o backend de gerenciamento de usuários.",
      },
      {
        fieldId: "GNiIXE7SquUn",
        fieldType: "long_text",
        question: "E para a próxima semana. Quais são as suas prioridades? 🧭",
        properties: {},
        type: "text",
        text: "Ajudar a polir a entrega das próximas features",
      },
      {
        fieldId: "s52wQwVXisc7",
        fieldType: "yes_no",
        question: "Alguma coisa bloqueia ou preocupa você? 🚧",
        properties: {},
        type: "boolean",
        boolean: false,
      },
      {
        fieldId: "aJRQDRitcFjc",
        fieldType: "long_text",
        question:
          "Você gostaria de compartilhar mais alguma coisa com o seu time? 🧙‍♂️",
        properties: {
          description:
            "Fique a vontade para compartilhar preocupações, conquistas ou simplesmente compartilhar uma frase inspiradora do Yoda ;).",
        },
        type: "text",
        text: "ter amigos é legal!",
      },
    ],
  },
];

export const getResponses = () => data;
