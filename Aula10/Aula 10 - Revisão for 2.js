const prompt = require('prompt-sync')();


// Quando entra no for pela primeira vez, ele executa a primeira declaração (let i = 0), onde vou delcarar uma variável de controle.

// Depois vai testar a condição declarada na segunda declaração (i > 5), se ela for verdadeira, vai executar todo o código dentro do for.

// Depois de executado todo o código, vai fazer o incremento, na terceira declaração (i++), geralmente usado para incrementar o valor da variável de controle. Esse incremento só é executado após todo o código ter sido executado.

// let i = 0 -> é executado apenas na primeira vez
// i < 5 -> é executado sempre antes da próxima repetição (condição para repetir de novo)
// i++ -> é executado ao final de todo o bloco de códigos dentro do for.

for (let i = 0; i < 5; i++){
  console.log(i);
  // i++ // incremento declarado no for, é a última coisa a ser executado.
}



var numero = +prompt("Digite um número: ")

for (let i = 0; i < numero; i++){
  console.log(i);
}