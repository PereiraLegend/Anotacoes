// Obs.: Se eu tentar redeclarar uma constante ela dará erro, ex.: let ag = 2
// obs.: Também não podmeos declarar constantes com palavras reservadas ex.: let if;
// obs.: constantes precisam ter nomes significativos sem simplificações como n se fosse usado para nome, o nome da constantes pode ser nome mesmo
// obs.: Não posso começar o nome de uma constantes com números ex.: let 1nome;
// obs.: não podem conter espaços ou traços ex.: let nome-Cliente; ou let nome Cilente;
// obs.: Usar o camelCase ex.: let nomeCompletoDoCliente;
// Case-sensiteive, no caso para o JS letras maiúsculas e minúsculas são duas coisa diferentes, ex.: let nomeCliente = 'Ana'; let nomecliente = 'Fabio'; ambas as declarações estão corretas
// obs.: Não podemos modificar o valor de uma constante
// obs.: NÃO UTILIZE VAR, UTILTIZE CONST.
// Obs.: Como constante é uma constante, não posso declara uma assim ex.: const nome; já que o valor dela não é mutável
const nome = 'João';
// se eu colocar mais ukma linha asim nome = 'Ana'; vai dar erro
// se eu quiser relmente tornar a constante nome mutável, eu troco o const da linha 11 pelo let
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero; // posso fazer cálculos entre constantes e armazena-los em uma outra constante
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
// Obs.: o JS é uma linguagem de tipagem dinâmica, onde os valores ficam armazenados no 'motor'
// Se eu quiser ter certeza sobre o tipo de dado que foi armazenado eu utilizo ex.: ↓
console.log( typeof(primeiroNumero));// ele vai printar 'Number'
const ei = 'abc';
console.log(typeof(ei))// ele vai printar 'String'
// outra obs.: se eu juntar valores com induices diferentes, ele vai concatenar
const ex = '4';
console.log(primeiroNumero + ex);// O resultado vai dar 54, pois ele apenas 'juntou'
//se eu usar o comando typeof
console.log(typeof(primeiroNumero + ex))// o resultado vai dar como se fosse uma string, e se eu quiser que os de um 'numérico', os dois valores devem ser declarados como números
// Obs final.: Você não pode alterar uma constante, mas pode pegar o valor de uma constante e jogar em uma nova constante;
