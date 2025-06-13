import fs from 'fs';
import trataErros from './erros/funcoesErros.js'; 
import {contaPalavras} from './index.js';

const caminhoDoArquivo = process.argv;
const link = caminhoDoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if (erro) throw(erro);
        console.log(contaPalavras(texto));
    }catch(erro){
        trataErros(erro)
    }
})
