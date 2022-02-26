//Parte dois da aula, criando um gerador infinito
function* geradora4 () {
    let i = 0
    while(true) {
        yield i
        i++
    }
}
// a função acima é um gerador infinito, ou seja um loop infinito, mas ele só vai executar um por vez a cada chamada do código, onde as chamadas é que devem ser dadas infinitamente
const g4 = geradora4()
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
