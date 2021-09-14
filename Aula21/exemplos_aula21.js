const prompt = require('prompt-sync')();

class Pessoa {
    constructor(dinheiro){
        this.cafeTomado = false,
        this.dinheiro = dinheiro,
        this.sono = 0
        this.hora = 8
    }

    tomarcafe(){
        console.log("Você tomou um café gostosinho!");
        this.cafeTomado = true;
    }

    exibirdados(){
        console.log(`
        Hoje é o dia 01.
        Hora: ${this.hora}
        Café tomado: ${this.cafeTomado}
        Sono: ${this.sono}
        Dinheiro: ${this.dinheiro}
        `)
    }

    passarhora(tempo){
        this.hora += tempo
    }

    mostrarhora(){
        console.log(`Agora são: ${this.hora} horas.`);
    }
}


var pessoa = new Pessoa(100);
pessoa.exibirdados();

while (true) { 
    console.log(`
    Escolha uma opção:
    1 - Tomar café
    2 - Estudar
    3 - Trabalhar
    4 - Descansar
    5 - Status
    0 - Sair
    `)

    let opcao = +prompt("Digite sua escolha: ")

    if (opcao == 1) {
        pessoa.tomarcafe();
        pessoa.passarhora(1);
        pessoa.mostrarhora()
    } else if (opcao == 2) {
        console.log("Você estudou")
        // Aqui eu colocaria o que quero alterar quando ele estuda.
        pessoa.passarhora(3)
        pessoa.mostrarhora()
    } else if (opcao == 3) {
        pessoa.mostrarhora()
    } else if (opcao == 4) {
        pessoa.mostrarhora()
    } else if (opcao == 5) {
        pessoa.exibirdados();
    } else if (opcao == 0) {
        break
    } else {
        console.log("Opção inválida!")
    }
}