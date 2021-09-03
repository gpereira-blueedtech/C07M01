//console.log -> exibe uma informação na tela.
//A sintaxe é: console.log(informacao)
//No lugar da informação, posso colocar uma string (texto), número, variável, etc...

// console.log('Olá mundo!');

//prompt -> recebe uma informação passada pelo usuário:
//Sintaxe: prompt("A frase que vai aparecer na tela")

// prompt('Digite seu nome: ');

//VARIAVEIS
//São espaços na memória reservados para guardar uma informação.
//São como 'potinhos' que damos um nome, guardamos uma informação lá dentro, e quando chamamo essa váriavel pelo nome, podemos receber a informação guardada.
//Ela pode receber um texto (string), número, etc...
//Sintaxe: let nomeDaVariavel = valorDaVariavel
//Sintaxe: var nomeDaVariavel = valorDaVariavel

// let usuario = 'Danusa';
// console.log(usuario);

//Recebendo uma informação do usuário e guardando na variável

let aluno = prompt("Digite seu nome: ");
let turma = prompt("Digite sua turma: ")

//Concatenando strings: Juntando textos diferentes para serem exibidos juntos na tela.
console.log('Olá '+ aluno +', seja bem vindo(a)à turma '+turma);