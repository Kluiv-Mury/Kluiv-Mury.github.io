# Portfólio · Kluivert Mury

Site estático feito com React 18, React-Bootstrap e Bootstrap 5, em um único `index.html` (as bibliotecas vêm de CDN). O código é escrito em JSX em `fonte/portfolio.html` e compilado para o `index.html` antes de publicar, para o navegador não precisar rodar o Babel.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O portfólio inteiro, já compilado (não edite à mão) |
| `fonte/portfolio.html` | A fonte do portfólio, em JSX: é aqui que se edita |
| `fonte/compilar.js` | Gera o `index.html` a partir da fonte |
| `mac-niteroi.glb` | Modelo 3D do MAC e do entorno, usado no modo escuro |
| `mapa-niteroi.svg` | Ruas de Niterói no fundo da página |
| `og.jpg`, `og.png` | Imagem da prévia ao compartilhar o link |
| `robots.txt` | Pede aos buscadores para não indexar a pasta `fonte/` |
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

Para atualizar, edite `fonte/portfolio.html`, gere o `index.html` com o comando abaixo (precisa do Node 18 ou mais novo; na primeira vez ele baixa o Babel) e faça um novo commit: o GitHub republica sozinho.

```bash
node fonte/compilar.js fonte/portfolio.html index.html
```

## Editar o conteúdo

Todos os textos ficam em `fonte/portfolio.html`, no começo do `<script type="text/babel">`, em constantes:

- `PROFILE`: nome, e-mail, links, frases do efeito de digitação e resumo
- `CITY_PROJECTS`: Gêmeo Digital de Niterói e Colab (contribuições, link da plataforma, fluxo de dados e o visual da esquerda: `"stack"` mostra as camadas com o holograma 3D, `"dashboard"` mostra o mini painel com gráfico). O holograma de cada camada é gerado a partir do `icon` dela (qualquer ícone do Bootstrap Icons), e `mine: true` pinta a camada de âmbar com o selo "minha atuação". Para incluir outra plataforma, copie um dos objetos.
- `EXPERIENCE`, `EDUCATION`, `PROJECTS`, `SKILLS`, `STATS`

Em `PROJECTS`, preencha `demo` com o link do Painel de Saúde quando ele estiver publicado; se `repo` ou `demo` ficarem `null`, o botão não aparece.

## Ver localmente

```bash
python -m http.server 5500
```

Depois abra http://localhost:5500 para ver o site compilado, ou http://localhost:5500/fonte/portfolio.html para ver a fonte direto, com o Babel no navegador (nessa página o mapa de fundo e o modelo 3D não carregam, porque ficam na pasta de cima).
