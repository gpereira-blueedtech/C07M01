const prompt = require('prompt-sync')();



// REVISÃO FUNÇÕES

// // Estou criando a função, e dizendo que ela deve receber x argumentos (nesse exemplo foram 2)
// function somar(nome, n1, n2){
//     let soma = n1+n2;
//     console.log(`${nome}, a soma é ${soma}`);
// }

// // Chamando a função, passo os argumentos que eu quero
// let usuario = prompt("Digite seu nome: ");
// somar(usuario, 827, 932);




// CLASSES!!!

/*
Uma classe é um molde de objetos. Ela define como serão os objetos criados a partir dela
É nela que são definidos os atributos (características) e métodos (ações) que os objetos terão!
Todos os objetos instanciados (criados) a partir dessa classe, vão ter essas informações.
A classe por si só não faz nada!! 
Ela não possui atributos nem métodos, ela define como serão os atributos e métodos dos objetos criados a partir dela
Então, para que eu possa "usar" essas informações, eu preciso criar um objeto antes
E só depois disso posso manipulá-lo como eu quiser.
*/

// Quando defino classes, uso a primeira letra maiúscula
// Para objetos eu uso minúscula
class Carro {
    // O método construtor é um método especial. 
    // Ele é executado assim que crio um novo objeto, e é ele que define quais valores
    // os atributos receberão para esse objeto.
    // Esses valores geralmente são passados como argumentos e após isso, o construtor passa cada valor para os atributos.
    constructor(marca, modelo, ano, proprietario_carro){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.proprietario = proprietario_carro // O argumento não precisa obrigatoriamente ter o mesmo nome do atributo
    }

    // Declarando um método:
    // Embora não esteja com o "function", isso é uma função.
    // As funções que estão dentro dos objetos são "métodos"
    // Todos os objetos criados a partir dessa classe tem esse método
    // Só é possível utiliza-los após criados os objetos
    acelerar() {
        console.log(`${this.modelo} faz VRRUM VRRUUUUUUUUMMM`);
    }

    vender() {
        let resposta = prompt(`Você quer mesmo vender o ${this.modelo}???`);
        if (resposta.toUpperCase() == "SIM"){ 
            let novoprop = prompt("Digite o nome do novo proprietário: ")
            this.proprietario = novoprop
            console.log(`O carro foi vendido para ${this.proprietario}`)
        } else {
            console.log("Ok, vou manter no seu nome.")
        }
        
    }

}

var marca = prompt("Digite a marca do carro: ");

// Criando objetos:
// Nesse momento estou criando objetos a partir da classe Carro.
// Esses objetos obedecerão todos os critérios definidos pela classe,
// então terão todos os atributos e métodos estabelecidos.
// Os valores dos atributos são passados como argumentos, e o construtor (definido na classe)
// será o responsável por pegar cada uma dessas informações e passar para um atributo.
let carro1 = new Carro("VW", "Fusca", 1977, "Joyce");
let carro2 = new Carro(marca, "i9", 2021, "Manuel");

// Os métodos precisam de um objeto para serem chamados
// Após instanciar o objeto, eu chamo o método de cada um, e ele será executado 
// a partir do objeto, e não da classe!!!
carro1.acelerar();
carro2.acelerar();







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