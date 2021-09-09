const prompt = require("prompt-sync")();

// Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
// Caso a operação seja bem-sucedida, ela resolve, senão, rejeita.
function baixarPlanilha (url, nome){ 
    return new Promise((resolve, reject) => {
        setTimeout(function() { // Simulando um processo assíncrono.
            let deucerto = true; // Simulando se o processo foi bem-sucedido ou não.

            if (deucerto){
                resolve(url,nome); //A função resolve é executada caso a promise tenha sido bem-sucedida.
                                   //posso passar os argumentos recebidos quando foi chamada a função baixarPlanilha           
            } else {
                reject();
            }
        }, 3000); // fechando o setTimeout, o número indicado é o tempo em ms (5000 = 5 segundos).
    }
    )
}



baixarPlanilha("www.planilhamaneiras.com","pagamentos")
    .then(function(nome){ // Defino a função a ser executado no caso da promise ser resolvida
        console.log(`
        Deu certo!!! Aqui está a planilha ${nome}!
        `)
    })
    .catch(function(){ // Função a ser executada caso a promise falhe.
        console.log(`
        Aconteceu algum erro no download da planilha.
        `)
    });