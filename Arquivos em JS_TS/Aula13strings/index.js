let umaString = "Um \"texto\""; // Obs.: No JS seeu pegar e querer colocar dus aspas iguais numa string, no caso uma dentro da outra, eu posso, mas é necessário o uso de \ barras invertidas
console.log(umaString);
let umastring2 = "Um \\ texto"; //Para adicionar uma barra invertida é necessário colocar duas delas no JS, assim adicionando apenas uma
console.log(umastring2)
// Como a maioria das linguagens de programação, o indice no JS começa apartir do 0, dai vai 012345...
// Se eu quiser pegar um caractere desse indice, que está em uma posição especifica de uma String eu digito:
console.log(umaString[4]); // Aqui ele vai mostrar o caracter que está no indice 4, no caso o 't' // Obs.: Se eu digitar dentro da [] o valor de um indice que esteja fora, ele dará como undefined, o memso acontece com valores negativos
console.log(umaString.charAt(4)); // Faz a mesma coisa da de cima
console.log('---------------------------')
console.log(umaString.concat(' ','em',' ','um',' ','lindo dia.')); // Adiciona no valor como uma quebra de linha
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log('---------------------------')
// Para fazer a pesquisa de indices, no caso aonde começa o indice de uma certa palavra:
umaString = "Um texto";
console.log(umaString.indexOf('texto')); // ele mostra o indice apartr da parte selecionada do texto, 
console.log(umaString.indexOf('Texto')); // se eu colocar um indice que não existe, como por exemplo um T maiusculo ele vai retornar -1
// Obs.: Cuidado para não confundir com o de cima, no caso se ele der zero, pois estará certo, onde a contagem de indices começa apartir do zero
//Eu também posso mandar ele procurar uma palavra aprtir de um indice:
console.log(umaString.indexOf('Um', 3)); // Aqui eu mandei ele procurar a palavra 'Um' apartir do indice 3, mas como não há 'Um' após o indice 3 ele retornará -1
console.log(umaString.indexOf('o', 3)); // Aqui no caso dará certo, e mostrará o valor que eu quero apartir da posição do indice 3
// O comando lastIndex básicamente começa do final para frente
console.log(umaString.lastIndexOf('o', 3)); // No caso ele só faz diferença após eu adicionar o índice // O resultado desse não seria encontrado e daria -1
console.log(umaString.lastIndexOf('m', 3)); // Ele vai mostrar a posição de m
console.log('---------------------------')
// Função macth 
console.log(umaString.match(/[a-z]/g)); 
console.log(umaString.match(/[a-z]/)); 
console.log('---------------------------')
// Função search e replace
console.log(umaString.search(/x/));
// No caso o replace serve para substituir uma expressão por outra
console.log(umaString.replace('Um', 'Outra')); // Aqui ele substituiu Um por Outra
// Se eu utilizasse uma expressão regular como na de cima :
umaString = 'Um texto';
console.log(umaString.replace(/Um/, 'Outra')); // Também daria certo
// Outro exemplo:
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/, '#')); // Se eu colocar para ele substituir o r por um #, ele substituirá apenas o primeiro r por #, mas se eu adicionar a flag 'g'
console.log(umaString.replace(/r/g, '#')); // aqui ele irá substituir todos os 'r's por #
// Para saber o tamanho de umaString:
console.log(umaString.length); // Mostra o tamanho em caracteres, contando tudo, ou seja o xero conta como 1 e os espaços também contam
// se eu quiser fatiar algo, ele vai mostrar o que foi fatiado com o slice:
console.log(umaString.slice(2, 6)); // eu defino o incio e o fim // Como no python ele não mostraria a ultima, por isso é necessário adicinar mais 1
// usando negativos, ele vai pegar o de 'trás':
console.log(umaString.slice(-3)); // ele tira o ma. do final da expressão, assim como python
console.log(umaString.slice(-5));
console.log('---------------------------')
// se eu quiser tira o ponto
console.log(umaString.slice(-5, umaString.length - 1));
// ou posso definir o que eu realmente quero:
console.log(umaString.slice(-5, -1));
// o de cima é uma simplificação do de baixo ↓
console.log(umaString.substring(umaString.length - 5, umaString.length -1));
console.log('---------------------------')
// Saindo do fatiamento
// Se eu quiser dividir uma string pelos os seus espaços:
console.log(umaString.split(' ')); // Assim ele transforma uma palavra em um indice de um array
console.log(umaString.split('r')); // Também posso usar os ´r´s para dividir
// Também posso limitar o número que eu quero de array´s
console.log(umaString.split(' ', 2));
console.log('---------------------------')
// para deixar maiúsculo 
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
