const fs = require('fs');

const caminhoDoArquivo = process.argv;
const link = caminhoDoArquivo[2];

console.log(link)

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(quebraEmParagrafos(texto));
})

// criar um array com as palavras
// contar as ocorrencias
// montar um objeto com o resultado
// { 
//   web: 5,
//   internet: 4
// }

function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map( paragrafo => {
        return verificarPalavras(paragrafo);
    });

    return contagem
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