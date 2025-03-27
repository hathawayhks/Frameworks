var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho() {
    bg = document.getElementById("corFundo").value;
    corFonte = document.getElementById("corFonte").value;
    tamFonte = document.getElementById("tamFonte").value;
    ctxCabecalho = "#cabecalho{\n background-color:" + bg + ";\n";
    ctxCabecalho += " color:" + corFonte + ";\n";
    ctxCabecalho += " font-size:" + tamFonte + "pt;\n}\n";
    return ctxCabecalho;
}

function configEstiloLinks() {
    corLink = document.getElementById("corLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks = "a{\n color:" + corLink + ";\n";
    let aux = estiloLinks == "0" ? "none" : "underline";
    ctxLinks += " text-decoration:" + aux + ";\n}\n";
    return ctxLinks;
}

function configHtmlLinks() {
    let links = document.getElementById("links").value.split(';');
    let htmlLinks = '';
    links.forEach(link => {
        htmlLinks += `<a href="${link}" target="_blank">${link}</a><br>`;
    });
    return htmlLinks;
}

function configHTMLCabecalho() {
    let aux = document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>' + aux + '</h1>';
    return ctxCabecalho;
}

function gerarCodigo() {
    let codeCSS = document.querySelector("#codeCSS");
    let css = configEstiloCabecalho();
    css += configEstiloLinks();
    codeCSS.value = css;
    codeCSS.style.animation = 'none';
    codeCSS.offsetHeight;
    codeCSS.style.animation = 'fadeIn 1s ease-out';

    let codeHTML = document.querySelector("#codeHTML");
    ctxHTML = "<html>\n<head>\n" +
        "<link rel='stylesheet' href='estilo.css'>\n" +
        "<title>Minha página</title>\n" +
        "</head>\n<body>" +
        "<div id='cabecalho'>" + configHTMLCabecalho() + "</div>\n" +
        "<nav id='links'>\n" + configHtmlLinks() + "\n</nav>\n" +
        "<div id='conteudo'></div>\n" +
        "</body>\n</html>";

    codeHTML.value = ctxHTML;
    codeHTML.style.animation = 'none';
    codeHTML.offsetHeight;
    codeHTML.style.animation = 'fadeIn 1s ease-out';
}

function download(campo, arquivo) {
    let content = document.getElementById(campo).value;
    let blob = new Blob([content], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = arquivo;
    link.click();
}
/{end}code.html/
