// console.log("Linha 0");
// console.log("Linha 1");
// console.log("Linha 2");
// console.log("Linha 3");
// console.log("Linha 4");
// console.log("Linha 5");

for (let i = 0; i <= 500; i += 10) {
    console.log("Letra",i);
}

console.log("--------------------");
// Se eu fizer algo para dizer se um número é inpar ou par:
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? "par":"impar";
    console.log(i, par);
}

console.log("--------------------");
// Se eu quiser saber o tamanho de uma lista
const frutas = ["Maçã","Pêra","Uva"];

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}