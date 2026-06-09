export type Course =
  | 'engcomp'
  | 'eletrica'
  | 'ccomp'
  | 'mecanica'
  | 'civil'
  | 'economia'
  | 'sistemas';

export type Member = {
  name: string;
  course: Course;
  yearJoined: number;
  yearLeft: number | null;
  githubUsername: string;
  isProfessor: boolean;
};

export const courseLabels: Record<Course, string> = {
  engcomp: 'Engenharia de Computação',
  eletrica: 'Engenharia Elétrica',
  ccomp: 'Ciência da Computação',
  mecanica: 'Engenharia Mecânica',
  civil: 'Engenharia Civil',
  economia: 'Economia',
  sistemas: 'Sistemas de Informação',
};

export const courseEmojis: Record<Course, string> = {
  engcomp: '💻',
  eletrica: '⚡',
  ccomp: '🖥️',
  mecanica: '⚙️',
  civil: '🏗️',
  economia: '📊',
  sistemas: '🌐',
};

export const activeMembers: Member[] = [
  {
    name: 'Prof. Dr. Ricardo Carminati de Mello',
    course: 'eletrica',
    yearJoined: 2018,
    yearLeft: null,
    githubUsername: 'rcarminati',
    isProfessor: true,
  },
  {
    name: 'Prof. Dr. André Ferreira',
    course: 'engcomp',
    yearJoined: 2016,
    yearLeft: null,
    githubUsername: 'aferreira',
    isProfessor: true,
  },
  {
    name: 'Pietro Pazini Passos',
    course: 'engcomp',
    yearJoined: 2023,
    yearLeft: null,
    githubUsername: 'pietropazini',
    isProfessor: false,
  },
  {
    name: 'Lucas Oliveira Santos',
    course: 'engcomp',
    yearJoined: 2023,
    yearLeft: null,
    githubUsername: 'lucasoliv',
    isProfessor: false,
  },
  {
    name: 'Mariana Costa Silva',
    course: 'eletrica',
    yearJoined: 2024,
    yearLeft: null,
    githubUsername: 'maricosta',
    isProfessor: false,
  },
  {
    name: 'Gabriel Souza Nascimento',
    course: 'ccomp',
    yearJoined: 2024,
    yearLeft: null,
    githubUsername: 'gabrielsn',
    isProfessor: false,
  },
  {
    name: 'Ana Beatriz Ferreira Lima',
    course: 'engcomp',
    yearJoined: 2024,
    yearLeft: null,
    githubUsername: 'anabflima',
    isProfessor: false,
  },
  {
    name: 'Rafael Mendes Barbosa',
    course: 'mecanica',
    yearJoined: 2023,
    yearLeft: null,
    githubUsername: 'rafaelmb',
    isProfessor: false,
  },
  {
    name: 'Juliana Rocha Almeida',
    course: 'eletrica',
    yearJoined: 2025,
    yearLeft: null,
    githubUsername: 'jurocha',
    isProfessor: false,
  },
  {
    name: 'Thiago Pereira Cardoso',
    course: 'ccomp',
    yearJoined: 2025,
    yearLeft: null,
    githubUsername: 'thiagopcard',
    isProfessor: false,
  },
  {
    name: 'Isabela Martins Vieira',
    course: 'sistemas',
    yearJoined: 2024,
    yearLeft: null,
    githubUsername: 'isamvieira',
    isProfessor: false,
  },
  {
    name: 'Felipe Augusto Ribeiro',
    course: 'engcomp',
    yearJoined: 2025,
    yearLeft: null,
    githubUsername: 'felipeaugr',
    isProfessor: false,
  },
  {
    name: 'Camila Duarte Fonseca',
    course: 'eletrica',
    yearJoined: 2024,
    yearLeft: null,
    githubUsername: 'camiladf',
    isProfessor: false,
  },
];

