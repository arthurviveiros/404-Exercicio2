const fs = require("fs");
// Exemplo de leitura

let texto;

fs.readFile('teste.txt', function(erro, sucesso){
    if(erro){
        console.log("ERRO AO LER O ARQUIVO");
        console.log(erro);
    }
    else{
        sucesso = sucesso.toString();
        console.log("Arquivo lido com sucesso");
        console.log(sucesso);
        texto = sucesso;
    }
});

console.log("Chamada de leitura executada com sucesso.");


// Exemplo de escrita de arquivo

let paraEscrever = process.argv[2];

// Para gravar sempre um novo arquivo, usar writeFile
fs.appendFile('testeEscrita.txt', `${paraEscrever}\r\n`, erro => {
    if(erro){
        console.log("ERRO AO ESCREVER O ARQUIVO");
    }
    else{
        console.log("Deu bom - arquivo escrito com sucesso");
    }
});

console.log("Chamada de escrita executada com sucesso");