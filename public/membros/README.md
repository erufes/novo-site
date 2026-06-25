# Fotos dos membros

Coloque aqui a foto de cada membro/professor.

## Padrão

- Formato: **PNG**, **JPG** ou **JPEG**.
- Nome do arquivo: **`nome_sobrenome.ext`** — primeiro nome + último sobrenome,
  tudo minúsculo, sem acentos e sem espaços (use `_`).
- Recomendado: imagem **quadrada** (ex.: 400×400) — ela é exibida quadrada no
  card; imagens não quadradas são recortadas pelo centro.

> Enquanto a foto não existir, o card usa o avatar do GitHub (se o membro tiver
> `githubUsername`) e, na falta dele, um ícone de pessoa. Nada quebra.

## Nomes esperados para o elenco atual

Professores:

- `bruno_legora.png` — Bruno Légora
- `andre_pacheco.png` — André Pacheco

Membros:

- `artur_cunha.png` — Artur Oliveira Cunha
- `daniel_constantinidis.png` — Daniel Cid Constantinidis
- `felipe_soares.png` — Felipe Bruno Raposo Soares
- `gabriel_campos.png` — Gabriel Lyra Campos
- `guilherme_figueiredo.png` — Guilherme Louzada Figueiredo
- `heron_silva.png` — Heron Garcia Lodi E Silva
- `leo_comerio.png` — Leo Santos Carvalho Comério
- `rafael_almeida.png` — Rafael Vieira de Almeida
- `vitor_tome.png` — Vitor Rodrigues Tomé
- `pietro_oliveira.png` — Pietro Pazini Passos de Oliveira
- `luiz_carraretto.png` — Luiz Marcos Iglesias Carraretto
- `paulo_pascoal.png` — Paulo Ricardo Pascoal
- `lucas_soares.png` — Lucas Zucarato Gama Soares
- `pedro_oliveira.png` — Pedro Pavesi de Oliveira
- `matheus_belmoque.png` — Matheus Rodrigues Belmoque
- `enrico_pinto.png` — Enrico Polez Ferreira Pinto
- `dimitry_deveza.png` — Dimitry Deveza
- `guilherme_olmo.png` — Guilherme Mesquita Olmo
- `ricardo_barbosa.png` — Ricardo Augusto Bona Barbosa

> A lista acima usa `.png` só como exemplo do **padrão de nome**; vários membros
> já têm foto em `.jpg`/`.jpeg`. O importante é o `photo` em `src/data/members.ts`
> apontar para o arquivo real, **com a extensão certa**.

O caminho da foto está definido em `src/data/members.ts` (campo `photo`). Se
você renomear um arquivo, atualize o `photo` do membro correspondente. Os links
de **GitHub** (`githubUsername`) e **LinkedIn** (`linkedinUsername`) ficam no
mesmo arquivo — veja [`docs/membros.md`](../../docs/membros.md).
