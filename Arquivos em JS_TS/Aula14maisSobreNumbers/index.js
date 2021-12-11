// Padrão que o JS segue para essa precisão dos números: IEEE 754-2008
// Obs.: O JS tem uma certta inprecisão quanto aos números, por exemplo: 0.7 + 0.1 será igual a 0.799999999999999999999
// Para mais dúvidas sobre a inprecisão, ver conteudo da "Aula 26 - Mais sobre Numbers" min - 18 da udemy
let num1 = 1500; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // Se eu quiser converter o número para a string apenas para concatenar
console.log(typeof num1); // No caso o num1 aqui ainda é um number, e no de cima ele foi transformado apenas temporáriamente
// para eu alterar ele para uma string permanentemente
// num1 = num1.toString(); // Aqui ele foi convertido para uma string para sempre ou até ser alterado novamente
// Para ver a representação dos números em binário:
console.log(num1.toString(2)) // Aqui o número foi dado como binário
console.log('-------------------------');
// Para simplificar números:
num1 = 10.32345353453454523;
num2 = 2;
console.log(num1.toFixed(2)); // Aqui eu defini como 2 números após a vírgula, ou seja ele 'Arredondou'
// Para saber se um número é verdadeiro ou não, retornando True ou False
console.log(Number.isInteger(num1)); // Aqui ele vai dar falso, porque o num1 não é inteiro
console.log(Number.isInteger(num2)); // Aqui ele vai dar true, porque o num2 é inteiro
// NaN not a number
let temp = num1* 'Olá'; // Se aqui fosse + ao invés de * seria uma concatenação
console.log(temp);
// Eu posso ver sem um Number ou valor é um NaN
console.log(Number.isNaN(temp)); // aqui ele vai retornar um valor verdadeiro ou falso
