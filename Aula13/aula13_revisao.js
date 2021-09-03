const prompt = require('prompt-sync')();

let lista =[10,20,30,40,50];
// Criando o objeto
let pessoa = {nome: "Namaria", idade: 30, turma:"C7"};
console.log();
console.log(pessoa);
console.log();

// Adicionando uma nova informação
pessoa.cidade = "Araraquara"
console.log(pessoa);
console.log();

// Atualizando uma informação
pessoa.cidade = "São Paulo"
console.log(pessoa);
console.log();

// Apagando uma informação
delete pessoa.cidade;
console.log(pessoa);
console.log();

// Adicionando uma array dentro do objeto
pessoa.interesses = ["Comer","Jogar","Estudar","Gastar Dinheiro"];
console.log(pessoa.interesses);
console.log(pessoa.interesses[0]);
console.log(pessoa.interesses[1]);
console.log();

// percorrendo a lista que está no objeto.
for (let i of pessoa.interesses){
    console.log(i);
}

// Criando uma função dentro de um objeto.
pessoa.dados = function() {
    return `A ${this.nome} tem ${this.idade} anos, estuda na ${this.turma} e gosta de ${this.interesses}.`
}

// Armazenando os dados retornados pela função em uma variável.
// Lembrando que ele não armazena "a função", e sim o que ela retorna!!
// Ou seja, quando eu declaro uma variável chamando a função, ela vai armazenar o que a função passou pelo return!
var dadospessoa = pessoa.dados();
console.log(dadospessoa);

// Exibindo a informação retornada pela função.
// console.log(pessoa.dados());