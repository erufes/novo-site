export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre',
    href: '/sobre',
  },
  {
    label: 'Membros',
    href: '/membros',
  },
  {
    label: 'Projetos',
    href: '/projetos',
    children: [
      { label: 'Seguidor de Linhas', href: '/projetos/seguidor-de-linhas' },
      { label: 'VSSS', href: '/projetos/vsss' },
      { label: 'Simulação 2D', href: '/projetos/simulacao-2d' },
      { label: 'Sumô', href: '/projetos/sumo' },
      { label: 'OPEN', href: '/projetos/open' },
      { label: 'Duckietown', href: '/projetos/duckietown' },
      { label: 'PDR', href: '/projetos/pdr' },
    ],
  },
  {
    label: 'Conquistas',
    href: '/conquistas',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Reportagens',
    href: '/reportagens',
  },
  {
    label: 'Seja Membro',
    href: '/seja-membro',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];
