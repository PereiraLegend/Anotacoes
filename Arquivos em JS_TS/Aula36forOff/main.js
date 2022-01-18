// For Of
const nome = "Luiz otavio;"

// For normal
//for (let i=0; i < nome.length; i++) {
//    console.log(nome[i]);
//}

//for (let i in nome) {
//    console.log(nome[i]);
//}

// Assim como os de trás o de baixo vai dar o mesmo resultado, mas ao invés de ele retornar os indices, eles vão retornar o valor
for (let valor of nome) { 
    console.log(valor);
}

console.log("-----------------------------");
// Usando um array
const nome2 = ["Luiz", "Otavio", "Henrique"];
for (let valor of nome2) {  // Como array ele retorna a lista
    console.log(valor);
}

console.log("-----------------------------");
// De outra forma bem diferenciada
nome2.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// No caso de objetos não iria funcionar
/*
const pessoa = {
    nome:"Luiz",
    sobrenome: "Otavio",
};

for (let valor of pessoa) { // Vai dar erro pois esse objeto não é iterável
    console.log(valor);
});
*/