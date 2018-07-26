const fs = require("fs");

if (process.argv.length === 5) {
    if (process.argv[2] === "salvar") {
        let nome = process.argv[3];
        let email = process.argv[4];


        fs.appendFile('testeEscrita.txt', `${nome + ":" + email}\r\n`, erro => {
            if (erro) {
                console.log("ERRO AO SALVAR O USUARIO/EMAIL");
            }
            else {
                console.log("Deu bom - salvo com sucesso");
            }
        });

        console.log("Comando de salvar executado com sucesso");



    }
}
else {
    console.log("Escreve alguma merda aew");
}
