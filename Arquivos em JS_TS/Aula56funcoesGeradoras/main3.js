// Exemplo 3.:
// Se eu fizer um gerador que delega tarefa para outro gerador
function* geradora6() {
    yield 0 // Aqui eu uso números , mas dentro do yield posse ser qualquer coisa assim como o return
    yield 1
    yield 2
}

function* geradora7() {
    //Para chmar uma geradora de dentro de outra geradora usamos o "yield*"
    yield* geradora6()
    // ai se eu continuar o código aqui enbaixo
    yield 3
    yield "4 Oi"
    yield 5
}
const g7 = geradora7()
for (let valor of g7) {
    console.log(valor)
}

console.log("---------------------------------------")

//Para mostrar qeu pode ser colocado qualquer coisa dentro do yield

function* geradora8() {
    // Uma function dentro do yield
    yield function () {
        console.log("Vim do y1");
    }
    // Algum código qualquer
    yield function () {
        console.log("Vim do y2")
    }

}
const g8 = geradora8()
const func1 = g8.next().value// Essa vei primeiro e como de prache ela só executou o primeiro yield, asim mostrando a frase "Vim do y1"
const func2 = g8.next().value
func1()
func2()

console.log("----------------------------------")

// agora mostrando o que o return faz
function* geradora9() {
    yield function () {
        console.log("Vim do y1");
    }

    return function() {//Se eu colocar o return aqui os "yields" abaixo dele não existirão mais, ou seja ele para aqui o código da função geradora
        console.log("Vim do return")
    }

    yield function () {
        console.log("Vim do y2")
    }

}
const g9 = geradora9()
const funcao1 = g9.next().value
const funcao2 = g9.next().value
const funcao3 = g9.next().value// essa terceira função já não existe mais, por conta do "return"
funcao1()
funcao2()
funcao3()//Como essa função já não existe mais, logo ela vai a erro