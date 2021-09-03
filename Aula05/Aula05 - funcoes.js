//// Nesse momento, estou declarando a função, ou seja, ensinando para o meu programa o que ele tem que fazer toda vez que essa função for chamada.
//// Isso é feito usando o comando "function"

// function funcaoTeste(){
//   console.log("Essa é a primeira linha de execução da minha função");
//   console.log("Essa é a segunda");
//   console.log("Depois eu executo essa");
//   console.log("Poderia ter um cálculo ou outra coisa aqui dentro");
//   console.log("Inclusive poderia ter um if, já que o Bruno perguntou.");
//   console.log("É isso pessoal, obrigado!!");
// }

//// Aqui, depois de ter ensinado, estou "chamando" a função, ou seja, mandando ela ser executada.
// funcaoTeste();


function saudacao(){
  let nome = prompt("Qual é o seu nome? ");
  let idade = prompt("E a sua idade?");
  console.log(`Olá ${nome}, seja bem-vindo(a)!`);
  if (idade >= 18) {
    console.log("Vou te pagar uma cerveja!!");
  } else {
    console.log("Vou te pagar uma coca!");
  }
}

let entrada = prompt("Deseja chamar a função??? ");

if (entrada ==="S") {
  saudacao();
} else {
  console.log("Blz, obrigado.");
}