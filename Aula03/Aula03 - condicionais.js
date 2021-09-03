// let numero = +prompt("Digite um número: ");

// if (numero > 20){
//   console.log("O número é maior que 20")
// } else if (numero <20){
//   console.log("O número é menor que 20")
// } else {
//   console.log("O número é 20!!")
// }

// let cidade = prompt("De onde você é?? ")

// if (cidade === "Londrina"){
//   console.log("Parabéns!!! Você mora na melhor cidade do sul da galáxia!")
// } else {
//   console.log("Que pena, mas espero que sua cidade também seja legal.")
// }


// Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade

// let ano = +prompt("Em que ano você nasceu? ");

// let idade = 2021-ano;

// if (idade >= 18){
//   console.log("Você é maior de idade!")
// } else {
//   console.log("Você é menor de idade!")
// }


////Testando duas condições ao mesmo tempo

let usuario = "Admin";
let senha = "Blue123"

let entradauser = prompt("Digite o usuario: ");
let entradasenha = prompt("Digite a senha: ");

if (entradauser === usuario && entradasenha === senha){
  console.log("Acesso autorizado!")
} else {
  console.log("Acesso negado!")
}