# Tutorial: membros e egressos

Os membros ficam em **`src/data/members.ts`**, em dois arrays:

- **`activeMembers`** — professores responsáveis e membros atuais (aparecem na
  página `/membros` como cards com foto).
- **`alumniMembers`** — egressos (lista de "Membros Egressos", agrupados por ano
  de saída).

Cada pessoa é um objeto com o formato do tipo `Member`:

```ts
{
  name: 'Artur Oliveira Cunha',
  course: 'ccomp',
  photo: '/membros/artur_cunha.jpeg',
  githubUsername: 'arturocunha',     // opcional — botão do GitHub
  linkedinUsername: 'artur-cunha',   // opcional — botão do LinkedIn
  yearLeft: null,
  isProfessor: false,
}
```

### Campos

| Campo            | Obrigatório | O que é                                                            |
| ---------------- | ----------- | ------------------------------------------------------------------ |
| `name`           | ✅          | Nome completo da pessoa.                                            |
| `isProfessor`    | ✅          | `true` para professores responsáveis; `false` para membros.        |
| `yearLeft`       | ✅          | `null` para quem está ativo; o ano de saída (número) para egressos. |
| `course`         | opcional    | Código do curso (tabela abaixo). Professores podem ficar sem.      |
| `photo`            | opcional  | Caminho da foto, ex.: `/membros/artur_cunha.jpeg` (veja "Fotos").  |
| `yearJoined`       | opcional  | Ano de entrada. Quando presente, o card mostra "Desde &lt;ano&gt;". |
| `githubUsername`   | opcional  | Usuário do GitHub. Quando presente, ativa o botão do GitHub no card. |
| `linkedinUsername` | opcional  | Identificador do LinkedIn — o trecho depois de `/in/` na URL do perfil (ex.: `linkedin.com/in/fulano-silva` → `'fulano-silva'`). Quando presente, ativa o botão do LinkedIn no card. |

> Sem `photo` (ou se o arquivo não existir), o card mostra um ícone de pessoa
> padrão. Sem `course`/`githubUsername`/`linkedinUsername`, os respectivos
> elementos simplesmente não aparecem. Nada quebra.

### Cursos válidos (`course`)

| Código     | Curso exibido            |
| ---------- | ------------------------ |
| `engcomp`  | Engenharia de Computação |
| `eletrica` | Engenharia Elétrica      |
| `ccomp`    | Ciência da Computação    |
| `mecanica` | Engenharia Mecânica      |
| `producao` | Engenharia de Produção   |
| `civil`    | Engenharia Civil         |
| `economia` | Economia                 |
| `sistemas` | Sistemas de Informação   |

> Curso novo? É preciso adicioná-lo ao tipo `Course`, ao `courseLabels` e ao
> `courseEmojis` em `src/data/members.ts` (peça ajuda a um desenvolvedor).

---

## Fotos dos membros

As fotos ficam em **`public/membros/`**. Padrão:

- Formato **PNG**, **JPG** ou **JPEG**.
- Nome **`nome_sobrenome.ext`** — primeiro nome + último sobrenome, minúsculo,
  sem acentos, sem espaços (use `_`). Ex.: "Bruno Légora" → `bruno_legora.jpg`.
- De preferência **quadrada** (ex.: 400×400) — é exibida quadrada no card;
  imagens não quadradas são recortadas pelo centro (o rosto pode ficar cortado,
  então prefira já recortar quadrado).

No objeto do membro, aponte o campo `photo` para esse arquivo, **com a extensão
certa**: `photo: '/membros/bruno_legora.jpg'`. A lista de nomes esperados está em
[`public/membros/README.md`](../public/membros/README.md).

---

## Adicionar um membro ativo

1. Abra `src/data/members.ts`.
2. No array `activeMembers`, copie um item existente e cole no final (antes do
   `];`), ajustando os dados:

   ```ts
   {
     name: 'Ana Beatriz Souza',
     course: 'eletrica',
     photo: '/membros/ana_souza.jpg',
     githubUsername: 'anabsouza',     // opcional
     linkedinUsername: 'ana-b-souza', // opcional
     yearLeft: null,
     isProfessor: false,
   },
   ```

3. Coloque a foto `ana_souza.jpg` em `public/membros/`.
4. Garanta que o item anterior termina com vírgula. Salve e confira em
   <http://localhost:3000/membros>.

Para um **professor responsável**, use `isProfessor: true` e pode omitir o
`course` — o card mostra "Professor Responsável" como subtítulo.

---

## Editar um membro

Encontre o objeto e altere o campo desejado. Para trocar a foto, substitua o
arquivo em `public/membros/` (mantendo o nome) ou atualize o `photo`.

---

## Marcar um membro como egresso (quando alguém sai)

**Mova** o objeto de `activeMembers` para `alumniMembers` e preencha o
`yearLeft` com o ano de saída:

```ts
{
  name: 'Ana Beatriz Souza',
  course: 'eletrica',
  yearLeft: 2028,   // <-- ano em que saiu
  isProfessor: false,
},
```

Egressos aparecem em **lista** (não em card), mas com os mesmos elementos dos
membros ativos: **foto** e botões de **GitHub/LinkedIn**. São agrupados pelo
`yearLeft`, do mais recente ao mais antigo.

> Os egressos atuais (`Fulano da Silva`, etc.) são **placeholders** de 2025 — é
> só substituir pelos dados reais quando você os tiver.

---

## Remover um membro

Apague o objeto do array. Confirme que não sobrou vírgula solta. Normalmente
quem sai **vira egresso** (passa para `alumniMembers`); só remova de vez se a
pessoa nunca deveria ter sido listada.

---

## Erros comuns

- **Curso inválido:** `course` precisa ser um dos códigos da tabela.
- **Vírgula faltando** entre os objetos do array.
- **Aspas trocadas:** use aspas simples `'...'`.
- **Foto não aparece:** confira o nome do arquivo em `public/membros/` (incluindo
  a **extensão**) e o campo `photo`. Sem foto válida, o card mostra um ícone de
  pessoa padrão (comportamento esperado).

Rode `npx tsc --noEmit` antes do PR — ele aponta esses erros. Depois siga o
fluxo de commit/PR do [README](./README.md).
