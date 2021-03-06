const data = [
  {
    id: "muoKhHdgwdBo",
    title: "Quem está por aqui? 😀",
    type: "short_text",
    answers: [
      "marcel",
      "Rodrigo",
      "Aline",
      "Mario",
      "Guilherme",
      "Diêgo",
      "Eduardo Sakabe",
      "Gustavo",
      "Maurício",
    ],
  },
  {
    id: "X5caiLW8nenf",
    title: "Oi! Está tudo bem com você? ",
    type: "opinion_scale",
    range: 6,
    answers: [5, 5, 4, 4, 5, 4, 4, 3, 5],
  },
  {
    id: "2zraqs85Fi8q",
    title: "Quais são as coisas mais importantes que você fez esta semana? 🙌",
    type: "long_text",
    answers: [
      "Touchpoints com clientes\nCronograma de revisão Q2 e construção Q3 com Pixeon",
      "Terminei o backend de gerenciamento de usuários.",
      "- Preparar protótipo timeline para colocar na Alphabot semana que vem\n- Finalizar diagnóstico dos dados para conversar com CS\n- Planning e rotinas do time",
      "Voltar o olhar para o estrutural, conseguir revisar 100% do pipefy, alinhamentos importantes com grandes clientes, boas vindas em novos clientes.",
      "- Pesquisa de comentários pro time B\n- Documentação arquitetural para a nova feature de comentários/threads/reactions do time A\n- Revisão de código/teste da gestão de ciclos",
      "* Finalização do Gerenciamento de Ciclos\n* Gerenciamento de Usuários",
      "- Gerenciamento do Time de Engenharia.\n- budOS - Plano de Carreira\n- Pesquisa sobre task management systems no Time de Research.",
      "Rituais - tela comentarios\n1acesso - Fluxo / Requisitos / UI / entrevistas",
      "- Visão produto seed e estratégia Q3\n- Organização teste MVP\n- Relacionamento EU",
    ],
  },
  {
    id: "GNiIXE7SquUn",
    title: "E para a próxima semana. Quais são as suas prioridades? 🧭",
    type: "long_text",
    answers: [
      "revisões dos OKRs Q2 com Pixeon\nretomar o foco para a ferramenta de suporte\nrevisar os vídeos da Central dos Buddies\ngravar vídeo de PDI para a Central",
      "Ajudar a polir a entrega das próximas features",
      "- Discovery sobre a boa adoção de okr\n- Apoio para o Má na exploração de potencializar o squad \n- Testar um novo bot",
      "Manter o olhar para os OKRs, renovações e engajamento de clientes. Montar cronogramas de review e construção Q3 para todos os clientes.  Dar passos importantes para avançar clientes novos.",
      "Feature de comentários (time A e B);",
      "Concluir o gerenciamento de usuários",
      "- Gerenciamento do Time de Engenharia.\n- Iteração (e talvez teste) do protótipo de Research.\n- Contribuir para o pitch da rodada seed.",
      "1acesso UI / testes",
      "- Comunicação prioridades Q3\n- Testes MVP rotinas\n- Plannings\n- Desenho jornada PDI bud",
    ],
  },
  {
    id: "s52wQwVXisc7",
    title: "Alguma coisa bloqueia ou preocupa você? 🚧",
    type: "yes_no",
    answers: [false, false, false, true, false, false, false, false, false],
  },
  {
    id: "aJRQDRitcFjc",
    title: "Você gostaria de compartilhar mais alguma coisa com o seu time? 🧙‍♂️",
    type: "long_text",
    answers: [
      "ter amigos é legal!",
      "A sprint ta correndo super bem! vamo que vamo",
      "1- O perfil de pessoas que trabalham com estratégia está fora do que a bud precisa agora para o time de CS. Gostaria de já ter 2-3 BONS finalistas. A contratação é apenas o primeiro passo para algo que preciso muito que é trabalhar mais na estratégia e processo de CS e menos imerso no cliente (hoje existe uma alta demanda de eu estar construindo com lideranças, boas vindas, touchpoints...). Acredito que continuarei fazendo isso porém cada vez mais high level. \n2- O bug de identificação é algo que causa stress com cliente e estou feliz que está sendo resolvido. Porém, a lentidão na hora de usar checklist é algo que me preocupa muito pois não conseguirei rodar as oficinas como Agile Coach com clientes onde criamos e revisamos checklists. Já acionei time de produto para ajudar. \n3- O wellbeing summit foi bem marcante pessoalmente. Estou com saudades de avançar alguns projetos de trabalho voluntário e impacto social que me traziam muita satisfação pessoal mas o tempo que tenho agora fora bud é muito dedicado ao Ignácio (baita projeto :). Pra amenizar estou retomando meu side project de bem estar online na criação e consumo de conteúdo e espero poder apresentar pra vocês minhas hipóteses em breve como foodforthought. \n4- Ainda não está claro para mim a questão de próximos passos na carreira (em fevereiro quando entrei eu tinha uma clareza mas agora vejo que temas como stock option, promoções etc é ainda algo que está sendo construído e pode mudar, mas vejo que estamos trabalhando nisso.)",
      "Essa semana foi bem diferente do usual mas gostei bastante de como tudo se desenrolou e dos outcomes dela",
      "-",
      "Time de Desenvolvimento:\n- A principal prioridade da próxima semana é finalizar o Gerenciamento de Usuário. Logo, finalizamos nosso OKR de dar total autonomia para os usuários.\n- Perin e Gui continuam focados no discovery técnico e na quebra de tarefas do Modo Rascunho.\nTime de Research:\n- Precisamos retomar o ritmo dos testes de protótipo.",
      "não",
      "- Reta final do Q2 pra gente acelerar nos OKRs",
    ],
  },
];

export const getAnalytics = () => data;
