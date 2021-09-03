let lista = ["Carla","Ramon","Hericles","Mara","Thiago"];

console.log(lista.length);

//// Quando uso o for, crio uma nova variável para percorrer o objeto (variavel) existente. Cada vez que ele percorre, ele assume o valor de um item do objeto (por exemplo: uma lista) diferente.
var count = 1;

for (let percorre of lista){
  console.log(`O elemento ${count} é ${percorre}`);
  count = count + 1;
}

console.log("O for foi encerrado.");