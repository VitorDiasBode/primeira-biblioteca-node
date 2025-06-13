import fs from 'fs';
import trataErros from './erros/funcoesErros.js'; 
import {contaPalavras} from './index.js';

const caminhoDoArquivo = process.argv;
const link = caminhoDoArquivo[2];
const endereco = caminhoDoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if (erro) throw erro;
        const resultado = contaPalavras(texto);
        criaESalvaPalavra(resultado, endereco);
    }catch(erro){
        trataErros(erro)
    }
})

async function criaESalvaPalavra(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado');
    }catch (erro){
        throw erro
    }
}