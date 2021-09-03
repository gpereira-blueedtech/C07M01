// // Declarando variáveis com diferentes tipos de valores

//string: uma sequêncua de caracteres
let varTexto = "Isso é uma string"; 
//number: um número, pode fazer cálculos matemáticos
let varNumero = 30; 
//boolean: recebe apenas um valor de "true" ou "false"
let varBoolean = true; 

// let numero1 = 15;
// let numero2 = 10;

// // Nesse exemplo, ele vai guardar o resultado da comparação: true ou false, e a var "comparar" vai ser do tipo boolean
// let comparar = numero1 > numero2;

// console.log(varTexto);
// console.log(varNumero);
// console.log(varBoolean);
// console.log(comparar)

// // array: Armazena diversos valores dentro de uma mesma variável
// let arrayNome = ["João","Duda","Matheus","Simone"];
// let arrayNumero = [10,20,30,40,50];
// let arrayMisto = ["Jezimiel",false,500];

// // Para rescuperar um valor de uma posição específica do array, deve-se colocar a posição entre []
// console.log(arrayNome[0]);
// console.log(arrayNumero[3]);
// console.log(arrayMisto[2]);


// // uma variável pode receber o valor de outra variável
// var a = "Turma C7";
// var b = a;
// console.log(b);

// //declarando duas variáveis 
// var c, d = c = "Novissima String"
// console.log(c);
// console.log(d);

// // const é um tipo que não pode ser modificado, é apenas leitura
// const constTeste = "Isso é uma const"
// console.log(constTeste)



// OPERADORES
let soma = 6 + 9;
console.log(soma);
console.log("Boa"+" Noite")
console.log("Boa" + 10) // Transforma tudo em string

// //Quando é feita a "soma" de uma string e um número, ele converte o número também para string
let varMista = "Boa" + 10;
typeof varMista;

// let numero1 = 35;
// let numero2 = 10;

// let somanumeros = numero1 + numero2;
// // console.log(somanumeros);
// console.log(numero1 + numero2);


// let subtrainumeros = numero1 - numero2;
// console.log(subtrainumeros)

// let multiplicanumero = numero1 * numero2;
// console.log(multiplicanumero);

// let dividenumero = numero1 / numero2;
// console.log(dividenumero);

// // === compara igualdade de tipo e valor.
// // O sinal ! significa "não", nesse caso, !== significa "não igual"
let comparaNumero = 6 !== 6;
let comparaTexto = "Texto" === "Texto";
console.log(comparaNumero);
console.log(comparaTexto);
