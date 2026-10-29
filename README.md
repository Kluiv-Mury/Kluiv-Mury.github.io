# Portfólio · Kluivert Mury

Site estático feito com React 18, React-Bootstrap e Bootstrap 5, tudo em um único `index.html` (as bibliotecas vêm de CDN, não precisa de build nem de Node).

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O portfólio inteiro |
| `cv.pdf` | Currículo baixado pelo botão "Currículo" |
| `.nojekyll` | Diz ao GitHub Pages para servir os arquivos como estão |

A pasta `.claude/` só serve para a pré-visualização local; não precisa subir.

## Publicar no GitHub Pages (grátis e online 24h)

1. No GitHub, crie um repositório **público** chamado exatamente `Kluiv-Mury.github.io`.
2. Suba `index.html`, `cv.pdf` e `.nojekyll`:
   - pelo site: **Add file → Upload files**, arraste os arquivos e clique em **Commit changes**; ou
   - pelo terminal, dentro da pasta do portfólio:
     ```bash
     git init
     git add index.html cv.pdf .nojekyll README.md
     git commit -m "Portfólio"
     git branch -M main
     git remote add origin https://github.com/Kluiv-Mury/Kluiv-Mury.github.io.git
     git push -u origin main
     ```
3. No repositório, abra **Settings → Pages**, em **Source** escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Em 1 ou 2 minutos o site fica no ar em **https://kluiv-mury.github.io**, com HTTPS, e continua no ar enquanto o repositório existir.

Para atualizar, é só editar o `index.html` e fazer um novo commit: o GitHub republica sozinho.

## Editar o conteúdo

Todos os textos ficam no começo do `<script type="text/babel">`, em constantes:

- `PROFILE`: nome, e-mail, links, frases do efeito de digitação e resumo
- `CITY_PROJECTS`: Gêmeo Digital de Niterói e Colab (contribuições, link da plataforma, fluxo de dados e o visual da esquerda: `"stack"` mostra as camadas com o holograma 3D, `"dashboard"` mostra o mini painel com gráfico). O holograma de cada camada é gerado a partir do `icon` dela (qualquer ícone do Bootstrap Icons), e `mine: true` pinta a camada de âmbar com o selo "minha atuação". Para incluir outra plataforma, copie um dos objetos.
- `EXPERIENCE`, `EDUCATION`, `PROJECTS`, `SKILLS`, `STATS`

Em `PROJECTS`, preencha `demo` com o link do Painel de Saúde quando ele estiver publicado; se `repo` ou `demo` ficarem `null`, o botão não aparece.

## Ver localmente

```bash
python -m http.server 5500
```

Depois abra http://localhost:5500.
