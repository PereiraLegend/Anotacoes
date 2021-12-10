/*
Aritméticos 
+ Adição e Concatenação
- Subtração
/ Divisão
* Multipicação
** Potênciação
% Resto de uma divisão
*/
const num1 = 5; // Se fosse uma stringe ele "Uniria"/Concatenaria
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
// Obs.: Observe pela regra dos operadores mais fortes ou precendentes na matemática
/* Ordem logo Abaixo
()
**
* / %
+ - 
*/
// ex.: Se eu for colocar um contador
console.log('---------------------------------------------')
let contador = 1;
contador++; // É a mesma coisa que  o valor do contador que é 1 mais 1
console.log(contador);
// Também pode ser escrito desse jeito
++contador;
console.log(contador);// no caso o resultado deu 3 por conta de ele ter pegado o valor logo após ele ter sido incrementado com  mais 1
// a diferença de anbos é que:
console.log('---------------------------------------------')
let contador2 = 1;
console.log(contador2++); // aqui primeiro ele printa, ou mostra o número e depois faz a conta, por isso o print vai dar 1
// se o valor não for somado dentro da função console, o ++ estar antes ou depois não faz a menor diferença
let contador3 = 1;
console.log(++contador3); // aqui primeiro ele faz a conta e só depois ele mostra o valor, assim o resultado vai dar 2
console.log('---------------------------------------------')
// E o operador de decremento seria o --contador no caso, e seguiria a mesma lógica do de incremento ++
// Exemplo final: ↓
// eu quero fazer uma contagem de dois em dois
const passo = 2; // lembrando que const é uma constante
let contador4 = 0;

contador4 = contador4 + passo; // Posso fazer também assim: contador4 += passo; que no caso adicionaria de 1 em 1, posso aplicar o += tambem em *= **=
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);// a cada "ciclo" ele incrementa mais um
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);

// NaN - Not a number
const nun1 = 10;
const nun2 = 'Luiz';
console.log(nun1 * nun2); // o resultado será NaN
// Em alguns casos como o de cima o próprio JS resolve, como: 
console.log('----')
const nun3 = 10;
const nun4 = '5';
console.log(nun3 * nun4); // O resultado seria o valor real da multiplicação sugerida, ou seja: ele ignoraria a string/ converteria a mesma
// Convertendo String em números
console.log('----')
const nun5 = 10;
const nun6 = parseInt('5'); // posso converter utilizando o parseInt()
console.log(nun5 * nun6); // o resultado será NaN
// para converter números flutuantes
console.log('----')
const nun7 = 10;
const nun8 = parseFloat('5.2');
console.log(nun7 * nun8); // o resultado será NaN
// Para converter sem distinções:
console.log('----')
const nun9 = 10;
const nun10 = Number('5.2'); // aqui o JS literalmente se vira e procura o operador, e obs.: Se tiver alguma letra ele vai dar NaN
console.log(nun9 * nun10); 
