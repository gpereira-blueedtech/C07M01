// // Declarando uma variavel let, com o nome saudacao, e definindo o valor como "Bom dia!"
// let saudacao = "Bom dia! "

// let nome = prompt("Digite seu nome: ")

// let saudacaoCompleta = saudacao+saudacao+saudacao+nome+"! Seja bem vindo(a)!"

// console.log(saudacaoCompleta)


// let numero1 = 10;
// let numero2 = 15;
// console.log(typeof(numero1));
// console.log();

// console.log(numero1+numero2)

//// Recebendo números nbo prompt: coloco +prompt

// let numero3 = +prompt("Digite um número: ");
// let numero4 = +prompt("Digite outro número: ");

// console.log(typeof(numero3));
// console.log(numero3+numero4);
// console.log();

// // Convertendo uma string em number
// let num3 = prompt("Digite um número: ");
// let num4 = prompt("Digite outro número: ");

// num3 = Number(num3);
// num4 = Number(num4);
// console.log(num3+num4);

// let num3conv = Number(num3);
// let num4conv = Number(num4);
// console.log(typeof(num3conv));
// console.log(num3conv+numero4conv);


let numero3 = +prompt("Digite um número: ");
let numero4 = +prompt("Digite outro número: ");
console.log(typeof(numero3));
console.log()

let numero3str = numero3.toString();
let numero4str = numero4.toString();
console.log(typeof(numero3str));
console.log(numero3str+numero4str);

// // Ele está convertendo apenas o numero4, mas quando somamos um número e uma string, ele converte tudo para string
let soma = numero3+numero4.toString();
console.log(soma)