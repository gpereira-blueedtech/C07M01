const prompt = require("prompt-sync")();

var rodadas = +prompt("Digite o número de rodadas: ")
var jogadores = +prompt("Digite o número de jogadores: ")
// Criei uma lista vazia para receber os objetos
var lista = []

// Esse for deve rodar o mesmo número de vezes que o número de jogadores definido
// Vai criar um objeto novo para cada vez que rodar.
for (let i =0; i < rodadas; i++){

    for (let i =0; i < jogadores; i++){
        // Criando um objeto de jogador
        let objeto = {
            nome: prompt("Digite o nome: "), 
            numero: +prompt("Digite um número: "), //Aqui eu devo colocar o aleatorio
        }
        // Logo depois de criar o objeto, adiciono à lista.
        lista.push(objeto)
        console.log(lista)
    }

    //Aqui eu organizei a lista em ordem decrescente
    lista.sort((a, b) => b.numero - a.numero);

    console.log(lista);

    // Depois do sort, o objeto que estiver no indíce 0 é o que teve a maior pontuação.
    console.log(`O maior valor é ${lista[0].numero} de ${lista[0].nome}`);
}

// O grande vencedor