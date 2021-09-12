const prompt = require('prompt-sync')();

function enviarArquivo(arquivo,destino){
    return new Promise((resolve, reject) => { 
        setTimeout(function() { 
            let deucerto = true; //simulando uma função de envio de arquivo bem (ou mal) sucedida

            if (deucerto == true){
                console.log(arquivo,destino);
                resolve(arquivo,destino);
            } else {
                reject();
            }
        }, 3000); // Defino o tempo do timeout em ms
    });
}


enviarArquivo("Projeto1.js","Classroom")
    .then(function(arquivo,destino) {
        console.log(`
        O arquivo ${arquivo} 
        foi enviado para ${destino}
        `);
    })
    .catch(function(){
        console.log(`
        O envio do arquivo falhou.
        `)
    })

console.log();
console.log("Teste de envio: ");