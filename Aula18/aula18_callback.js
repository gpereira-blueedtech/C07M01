const prompt = require("prompt-sync")();

function enviarEmail (corpo, destinatario, callback){
    setTimeout(function() { // Defino um tempo para que espere antes de executar a função
    console.log(`
    De: Gabriel
    Para: ${destinatario}
    ----------------------------------
    ${corpo}

    `);
    callback()
    }, 3000); // fechando o setTimeout, o número indicado é o tempo em ms (5000 = 5 segundos).
}

console.log("Enviando email: ");

enviarEmail(
    "Esse é um email de teste",
    "usuario@email.com",
    function() {
        console.log("Seu email foi enviado!!!")
    }
);

console.log("Teste de envio: ");