// Mátodo Slice: 
const nomes = ['Maria','João','Eduardo','Gabriel','Julia'];
// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
nomes.splice(4, 1) // Ou seja aqui diz que do índice 4 eu quero remover um elemento 
// Obs2.: essa função splice retorna também o elemento que foi removido assim como o pop, porém a única diferença é que ela vai retornar um array ao invéz do próprio elemento, ou seja ela faz o que aquelas funções fazem e mais um pouco
console.log(nomes)

// Se eu criar um variável
const removidos = nomes.splice(4, 1)
console.log(nomes, removidos)
console.log("--------------------------------------------")
// Essa função também suporta números negativos, ou seja, ele vai do menor para o maior:
//                   -5      -4      -3        -2        -1
//                   0       1       2         3         4
// const nomes = ['Maria','João','Eduardo','Gabriel','Julia'];
const removidos2 = nomes.splice(-2, 1)
console.log(nomes, removidos2)

// tabém posso fazer assim const removidos2 = nomes.splice(-2, Number.MAX_VALUE) com a função "Number.MAX_VALUE" ele vi procurar o valor máximo, daqui ele pede do menos 2 e vai até o infinito

// Agora se eu quiser mudar as regras:
const removidos3  = nomes.splice(3, 0, "Luiz", "Otávio") //Aqui diz que eu quero que ele começe no indice "3", que ele não remova nada "0" , mas que apartir do índice 3 ele adicione "Luiz" // Obs.: Após o luiz eu posso adicionar mais coisas como "Otávio"
console.log(nomes, removidos3)
console.log("--------------------------------------------")

//Shift: Se que quiser simular o shift, remover a primeira palavra
const removidos4 =  nomes.splice(0, 1)
console.log(nomes, removidos4)
// Push : Se que quiser simular o push
nomes.splice(nomes.length, 0, "Ana", "Roberto", "Cristal")
console.log(nomes)
// Unshift
nomes.splice(0,0,"Andreas","Tóquio","Kabane")
console.log(nomes)