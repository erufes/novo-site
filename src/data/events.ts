export type EventType = 'competicao' | 'workshop' | 'evento_interno' | 'extensao';

export type Event = {
  name: string;
  description: string;
  editions: number | string;
  type: EventType;
};

export const events: Event[] = [
  {
    name: 'TRUFES',
    description:
      'Torneio de Robótica da UFES, organizado anualmente pela ERUS. Reúne equipes de diversas universidades e escolas técnicas do Espírito Santo e de outros estados para competições em categorias como seguidor de linhas, sumô e OPEN.',
    editions: 8,
    type: 'evento_interno',
  },
  {
    name: 'OBR - Olimpíada Brasileira de Robótica',
    description:
      'A ERUS participa como competidora na modalidade universitária e apoia a organização da etapa regional no Espírito Santo, promovendo a robótica educacional no estado.',
    editions: 'Participação anual desde 2013',
    type: 'competicao',
  },
  {
    name: 'CBR - Competição Brasileira de Robótica',
    description:
      'Principal competição nacional de robótica, onde a ERUS participa nas categorias VSSS, Seguidor de Linhas, Sumô, Simulação 2D e OPEN. Realizada anualmente em conjunto com a LARC.',
    editions: 'Participação anual desde 2014',
    type: 'competicao',
  },
  {
    name: 'LARC - Latin American Robotics Competition',
    description:
      'Competição latino-americana de robótica que reúne equipes de todo o continente. A ERUS representa a UFES nas categorias VSSS, Simulação 2D e Duckietown.',
    editions: 'Participação anual desde 2016',
    type: 'competicao',
  },
  {
    name: 'Workshop de Arduino',
    description:
      'Oficinas práticas de introdução ao Arduino oferecidas pela ERUS para alunos da UFES e comunidade externa. Aborda eletrônica básica, programação e montagem de circuitos.',
    editions: 12,
    type: 'workshop',
  },
  {
    name: 'Semana de Robótica',
    description:
      'Evento anual com palestras, minicursos e demonstrações de robôs. Reúne professores, pesquisadores e entusiastas de robótica para troca de conhecimento e networking.',
    editions: 6,
    type: 'extensao',
  },
  {
    name: 'Workshop de Modelagem 3D',
    description:
      'Oficina prática de modelagem 3D com SolidWorks e Fusion 360, voltada para projetos de robótica. Inclui preparação de modelos para impressão 3D.',
    editions: 5,
    type: 'workshop',
  },
  {
    name: 'Robótica nas Escolas',
    description:
      'Projeto de extensão que leva oficinas de robótica educacional a escolas públicas de Vitória e região metropolitana, incentivando o interesse por STEM entre jovens.',
    editions: 'Desde 2018',
    type: 'extensao',
  },
  {
    name: 'Winter Challenge',
    description:
      'Competição de robótica organizada pela RoboCore, com categorias de sumô, seguidor de linhas e combate. A ERUS participa regularmente com robôs em diversas categorias de peso.',
    editions: 'Participação desde 2017',
    type: 'competicao',
  },
  {
    name: 'Iron Cup',
    description:
      'Competição regional de robótica realizada em Minas Gerais, com categorias de seguidor de linhas, sumô e trekking. A ERUS participa como preparação para competições nacionais.',
    editions: 'Participação desde 2019',
    type: 'competicao',
  },
];
