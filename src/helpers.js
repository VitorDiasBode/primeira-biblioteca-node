function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach( (paragrafo, indice) => {
        const palavrasDuplicadas = filtraOcorrencias(paragrafo).join(',');
        if (palavrasDuplicadas) {textoFinal += `palavras duplicadas do paragrafo ${indice+1}: ${palavrasDuplicadas} \n`;}
    })
    return textoFinal;
}

export {montaSaidaArquivo}