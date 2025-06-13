export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap( paragrafo => {
        if(!paragrafo) return[];
        return verificarPalavras(paragrafo);
    });

    return contagem;
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}

function verificarPalavras(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        const palavraLimpa = limpaPalavra(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    });
    return resultado;
}

function limpaPalavra(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}