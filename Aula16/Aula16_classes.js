const prompt = require('prompt-sync')();

// Quando defino classes, uso a primeira letra maiúscula
// Para objetos eu uso minúscula
class Carro {
    constructor(marca, modelo, ano, proprietario_carro){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.proprietario = proprietario_carro
    }

    // Declarando um método
    // Embora não esteja com o "function", isso é uma função.
    // As funções que estão dentro dos objetos são "métodos"
    // Todos os objetos criados a partir dessa classe tem esse método
    // Só é possível utiliza-los após criados os objetos
    acelerar() {
        console.log(`${this.modelo} faz VRRUM VRRUUUUUUUUMMM`);
    }
}

var marca = prompt("Digite a marca do carro: ");
let carro1 = new Carro("VW", "Fusca",1977,"Joyce");
let carro2 = new Carro(marca, "i9", 2021, "Manuel");

carro1.acelerar();
carro2.acelerar();


// REVISÃO FUNÇÕES

// // Estou criando a função, e dizendo que ela deve receber x argumentos (nesse exemplo foram 2)
// function somar(nome, n1, n2){
//     let soma = n1+n2;
//     console.log(`${nome}, a soma é ${soma}`);
// }

// // Chamando a função, passo os argumentos que eu quero
// let usuario = prompt("Digite seu nome: ");
// somar(usuario, 827, 932);



/*
 EXERCÍCIO:

 Crie uma classe Pessoa, com os atributos:
 nome, peso, idade 
 e os métodos:
 envelhecer, engordar, emagrecer, dados
 envelhecer aumenta 1 na idade
 emagrecer diminui 1 no peso
 engordar aumenta 1 no peso
 dados mostra todos os atributos (nome, idade peso).

 Depois crie 2 objetos dessa classe e teste se os métodos
 estão todos funcionando para cada um.
 */