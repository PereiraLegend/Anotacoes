// Funções Geradoras
// A diferença delas para as normais é que elas tem um recurso especial de quase pausar o código em determinado local
// Ela faz um negocio que é chamado de lase evaluation, que seria uma espécie de avaliação preguiçosa, onde ela nunca vai entregar todos os valores de uma vez, o que pode ser bom para a performance em determinadas situações
function* geradora1 () {
    // Código qualquer ...
    yield 'Valor 1'; // Essa função yield é quase como se fosse um return, mas com uma certa diferença
    // Código qualquer ...
    yield "Valor 2";
    // Código qualquer ...
    yield "Valor 3";
}
const g1 = geradora1()
// A questão é simples, se eu chamo apenas 1 "console.log(g1.next().value)" ele só vai mostrar o que está dentro do primeiro yield, ou seja "Valor 1"
// assim ele não executa os outros dois yields, m,eiop que fazendo uma pausa dentro da função, mas se eu chamar mais uma vez ele vai executar os doius primeiros
// yields, e mais uma vez, ele vai executar todos, mas para isso ele tem que ter o comando ".value"
console.log(g1.next().value)

console.log(g1.next().value)
console.log(g1.next().value)
console.log("-----------------------------")

// Fora a parte de cima, eu também posso iterar, ou seja:
function* geradora2 () {
    // Código qualquer ...
    yield 'Valor 1'; // Essa função yield é quase como se fosse um return, mas com uma certa diferença
    // Código qualquer ...
    yield "Valor 2";
    // Código qualquer ...
    yield "Valor 3";
}
const g2 = geradora2()
for (let valor of g2) {
    console.log(valor)
}