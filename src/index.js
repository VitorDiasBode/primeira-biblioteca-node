const fs = require('fs');

const caminhoDoArquivo = process.argv;
const link = caminhoDoArquivo[2];

console.log(link)

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
})
