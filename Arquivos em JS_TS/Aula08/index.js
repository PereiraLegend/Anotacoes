/** Exercicio:
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924 
 * Luiz Otávio nasceu em 1980
 */
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
imc = peso / (altura * altura)
let anoNascimento = 2021 - idade;

console.log('----------------------------------------------------------------')
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'Kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome,'nasceu em', anoNascimento,'.');

// Obs.: na formatação se eu utilizar a virgula ',' ele vai dar um espaço, mas se eu troicar a vírgula pelo '+', ele vai unir o formato de texto
// E por isso é necessário escrever um espaço ' ' entre os termos
console.log('----------------------------------------------------------------')
console.log(nome+' '+sobrenome+' '+'tem'+' '+idade+' '+'anos, pesa'+' '+peso+' '+'Kg');
console.log('tem'+' '+altura+' '+'de altura e seu IMC é de'+' '+imc);
console.log(nome+' '+'nasceu em'+' '+anoNascimento+'.');//Aqui eu decidi unir o ponto

// Utilizando Templete strings, que no caso é uma string onde eu posso colocar variáveis dentro dela
// Para utilizar template strings é mecessário o uso da crase ``, e a declaração de valores dentro de ${}
// observe.:
console.log('----------------------------------------------------------------')
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);