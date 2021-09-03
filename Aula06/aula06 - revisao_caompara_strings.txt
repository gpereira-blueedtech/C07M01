// //// Possibilidade 1:
// //// Guardando a resposta sem alteração, e alterando a variavel na hora do teste (if)

// let pergunta = prompt("Você vai responder não??");

// if ((pergunta.toUpperCase()) === "NÃO"){
//   console.log("Você respondeu não!!");
// } else if ((pergunta.toUpperCase()) === "SIM"){
//   console.log("Você respondeu sim!!");
// } else {
//   console.log("Resposta inválida!");
// }



// //// POSSIBILIDADE 2:
// //// Não altero a variável original, e crio uma nova, armazenando o valor já em maiúscula

// let pergunta = prompt("Você vai responder não??");

// let perguntavalida = pergunta.toUpperCase();
// console.log(perguntavalida); // Apenas para mostrar a nova variavel já alterada

// if (perguntavalida === "NÃO"){
//   console.log("Você respondeu não!!");
// } else if (perguntavalida === "SIM"){
//   console.log("Você respondeu sim!!");
// } else {
//   console.log("Resposta inválida!");
// }




// //// POSSIBILIDADE 3:
// //// Transformar a entrada do usuário já em maiúscula na hora de armazenar.
// let pergunta = prompt("Você vai responder não??").toUpperCase();

// console.log(pergunta); // Apenas para mostrar a nova variavel já alterada
// if (pergunta === "NÃO"){
//   console.log("Você respondeu não!!");
// } else if (pergunta === "SIM"){
//   console.log("Você respondeu sim!!");
// } else {
//   console.log("Resposta inválida!");
// }


//// Possibilidade 4:
//// Testando se a resposta é maiúscula OU minúscula:

// let pergunta = prompt("Você vai responder não??");

// if (pergunta === "NÃO" || pergunta === "Não" || pergunta === "não"){
//   console.log("Você respondeu não!!");
// } else if (pergunta === "SIM" || pergunta === "Sim" || pergunta === "sim"){
//   console.log("Você respondeu sim!!");
// } else {
//   console.log("Resposta inválida!");
// }


let numero = 30;

//// Comparação com E - Retorna verdadeiro se TODAS as condições forem verdadeiras
if (numero > 10 && numero < 40){
  console.log("Está entre 10 e 40")
}

//// Comparação com OU - Retorna verdadeiro (ou seja, entra na condição) se uma das condições for verdadeira
if (numero > 10 || numero < 40){
  console.log("É maior que 10 e menor que 40")
}