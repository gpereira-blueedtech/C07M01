const prompt = require('prompt-sync')();

function enviarArquivo(arquivo,destino){
    setTimeout(function() { 
        console.log(`
        O arquivo ${arquivo} 
        foi enviado para ${destino}
        `);
        callback();
    }, 3000); // Defino o tempo do timeout em ms
}

// Embora o console.log("Teste de envio") esteja vindo depois de chamar a função
// Na prática ele deve aparecer antes, porque a função foi chamada
// Mas como ela não resolveu na hora, ele continuou com a programação.

enviarArquivo("Projeto1.js","Classroom");
console.log();
console.log("Teste de envio: ");