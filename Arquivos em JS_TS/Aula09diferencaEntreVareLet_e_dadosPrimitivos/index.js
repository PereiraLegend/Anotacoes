// Diferença entre var e let
// se eu crio uma variavel com nome e uso var e de novo eu redeclaro e utilizo o var denovo , estará certo, mas se eu tentar fazer isso comm let isso não irá gerar erro
/**
 * var nome = 'Luiz';
 * var nome = 'Otávio';
 * console.log(nome);
 */

/** Se eu tentar fazer o que fiz acima usando let ele dará erro
 * let nome = 'Luiz';
 * let nome = 'Otávio';
 * console.log(nome);
 */
//console.log(nome);
// Obs.: ECMAScript é a padronização do Javascript
// Obs.: Também posso declarar variáveis sem o indentificador var ou let
modelo = 'Fiat Uno'; // Não faça isso, pois isso irá gerar uma variável global, o que pode gerar erros
console.log(modelo)

// Dados Primitivos: String, numner, undefined, null, boolean, symbol // No caso nessa aula nõ foi comentado o symbol

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; //number
const num2 = 10.52; // number 
let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória, mas esse é diferente do de cima, e utilizamos quando quisermos colocar uma variável como nulo
const boolean = true; // or false (valor lógico), ex.: cosnt aprovado = true; 
// Para ver o tipo de cada função
console.log(typeof num1,num2);

// Exemplo fora da aula
/**
 * const a = 2;
 * const b = a;
 * console.log(a,b); // Aqui ocorreu uma cópia
 * 
 * // se eu colocar a = 3
 * a = 3;
 * console.log(a, b); // o resultado seria 3, 2 pois b continua sendo uma referência do primeiro a
 */
const a = [1, 2];
const b = a; // referencia
console.log(a, b);

b.push(3);
console.log(a, b);