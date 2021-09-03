const prompt = require ('prompt-sync')();

// // Criando uma lista com objetos dentro
// let lista = [ {nome: "Thiago", idade: 30} , {nome:"Ramon", idade: 25} ]

// // Criando um objeto com uma lista dentro
// let pessoa = {
//     nome: "Namaria", idade: 30, turma:"C7", 
//     interesses: ["Comer","Jogar","Gastar dinheiro","Estudar"]
// };

// // // Retornando o objeto que está guardado na lista
// // console.log(lista[0])
// // // Retornando um valor específico do objeto de dentro da lista.
// // // O objeto retornado pode ser tratado como qualquer outro objeto.
// // console.log(lista[0].nome)

// // // Adicionando um novo valor ao objeto que está dentro da lista
// // lista[0].cidade = "Londrina"
// // console.log(lista);


// // // Retornando a lista que está guardada dentro do objeto
// // console.log(pessoa.interesses);

// // // Retornando um indice específico em uma lista de dentro de um objeto.
// // console.log(pessoa.interesses[1]);




// // O Object.keys retorna todas as chaves do objeto guardadas em uma lista
// console.log(Object.keys(pessoa));
// // console.log(Object.keys(pessoa)[1]); // Posso trabalhar com indices como qualquer outra lista

// console.log();

// // // Armazenando a lista retornada em uma variável
// // var pessoaKeys = Object.keys(pessoa);
// // console.log(pessoaKeys);
// // console.log(pessoaKeys[2]);

// console.log();


// // O Object.values retorna uma lista com todos os valores do objeto
// console.log(Object.values(pessoa));
// console.log();

// // //  Armazenando a lista retornada em uma variável
// // var pessoaValues = Object.values(pessoa);
// // console.log(pessoaValues);


// console.log(Object.entries(pessoa));
// // lista = [ [chaveA, valorA], [chaveB, valorB], [chaveC, valorC] ]
// console.log(Object.entries(pessoa)[1]);




/*
Tarefa 01:
Utilizando a tarefa da aula 11, mostre na tela:
Utilizando Object:
• Apenas os valores do objeto;
• Apenas as chaves do objeto;
• As chaves e os valores do objeto;
*/

let filme = {
    nome: "Jurassic Park", ano: 1993, diretor: "Steven Spielberg", 
    atores: ["T-rex","Velociraptor","Diplodocus"]
};

// console.log();
// console.log();
// console.log(Object.keys(filme));
// console.log();
// console.log(Object.values(filme));
// console.log();
// console.log(Object.entries(filme));
// console.log();


// um for in vai me retornar os nomes das chaves!
// for (let i in filme) {
//     console.log(i);
//     console.log(filme[i]); // Estou pegando o valor da chave que está em i, como se fosse um for of.
//     console.log();
// }


// var filmekeys = Object.keys(filme);
// console.log(filmekeys.length)
// console.log(filmekeys)
// console.log();

// for (let i = 0; i < filmekeys.length; i++) {
//     console.log(i);
//     console.log(filmekeys[i]);
//     console.log(filme[filmekeys[i]]);
//     console.log();
// }



// // Criando um objeto com o for!!

// Crio uma lista vazia para receber todos os objetos que serão criados
var filmes = [];

// Entro a quantidade de vezes que o meu for vai rodar
// Cada vez que ele rodar, vai criar um objeto e jogar dentro da lista
var qtd = +prompt("Quantos você quer cadastrar? ")

// Inicio o for, ele vai repetir a quantidade de vezes entrada pelo usuário
for (let i = 0; i < qtd; i++) {
    // Crio um objeto vazio para receber as entradas do usuário 
    let objeto1 = {};

    // Entrada de dados em cada uma das chaves
    objeto1.nome = prompt("Digite o nome do filme: ");
    objeto1.ano =  prompt("Digite o ano de lançamento do filme: ");
    objeto1.diretor = prompt("Digite o nome do diretor do filme: ");
    console.log(objeto1);

    //Depois de criar o objeto e pegar todos os dados, adiciono ao final da lista criada lá fora do for
    filmes.push(objeto1);

    // Depois de cada repetição, ele vai "limpar" o objeto criado, vai começar um novo do zero para
    // Receber de novo todas as informações.
    // É por isso que depois de criar cada um, vamos adicionando à lista, para manter todos lá.
}

// console.log();
// console.log("Saiu do for.")
// console.log(filmes); // Exibindo a minha lista com todos os objetos criados
// console.log();
// // Adicionando os objetos da lista à uma variavel
// filme1 = filmes[0]
// filme2 = filmes[1]
// console.log();
// console.log(filme1); // Exibindo o objeto adicionado na variavel
// console.log(filme2);


// Mudando a forma de exibição:

for (let i = 0; i < filmes.length; i++){
    console.log(`${i+1}º filme: `)

    for (let c in filmes[i]){
        console.log(`${c}: ${filmes[i][c]}`)
    }
    console.log();
}
