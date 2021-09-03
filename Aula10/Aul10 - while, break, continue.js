var numero = 30;

// // While - é um if que repete. Ele vai testar uma condição, e executar o código caso ela seja verdadeira Após isso volta a testar, e se ainda for verdadeira, repete tudo. Ele vai repetir o código indefinidamente, até que a condição seja falsa.
// while(numero <= 50) {
//   numero = +prompt("Digite um número maior que 50")
//   }
// }

// console.log("Saiu do while")


// // O do while funciona da mesma forma, porém, ele vai fazer o teste da condição DEPOIS de executar o código, então o bloco será executado pelo menos uma vez.
// do {
//   numero = +prompt("Digite um número maior que 50")
//   }
// } while(numero <= 50)

// console.log("Saiu do while")


// // O break sai de um ciclo quando é chamado. Geralmente é usado dentro de uma condição. Quando o código passar pelo while, automaticamente ele encerra o ciclo atual e prossegue com o resto do programa.

// while(numero <= 50) {
//   numero = +prompt("Digite um número maior que 50")
//   if (numero == 5){
//     console.log("Você descobriu o número secreto!!!")
//     break;
//   }
// }

// console.log("Saiu do while")


// o continue, assim como o break, encerra o ciclo atual, porém ele volta para o início do while, testando a condição novamente e repetindo caso verdadeira.
// ou seja, ele encerra a repetição atual e começa uma nova (caso o while ainda seja verdadeiro.)
var tent = 0

while(numero < 50) {
  numero = +prompt("Digite um número maior que 50: ")
  if (numero < 20){
    continue;
  }
  console.log("Aumentou 1 tentativa")
  tent++
}

console.log(`Você digitou ${tent} números maiores que 20`);
console.log("Saiu do while");






var senha = "Blue123";
var usuario = "Admin";
var entradasenha;
var entradausuario;
var count = 0;

// // Posso usar um "label" no break para definir qual ciclo será interrompido por ele. Por padrão, se não colocar nenhum label, ele interrompe o "mais interno", ou seja, o último que foi executado.
// // Nesse exemplo, o break está interrompendo o label "geral", que é um código que se repetiria infinitamente.

// geral:
// while (true){

//   validasenha:
//   while (entradausuario != usuario || entradasenha != senha){
//     entradausuario = prompt("Digite o usuario: ");
//     entradasenha = prompt("Digite a senha: ");
//     count++;
//     if (count >= 3){
//       console.log("Tentativas esgotadas!")
//       break geral;
//     }
//   }
// }

// console.log("Saiu do while")