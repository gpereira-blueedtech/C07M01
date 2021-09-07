const prompt = require('prompt-sync')();

var aluno = {
    nome: prompt("Digite o nome: "),
    idade: +prompt("Digite a idade: "),
    classe: prompt("Digite a classe: ")
}

var carro = {
    marca: prompt("Qual a marca? "),
    modelo: prompt("Qual o modelo? "),
    ano: +prompt("Qual o ano? "),
    proprietario: prompt("Digite o nome do proprietário: "),
    valor: 15000,

    // Método: É uma função de um objeto. 
    // Essa função pode ter todos os comandos que teria uma função normal (if, while, for, return...)
    // A diferença é que essa função só existe para o objeto que ela foi declarada.
    // Sempre que eu quiser chamá-la, terei que ter um objeto e chamá-la a partir dele.
    acelerar: function() {
        console.log("VRUM VRUUUUUUUM")
    },
    vender: function() {
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

var pessoa = {
    nome: "Danusa", 
    idade: 18, 
    cidade:"Londrina",
    dados: function() {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mora em ${this.cidade}`
    },
    correr: function() {
        console.log(`A pessoa ${this.nome} está correndo!!!`);
    },
    envelhecer: function() {
        this.idade = this.idade +1;
    }
};

// console.log();
// console.log(pessoa.dados());
// pessoa.correr();
// console.log(pessoa.idade);

// pessoa.envelhecer();
// console.log();
// console.log(pessoa.dados());
// console.log(pessoa.idade);
// console.log();

// console.log(aluno);
console.log(carro);

carro.vender();

console.log(carro);


// CLASSE:
