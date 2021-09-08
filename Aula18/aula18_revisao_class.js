const prompt = require("prompt-sync")();

// Definindo uma nova classe
// A classe é um molde que determinará como serão todos os objetos criados a partir dela
// Esses objetos terão todos os atributos e métodos definidos aqui.
class Professor {
    // Definindo o construtor, responsável por pegar as informações passadas
    // Ao criar os objetos, e atrivuir essas informações aos atributos da classe.
    constructor(nome,turma,ano){
        this.nome = nome,
        this.turma = turma,
        this.ano = ano
    }

    // Criando um método (uma função dentro da classe)
    alterarTurma(){
        this.turma = prompt("Qual a nova turma? ");
    }
}

let professor = prompt("Digite o nome do professor: ");
let turma = prompt("Digite a turma: ");
let ano = +prompt("Digite o ano: ");

// Criando objetos a partir da classe professor
let professor1 = new Professor(professor,turma,ano);
let professor2 = new Professor("Gustavo","C8",2021);

console.log();
console.log(professor1);
console.log(professor2);
console.log();
professor1.alterarTurma(); // Chamando um método
professor1.modulo = "M01" // Adicionando um novo atributo
console.log(professor1);
console.log();

// Adicionando objetos à uma lista.
var listaprof = [professor1, professor2];
console.log(listaprof);