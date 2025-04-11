let contadorLinks = 0;

function criarLinks() {
  contadorLinks++;
  const container = document.getElementById("areaLinks");

  const div = document.createElement("div");
  div.innerHTML = `
    <input id="textoLink${contadorLinks}" type="text" placeholder="Texto do link"
      class="w-full border p-2 rounded mb-1 bg-white/20 text-white placeholder-white/70"/>
    <input id="urlLink${contadorLinks}" type="url" placeholder="URL do link"
      class="w-full border p-2 rounded mb-2 bg-white/20 text-white placeholder-white/70"/>
  `;
  container.appendChild(div);
}

function gerarCodigo() {
  const nome = document.getElementById("nomeHTML").value.trim() || 'index';
  const texto = document.getElementById("textoCabecalho").value || 'Cabeçalho';
  const corF = document.getElementById("corFundo").value;
  const corT = document.getElementById("corFonte").value;
  const tamanho = document.getElementById("tamFonte").value;
  const linkColor = document.getElementById("corLinks").value;
  const estiloLinks = document.getElementsByName("estiloLinks");
  const sublinhado = [...estiloLinks].find(r => r.checked).value === '1';

  // Links
  const links = [];
  for (let i = 1; i <= contadorLinks; i++) {
    const textoLink = document.getElementById(`textoLink${i}`)?.value;
    const urlLink = document.getElementById(`urlLink${i}`)?.value;
    if (textoLink && urlLink) {
      links.push(`<a href="${urlLink}" class="custom-link">${textoLink}</a>`);
    }
  }

  // HTML --------------------------------------------------------------------
  const html = `<div id="cabecalho">
  <h1>${texto}</h1>
</div>

<nav id="links">
  ${links.join('<br>')}
</nav>`;

  // CSS --------------------------------------------------------------------
  const css = `#cabecalho {
  background-color: ${corF};
  color: ${corT};
  font-size: ${tamanho}px;
  padding: 20px;
  text-align: center;
}

.custom-link {
  color: ${linkColor};
  text-decoration: ${sublinhado ? 'underline' : 'none'};
  display: inline-block;
  margin: 5px 0;
  font-weight: 500;
  transition: transform 0.2s ease, color 0.3s;
}

.custom-link:hover {
  transform: scale(1.05);
  color: #14f1d9;
}`;

  document.getElementById("codeHTML").value = html;
  document.getElementById("codeCSS").value = css;

  atualizarPreview(html, css);

  const msg = document.getElementById("mensagemSucesso");
  if (msg) {
    msg.classList.remove("hidden");
    msg.classList.add("opacity-100");

    setTimeout(() => {
      msg.classList.add("hidden");
      msg.classList.remove("opacity-100");
    }, 3000);
  }
}

function atualizarPreview(html, css) {
  const iframe = document.getElementById("previewFrame");
  const blob = new Blob(
    [`<html><head><style>${css}</style></head><body>${html}</body></html>`],
    { type: "text/html" }
  );
  iframe.src = URL.createObjectURL(blob);
}

function download(id, filename) {
  const content = document.getElementById(id).value;
  const name = filename || (document.getElementById("nomeHTML").value.trim() || 'index') + '.html';
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.download = name;
  link.href = URL.createObjectURL(blob);
  link.click();
}

function abrirNovaAba() {
  const html = document.getElementById("codeHTML").value;
  const css = document.getElementById("codeCSS").value;
  const blob = new Blob(
    [`<html><head><style>${css}</style></head><body>${html}</body></html>`],
    { type: 'text/html' }
  );
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}