export const alumniMembers: Member[] = [
  // 2013
  {
    name: 'Carlos Eduardo Pimentel',
    course: 'engcomp',
    yearJoined: 2010,
    yearLeft: 2013,
    githubUsername: 'cpimentel',
    isProfessor: false,
  },
  {
    name: 'Fernanda Gonçalves Dias',
    course: 'eletrica',
    yearJoined: 2010,
    yearLeft: 2013,
    githubUsername: 'fergdias',
    isProfessor: false,
  },
  // 2014
  {
    name: 'Bruno Tavares Lopes',
    course: 'engcomp',
    yearJoined: 2011,
    yearLeft: 2014,
    githubUsername: 'btlopes',
    isProfessor: false,
  },
  {
    name: 'Aline Moreira Castro',
    course: 'eletrica',
    yearJoined: 2011,
    yearLeft: 2014,
    githubUsername: 'amoreirac',
    isProfessor: false,
  },
  // 2015
  {
    name: 'Diego Ramos Figueiredo',
    course: 'mecanica',
    yearJoined: 2012,
    yearLeft: 2015,
    githubUsername: 'diegorf',
    isProfessor: false,
  },
  {
    name: 'Patrícia Sousa Andrade',
    course: 'engcomp',
    yearJoined: 2012,
    yearLeft: 2015,
    githubUsername: 'patandrade',
    isProfessor: false,
  },
  // 2016
  {
    name: 'Marcos Vinícius Teixeira',
    course: 'ccomp',
    yearJoined: 2013,
    yearLeft: 2016,
    githubUsername: 'mvteixeira',
    isProfessor: false,
  },
  {
    name: 'Renata Bastos Cunha',
    course: 'eletrica',
    yearJoined: 2013,
    yearLeft: 2016,
    githubUsername: 'renatacunha',
    isProfessor: false,
  },
  // 2017
  {
    name: 'Gustavo Henrique Batista',
    course: 'engcomp',
    yearJoined: 2014,
    yearLeft: 2017,
    githubUsername: 'ghbatista',
    isProfessor: false,
  },
  {
    name: 'Letícia Campos de Oliveira',
    course: 'eletrica',
    yearJoined: 2014,
    yearLeft: 2017,
    githubUsername: 'leticampos',
    isProfessor: false,
  },
  {
    name: 'Rodrigo Freitas Monteiro',
    course: 'mecanica',
    yearJoined: 2014,
    yearLeft: 2017,
    githubUsername: 'rodrigofm',
    isProfessor: false,
  },
  // 2018
  {
    name: 'Amanda Pires Rezende',
    course: 'engcomp',
    yearJoined: 2015,
    yearLeft: 2018,
    githubUsername: 'amandapr',
    isProfessor: false,
  },
  {
    name: 'Vinícius Alves Correia',
    course: 'ccomp',
    yearJoined: 2015,
    yearLeft: 2018,
    githubUsername: 'vinialves',
    isProfessor: false,
  },
  // 2019
  {
    name: 'Beatriz Nunes Machado',
    course: 'engcomp',
    yearJoined: 2016,
    yearLeft: 2019,
    githubUsername: 'bianmachado',
    isProfessor: false,
  },
  {
    name: 'Eduardo Lima Pereira',
    course: 'eletrica',
    yearJoined: 2016,
    yearLeft: 2019,
    githubUsername: 'dulimaper',
    isProfessor: false,
  },
  {
    name: 'Larissa Azevedo Gomes',
    course: 'sistemas',
    yearJoined: 2016,
    yearLeft: 2019,
    githubUsername: 'larigomes',
    isProfessor: false,
  },
  // 2020
  {
    name: 'Henrique Martins da Costa',
    course: 'engcomp',
    yearJoined: 2017,
    yearLeft: 2020,
    githubUsername: 'henrqmc',
    isProfessor: false,
  },
  {
    name: 'Carolina Barros Duarte',
    course: 'eletrica',
    yearJoined: 2017,
    yearLeft: 2020,
    githubUsername: 'carolbd',
    isProfessor: false,
  },
  // 2021
  {
    name: 'Pedro Henrique Sampaio',
    course: 'engcomp',
    yearJoined: 2018,
    yearLeft: 2021,
    githubUsername: 'phsampaio',
    isProfessor: false,
  },
  {
    name: 'Natália Ferraz dos Santos',
    course: 'ccomp',
    yearJoined: 2018,
    yearLeft: 2021,
    githubUsername: 'natferraz',
    isProfessor: false,
  },
  {
    name: 'André Luís Nogueira',
    course: 'mecanica',
    yearJoined: 2018,
    yearLeft: 2021,
    githubUsername: 'alnogueir',
    isProfessor: false,
  },
  // 2022
  {
    name: 'Débora Carvalho Rangel',
    course: 'engcomp',
    yearJoined: 2019,
    yearLeft: 2022,
    githubUsername: 'deboracr',
    isProfessor: false,
  },
  {
    name: 'Mateus Faria de Araújo',
    course: 'eletrica',
    yearJoined: 2019,
    yearLeft: 2022,
    githubUsername: 'mateusfa',
    isProfessor: false,
  },
  {
    name: 'Bruna Linhares Medeiros',
    course: 'sistemas',
    yearJoined: 2019,
    yearLeft: 2022,
    githubUsername: 'brunalm',
    isProfessor: false,
  },
  // 2023
  {
    name: 'João Victor Coelho Prado',
    course: 'engcomp',
    yearJoined: 2020,
    yearLeft: 2023,
    githubUsername: 'jvcoelhop',
    isProfessor: false,
  },
  {
    name: 'Yasmin Souza Brito',
    course: 'ccomp',
    yearJoined: 2020,
    yearLeft: 2023,
    githubUsername: 'yasminbrito',
    isProfessor: false,
  },
  // 2024
  {
    name: 'Samuel Guimarães Rios',
    course: 'engcomp',
    yearJoined: 2021,
    yearLeft: 2024,
    githubUsername: 'samrios',
    isProfessor: false,
  },
  {
    name: 'Luiza Helena Monteiro',
    course: 'eletrica',
    yearJoined: 2021,
    yearLeft: 2024,
    githubUsername: 'luizahm',
    isProfessor: false,
  },
  {
    name: 'Caio Bernardo Vasconcelos',
    course: 'mecanica',
    yearJoined: 2021,
    yearLeft: 2024,
    githubUsername: 'caiobvasc',
    isProfessor: false,
  },
  // 2025
  {
    name: 'Daniela Fonseca Reis',
    course: 'engcomp',
    yearJoined: 2022,
    yearLeft: 2025,
    githubUsername: 'danifr',
    isProfessor: false,
  },
  {
    name: 'Igor Nascimento Tavares',
    course: 'ccomp',
    yearJoined: 2022,
    yearLeft: 2025,
    githubUsername: 'igortav',
    isProfessor: false,
  },
];
