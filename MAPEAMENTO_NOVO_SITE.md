# ERUS - Mapeamento para Reconstrução do Site

## 1. Identidade do Projeto

### Sobre a ERUS
- **Nome completo:** ERUS - Equipe de Robótica da UFES
- **Instituição:** Universidade Federal do Espírito Santo (UFES)
- **Tipo:** Programa de extensão universitário vinculado ao Centro Tecnológico (desde 2019)
- **Fundação:** 2012, por ex-membros da equipe UFES Ultrabots
- **Localização física:** UFES - CT 13 - Sala 33 (3º andar)
- **Missão:** Fomentar o crescimento da robótica em todo o estado do Espírito Santo
- **Valores centrais:** Compartilhamento de conhecimento, aprendizado prático, inspiração para estudantes mais jovens

### Contato e Redes Sociais
| Canal | Informação |
|-------|-----------|
| Email | erus@inf.ufes.br |
| Instagram | @erus.ufes |
| Facebook | ERUS - Equipe de Robótica da UFES (erusbot) |
| GitHub | erufes |
| LinkedIn | erus-ufes |
| YouTube | erusteam |

### Assets de Marca
- Favicon principal: `favicon_2.png`
- Imagens de perfil: `profile.png`, `profile-b.png`
- Logo: `logo carrinho.png` (logo de robô/veículo)
- Imagens de capa/hero: pasta `capas/` com múltiplas variações

---

## 2. Estrutura de Páginas

### Navegação Principal
O novo site deve conter as seguintes seções:

#### 2.1 Home (Início)
- **Hero section** com imagem de destaque e tagline institucional
- Tagline atual: *"A ERUS é um programa de extensão da Universidade Federal do Espírito Santo atualmente localizado na sala 33 do prédio CT-13"*
- **3 blocos de destaque:**
  - **Conhecimento** - Aprendizado e geração de conhecimento através da robótica prática
  - **Competições** - Participação em torneios nacionais e internacionais com múltiplas vitórias
  - **Ensino** - Workshops e cursos educacionais para estudantes de todos os níveis
- Seção de projetos em destaque
- Seção de notícias recentes
- CTA para "Seja Membro"

#### 2.2 Sobre
- História da equipe (de 2012 até hoje, incluindo era Ultrabots 2008-2012)
- Missão e valores
- Marcos importantes (transição de IEEE SEK/OPEN para desafios mais complexos, vínculo com CT em 2019)
- Iniciativas-chave: TRUFES, educação comunitária
- Localização com mapa

#### 2.3 Membros
- **Membros ativos** (atualmente 13, incluindo 2 professores coordenadores)
  - Card com: nome, curso (com emoji/badge), ano de ingresso, foto do GitHub, indicador de professor
- **Membros egressos** organizados por ano de saída (2013-2025, ~100+ membros)
- Cursos representados:
  - Engenharia da Computação, Engenharia Elétrica, Ciência da Computação, Engenharia Mecânica, Engenharia Civil, Economia, Sistemas de Informação

#### 2.4 Projetos
Página hub com cards dos projetos, linkando para sub-páginas:

**Frente Competitiva** - 5 categorias:
1. Seguidor de Linhas (Line Following)
2. VSSS - Very Small Size Soccer (futebol robótico 3v3)
3. Simulação de Futebol 2D
4. Sumô
5. OPEN

**Projetos de Pesquisa:**
1. **Duckietown** - Plataforma de veículos autônomos para testes (desde 2022)
   - Techs: Docker, Git, Linux, Python, Raspberry Pi, ROS2
2. **VSSS** - Futebol de robôs Very Small Size Soccer
   - Componentes: Hardware (Arduino, XBee, motores), Software (visão computacional + estratégia), Mecânica (modelagem 3D)
   - Techs: Docker, Git, Linux, Python, ROS2, Modelagem 3D
3. **PDR** (Produções e Designs para Robótica)
   - P&D de técnicas de fabricação
   - Equipamentos: Impressoras 3D, CNC, Gravadoras a Laser

**Frente Educacional** - Cursos oferecidos:
- Arduino (Introdução, Básico, Intermediário, Avançado)
- Modelagem 3D para Robótica
- Design de Circuitos Eletrônicos
- Modelagem e Design de Software
- Controle PID
- Lógica Fuzzy
- Python Básico para Robótica
- C/C++ Básico
- Visão Computacional Básica
- Simulação de Robótica

**Frente de Eventos:**
- TRUFES (Torneio de Robótica da UFES) - 7 edições desde 2013
- OBR (Olimpíada Brasileira de Robótica) - organizada com SESI
- CBR (Competição Brasileira de Robótica) - suporte IEEE-OPEN, IEEE-VSSS, IEEE-SEK
- Workshops diversos: Arduino, Webots, Blender, Impressão 3D, Visão Computacional

