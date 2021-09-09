const prompt = require("prompt-sync")();

class Animal {
    constructor(nome,idade,tutor){
        this.nome = nome,
        this.idade = idade,
        this.tutor = tutor
    }

    consultar() {
        console.log(`O animal ${this.nome} tem ${this.idade} anos e pertence à ${this.tutor}.`);
    }
}

// Criando uma nova classe que vai herdar as propriedades de outra
// No caso a classe Cachorro vai ter todos os atributos e métodos da classe Animal
class Cachorro extends Animal {
    constructor(nome,idade,tutor,porte){
        super(nome,idade,tutor);
        
        this.porte = porte,
        this.vacina = false
    }

    latir() {
        console.log("AU AUUUU");
    }

    vacinar(){
        let pergunta = prompt("O cachorro está com a idade para vacinar?");
        if (pergunta.toUpperCase() == "SIM"){
            console.log("Ok, vamos vacinar");
            this.vacina = true;
        } else {
            console.log("Ele não está na idade para vacinar");
        }
    }

    consultar() {
        console.log(`O ${this.nome} é um cachorro.`);
    }
}


let animal1 = new Animal("Belka","4 meses","Gabriel","Grande");
let cachorro1 = new Cachorro("Eddie","4 meses","Gabriel","Médio");


console.log(cachorro1);
console.log();
animal1.consultar();
console.log();
cachorro1.consultar();
console.log();
cachorro1.latir();
console.log();
console.log(`A vacina é: ${cachorro1.vacina}`);
cachorro1.vacinar();
console.log(`A vacina é: ${cachorro1.vacina}`);
