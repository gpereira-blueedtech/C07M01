const prompt = require("prompt-sync")();

// Callback é o nome que vou dar para a função que vai ser passada como argumento
// Para ser executada apenas após um processo terminar
function baixarPlanilha (url, nome, callback){ 
    setTimeout(function() { // Defino um tempo para que espere antes de executar a função
    console.log(`
        Planilha "${nome}" 
        baixada de ${url}
        `)
    callback(); // A função callback será executada depois da anterior
    }, 3000); // fechando o setTimeout, o número indicado é o tempo em ms (5000 = 5 segundos).
}


baixarPlanilha(
    "www.planilhamaneiras.com",
    "pagamentos",
    // Essa função está indo como o terceiro argumento da função baixarPlanilha
    // E será chamada com o nome de callback() dentro da função anterior (baixarPlanilha)
    function() { 
        console.log("Analisando a planilha em busca de duplicatas.")
        console.log("Esse é o callback")
    }
    )


console.log("Teste de planilha: ");