#### 2.5 Conquistas
- Página listando prêmios e resultados em competições

#### 2.6 Notícias / Blog
- Posts com suporte a categorias e tags
- Metadados: tempo de leitura, autor, data
- Posts relacionados
- Arquivo por categoria e tag

#### 2.7 Reportagens (Mídia)
- Cobertura da mídia organizada por ano (22+ itens)
- Veículos: ESTV, TV UFES, G1, A Tribuna, VixTeam, Portal ITC, IFES, Universo UFES

#### 2.8 Seja Membro
- Informações sobre o processo seletivo
- Atualmente usa Google Forms (periódico, anunciado via redes sociais)
- Status aberto/fechado com redirecionamento para redes sociais quando fechado

#### 2.9 Contato
- Informações de localização, email e redes sociais
- (Considerar formulário de contato direto)

---

## 3. Dados Estruturados

### Dados que devem ser migrados/mantidos:

#### members.yml
- Lista completa de membros ativos e egressos
- Campos por membro: nome, curso, ano de ingresso, ano de saída, GitHub username, flag de professor
- Emojis por curso definidos em `courses_emojis.yml`

#### projects.yml
- Nome, descrição, link, imagem, emoji, tags de tecnologia por projeto

#### reports.yml
- Cobertura da mídia: título, fonte, link, ano

#### authors.yml
- Autores do blog com bio, localização, links (email, site, redes)

#### navigation.yml
- Estrutura de navegação principal

---

## 4. Funcionalidades Existentes a Manter/Melhorar

| Funcionalidade | Status Atual | Recomendação |
|----------------|-------------|--------------|
| Cards de membros com avatar GitHub | Funcional | Manter e melhorar design |
| Busca client-side (Lunr.js) | Funcional | Migrar para busca nativa Next.js |
| Blog com categorias/tags | Funcional | Manter com MDX ou CMS headless |
| Grid de projetos com hover | Funcional | Redesenhar com animações modernas |
| Navegação responsiva | Funcional | Melhorar com menu mobile moderno |
| Formulário de recrutamento | Google Forms externo | Considerar formulário integrado |
| Comentários em posts | Desativado | Avaliar se vale reativar |
| SEO/OpenGraph | Parcial | Implementar completo com Next.js |
| Analytics | Desativado | Implementar (GA4 ou Plausible) |

---

## 5. Diretrizes de Design para o Novo Site

### 5.1 Princípios Gerais
- **Moderno e clean:** Espaçamento generoso, tipografia clara, hierarquia visual forte
- **Institucional mas acessível:** Transmitir credibilidade acadêmica sem ser sisudo
- **Identidade tech/robótica:** Elementos visuais que remetam à tecnologia de forma sutil

### 5.2 Layout e Estrutura Visual
- **Hero section impactante** na home com vídeo ou imagem de alta qualidade da equipe/robôs
- **Cards com glassmorphism ou neumorphism sutil** para projetos e membros
- **Seções com scroll suave** e animações de entrada (fade-in, slide-up)
- **Grid system consistente** baseado em 12 colunas
- **Footer robusto** com mapa do site, redes sociais e informações institucionais

### 5.3 Tipografia
- **Headings:** Font sans-serif geométrica (ex: Inter, Plus Jakarta Sans, ou Space Grotesk)
- **Body:** Font legível e neutra (ex: Inter, DM Sans)
- **Monospace** para elementos técnicos/código (ex: JetBrains Mono, Fira Code)
- Escala tipográfica consistente com bom contraste de tamanhos

### 5.4 Paleta de Cores (sugestão)
- **Primária:** Azul escuro/profundo (institucional, remete à UFES)
- **Secundária:** Azul claro ou ciano (tech/robótica)
- **Acento:** Laranja ou amarelo (energia, destaque para CTAs)
- **Neutros:** Cinza escuro para texto, cinza claro para backgrounds, branco puro para cards
- **Dark mode:** Suporte nativo com toggle, fundo escuro com tons de cinza azulado

### 5.5 Componentes UI
- **Navbar:** Fixa no topo, com blur/transparency ao scroll, logo à esquerda, links centralizados, toggle dark mode
- **Botões:** Bordas arredondadas, hover com transição suave, variantes primary/secondary/ghost
- **Cards de projeto:** Imagem com overlay gradient, título, tags de tecnologia, hover com scale sutil
- **Cards de membro:** Avatar circular (GitHub), nome, curso com badge colorido, links sociais
- **Timeline** para página de história/conquistas
- **Tabs ou accordion** para organizar cursos e frentes de trabalho
- **Badge/chips** para tags de tecnologia nos projetos
- **Toast/notifications** para feedback de formulários

