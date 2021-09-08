const prompt = require("prompt-sync")();

let senha = "123456";
var entrada = prompt("Digite a senha: ");

while (entrada != senha){
    console.log();
    console.log("Acesso negado!!");
    var entrada = prompt("Digite a senha: ");
} 

console.log();
console.log("Acesso liberado!!")
console.log();