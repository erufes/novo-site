# Tutorial: posts do blog

Os posts ficam em `src/content/blog/`, um arquivo **`.mdx`** por post. MDX é
Markdown com superpoderes — você escreve texto normal e, se quiser, embute
componentes. O nome do arquivo vira o endereço do post.

> `src/content/blog/primeiros-passos-com-ros2.mdx` → publica em
> `/blog/primeiros-passos-com-ros2`

Não existe índice ou lista para manter: o site varre a pasta sozinho. Basta
criar/editar/apagar o arquivo.

---

## Criar um post

1. Crie um arquivo em `src/content/blog/` com um **slug** como nome — só letras
   minúsculas, números e hífens, sem espaços nem acentos. Ex.:
   `competicao-cbr-2026.mdx`.
2. Comece o arquivo com o bloco `metadata` e escreva o conteúdo em Markdown
   abaixo:

   ```mdx
   export const metadata = {
     title: "Nossa participação na CBR 2026",
     description: "Um resumo de como foi a Competição Brasileira de Robótica deste ano.",
     date: "2026-10-25",
     author: "Equipe ERUS",
     tags: ["competição", "cbr"],
   };

   # Nossa participação na CBR 2026

   Texto de abertura do post em **markdown**.

   ## Um subtítulo

   - item de lista
   - outro item

   E um [link para algum lugar](https://exemplo.com).
   ```

3. Salve, rode `npm run dev` e abra <http://localhost:3000/blog> para conferir.

### Campos do `metadata`

| Campo         | Obrigatório | O que é                                                       |
| ------------- | ----------- | ------------------------------------------------------------- |
| `title`       | ✅          | Título do post.                                               |
| `description` | ✅          | Resumo de 1–2 frases (aparece na listagem e no `<head>`).     |
| `date`        | ✅          | Data no formato `"AAAA-MM-DD"`. Define a ordem (mais recente primeiro). |
| `author`      | ✅          | Nome de quem escreveu.                                        |
| `tags`        | opcional    | Lista de etiquetas. A **primeira** aparece como categoria na listagem. |
| `cover`       | opcional    | Caminho de uma imagem de capa, ex.: `"/blog/cbr.jpg"`.        |
| `draft`       | opcional    | `true` esconde o post do site (veja abaixo).                  |

---

## Escrever o conteúdo (Markdown)

O corpo é Markdown comum. Os principais recursos:

```md
## Título de seção
### Subtítulo

Texto com **negrito**, _itálico_ e `código inline`.

- lista
- com itens

1. lista
2. numerada

> Uma citação em destaque.

[texto do link](https://exemplo.com)
```

**Imagens:** coloque o arquivo em `public/blog/` e referencie pelo caminho a
partir da raiz:

```md
![Robô seguidor de linha na pista](/blog/seguidor.jpg)
```

**Tabelas** e **blocos de código** com destaque de linguagem também funcionam:

````md
| Coluna A | Coluna B |
| -------- | -------- |
| valor    | valor    |

```python
print("olá, mundo")
```
````

O estilo visual de todos esses elementos é definido em
`src/mdx-components.tsx` — você não precisa se preocupar com aparência.

---

## Editar um post

Abra o arquivo `.mdx` correspondente, altere o texto ou o `metadata` e salve.
Em desenvolvimento (`npm run dev`) a página recarrega sozinha.

> ⚠️ **Cuidado ao renomear o arquivo:** o nome é o endereço público. Renomear
> `meu-post.mdx` muda a URL e quebra links já compartilhados. Só renomeie se for
> realmente necessário.

---

## Rascunhos (não publicar ainda)

Para deixar um post pronto no repositório mas **invisível** no site, adicione
`draft: true` ao `metadata`:

```mdx
export const metadata = {
  title: "Post ainda em produção",
  description: "...",
  date: "2026-11-01",
  author: "Equipe ERUS",
  draft: true,
};
```

Ele some da listagem e o endereço retorna "página não encontrada". Quando
estiver pronto, remova a linha `draft: true`.

---

## Remover um post

Apague o arquivo `.mdx`. Pronto — ele desaparece da listagem e a rota deixa de
existir. (Se quiser apenas tirá-lo do ar temporariamente, use `draft: true` em
vez de apagar.)

---

## Checklist antes do PR

- [ ] O nome do arquivo é um slug válido (minúsculas, hífens, sem acento).
- [ ] `metadata` tem `title`, `description`, `date`, `author`.
- [ ] A data está no formato `"AAAA-MM-DD"`.
- [ ] Conferi o post em `npm run dev`.
- [ ] As imagens referenciadas existem em `public/`.

Depois é só seguir o fluxo de commit/PR descrito no [README](./README.md).
