# Guia de conteúdo do site da ERUS

Este site é **git-based**: todo o conteúdo vive em arquivos versionados no
repositório. Para publicar ou alterar qualquer coisa, você edita um arquivo,
faz commit e abre um _pull request_. Não há banco de dados nem painel
administrativo para o conteúdo público.

> **Quem edita:** membros com acesso ao repositório e familiaridade com Git.

## Onde fica cada coisa

| Conteúdo            | Formato | Local                          | Tutorial                       |
| ------------------- | ------- | ------------------------------ | ------------------------------ |
| Posts do blog       | `.mdx`  | `src/content/blog/`            | [blog.md](./blog.md)           |
| Membros e egressos  | `.ts`   | `src/data/members.ts`          | [membros.md](./membros.md)     |
| Projetos            | `.ts`   | `src/data/projects.ts`         | [projetos.md](./projetos.md)   |

Outros dados estruturados (`conquistas`, `reportagens`) seguem o **mesmo padrão**
dos projetos: um arquivo `src/data/*.ts` com um array tipado. O tutorial de
projetos serve de modelo para eles.

### Fotos

| Tipo                | Pasta             | Nome do arquivo        | Formato |
| ------------------- | ----------------- | ---------------------- | ------- |
| Foto de membro      | `public/membros/` | `nome_sobrenome.png`   | PNG     |
| Foto de projeto     | `public/projetos/`| `<slug>.png`           | PNG     |
| Capa de post (blog) | `public/blog/`    | livre (ex.: `cbr.jpg`) | livre — **opcional** |

Detalhes e a lista de nomes esperados estão nos READMEs de cada pasta
([membros](../public/membros/README.md), [projetos](../public/projetos/README.md))
e nos tutoriais. Foto de membro/projeto ausente cai para um fallback (iniciais /
ícone) — nada quebra.

## Fluxo de trabalho (vale para tudo)

1. **Crie uma branch** a partir da `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b conteudo/descricao-curta
   ```
2. **Edite ou crie** o arquivo conforme o tutorial específico.
3. **Veja localmente** antes de enviar:
   ```bash
   npm run dev
   ```
   Abra <http://localhost:3000> e confira a página que você alterou.
4. **Confira se nada quebrou** (especialmente ao editar arquivos `.ts`):
   ```bash
   npx tsc --noEmit
   ```
   Se não aparecer nenhum erro, está tudo certo.
5. **Commit e push:**
   ```bash
   git add .
   git commit -m "conteúdo: descreva o que mudou"
   git push -u origin conteudo/descricao-curta
   ```
6. **Abra o Pull Request** no GitHub. Depois do merge na `main`, o deploy é
   automático e o site atualiza em poucos minutos.

## Dicas gerais

- **Não edite a `main` diretamente** — sempre passe por uma branch + PR.
- **Acentuação e caracteres especiais:** salve os arquivos em **UTF-8**. No
  Windows, prefira o VS Code (que já usa UTF-8) a editores antigos.
- **Imagens:** coloque em `public/...` e referencie pelo caminho a partir da
  raiz (ex.: uma imagem em `public/blog/foo.jpg` vira `/blog/foo.jpg`).
- **Em dúvida sobre um campo?** Abra o arquivo de dados e copie um item
  existente como modelo — é a forma mais segura de não errar o formato.
