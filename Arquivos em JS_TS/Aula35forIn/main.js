// For In
const frutas = ["Pera","Maçã","Uva"];

// Um for normal
/*
for (let i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i]);
}
*/

// For in Lê os indices ou chaves do objeto
for (let i in frutas) { // Aqui ele ler o indice
    console.log(frutas[i]);
}
console.log("--------------------------------------");
// Usando objetos
const pessoa = {
    nome: "Ana",
    sobrenome:"ferreira",
    idade: 30
};

for (let i in pessoa) {
    console.log(i);
};

console.log("--------------------------------------");
// Obs.: Para ver apenas um fator de dentro do objeto temos

console.log(pessoa.nome);
// Ou
console.log(pessoa["nome"]);

console.log("--------------------------------------");
// Para iterar e fazer o que eu quiser para selecionar um fator
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}