// Retorne a soma ao dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter(valor => valor % 2 === 0)
const dobro = numeros.map(valor => valor * 2)
const soma = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    //console.log(acumulador, valor)
    return acumulador
})
console.log(numerosPares)
console.log(dobro)
console.log(soma)
console.log("----------------------------------")
///////////////////////////////// Fazendo a Junção de Tudo

const numeros_ = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares_ = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
})
console.log(numerosPares_)