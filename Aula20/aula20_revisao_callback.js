const prompt = require('prompt-sync')();

function enviarArquivo(arquivo,destino,callback){ //callback é o nome do parâmetro que vai receber a função anônima.
    setTimeout(function() { 
        console.log(`
        O arquivo ${arquivo} 
        foi enviado para ${destino}
        `);
        callback("Projeto1.js","O projeto foi enviado!!") // Chamo a função que foi passada como argumento depois da outra terminar.
                                                          // E aqui eu coloco os argumentos que essa função vai receber.  
    }, 3000); // Defino o tempo do timeout em ms
}

// Exemplo da função que eu quero que seja executada só depois da anterior terminar.
// Para isso, preciso passa-la para dentro da outra como argumento (callback)
// Como função anônima, por isso eu não declaro antes
/*
function comentarArquivo(arquivo,comentario){
    console.log(`
    O comentario:
    ${comentario}
    foi adicionado ao arquivo ${arquivo}.
    `)
}
*/


enviarArquivo(
    "Projeto1.js", // primeiro argumento
    "Classroom", // segundo argumento
    function(arquivo,comentario){ // terceiro argumento - callback (até fechar a chave da função)
    console.log(`
    O comentario:
    "${comentario}"
    foi adicionado ao arquivo ${arquivo}.
    `)
    } // até aqui é o terceiro argumento
);

console.log();
console.log("Teste de envio: ");
