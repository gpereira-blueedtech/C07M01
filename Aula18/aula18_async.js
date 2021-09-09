const prompt = require("prompt-sync")();

function enviarEmail (corpo,destinatario){
    setTimeout(function() { // Defino um tempo para que espere antes de executar a função
    console.log(`
    De: Gabriel
    Para: ${destinatario}
    ----------------------------------
    ${corpo}

    `);
    }, 3000); // fechando o setTimeout, o número indicado é o tempo em ms (5000 = 5 segundos).
}

// Chamei a função com um processo assíncrono, ou seja
// Ela vai continuar executando os outros processos do programa
// Enquanto a executa paralelamente
enviarEmail(
    "Esse é um email de teste",
    "usuario@email.com");

// Esse console log deve ser exibido antes do email
// Porque aquela função levará um tempo para ser concluída
// E enquanto isso as outras execuções continuam.
console.log("Teste de envio: ");
