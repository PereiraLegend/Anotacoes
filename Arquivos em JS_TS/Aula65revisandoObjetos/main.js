// Revisando Objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

console.log(pessoa.nome) // Fazemos assim para acessar o que está dentro do objeto
// Ou também podemos fazer assim:
console.log(pessoa['nome'])
// Posso tabém criar uma chave para ter o acesso a mesma informação
const chave = 'nome' // pode ser qualquer indice do objeto
console.log(pessoa[chave])
console.log("-----------------------------------")

// Construtor
// O objeto abaixo é igual ao objeto de cima
const pessoa2 = new Object()
pessoa2.nome = 'Luiz'
pessoa2.sobrenome = 'Otávio'
pessoa2.idade = 30
pessoa2.falarNome = function() { // Aqui eu crio uma função dentro de um objeto
    return (`${this.nome} está falando o seu nome.`)
}
pessoa2.getDataNascimento = function() { // Aqui eu posso criar uma função para pegar a data de nascimento da pessoa
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
// para apagar alguma chave de algum objeto utilizamos
delete pessoa2.sobrenome
console.log(pessoa2)

// Invocando a função de dentro do objeto

pessoa2.falarNome()
console.log(pessoa2.getDataNascimento())
console.log("-----------------------------------")

// Para ver as chaves na pessoa2
for (let chave in pessoa2) {
    console.log(chave)
}
console.log("-----------------------------------")

// Factory Functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () { // Mesmo sem o gat essa fujnção ainda funciona
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.nomeCompleto)
console.log("-----------------------------------")

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // Para deixar os objetos inalteráveis eu coloco o "Object.freeze(this)" aqui dentro, onde ninguém poderá sobrescrever o que está escrito
}

// {} <- this -> this
const p2 = new Pessoa("Luiz","Miranda") // A palavra new vai criar um objeto vazio e vai pegar a palavra this e atrelar a palavra this dentro de uma função ao objeto, ou seja, quando for declara não precisa do uso do this
p2.nome = "Carlos" // se você prestar bem atenção vai executar isso no lugar de "Luiz", contudo uma constante é imutavél, mas aqui eu não alterei o valor da constante, ou da variável, e sim estou mudando o valor do valor da variável
// Para não mudar o objeto.: Object.freeze(p1) // Isso foi dado em um objeto
const p3 = new Pessoa("Maria","Miranda")
console.log(p2)

