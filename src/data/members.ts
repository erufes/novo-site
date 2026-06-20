export type Course =
  | 'engcomp'
  | 'eletrica'
  | 'ccomp'
  | 'mecanica'
  | 'civil'
  | 'economia'
  | 'sistemas'
  | 'producao';

export type Member = {
  name: string;
  /** Curso. Opcional: professores responsáveis não têm curso. */
  course?: Course;
  /** Ano de entrada. Opcional enquanto não temos o dado. */
  yearJoined?: number;
  yearLeft: number | null;
  /**
   * Caminho da foto em /public, no padrão `/membros/nome_sobrenome.png`.
   * Se ausente (ou se o arquivo ainda não existe), o card mostra as iniciais.
   */
  photo?: string;
  /** Usuário do GitHub. Opcional: ativa o botão de link no card quando presente. */
  githubUsername?: string;
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
  producao: 'Engenharia de Produção',
};

export const courseEmojis: Record<Course, string> = {
  engcomp: '💻',
  eletrica: '⚡',
  ccomp: '🖥️',
  mecanica: '⚙️',
  civil: '🏗️',
  economia: '📊',
  sistemas: '🌐',
  producao: '🏭',
};

export const activeMembers: Member[] = [
  // Professores responsáveis
  {
    name: 'Bruno Légora',
    yearLeft: null,
    photo: '/membros/bruno_legora.png',
    githubUsername: 'blegora',
    isProfessor: true,
  },
  {
    name: 'André Pacheco',
    yearLeft: null,
    photo: '/membros/andre_pacheco.png',
    githubUsername: 'paaatcha',
    isProfessor: true,
  },

  // Membros ativos
  {
    name: 'Artur Oliveira Cunha',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/artur_cunha.png',
    githubUsername: 'arturocunha',
    isProfessor: false,
  },
  {
    name: 'Daniel Cid Constantinidis',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/daniel_constantinidis.png',
    githubUsername: 'danielcidc',
    isProfessor: false,
  },
  {
    name: 'Felipe Bruno Raposo Soares',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/felipe_soares.png',
    githubUsername: 'felipebsoaress',
    isProfessor: false,
  },
  {
    name: 'Gabriel Lyra Campos',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/gabriel_campos.png',
    githubUsername: 'Gabriel-l-c',
    isProfessor: false,
  },
  {
    name: 'Guilherme Louzada Figueiredo',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/guilherme_figueiredo.png',
    githubUsername: 'Louzadino',
    isProfessor: false,
  },
  {
    name: 'Heron Garcia Lodi E Silva',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/heron_silva.png',
    githubUsername: 'Heron42',
    isProfessor: false,
  },
  {
    name: 'Leo Santos Carvalho Comério',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/leo_comerio.png',
    githubUsername: 'kkkk-am',
    isProfessor: false,
  },
  {
    name: 'Rafael Vieira de Almeida',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/rafael_almeida.png',
    githubUsername: 'rvieira1001',
    isProfessor: false,
  },
  {
    name: 'Vitor Rodrigues Tomé',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/vitor_tome.png',
    githubUsername: 'vrtome',
    isProfessor: false,
  },
  {
    name: 'Pietro Pazini Passos de Oliveira',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/pietro_oliveira.jpg',
    githubUsername: 'PietroPaziniPassos',
    isProfessor: false,
  },
  {
    name: 'Luiz Marcos Iglesias Carraretto',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/luiz_carraretto.png',
    githubUsername: 'LuizMarcosCarraretto',
    isProfessor: false,
  },
  {
    name: 'Paulo Ricardo Pascoal',
    course: 'mecanica',
    yearLeft: null,
    photo: '/membros/paulo_pascoal.png',
    isProfessor: false,
  },
  {
    name: 'Lucas Zucarato Gama Soares',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/lucas_soares.png',
    isProfessor: false,
  },
  {
    name: 'Pedro Pavesi de Oliveira',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/pedro_oliveira.png',
    isProfessor: false,
  },
  {
    name: 'Matheus Rodrigues Belmoque',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/matheus_belmoque.png',
    githubUsername: 'belmoque',
    isProfessor: false,
  },
  {
    name: 'Enrico Polez Ferreira Pinto',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/enrico_pinto.png',
    githubUsername: 'fattoads',
    isProfessor: false,
  },
  {
    name: 'Dimitry Deveza',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/dimitry_deveza.png',
    githubUsername: 'shoui000',
    isProfessor: false,
  },
  {
    name: 'Guilherme Mesquita Olmo',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/guilherme_olmo.png',
    githubUsername: 'gmolmo',
    isProfessor: false,
  },
  {
    name: 'Ricardo Augusto Bona Barbosa',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/ricardo_barbosa.png',
    githubUsername: 'Apol0-r',
    isProfessor: false,
  },
];

// Egressos. Ano de saída assumido como 2025 (não informado) — ajustar quando
// houver o dado. Ver docs/membros.md.
export const alumniMembers: Member[] = [
  {
    name: 'Diana Mello Rosi',
    course: 'engcomp',
    yearLeft: 2025,
    githubUsername: 'dianamross',
    isProfessor: false,
  },
  {
    name: 'Diogo Delazare Brandao',
    course: 'engcomp',
    yearLeft: 2025,
    isProfessor: false,
  },
  {
    name: 'Gabriel Pietroluongo',
    course: 'engcomp',
    yearLeft: 2025,
    githubUsername: 'pietroluongo',
    isProfessor: false,
  },
  {
    name: 'Elisa Müller',
    course: 'engcomp',
    yearLeft: 2025,
    githubUsername: 'elisamsarmento',
    isProfessor: false,
  },
];
