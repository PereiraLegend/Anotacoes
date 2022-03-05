// Função Map
// Obs.: Map altera o valor do array sem mexer no valor opriginal, mas ele usa o valor originalk para criar um novo array
// Dobre os números
const numeros = [5, 3, 6, 9, 10, 34, 20, 1]
const numerosEmDobro = numeros.map(valor => 2*valor ) // Arrow function
console.log(numerosEmDobro)
console.log("---------------------------------")
/////////////////////////////////////////////////////////////////////////

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [ // Aqui eu tenho um array cujo cada indice tem um objeto
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosa", idade: 32},
    {nome: "Wallace", idade: 47},
]
const retornarUmaString = pessoas.map(valor => valor.nome)
console.log(retornarUmaString)

const removerAchaveNome = pessoas.map(function(valor) {
    delete valor.nome // Ele deleta o array do objeto
    return valor
})
console.log(removerAchaveNome)

const AdicionarId = pessoas.map(function(valor, indice) {
    // const newValor = { ...obj } // aqui eu faço uma cópia do objeto pessoas para não mexer nno próprio objeto pessoas
    valor.id = indice
    return valor
})
console.log(AdicionarId)