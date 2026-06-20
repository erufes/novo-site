# Tutorial: projetos

Os projetos ficam em **`src/data/projects.ts`**, no array `projects`. Eles
aparecem na página `/projetos` (com filtro por tipo) e cada um tem sua própria
página em `/projetos/<slug>`.

Cada projeto é um objeto com este formato (o tipo `Project`):

```ts
{
  name: 'Seguidor de Linhas',
  slug: 'seguidor-de-linhas',
  description: 'Robôs autônomos que percorrem trajetos demarcados por linhas...',
  longDescription: 'Texto longo, com um ou dois parágrafos detalhando o projeto...',
  emoji: '🏎️',
  tags: ['PID', 'sensores IR', 'Arduino'],
  type: 'competitivo',
  photo: '/projetos/seguidor-de-linhas.png',
},
```

### Campos

| Campo             | O que é                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| `name`            | Nome do projeto.                                                          |
| `slug`            | Identificador da URL (`/projetos/<slug>`). Minúsculas, hífens, sem acento. **Único.** |
| `description`     | Resumo curto (1 frase) — usado nos cards da listagem.                     |
| `longDescription` | Texto completo — aparece na página individual do projeto.                 |
| `emoji`           | Um emoji que representa o projeto.                                        |
| `tags`            | Lista de tecnologias/temas (strings).                                     |
| `type`            | Categoria — **um dos valores da tabela abaixo** (alimenta o filtro).      |
| `photo`           | Foto única do projeto (veja "Foto do projeto").                          |

### Tipos válidos (`type`)

| Código        | Significado            |
| ------------- | ---------------------- |
| `competitivo` | Projeto de competição  |
| `pesquisa`    | Projeto de pesquisa    |
| `educacional` | Iniciativa educacional |
| `evento`      | Evento da equipe       |

---

## Foto do projeto

Cada projeto tem **uma** foto, em **`public/projetos/`**. Padrão obrigatório:

- Formato **PNG**.
- Nome **`<slug>.png`** — o mesmo `slug` do projeto. Ex.: o projeto
  `seguidor-de-linhas` usa `public/projetos/seguidor-de-linhas.png`.
- De preferência em paisagem (ex.: 1200×675, 16:9) — é exibida como capa no card
  e como banner na página do projeto.

No objeto, o campo `photo` aponta para esse arquivo:
`photo: '/projetos/seguidor-de-linhas.png'`.

> Enquanto a foto não existir, o card e a página mostram o **ícone do projeto**
> como fallback — nada fica quebrado. A lista de nomes esperados está em
> [`public/projetos/README.md`](../public/projetos/README.md).

---

## Adicionar um projeto

1. Abra `src/data/projects.ts`.
2. Copie um item existente, cole no final do array (antes do `];`) e ajuste os
   campos:

   ```ts
   {
     name: 'Drone Autônomo',
     slug: 'drone-autonomo',
     description: 'Veículo aéreo não tripulado com navegação autônoma.',
     longDescription:
       'O projeto Drone Autônomo desenvolve um VANT capaz de planejar rotas e ' +
       'evitar obstáculos usando visão computacional e sensores de distância.',
     emoji: '🚁',
     tags: ['VANT', 'visão computacional', 'controle', 'ROS'],
     type: 'pesquisa',
     photo: '/projetos/drone-autonomo.png',
   },
   ```

3. Coloque a foto `drone-autonomo.png` em `public/projetos/`.
4. Garanta que o item anterior termina com vírgula. Salve e confira em
   <http://localhost:3000/projetos> e em `/projetos/drone-autonomo`.

> **Texto longo:** para `longDescription` grande, quebre em várias strings com
> `+` no fim de cada linha, como acima — fica mais legível.

---

## Editar um projeto

Encontre o objeto e altere o que precisar. Para trocar a foto, substitua o
arquivo em `public/projetos/` (mantendo o nome `<slug>.png`).

> ⚠️ **Evite mudar o `slug`** de um projeto já publicado: isso altera a URL e
> quebra links existentes (e o nome esperado da foto).

---

## Remover um projeto

Apague o objeto do array `projects`. Verifique que não sobrou vírgula solta. Se
quiser, remova também a foto de `public/projetos/`.

---

## Erros comuns

- **`type` inválido:** precisa ser `competitivo`, `pesquisa`, `educacional` ou
  `evento`.
- **`slug` repetido:** dois projetos não podem ter o mesmo slug.
- **Foto não aparece:** confira o nome (`<slug>.png`) e a pasta
  (`public/projetos/`). Sem foto, aparece o ícone (esperado).
- **Vírgula faltando** entre os objetos.

---

## Outros dados estruturados (conquistas, reportagens)

`src/data/achievements.ts` e `src/data/reports.ts` seguem **a mesma ideia**: um
array tipado de objetos. Abra o arquivo, copie um item como modelo e ajuste os
campos. Rode `npx tsc --noEmit` para validar antes do PR.

Depois siga o fluxo de commit/PR do [README](./README.md).
