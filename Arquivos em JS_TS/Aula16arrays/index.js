// Os arrays são como um alista ou uma coleção de coisas, como listas de coisas, que podem ser armazenados em uma única variável
// se eu quiser criar um array
const teste = ['Luiz', 'Maria', 'Joao', 1, true, null]; // se eu quiser colocar qualquer tipo de dado eu posso, só que não é uma boa prática de programação fazer esse tipo de coisa
// O melhor modo para fazer, ou a melhor prática para um programador é saparar os tipos de dados em arrays diferentes
console.log(teste)
// Sabemos que os indices são indexados, ou seja há um valor para cada
// Os arrays também são indexados, mas pelos valores, assim como na liguagem python
// ou seja se eu tentar selecionar normal:
console.log('-------------');
const nome = "Luiz Otávio";
console.log(nome[0]); // Vai aparecer o caracter que está no indice 0
console.log('-------------');
const alunos = ['Luiz', 'Maria', 'Joao'];
console.log(alunos);
console.log(alunos[0]); // Aqui ele vai mostrar o que está no indice 0 de alunos, ou seja: Luiz
console.log(alunos[0][0]); // aqui ele seleciona o indice zero ou seja a palavra Luiz e de Luiz pega o que está no indice 0 da própria palavra

// Também posso alterar os indices:
alunos[0] = 'Eduardo'; // observe que eu selecionei um indice já existente e escrevi outro nome, no caso ele altera para o que está escrito aqui
alunos[3] = 'Luiza'; // observe que o indice 3 não existia no array, e ele foi adicionado aqui mesmo o Luiza, assim eu adicionei mais um indice
console.log(alunos);
// Para saber o tamanho do meu array
console.log(alunos.length); // Ela vai mostrar o total de indices dentro do array
// agora se eu no caso na linha 19 e 20, não saber o tamanho do array, e querer adicionar mais um valor, o melhor e mais otimizado modo é:
alunos[alunos.length] = 'Carlos';
alunos[alunos.length] = 'Mateus';
alunos[alunos.length] = 'Rafaela';
console.log(alunos);
// Também existe uma  função que faz exatamente a função de cima:
alunos.push('Amanda');
alunos.push('Pedro');
console.log(alunos);
// No caso todas essas funções atrás sempre vão adicionar no final da lista, mas e se eu quiser adicionar no começo?
alunos.unshift('Miguel')
console.log(alunos)
console.log('-------------');
// Para remover um elemento do final do array:
alunos.pop();
console.log(alunos); //  Aqui o último elemento foi removido, no caso 'Pedro'
// Para revomer o primeiro:
alunos.shift();
console.log(alunos); // No caso miguel foi removido
// obs.: Isso também altera os indices, por exemplo se eu apago o primeiro que era indice 0, o que era indice 1 passa para o indice 0
// Também posso deletar um intem dentro no meio usando uma função delete, só que usando delete ele não apaga o indice, e por isso fica como se ele estivesse vazio
delete alunos[1]; // Onde era pra estar Maria fica dando aviso de que aquele indice está vazio
console.log(alunos);
// acessando diretamente a variável:
console.log(alunos[1]) // o resultado vai ser 'undefined'
// Obs.: Se eu eu quiser que ele retorne um valor que não existe, então:
console.log(alunos[50]); // Ele também vai dar como 'undefined'
console.log('-------------');
// Para fatiar a lista, ou seja, pegar de um elemento para outro elemento:
console.log(alunos.slice(0, 3)); // ele vai pegar os elementos do 0 ao 2, obs.: o último elemento nunca aparece
// Se eu usar um número negativo:
console.log(alunos.slice(0, -3)); // vai dar a mesma coisa do de cima
// Obs.: arrays no JS são consideradas um objeto, ou seja:
console.log(typeof alunos); // Ele vai retornar os alunos como um object
// Se eu quiser pesguntar se 'alunos' é uma instância de array:
console.log(alunos instanceof Array); // Ele vai retornar como true,
// Obs.: se eu trocar o const pelo let, ou seja, deixar o alunos de ser uma constante, ele vai retornar o código de cima como false, ou seja ele deixa de ser uma instância de array, e se torna um Number