### 5.6 Animações e Microinterações
- Animações de entrada com Framer Motion ou similar
- Hover states sutis em todos os elementos interativos
- Transições de página suaves
- Skeleton loading para conteúdo dinâmico
- Parallax sutil no hero (opcional)

### 5.7 Responsividade
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Menu hamburger com drawer animado no mobile
- Cards empilhados em coluna única no mobile
- Imagens otimizadas com next/image para cada viewport

### 5.8 Acessibilidade
- Contraste mínimo WCAG AA em todas as combinações de cor
- Navegação completa por teclado
- Labels em todos os formulários
- Alt text em todas as imagens
- Suporte a screen readers com semântica HTML correta

---

## 6. Stack Tecnológica Recomendada

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | **Next.js 14+ (App Router)** | SSG/SSR, otimização de imagens, rotas de API |
| Styling | **Tailwind CSS** | Utility-first, prototipação rápida, design system consistente |
| Componentes | **shadcn/ui** ou **Radix UI** | Componentes acessíveis e customizáveis |
| Animações | **Framer Motion** | Animações declarativas e performáticas |
| Conteúdo Blog | **MDX** ou **Contentlayer** | Markdown com componentes React para posts |
| Dados | **Arquivos YAML/JSON** na pasta `data/` | Migrar dados existentes sem precisar de banco |
| Ícones | **Lucide React** ou **React Icons** | Ícones modernos e leves |
| Deploy | **Vercel** | Deploy otimizado para Next.js, preview deploys, analytics |
| Analytics | **Vercel Analytics** ou **Plausible** | Privacy-friendly, sem cookies |
| Formulários | **React Hook Form + API Route** | Formulário de contato integrado |
| SEO | **next-seo** ou metadata nativa do Next.js | SEO completo com OpenGraph |
| Dark Mode | **next-themes** | Toggle de tema com persistência |

---

## 7. Estrutura de Pastas Sugerida

