let lista1 = ["Gabriel",20,"Londrina",true];

//// Retornar a lista inteira
console.log(lista1);

//// Retornar um índice da lista, começando pelo 0
// console.log(lista1[2]);

//// Retorna o tamanho da lista (quantidade de itens dentro dela)
console.log(lista1.length);
console.log();

//// push: adiciona um novo elemento ao final da lista.
lista1.push("C7");
console.log(lista1);
console.log(lista1.length);
console.log();

//// Adicionando uma nova lista ao final da lista original
let novovalor = ["Rodrigo",51];
lista1.push(novovalor);
console.log(lista1);
console.log(lista1.length);
console.log();

//// Retorna o elemento 0 dentro do elemento 5 (que é uma outra lista dentro da lista original)
// console.log(lista1[5][0]);


//// pop: remove o ÚLTIMO elemento da lista.
//// Além de remover, ele me retorna (return) o conteúdo removido. Eu posso armazenar esse valor em algum outro lugar
//// Nesse caso, o elemento removido é uma lista, por isso a var "removidos" recebeu uma lista nova. Dentro dessa lista posso continuar adicionando itens normalmente.
//// Não é obrigatorio armazenar o valor removido, nesse caso, ele vai apenas ser apagado.

let removidos = lista1.pop();
console.log(lista1);
console.log(removidos);
console.log();


//// Adicionando um elemento novo na lista removidos: o elemento está vindo do pop da lista original, ou seja, está removendo o conteúdo da lista original, e adicionando na lista removidos.
removidos.push(lista1.pop())
console.log(lista1);
console.log(removidos);
console.log();

//// Adiciona um novo elemento ao COMEÇO da lista.
lista1.unshift("Mara");
console.log(lista1);
console.log();

//// Remove o primeiro item de uma lista.
//// Assim como o pop, me retorna o valor removido, e ele pode ser armazenado.
let removidos2 = lista1.shift();
console.log(lista1);
console.log(removidos2);


//// Splice: Remove, adiciona ou substitui itens à uma lista
//// Sintaxe: lista.splice(x,y,elemento1,elemento2,elemento3)
//// x = Posição onvde vou aplicar o splice
//// y = Número de itens que quero remover (pode ser 0 se eu só quiser adicionar novos)
//// elemento1,elemento2,elemento3, elementoN.... = Novos itens que serão adicionados na posiçao especificada.

//// Removendo itens na posição escolhida
// lista1.splice(1,2)
// console.log(lista1)

//// Adicionando itens na posição escolhida, sem remover nenhum.
// lista1.splice(1,0,"Carla","Alcides",30)
// console.log(lista1)

//// Removendo uma quantidade X de itens, e adicionando novos (substituindo)
lista1.splice(2,2,"Carla","Alcides",30)
console.log(lista1)