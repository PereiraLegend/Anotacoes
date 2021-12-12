let num1 = 9.52322343;
// Arredonda o valor para baixo
let num2 = Math.floor(num1); 
console.log(num2);
// Arredonda o valor para cima
let num3 = Math.ceil(num1);
console.log(num3);
// Arredonda para o valor mais próximo
let num4 = Math.round(num1);
console.log(num4); // Aqui no caso ele arredonda para o 10
// Para achar o maior número de uma sequência de números
console.log(Math.max(1,2,3,4,5,6,7,8,9,10,1500,4,4,4)); // Pega o maior número dessa sequência
console.log(Math.min(1,2,3,4,5,6,7,8,9,10,1500,4,4,4)); // Pega o menor número dessa sequência
// Para gerar um número aleatório entre 0 e 1 
console.log(Math.random());
// Para conseguir um número aleatório entre números
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio) // No caso ele vai dar um valor 'quebrado'
// para arredondar o de cima
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio2);
// Se eu quiser pegar o valor de PI
console.log(Math.PI);
// Potênciação
console.log(Math.pow(2, 10));
// Utilizando um operador normal para realizar a função de cima
console.log(2 ** 10);
// se quiser pegar a raiz quadrada de um valor
let nun = 9;
console.log(nun ** 0.5); // Tira a raiz quadrada de um valor
// Obs.: Em JavaScript é possivél realiar uma divisão por zero(0)
console.log(100 / 0); // Não só ele retorna 'Infinity', como se for usar um operador para avaliar ele dará como verdadeiro
// Ainda tocando no assunto de cima: Ou seja quanto mais uma conta se aproxima do valor de 0 , maior ela fica
console.log(100 / 0.00000000000000000000000000001);