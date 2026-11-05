// Compila o JSX do portfólio antes de publicar, para o navegador não precisar baixar e rodar o Babel.
// Uso: node fonte/compilar.js fonte/portfolio.html index.html
// A fonte continua sendo o HTML com <script type="text/babel" data-presets="react">; a saída troca esse bloco
// pelo JavaScript já traduzido e tira a tag do Babel. O resto do arquivo fica idêntico.
// Na primeira vez, baixa a mesma versão do Babel que a fonte usa e guarda ao lado deste arquivo.
const fs = require("fs");
const path = require("path");

const BABEL_URL = "https://cdn.jsdelivr.net/npm/@babel/standalone@7.25.6/babel.min.js";
const BABEL_FILE = path.join(__dirname, "babel.min.js");

async function loadBabel() {
  if (!fs.existsSync(BABEL_FILE)) {
    console.log("baixando o Babel 7.25.6…");
    const res = await fetch(BABEL_URL);
    if (!res.ok) throw new Error(`não consegui baixar o Babel (${res.status})`);
    fs.writeFileSync(BABEL_FILE, Buffer.from(await res.arrayBuffer()));
  }
  return require(BABEL_FILE);
}

async function main() {
  const [src, out] = process.argv.slice(2);
  if (!src || !out) {
    console.error("uso: node fonte/compilar.js fonte/portfolio.html index.html");
    process.exit(1);
  }
  const html = fs.readFileSync(src, "utf8");

  const babelTag = /\n[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@babel\/standalone@[^"]+"[^>]*><\/script>/;
  const block = /<script type="text\/babel" data-presets="react">([\s\S]*?)<\/script>/;
  if (!babelTag.test(html) || !block.test(html)) {
    console.error("não achei a tag do Babel ou o bloco text/babel na fonte");
    process.exit(1);
  }

  const Babel = await loadBabel();
  const jsx = html.match(block)[1];
  // o mesmo preset que o navegador usava; sem preset-env, o código moderno fica como está
  const { code } = Babel.transform(jsx, { presets: ["react"], sourceType: "script", compact: false, comments: true });

  const result = html
    .replace(babelTag, "")
    .replace(block, () => `<script>\n    // Gerado por ferramentas/compilar.js a partir do JSX da fonte: não edite aqui.\n${code}\n  </script>`);
  fs.writeFileSync(out, result);
  console.log(`${path.basename(out)}: ${Math.round(result.length / 1024)} KB (fonte ${Math.round(html.length / 1024)} KB)`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
