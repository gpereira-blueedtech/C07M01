const prompt = require("prompt-sync")();

var lista = []
for (let i =0; i < 5; i++){
    let objeto = {
        nome: prompt("Digite o nome: "), 
        numero: +prompt("Digite um número: "),
        vencedor: 0
    }
    lista.push(objeto)
    console.log(lista)
}
//Aqui eu organizei a lista em ordem decrescente
lista.sort((a, b) => b.numero - a.numero);

console.log(lista);
console.log(`O maior valor é ${lista[0].numero} de ${lista[0].nome}`);