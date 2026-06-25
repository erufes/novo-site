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
   * Caminho da foto em /public, ex.: `/membros/nome_sobrenome.jpg`.
   * Se ausente (ou se o arquivo não existir), o card mostra o ícone de pessoa padrão.
   */
  photo?: string;
  /** Usuário do GitHub. Opcional: ativa o botão de link no card quando presente. */
  githubUsername?: string;
  /**
   * Identificador do LinkedIn — o trecho depois de `/in/` na URL do perfil
   * (ex.: para `linkedin.com/in/fulano-silva`, use `'fulano-silva'`).
   * Opcional: ativa o botão do LinkedIn no card quando presente.
   */
  linkedinUsername?: string;
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
    photo: '/membros/bruno_legora.jpeg',
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
    photo: '/membros/arthur_cunha.jpeg',
    githubUsername: 'arturocunha',
    isProfessor: false,
  },
  {
    name: 'Daniel Cid Constantinidis',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/daniel_constantinidis.jpg',
    githubUsername: 'danielcidc',
    linkedinUsername: 'daniel-cid-constantinidis-a209ba244',
    isProfessor: false,
  },
  {
    name: 'Felipe Bruno Raposo Soares',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/felipe_soares.jpeg',
    githubUsername: 'felipebsoaress',
    isProfessor: false,
  },
  {
    name: 'Gabriel Lyra Campos',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/gabriel_campos.jpeg',
    githubUsername: 'Gabriel-l-c',
    isProfessor: false,
  },
  {
    name: 'Guilherme Louzada Figueiredo',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/guilherme_figueiredo.jpeg',
    githubUsername: 'Louzadino',
    linkedinUsername: 'guilherme-louzada-222922311',
    isProfessor: false,
  },
  {
    name: 'Heron Garcia Lodi E Silva',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/heron_silva.jpeg',
    githubUsername: 'Heron42',
    isProfessor: false,
  },
  {
    name: 'Leo Santos Carvalho Comério',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/leo_comerio.jpeg',
    githubUsername: 'kkkk-am',
    isProfessor: false,
  },
  {
    name: 'Rafael Vieira de Almeida',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/rafael_almeida.jpeg',
    githubUsername: 'rvieira1001',
    isProfessor: false,
  },
  {
    name: 'Vitor Rodrigues Tomé',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/vitor_tome.jpeg',
    githubUsername: 'vrtome',
    isProfessor: false,
  },
  {
    name: 'Pietro Pazini Passos de Oliveira',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/pietro_oliveira.jpg',
    githubUsername: 'PietroPaziniPassos',
    linkedinUsername: 'pietro-pazini',
    isProfessor: false,
  },
  {
    name: 'Luiz Marcos Iglesias Carraretto',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/luiz_carraretto.jpeg',
    githubUsername: 'LuizMarcosCarraretto',
    isProfessor: false,
  },
  {
    name: 'Paulo Ricardo Pascoal',
    course: 'mecanica',
    yearLeft: null,
    photo: '/membros/paulo_pascoal.jpeg',
    linkedinUsername: 'paulo-ricardo-pascoal-830986259',
    isProfessor: false,
  },
  {
    name: 'Lucas Zucarato Gama Soares',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/lucas_soares.jpeg',
    isProfessor: false,
  },
  {
    name: 'Pedro Pavesi de Oliveira',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/pedro_pavesi.jpeg',
    isProfessor: false,
  },
  {
    name: 'Matheus Rodrigues Belmoque',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/matheus_belmoque.jpeg',
    githubUsername: 'belmoque',
    isProfessor: false,
  },
  {
    name: 'Enrico Polez Ferreira Pinto',
    course: 'engcomp',
    yearLeft: null,
    photo: '/membros/enrico_pinto.jpeg',
    githubUsername: 'fattoads',
    linkedinUsername: 'enrico-polez-ferreira-pinto-653043419',
    isProfessor: false,
  },
  {
    name: 'Dimitry Deveza',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/dimitry_deveza.jpeg',
    githubUsername: 'shoui000',
    linkedinUsername: 'dimitrydeveza',
    isProfessor: false,
  },
  {
    name: 'Guilherme Mesquita Olmo',
    course: 'ccomp',
    yearLeft: null,
    photo: '/membros/guilherme_olmo.jpeg',
    githubUsername: 'gmolmo',
    linkedinUsername: 'guilherme-mesquita-olmo',
    isProfessor: false,
  },
  {
    name: 'Ricardo Augusto Bona Barbosa',
    course: 'eletrica',
    yearLeft: null,
    photo: '/membros/ricardo_barbosa.jpeg',
    githubUsername: 'Apol0-r',
    linkedinUsername: 'ricardo-augusto-bona-barbosa-a17086402',
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
    photo: '/membros/diana_rosi.jpeg',
    githubUsername: 'dianamross',
    isProfessor: false,
  },
  {
    name: 'Diogo Delazare Brandao',
    course: 'engcomp',
    yearLeft: 2025,
    photo: '/membros/diogo_brandao.jpeg',
    githubUsername: 'JoemanJ',
    linkedinUsername: 'diogo-delazare-brandão-295a47201',
    isProfessor: false,
  },
  {
    name: 'Gabriel Pietroluongo',
    course: 'engcomp',
    yearLeft: 2025,
    photo: '/membros/gabriel_pietroluongo.jpg',
    githubUsername: 'pietroluongo',
    isProfessor: false,
  },
  {
    name: 'Elisa Müller',
    course: 'engcomp',
    yearLeft: 2025,
    photo: '/membros/elisa_muller.jpg',
    githubUsername: 'elisamsarmento',
    isProfessor: false,
  },
];
