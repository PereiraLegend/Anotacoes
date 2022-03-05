// forEach Forma de iterar sobre arrays
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// podemos representar ela abaixo como:
for(let valor of a1) {
    console.log(valor)
}
console.log("-------------------")
// Ou podemos representar como:
a1.forEach(function(valor, indice, array) { // Podemos fazer uma arrow function
    console.log(valor,indice, array)
})
