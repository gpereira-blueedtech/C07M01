var lista = ["Calabresa","Margherita","Quatro queijos","Portuguesa","Milho com bacon"];
var listanum = [10,250,340,727];
var listastring = "Ana Maria 10 %&";
var numero = 10; // não é iteravel, o for não aceita

// console.log(lista.length);
// console.log();


// // for of: me retorna o conteúdo (valor) de cada um dos itens dentro do objeto passado
// // Vai ser repetido a quantidade de vezes necessária para percorrer todos os objetos da lista passada.
// console.log("Sabores disponíveis:")
// for (let i of lista){
//   console.log(lista.indexOf(i)); // Buscando o indice pelo valor
//   console.log(i);
// }
// console.log();



// // for in: me retorna o índice de cada um dos itens dentro do objeto passado
// // o INDICE é a posição que aquele item ocupa dentro da lista!
// // Vai ser repetido a quantidade de vezes necessária para percorrer todos os objetos da lista
// for (let i in lista){
//   console.log(i);
//   console.log(lista[i]); // Buscando o valor pelo indice
// }



lista = ["Ana", "João", 30, 40, 50, 60]

// indice = 0        1        2    3    4    5
// valor =  "Ana"   "João"   30   40   50   60

// for (let i in lista){
//   console.log(i);
//   console.log(lista[i]);
// }
// console.log();

// for (let i of lista){
//   console.log(i);
// }


let numeros = [1, 2, 3, 4, 5, 6, 7]


// // return vai me devolver alguma coisa de dentro da função. quando eu chamar essa função, ele me passa o "resultado final" dela. Se eu não usar o return, depois de executar a função, qualquer coisa que esteja ali dentro será perdida.
function somar(lista) {
  let soma = 0
  for (let i in lista) {
    soma += lista[i]
  }
  return soma;
}

var soma = somar(numeros);

function validaidade(ano){
  let valida;
  let idade = 2021 - ano;
  if (idade >= 18){
    valida = true;
    return valida;
  } else {
    valida = false;
    return valida;
  }
}

var validacao = validaidade(1900);
console.log(validacao);

// lista = ["Calabresa","Margherita","Quatro queijos","Portuguesa","Milho com bacon","Calabresa", 10];
// listastring = "Ana Maria 10 %&";

// // O indexOf retorna o primeiro indice que um elemento ocupa dentro de uma lista.
// // Como argumento adicional, eu posso passar um valor, que ele vai começar a procurar a partir daquele indice.
// console.log(lista.indexOf("Calabresa",2));

// var indiceitem = lista.indexOf("Quatro queijos");
// console.log(indiceitem);