```
erus-site/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── projects/
│   │   ├── covers/
│   │   └── posts/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── layout.tsx            # Layout raiz
│   │   ├── sobre/page.tsx
│   │   ├── membros/page.tsx
│   │   ├── projetos/
│   │   │   ├── page.tsx          # Hub de projetos
│   │   │   ├── duckietown/page.tsx
│   │   │   ├── vsss/page.tsx
│   │   │   └── pdr/page.tsx
│   │   ├── conquistas/page.tsx
│   │   ├── noticias/page.tsx
│   │   ├── reportagens/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx          # Lista de posts
│   │   │   └── [slug]/page.tsx   # Post individual
│   │   ├── seja-membro/page.tsx
│   │   ├── contato/page.tsx
│   │   └── api/
│   │       └── contact/route.ts  # API de contato
│   ├── components/
│   │   ├── ui/                   # Componentes base (shadcn)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeatureCards.tsx
│   │   │   └── RecentNews.tsx
│   │   ├── members/
│   │   │   ├── MemberCard.tsx
│   │   │   └── AlumniList.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── TechBadge.tsx
│   │   └── blog/
│   │       ├── PostCard.tsx
│   │       └── PostContent.tsx
│   ├── data/
│   │   ├── members.ts
│   │   ├── projects.ts
│   │   ├── courses.ts
│   │   ├── reports.ts
│   │   └── navigation.ts
│   ├── content/
│   │   └── blog/                 # Posts em MDX
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. Painel Administrativo

### 8.1 Visão Geral
Admin integrado no próprio Next.js (rotas `/admin/*`), protegido por autenticação Supabase.
Uma única conta compartilhada pela equipe (email + senha), criada manualmente no Supabase Dashboard.
Sem registro público — apenas login.

### 8.2 Backend — Supabase (Free Tier)
- **PostgreSQL** — 500MB, rows ilimitadas
- **Auth** — 1 conta email/password para a equipe
- **Storage** — 1GB para imagens (posts, membros, projetos)
- **API REST automática** — cada tabela vira endpoint

### 8.3 Modelagem do Banco de Dados

```sql
-- Membros da equipe
members (
  id uuid PK,
  name text NOT NULL,
  course text NOT NULL,         -- engcomp, eletrica, ccomp, etc.
  github_username text,
  year_joined int,
  year_left int NULL,           -- NULL = membro ativo
  is_professor boolean DEFAULT false,
  is_active boolean DEFAULT true,
  display_order int DEFAULT 0,
  created_at timestamptz,
  updated_at timestamptz
)

-- Posts do blog
posts (
  id uuid PK,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,        -- HTML do editor rich text
  excerpt text,
  cover_image_url text,
  author_name text,
  tags text[],                  -- array de tags
  category text,                -- noticias, eventos, ensino, etc.
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz
)

-- Projetos
projects (
  id uuid PK,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  long_description text,        -- conteúdo completo da página do projeto
  image_url text,
  emoji text,
  tags text[],                  -- tecnologias
  type text,                    -- competitivo | pesquisa | educacional | evento
  is_active boolean DEFAULT true,
  display_order int DEFAULT 0,
  created_at timestamptz,
  updated_at timestamptz
)

-- Conquistas / Resultados em competições
achievements (
  id uuid PK,
  title text NOT NULL,
  description text,
  competition text,
  position text,                -- "1º lugar", "Top 8", etc.
  year int,
  category text,
  created_at timestamptz
)

-- Reportagens na mídia
reports (
  id uuid PK,
  title text NOT NULL,
  source text NOT NULL,         -- veículo: G1, ESTV, etc.
  url text,
  year int,
  created_at timestamptz
)

-- Cursos oferecidos
courses (
  id uuid PK,
  name text NOT NULL,
  level text,                   -- intro, basico, intermediario, avancado
  description text,
  is_available boolean DEFAULT true,
  display_order int DEFAULT 0,
  created_at timestamptz
)

-- Configurações editáveis do site
site_config (
  key text PK,                  -- 'tagline', 'about_text', 'recruitment_status', etc.
  value text NOT NULL,
  updated_at timestamptz
)
```

### 8.4 Rotas do Admin

| Rota | Funcionalidade |
|------|---------------|
| `/admin` | Login (redireciona para /admin/dashboard se autenticado) |
| `/admin/dashboard` | Overview com stats rápidos (nº membros, posts, etc.) |
| `/admin/membros` | CRUD de membros — tabela editável, marcar egresso, reordenar |
| `/admin/blog` | Lista de posts (rascunhos + publicados), criar novo |
| `/admin/blog/novo` | Editor rich text com upload de imagem, preview, salvar rascunho |
| `/admin/blog/[id]` | Editar post existente |
| `/admin/projetos` | CRUD de projetos — editar descrições, techs, ativar/desativar |
| `/admin/conquistas` | CRUD de conquistas — adicionar resultados |
| `/admin/reportagens` | CRUD de reportagens — adicionar links de mídia |
| `/admin/cursos` | CRUD de cursos — atualizar catálogo |
| `/admin/config` | Textos do site (tagline, about, status recrutamento + link forms) |

### 8.5 Editor de Blog
- **Tiptap** (editor rich text baseado em ProseMirror) — gratuito, extensível
- Suporte a: headings, bold, italic, listas, código, imagens, links, embeds
- Upload de imagens direto para Supabase Storage
- Preview lado a lado (split view)
- Geração automática de slug a partir do título
- Salvar como rascunho ou publicar direto

### 8.6 Segurança e Arquitetura de API

#### Princípio fundamental: Supabase NUNCA é exposto ao client

**Nenhuma variável de ambiente será `NEXT_PUBLIC_`**. As credenciais do Supabase
(URL e chaves) existem **apenas no servidor**. O browser do usuário/admin nunca
sabe que o Supabase existe.

```env
# .env.local — TODAS server-only (sem prefixo NEXT_PUBLIC_)

SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...         # Chave com acesso total (server-only!)
SUPABASE_ANON_KEY=eyJ...                 # Não será usada no client
ADMIN_API_SECRET=um-token-secreto-longo  # Para validar chamadas internas
```

#### Camada de API interna (proxy server-side)

O frontend (admin) **nunca** chama o Supabase diretamente. Toda operação passa
por API Routes do Next.js que rodam no servidor. Isso cria uma camada de proteção:

```
❌ ERRADO (client exposto):
  Browser → Supabase (credenciais no JS do browser, qualquer um vê)

✅ CORRETO (API interna como proxy):
  Browser → API Route Next.js (servidor) → Supabase
            ↑                               ↑
            Valida auth + origin            Credenciais server-only
```

#### Proteção contra chamadas externas

As API Routes só podem ser chamadas de dentro do próprio site. Três camadas de proteção:

**1. Validação de Origin/Referer:**
```typescript
// src/lib/api-guard.ts

export function validateInternalRequest(request: NextRequest) {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  const allowedOrigins = [
    process.env.SITE_URL,                    // https://erus.inf.ufes.br
    'http://localhost:3000',                  // dev
  ]

  const isValidOrigin = allowedOrigins.some(
    (allowed) => origin === allowed || referer?.startsWith(allowed + '/')
  )

  if (!isValidOrigin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return null // OK, pode prosseguir
}
```

**2. CSRF Token por sessão:**
```typescript
// O layout do admin gera um CSRF token no servidor e injeta via cookie httpOnly.
// Toda chamada à API interna deve enviar esse token no header.
// A API Route compara o token do header com o do cookie.

// Header obrigatório em toda request do admin:
headers: {
  'X-CSRF-Token': csrfToken,
}
```

**3. Verificação de autenticação server-side:**
```typescript
// src/app/api/admin/[...]/route.ts

export async function POST(request: NextRequest) {
  // 1. Bloqueia chamadas externas
  const blocked = validateInternalRequest(request)
  if (blocked) return blocked

  // 2. Valida CSRF token
  const csrfValid = validateCSRF(request)
  if (!csrfValid) return NextResponse.json({ error: 'CSRF' }, { status: 403 })

  // 3. Valida sessão do admin (cookie httpOnly)
  const session = await getServerSession(request)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // 4. Agora sim, chama o Supabase com a service role key (server-only)
  const supabase = createServerClient() // usa SUPABASE_SERVICE_ROLE_KEY
  // ... operação no banco
}
```

#### Mapa completo das API Routes internas

```
src/app/api/
├── auth/
│   ├── login/route.ts          POST — Recebe email+senha, valida no Supabase Auth,
│   │                                   retorna cookie httpOnly com sessão
│   ├── logout/route.ts         POST — Limpa cookie de sessão
│   └── session/route.ts        GET  — Verifica se sessão é válida
│
├── admin/
│   ├── members/route.ts        GET/POST    — Listar/criar membros
│   ├── members/[id]/route.ts   PUT/DELETE  — Editar/remover membro
│   ├── posts/route.ts          GET/POST    — Listar/criar posts
│   ├── posts/[id]/route.ts     PUT/DELETE  — Editar/remover post
│   ├── projects/route.ts       GET/POST    — Listar/criar projetos
│   ├── projects/[id]/route.ts  PUT/DELETE  — Editar/remover projeto
│   ├── achievements/route.ts   GET/POST    — Conquistas
│   ├── reports/route.ts        GET/POST    — Reportagens
│   ├── courses/route.ts        GET/POST    — Cursos
│   ├── config/route.ts         GET/PUT     — Configurações do site
│   └── upload/route.ts         POST        — Upload de imagem para Supabase Storage
│
├── revalidate/route.ts         POST — Revalidação on-demand (protegida)
└── contact/route.ts            POST — Formulário de contato público (rate limited)
```

Todas as rotas em `/api/admin/*` passam pelas 3 validações (origin + CSRF + sessão).
A rota `/api/contact` é pública mas tem rate limiting.

#### Middleware de proteção das páginas admin

```typescript
// src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protege TODAS as rotas /admin/* (exceto a página de login)
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const sessionCookie = request.cookies.get('admin-session')

    if (!sessionCookie?.value) {
      // Sem sessão → redireciona para login
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    // Sessão existe → permite acesso (validação completa na API Route)
  }

  // Protege API Routes admin contra chamadas externas
  if (pathname.startsWith('/api/admin')) {
    const origin = request.headers.get('origin')
    const allowedOrigins = [process.env.SITE_URL, 'http://localhost:3000']

    if (!allowedOrigins.includes(origin || '')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
```

#### Fluxo de autenticação completo

```
1. Admin acessa /admin
   → Middleware: sem cookie de sessão? Mostra tela de login (é a própria /admin)
   → Admin digita email + senha

2. Browser chama POST /api/auth/login (com origin do próprio site)
   → API Route recebe email+senha
   → API Route chama supabase.auth.signInWithPassword() NO SERVIDOR
   → Supabase valida → retorna tokens
   → API Route cria cookie httpOnly, Secure, SameSite=Strict com o session token
   → Responde 200 OK ao browser

3. Browser redireciona para /admin/dashboard
   → Middleware: cookie existe? Permite acesso
   → Página renderiza

4. Admin clica em "Salvar membro"
   → Browser chama POST /api/admin/members (fetch com credentials: 'same-origin')
   → Middleware: origin válido? ✅
   → API Route: CSRF válido? ✅ Sessão válida? ✅
   → API Route: chama Supabase com service role key
   → Salva no banco → responde 200

5. Em nenhum momento o browser viu a URL ou chave do Supabase.
```

#### Fluxo de dados para páginas públicas (SSG)

As páginas públicas (blog, membros, etc.) também não expõem o Supabase ao client.
Elas buscam dados **no servidor durante o build/revalidation**:

```typescript
// src/lib/supabase/server.ts — APENAS usado em Server Components e API Routes

import { createClient } from '@supabase/supabase-js'

export function createServerSupabase() {
  // Essas variáveis SÓ existem no servidor
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// NUNCA exportar para client components
// NUNCA usar em arquivos com 'use client'
```

```typescript
// src/app/membros/page.tsx — Server Component (roda no servidor)

import { createServerSupabase } from '@/lib/supabase/server'

export default async function MembrosPage() {
  // Isso roda NO SERVIDOR durante build/revalidation
  // O HTML resultante é estático — nenhuma credencial vai pro browser
  const supabase = createServerSupabase()
  const { data: members } = await supabase
    .from('members')
    .select('*')
    .eq('is_active', true)
    .order('display_order')

  return <MemberGrid members={members} />
  // ↑ Este componente recebe dados como props, não faz fetch nenhum
}
```

#### Resumo das camadas de segurança

```
Camada 1 — ENV: Nenhuma NEXT_PUBLIC_, Supabase invisível ao browser
Camada 2 — Middleware: Rotas /admin/* e /api/admin/* protegidas
Camada 3 — Origin check: API Routes rejeitam chamadas de fora do site
Camada 4 — CSRF token: Protege contra cross-site request forgery
Camada 5 — Session cookie: httpOnly, Secure, SameSite=Strict
Camada 6 — Server-only client: Supabase só é instanciado em Server Components/API Routes
Camada 7 — Rate limiting: Rotas públicas (/api/contact) com limite de requisições
```

### 8.7 Estratégia de Renderização Estática (SEO)

O blog e todas as páginas de conteúdo público **devem ser 100% estáticas** — HTML puro
servido pela CDN da Vercel. Isso é essencial para SEO: o Googlebot recebe a página completa
sem precisar executar JavaScript. A questão é: como manter páginas estáticas se o conteúdo
vem de um banco de dados editável?

#### O problema

```
Cenário ruim (CSR - Client Side Rendering):
  Googlebot visita /blog/meu-post
  → Recebe HTML vazio + bundle JS
  → Precisa executar JS para buscar dados do Supabase
  → Googlebot pode não indexar o conteúdo corretamente
  → SEO péssimo ❌

Cenário ideal (SSG - Static Site Generation):
  Googlebot visita /blog/meu-post
  → Recebe HTML completo com todo o conteúdo já renderizado
  → Título, meta tags, Open Graph, texto, imagens — tudo no HTML
  → Indexação perfeita ✅
```

#### A solução: SSG + On-Demand Revalidation

O Next.js App Router permite gerar páginas estaticamente no build E regenerá-las
sob demanda sem rebuild completo. O fluxo funciona assim:

**1. Build time — Geração estática inicial:**

```typescript
// src/app/blog/[slug]/page.tsx

// Gera todas as rotas estáticas no build
export async function generateStaticParams() {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('slug')
    .eq('is_published', true)

  return posts.map((post) => ({ slug: post.slug }))
}

// Gera o HTML estático de cada post
export default async function BlogPost({ params }) {
  const supabase = createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_published', true)
    .single()

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

// SEO: metadata estática gerada no build
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover_image_url],
      type: 'article',
      publishedTime: post.published_at,
    },
  }
}
```

No `next build`, o Next.js chama o Supabase, pega todos os posts publicados e gera
um arquivo `.html` estático para cada um. Resultado: HTML puro na CDN.

**2. Admin publica/edita um post — Revalidação on-demand:**

```typescript
// src/app/api/revalidate/route.ts

import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Verifica que a chamada vem do admin autenticado
  const { path, type } = await request.json()
  const authHeader = request.headers.get('authorization')

  // Validação: só o admin pode revalidar
  // (verificar token Supabase ou secret compartilhado)

  if (type === 'blog') {
    revalidatePath('/blog')              // Regenera a listagem
    revalidatePath(`/blog/${path}`)      // Regenera o post específico
    revalidatePath('/')                  // Regenera a home (posts recentes)
  }

  if (type === 'members') {
    revalidatePath('/membros')
  }

  if (type === 'projects') {
    revalidatePath('/projetos')
    revalidatePath(`/projetos/${path}`)
  }

  // ... etc para cada tipo de conteúdo

  return NextResponse.json({ revalidated: true })
}
```

```typescript
// No admin, ao salvar/publicar um post:

async function publishPost(post) {
  // 1. Salva no Supabase
  await supabase.from('posts').update({
    is_published: true,
    published_at: new Date().toISOString()
  }).eq('id', post.id)

  // 2. Dispara revalidação — Next.js regenera o HTML estático
  await fetch('/api/revalidate', {
    method: 'POST',
    body: JSON.stringify({ path: post.slug, type: 'blog' }),
  })

  // Pronto! Em ~1-2 segundos o HTML novo está na CDN
}
```

**3. O que acontece quando um visitante acessa a página:**

```
ANTES da revalidação:
  Visitante → CDN Vercel → HTML estático (versão antiga) → Resposta instantânea

Admin clica "Publicar" → API /revalidate → Next.js regenera HTML no servidor

DEPOIS da revalidação:
  Visitante → CDN Vercel → HTML estático (versão nova) → Resposta instantânea

Em ambos os casos: HTML estático puro, sem JS necessário para o conteúdo.
```

#### Mapa completo de renderização por página

| Página | Estratégia | Motivo | Revalida quando? |
|--------|-----------|--------|-------------------|
| `/` (Home) | **SSG + on-demand** | SEO, performance | Admin edita config, publica post, edita projeto |
| `/sobre` | **SSG + on-demand** | SEO, conteúdo raramente muda | Admin edita texto do sobre |
| `/membros` | **SSG + on-demand** | SEO, lista de membros | Admin adiciona/remove membro |
| `/projetos` | **SSG + on-demand** | SEO | Admin edita projeto |
| `/projetos/[slug]` | **SSG + on-demand** | SEO, cada projeto tem sua página | Admin edita projeto específico |
| `/conquistas` | **SSG + on-demand** | SEO | Admin adiciona conquista |
| `/blog` | **SSG + on-demand** | SEO, listagem de posts | Admin publica/despublica post |
| `/blog/[slug]` | **SSG + on-demand** | **SEO crítico** — cada post precisa de HTML completo | Admin edita/publica post |
| `/noticias` | **SSG + on-demand** | SEO | Admin publica post tipo notícia |
| `/reportagens` | **SSG + on-demand** | SEO | Admin adiciona reportagem |
| `/seja-membro` | **SSG + on-demand** | SEO | Admin muda status recrutamento |
| `/contato` | **SSG** (puro) | Conteúdo fixo | Apenas no build |
| `/admin/*` | **CSR** (client-side) | Não precisa de SEO, é painel interno | N/A |

#### Posts novos (slug que não existia no build)

Quando o admin cria um post **novo** (slug que não existia), o `revalidatePath` com
`dynamicParams = true` faz o Next.js gerar o HTML na primeira requisição e cachear
na CDN a partir daí:

```typescript
// src/app/blog/[slug]/page.tsx

// Permite slugs que não foram gerados no build
export const dynamicParams = true

// Fallback: se o slug não existe no cache, gera sob demanda
// O primeiro visitante espera ~1s, todos os seguintes recebem o cache
```

#### SEO completo por post

Cada post estático inclui no HTML:

```html
<!-- Gerado automaticamente pelo generateMetadata -->
<head>
  <title>Título do Post | ERUS - Equipe de Robótica da UFES</title>
  <meta name="description" content="Excerpt do post..." />

  <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:title" content="Título do Post" />
  <meta property="og:description" content="Excerpt do post..." />
  <meta property="og:image" content="https://supabase.../cover.jpg" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2026-05-20T..." />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Título do Post" />

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Título do Post",
    "author": { "@type": "Organization", "name": "ERUS UFES" },
    "datePublished": "2026-05-20",
    "image": "https://supabase.../cover.jpg"
  }
  </script>
</head>

<!-- Conteúdo completo no HTML — Googlebot indexa tudo -->
<article>
  <h1>Título do Post</h1>
  <p>Todo o conteúdo renderizado server-side...</p>
</article>
```

#### Sitemap dinâmico

```typescript
// src/app/sitemap.ts

export default async function sitemap() {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, updated_at')
    .eq('is_published', true)

  const { data: projects } = await supabase
    .from('projects')
    .select('slug, updated_at')
    .eq('is_active', true)

  return [
    { url: 'https://erus.inf.ufes.br', changeFrequency: 'weekly' },
    { url: 'https://erus.inf.ufes.br/sobre', changeFrequency: 'monthly' },
    { url: 'https://erus.inf.ufes.br/membros', changeFrequency: 'monthly' },
    ...posts.map((post) => ({
      url: `https://erus.inf.ufes.br/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: 'yearly',
    })),
    ...projects.map((project) => ({
      url: `https://erus.inf.ufes.br/projetos/${project.slug}`,
      lastModified: project.updated_at,
      changeFrequency: 'monthly',
    })),
  ]
}
```

#### Resumo: Por que isso funciona perfeitamente para SEO

1. **HTML completo na CDN** — Nenhum JS precisa rodar para ver o conteúdo
2. **Meta tags e Open Graph** — Gerados no servidor, presentes no HTML
3. **JSON-LD structured data** — Google entende que é um artigo, quem escreveu, quando
4. **Sitemap automático** — Google descobre todos os posts e páginas
5. **Tempo de resposta <100ms** — Arquivo estático na CDN mais próxima
6. **Atualização instantânea** — Admin publica → 1-2s → HTML novo na CDN
7. **Sem custo extra** — Vercel free tier suporta ISR e revalidação on-demand

---

## 9. Estrutura de Pastas (Atualizada com Admin)

```
erus-site/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── projects/
│   │   ├── covers/
│   │   └── posts/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home
│   │   ├── layout.tsx                  # Layout raiz
│   │   ├── sobre/page.tsx
│   │   ├── membros/page.tsx
│   │   ├── projetos/
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/page.tsx         # Projeto individual (dinâmico)
│   │   ├── conquistas/page.tsx
│   │   ├── noticias/page.tsx
│   │   ├── reportagens/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── seja-membro/page.tsx
│   │   ├── contato/page.tsx
│   │   ├── admin/
│   │   │   ├── layout.tsx              # Layout do admin (sidebar, auth guard)
│   │   │   ├── page.tsx                # Login
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── membros/page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx            # Lista posts
│   │   │   │   ├── novo/page.tsx       # Criar post
│   │   │   │   └── [id]/page.tsx       # Editar post
│   │   │   ├── projetos/page.tsx
│   │   │   ├── conquistas/page.tsx
│   │   │   ├── reportagens/page.tsx
│   │   │   ├── cursos/page.tsx
│   │   │   └── config/page.tsx
│   │   └── api/
│   │       ├── contact/route.ts
│   │       └── revalidate/route.ts     # Revalidação on-demand
│   ├── components/
│   │   ├── ui/                         # shadcn/ui
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── admin/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── DataTable.tsx           # Tabela reutilizável para CRUDs
│   │   │   ├── RichTextEditor.tsx      # Wrapper do Tiptap
│   │   │   ├── ImageUpload.tsx         # Upload para Supabase Storage
│   │   │   └── FormFields.tsx          # Campos de form reutilizáveis
│   │   ├── home/
│   │   ├── members/
│   │   ├── projects/
│   │   └── blog/
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts               # Supabase browser client
│   │   │   ├── server.ts               # Supabase server client (SSR)
│   │   │   └── middleware.ts            # Auth middleware helper
│   │   └── utils.ts
│   ├── types/
│   │   └── database.ts                 # Types gerados do Supabase
│   └── styles/
│       └── globals.css
├── supabase/
│   └── migrations/                     # SQL migrations versionadas
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                          # SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
│                                       # ADMIN_API_SECRET, SITE_URL (todas server-only)
└── package.json
```

---

## 10. Stack Tecnológica Final

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Framework** | Next.js 14+ (App Router) | SSG/SSR/ISR, API routes, middleware |
| **Styling** | Tailwind CSS | Utility-first, design system consistente |
| **Componentes** | shadcn/ui | Acessíveis, customizáveis, gratuitos |
| **Animações** | Framer Motion | Animações declarativas |
| **Banco de dados** | Supabase (PostgreSQL) | Free tier generoso, API automática |
| **Auth** | Supabase Auth | Login email/password, middleware |
| **Storage** | Supabase Storage | Upload de imagens, 1GB free |
| **Editor de texto** | Tiptap | Rich text gratuito, extensível |
| **Forms** | React Hook Form + Zod | Validação tipada |
| **Tabelas admin** | TanStack Table | Tabelas poderosas para CRUD |
| **Ícones** | Lucide React | Modernos e leves |
| **SEO** | Next.js Metadata API | OpenGraph, sitemap, robots |
| **Dark Mode** | next-themes | Toggle com persistência |
| **Deploy** | Vercel (Free) | Otimizado para Next.js |
| **Types** | Supabase CLI | `supabase gen types` auto-gera types do banco |

---

## 11. Prioridades de Implementação

### Fase 1 - Fundação
1. Setup Next.js + Tailwind + shadcn/ui
2. Criar projeto Supabase + tabelas + RLS
3. Layout base (Navbar, Footer, dark/light mode)
4. Página Home com hero e seções principais
5. Página Sobre

### Fase 2 - Conteúdo Principal
6. Página de Membros (ativos + egressos) — dados do Supabase
7. Página de Projetos (hub + páginas individuais)
8. Página de Conquistas

### Fase 3 - Admin
9. Auth + middleware de proteção
10. Layout do admin (sidebar, dashboard)
11. CRUD de Membros
12. Editor de Blog (Tiptap + upload de imagens)
13. CRUD de Projetos, Conquistas, Reportagens, Cursos
14. Página de configurações do site

### Fase 4 - Comunicação
15. Blog público (listagem + post individual com ISR)
16. Página de Notícias
17. Página de Reportagens
18. Página Seja Membro
19. Formulário de Contato

### Fase 5 - Polimento
20. SEO e metadata completos
21. Animações e microinterações (Framer Motion)
22. Analytics (Vercel Analytics)
23. Testes de acessibilidade
24. Otimização de performance (Lighthouse 90+)
25. Migração dos dados do site atual para o Supabase
26. Deploy final na Vercel
