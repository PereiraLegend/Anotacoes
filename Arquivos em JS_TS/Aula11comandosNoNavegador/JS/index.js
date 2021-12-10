alert('Com a nossa mensagem!') // Esse comando alert() coloca uma mensagem no navegador, se for colocado para executar aqui, ele não dará certo, pois funciona apenas no navegador
// outros comandos no navegador:
/** No caso as funções abaixo capturam dadosque lhes sejem inseridas
 * window.prompt('Digite o meu nome:'); // ou pode ser abreviada para prompt('Digite o meu nome:');
 * window.confirm('Desesa proseguir?'); // ou pode ser abreviada para confirm('Desesa proseguir?');
 * 
 * // para capturar os valores inseridos, no caso booleanos (true, false) é dado logo abaixo
 * 
 * const confirma = confirm('Realmente deseja apagar? '); // o que quer que seja digitado será guardado na variavél confirma, ai no caso o reusltado será undefined, mas o valor capturado será armazenado
 * 
 * // para capturar os valores inseridos que não sejam booleanos
 * 
 * const confirma = prompt('Digite um número: '); // a lógica de salvamento será a mesma da de cima
 */ //Obs.: Tudo acima é feito apenas no navegador, pode também ser feito aqui na IDE, contudo não vai dar para ver o resultado final
 //Obs.: No comsole do navegador é puro JS, lá alguns comandos podem ser simplificados, contudo aqui não

 // Atividade:
 let num1 = prompt('Digite um número: ');
 let num2 = prompt('Digite outro número: ');
 let soma = Number(num1) + Number(num2);
 alert(`O Resultado da soma é ${soma}`);