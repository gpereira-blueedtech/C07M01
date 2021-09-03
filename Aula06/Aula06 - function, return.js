//// Estou ensinando ao programa como é a minha função. Toda vez que essa função for chamada, vai ser executado tudo que estiver aqui dentro.

// // Recebendo os valores dentro da função
// function minhafuncao() {
//   let num1 = +prompt("Digite a primeira nota: ");
//   let num2 = +prompt("Digite a segunda nota: ");
//   let media = (num1+num2)/2;
//   console.log(`A média entre ${num1} e ${num2} é ${media}`);
// }

// minhafuncao();


// // Recebendo os valores de fora da função como argumentos

function minhafuncao2(numero1,numero2) {
  let media = (numero1+numero2)/2;
  console.log('A média entre '+numero1+' e '+numero2+' é '+media)
}

// let num1 = +prompt("Digite a primeira nota: ");
// let num2 = +prompt("Digite a segunda nota: ");

// minhafuncao2(num1,num2);
// minhafuncao2(87,64);
// minhafuncao2(97,15);

// num1 recebe um valor (p ex. 50)
// chamei a função com a variavel num1 (ou seja, 50) como primeiro argumento.
// na hora de executar a função, ele vai passar essa variavel (num1 = 50) para o primeiro argumento declarado (ou seja, numero1). Então numero1 vai receber num1 que recebeu 50.
// Dentro da função, ele vai tratar ela pelo nome que foi declarado (numero1).



function minhafuncao3(n1,n2) {
  let media = (n1+n2)/2;
  return media;
}

let num1 = +prompt("Digite a primeira nota: ");
let num2 = +prompt("Digite a segunda nota: ");

// // Quando eu crio uma var chamando uma função, ela vai armazenar o resultado dela (o que estiver vindo em return).
let varmedia = minhafuncao3(num1,num2);
console.log();
// console.log(varmedia);

let somatotal = varmedia + 5;
console.log(`a média do aluno é ${varmedia}, e o resultado final é ${somatotal}`)



//// Validando um usuario e uma senha e retornando true ou false
// function validaSenha(user,senha){
//   let valido;
//   if (user === "Admin" && senha === "Blue123"){
//     valido = true;
//     return valido;
//   } else {
//     valido = false;
//     return valido;
//   }
// }

// let user = prompt("Digite o nome de usuario: ");
// let senha = prompt("Digite a senha: ");
// let conferir = validaSenha(user, senha);
// console.log(conferir);