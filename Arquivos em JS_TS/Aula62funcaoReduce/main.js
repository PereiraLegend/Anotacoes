// Reduce
// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) { // O acumulador serve para acumular as somas dos elementos do array
    acumulador += valor // ele acumula até achar o resultado final
    console.log(acumulador, valor)
    return acumulador
}, 0) // Aqui eu dou um valor inicial
console.log(total)
console.log("---------------------------")

// escolhendo apenas os números pares
const numeros_ = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total_ = numeros.reduce(function(acumulador, valor, indice, array) { // O acumulador serve para acumular as somas dos elementos do array
    if (valor % 2 === 0) acumulador.push(valor)
        return acumulador
}, []) // Aqui eu dou um valor inicial
console.log(total_)
console.log("---------------------------")

// Retornando o dobro dos valores
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total2 = numeros.reduce(function(acumulador, valor, indice, array) { // O acumulador serve para acumular as somas dos elementos do array
    acumulador.push(valor * 2)
    //console.log(acumulador, valor)
    return acumulador
}, []) // Aqui eu dou um valor inicial
console.log(total2)

console.log("---------------------------")
// Retornar a pessoa mais velha
const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 20},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 10},
    {nome: "Rosa", idade: 64},
    {nome: "Wallace", idade: 63},
]
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    //console.log(acumulador, valor)
    if(acumulador.idade > valor.idade)
        return acumulador
    return valor
}, 0)
console.log(maisVelha)