const fs = require("fs");
// Exemplo de leitura

let texto;

fs.readFile('teste.txt', function(erro, sucesso){
    if(erro){
        console.log("IHH RAPAZ, DEU ERRADO");
        console.log(erro);
    }
    else{
        console.log("Arquivo lido com sucesso");
        console.log(sucesso);
        texto = sucesso;
    }
});

console.log("Função executada com sucesso.");