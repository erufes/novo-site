export type ProjectType = 'competitivo' | 'pesquisa' | 'educacional' | 'evento';

export type Project = {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  emoji: string;
  tags: string[];
  type: ProjectType;
  /** Foto única do projeto: `/projetos/<slug>.png` em /public. */
  photo: string;
};

export const projects: Project[] = [
  {
    name: 'Seguidor de Linhas',
    slug: 'seguidor-de-linhas',
    description:
      'Robôs autônomos que percorrem trajetos demarcados por linhas no menor tempo possível.',
    longDescription:
      'O projeto de Seguidor de Linhas desenvolve robôs compactos e velozes capazes de percorrer circuitos demarcados por linhas pretas sobre fundo branco. Utilizando sensores infravermelhos e algoritmos de controle PID, os robôs tomam decisões em tempo real para manter-se na trajetória com a maior velocidade possível. A equipe participa de diversas competições regionais e nacionais, incluindo a CBR e a LARC.',
    emoji: '🏎️',
    tags: ['PID', 'sensores IR', 'Arduino', 'velocidade', 'controle'],
    type: 'competitivo',
    photo: '/projetos/seguidor-de-linhas.png',
  },
  {
    name: 'VSSS',
    slug: 'vsss',
    description:
      'Futebol de robôs em escala reduzida com visão computacional e estratégia autônoma.',
    longDescription:
      'O Very Small Size Soccer (VSSS) é uma categoria de futebol de robôs onde equipes de três robôs jogam de forma totalmente autônoma em um campo compacto. O sistema utiliza uma câmera aérea para visão computacional, processamento de imagem em tempo real e algoritmos de planejamento de trajetória e estratégia de jogo. O projeto integra eletrônica, mecânica e software em um sistema multi-agente complexo.',
    emoji: '⚽',
    tags: [
      'visão computacional',
      'OpenCV',
      'estratégia',
      'multi-agente',
      'ROS',
    ],
    type: 'pesquisa',
    photo: '/projetos/vsss.png',
  },
  {
    name: 'Simulação 2D',
    slug: 'simulacao-2d',
    description:
      'Simulação de futebol de robôs em ambiente 2D com foco em inteligência artificial.',
    longDescription:
      'O projeto de Simulação 2D utiliza o simulador RoboCup 2D Soccer Simulation para desenvolver estratégias de jogo baseadas em inteligência artificial. Os agentes virtuais competem em partidas simuladas onde devem cooperar, comunicar-se e tomar decisões em tempo real. É uma excelente porta de entrada para o mundo da IA aplicada à robótica, sem necessidade de hardware físico.',
    emoji: '🖥️',
    tags: [
      'inteligência artificial',
      'simulação',
      'RoboCup',
      'C++',
      'estratégia',
    ],
    type: 'competitivo',
    photo: '/projetos/simulacao-2d.png',
  },
  {
    name: 'Sumô',
    slug: 'sumo',
    description:
      'Robôs de combate que devem empurrar o oponente para fora da arena circular.',
    longDescription:
      'O projeto de Sumô desenvolve robôs autônomos projetados para competições de sumô robótico. Os robôs devem detectar o oponente e empurrá-lo para fora de uma arena circular (dohyō), utilizando sensores de proximidade, motores de alta potência e estratégias de ataque e defesa. O projeto abrange categorias de diferentes pesos e dimensões, desafiando a equipe em projetos mecânicos e eletrônicos variados.',
    emoji: '🤖',
    tags: [
      'combate',
      'sensores ultrassônicos',
      'motores DC',
      'estratégia',
      'CAD',
    ],
    type: 'competitivo',
    photo: '/projetos/sumo.png',
  },
  {
    name: 'OPEN',
    slug: 'open',
    description:
      'Categoria aberta para projetos inovadores e demonstrações de robótica criativa.',
    longDescription:
      'A categoria OPEN permite que a equipe explore projetos de robótica sem as restrições das categorias tradicionais. É o espaço para inovação, onde são desenvolvidos protótipos que combinam criatividade e tecnologia. Os projetos OPEN frequentemente resultam em demonstrações interativas e soluções que abordam problemas reais, sendo apresentados em feiras e competições.',
    emoji: '💡',
    tags: ['inovação', 'prototipagem', 'criatividade', 'IoT', 'impressão 3D'],
    type: 'competitivo',
    photo: '/projetos/open.png',
  },
  {
    name: 'Duckietown',
    slug: 'duckietown',
    description:
      'Plataforma de pesquisa em veículos autônomos em miniatura com foco em aprendizado de máquina.',
    longDescription:
      'O projeto Duckietown utiliza uma plataforma padronizada de veículos autônomos em miniatura para pesquisa em navegação autônoma, percepção visual e aprendizado de máquina. Os Duckiebots navegam por uma cidade em miniatura completa com faixas, sinalizações e interseções. O projeto é parte de uma rede internacional de universidades e promove pesquisa de ponta em direção autônoma acessível.',
    emoji: '🦆',
    tags: [
      'veículos autônomos',
      'ROS',
      'machine learning',
      'Raspberry Pi',
      'visão computacional',
    ],
    type: 'pesquisa',
    photo: '/projetos/duckietown.png',
  },
  {
    name: 'PDR',
    slug: 'pdr',
    description:
      'Projeto de pesquisa e desenvolvimento em robótica aplicada a problemas reais.',
    longDescription:
      'O Projeto de Desenvolvimento em Robótica (PDR) é o braço de pesquisa da ERUS voltado para a aplicação de robótica em problemas do mundo real. Envolve projetos de pesquisa em parceria com laboratórios e departamentos da UFES, abordando temas como robótica assistiva, automação, processamento de sinais e sistemas embarcados. Os resultados frequentemente são publicados em conferências e periódicos científicos.',
    emoji: '🔬',
    tags: [
      'pesquisa',
      'sistemas embarcados',
      'automação',
      'publicações',
      'robótica assistiva',
    ],
    type: 'pesquisa',
    photo: '/projetos/pdr.png',
  },
];
