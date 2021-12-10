// Exemplo, podemos ver diversas vezes a repetição do nome João
console.log('João nasceu em 1984.')
console.log('Em 2000 João conheceu Maria.')
console.log('Maria teve 1 filho com João em 2015')
console.log('O filho de João se chama Eduardo')
console.log('--------------------------------------')
// Seria interessante abstrair o nome João
let nome = 'João';// É uma string Obs.: let e var são quase a mesma coisa, só que var é bem mais antigo

console.log(nome, 'nasceu em 1984.')
console.log('Em 2000 ', nome, ' conheceu Maria.')
console.log('Maria teve 1 filho com ', nome, ' em 2015')
console.log('O filho de ', nome, ' se chama Eduardo')
console.log('--------------------------------------')

//Eu também posso declarar uma variável mas posso não inicializar ele

let ag;// É uma string Obs.: let e var são quase a mesma coisa, só que var é bem mais antigo
console.log(ag);// Sem declarar, vai ficar como indefinido ou undefined

ag = 'Ayala';
console.log(ag);
ag = 'Otavio';
console.log(ag)
// Obs.: Se eu tentar redeclarar uma variavel ela dará erro, ex.: let ag = 2
// obs.: Também não podmeos declarar variáveis com palavras reservadas ex.: let if;
// obs.: Variáveis precisam ter nomes significativos sem simplificações como n se fosse usado para nome, o nome da variável pode ser nome mesmo
// obs.: Não posso começar o nome de variáveis com números ex.: let 1nome;
// obs.: não podem conter espaços ou traços ex.: let nome-Cliente; ou let nome Cilente;
// obs.: Usar o camelCase ex.: let nomeCompletoDoCliente;
// Case-sensiteive, no caso para o JS letras maiúsculas e minúsculas são duas coisa diferentes, ex.: let nomeCliente = 'Ana'; let nomecliente = 'Fabio'; ambas as declarações estão corretas
// obs.: Não podemos redeclarar variáveis com let
// obs.: NÃO UTILIZE VAR, UTILTIZE LET.