// Filter, Map, Reduce
// obs.: Funções Filter sempre retorna um array com a mesma quantidade de elementos ou menos
// Retorne os números maiores que 10
const numeros = [5, 4, 7, 8, 9, 10, 11, 23, 54]

// Se eu quiser fazer uma função de callback para o filter abaixo:
function callbackFilter(valor) {
    /* Posso fazer dessa maneira 
    if (valor > 10) {
        return true
    } else {
        return false
    }
    *///Ou posso simplificar de maneira mais simples abaixo, pois retornando a própria função ele já diz se ela é verdadeira ou falsa:
    return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter) // Esse método filter recebe uma função de call back que vai iterar sobre cada um dos elementos 
console.log(numerosFiltrados) // Aqui vai ser adicionado os números que forem menores que 10
// o .filter geralmente é usado como uma função anônima, por exemplo dessa forma:
const numerosFiltrados2 = numeros.filter(function(valor, indice) { // Pode ser também usado uma arroy function "(valor) => {return valor > 10}", ela também pode ser feita sem os parênteses e sem as chaves para que fique menor caso ele só queira o valor
    console.log(valor, indice) // Aqui eu peço o indice do array, eu também posso pegar o valor completo
    return valor > 10
})
console.log(numerosFiltrados2)
console.log("-----------------------------------------------------------------")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [ // Aqui eu tenho um array cujo cad indice tem um objeto
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosa", idade: 32},
    {nome: "Wallace", idade: 47},
]
const pessoasComNomeGrande = pessoas.filter(function(valor) {return valor.nome.length >= 5})// Do valor ele seleciona o objeto nomke e faz a contagen de letras pelo length, e seleciona as que são maior ou igual a cinco
console.log(pessoasComNomeGrande)
console.log("-----")
const pessoasComMaisDe50 = pessoas.filter(function (valor) {return valor.idade > 50})
console.log(pessoasComMaisDe50)
console.log("-----")
const pessoasQueTerminamComA = pessoas.filter(function(valor) {return valor.nome.toLocaleLowerCase().endsWith("a")}) // "toLocale.LowerCase()" serve para deixar todas as letras minúsculas, e "endsWith("a")" significa "termina com ..." no caso a
console.log(pessoasQueTerminamComA)
