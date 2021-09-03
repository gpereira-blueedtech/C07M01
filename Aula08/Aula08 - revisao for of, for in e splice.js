// // For é uma repetição

var lista = ["Matheus","Geovane","Lucas"];
var lista2 = [10,20,30,40,50];
// var texto = prompt("Digite um texto");

// console.log(lista);

// lista.push(prompt("Digite outro nome"));

// console.log(lista);

// var tamanholista = lista.length;
// var tamanholista2 = lista2.length;
// var tamanhotexto = texto.length;

// console.log(tamanholista);
// console.log(tamanholista2);
// console.log(tamanhotexto);

// console.log();

var lista2 = [10,20,30,40,50]

// // o "for of" vai repetir a sequência de comandos quantas vezes forem necessárias para percorrer o objeto escolhido inteiro.
// // Quando uso for of, a variavel vai percorrer sobre os VALORES do objeto
// for (let item of lista){
//   console.log(item);
//   // if (item > 25){
//   //   console.log(item + " é maior que 25");
//   // }
//   // console.log();
// }

// console.log();

// // Quando uso for in, a variavel vai percorrer sobre os "ÍNDICES" (não é exatamente isso, mas para nosso entendimento no momento, vamos colocar assim).
// for (let item in lista){
//   let novovalor = prompt(`Digite um novo valor para o item ${item}`);
//   lista.splice(item,1,novovalor);
// }

// console.log(lista);

let listanova = ["Aluno","Blue","C7","Matheus","Carla"];
console.log(listanova);

// // REMOVENDO
// // O primeiro argumento de uma splice indica qual ÍNDICE da lista eu quero mexer
// // O segundo argumento do splice indica quantos elementos eu quero REMOVER, contando a partir do indicado no primeiro argumento
// // Exemplo: a partir do índice 1, remova 2 itens
listanova.splice(1,2)
console.log(listanova);

// // ADICIONANDO
// // O que eu coloco a partir do terceiro argumento de uma splice, são elementos novos a serem adicionados na lista, no lugar definido pelo primeiro argumento!!
// // Se eu deixar 0 no segundo argumento, ele não remove nada, apenas adiciona
listanova.splice(1,0,"Ana Maria","Hericles")
console.log(listanova);

// // SUBSTITUINDO
// // Se eu quiser combinar as duas formas (apagar e adicionar ao mesmo tempo) é só definir quantos serão apagados no segundo argumento, e quais serão os novos a parti do terceiro argumento
// // O número de apagados e adicionados NÃO precisa  ser o mesmo
listanova.splice(3,2,"Felipe")
console.log(listanova);

// // DIFERENÇAS ENTRE "FOR OF" E "FOR IN"

// // Por exemplo:
// // Tabela de preços:

// // Coca-cola: 5
// // Cerveja: 7
// // Salgado: 6
// // Pizza: 40

// // Nesse exemplo, o "for in" receberia o índice, ou seja, "coca-cola","cerveja", etc...
// // Já o "for of" receberia os valores que estão guardados em cada índice, ou seja: 5,7,6,40

// // lista = ["Matheus","Rodrigo","Felipe"]
// // É a mesma coisa que:
// // [indice: valor]
// // 0: "Matheus"
// // 1: "Rodrigo"
// // 2: "Felipe

// // O "for in" receberia 0, 1, 2, e o "for of" receberia "Matheus","Rodrigo","Felipe".