function configEstiloCabecalho() {
    const bg = document.getElementById("corFundo").value;
    const corFonte = document.getElementById("corFonte").value;
    const tamFonte = document.getElementById("tamFonte").value;
  
    return `
  #cabecalho {
    background-color: ${bg};
    color: ${corFonte};
    font-size: ${tamFonte}pt;
  }
  `;
  }
  
  function configEstiloLinks() {
    const corLink = document.getElementById("corLinks").value;
    const estilo = document.querySelector('input[name="estiloLinks"]:checked')?.value || "1";
    const decoracao = estilo === "0" ? "none" : "underline";
  
    return `
  a {
    color: ${corLink};
    text-decoration: ${decoracao};
  }
  `;
  }
  
  function configHtmlLinks() {
    const links = document.getElementsByName("links");
    const hrefs = document.getElementsByName("href");
    let html = "";
  
    for (let i = 0; i < links.length; i++) {
      const texto = links[i].value.trim();
      const caminho = hrefs[i].value;
  
      if (texto && caminho) {
        const partes = caminho.split("\\");
        const nomeArquivo = partes[partes.length - 1];
        html += `<a href="${nomeArquivo}" class="mr-4">${texto}</a>\n`;
      }
    }
  
    return html;
  }
  
  function configHTMLCabecalho() {
    const texto = document.getElementById("textoCabecalho").value.trim();
    return texto ? `<h1>${texto}</h1>` : "";
  }
  
  function gerarCodigo() {
    const css = configEstiloCabecalho() + configEstiloLinks();
    const html = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Minha Página</title>
    <link rel="stylesheet" href="estilo.css">
    <style>${css}</style>
  </head>
  <body>
    <div id="cabecalho">
      ${configHTMLCabecalho()}
    </div>
    <nav id="links">
      ${configHtmlLinks()}
    </nav>
    <div id="conteudo"></div>
  </body>
  </html>`;
  
    document.getElementById("codeHTML").value = html;
    document.getElementById("codeCSS").value = css;
  
    const previewFrame = document.getElementById("previewFrame");
    if (previewFrame) {
      previewFrame.srcdoc = html;
    }
  }
  
  function download(id, nomeArquivo) {
    const texto = document.getElementById(id).value;
    const nome = nomeArquivo || (document.getElementById("nomeHTML").value.trim() || "pagina") + ".html";
    const blob = new Blob([texto], { type: "text/plain" });
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nome;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function criarLinks() {
    const area = document.getElementById("areaLinks");
  
    const div = document.createElement("div");
    div.className = "flex items-center gap-2";
  
    const inputTexto = document.createElement("input");
    inputTexto.name = "links";
    inputTexto.placeholder = "Texto do link";
    inputTexto.className = "border p-1 rounded w-1/2";
  
    const inputFile = document.createElement("input");
    inputFile.name = "href";
    inputFile.type = "file";
    inputFile.className = "w-1/2";
  
    div.appendChild(inputTexto);
    div.appendChild(inputFile);
    area.appendChild(div);
  }
  
  function abrirNovaAba() {
    const html = document.getElementById("codeHTML").value;
    const novaJanela = window.open();
    novaJanela.document.write(html);
    novaJanela.document.close();
  }
  
