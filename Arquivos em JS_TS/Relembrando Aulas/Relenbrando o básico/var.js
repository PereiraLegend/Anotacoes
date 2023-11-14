let name = 'Lucas'
console.log(name)

// Objetos :

let pessoa = {
    nome: 'Pereira',
    idade: 21
}

pessoa. nome = "Santos"
console.log(pessoa.nome)

// Listas :

let coresSelecionadas = ['red','blue']
coresSelecionadas[2] = 'green' // Por ser uma linguagem dinâmica pode ser adicionado itens após a declaração
coresSelecionadas[3] = 1 // Por ser uma linguagem dinâmica pode ser adicionado tanto strings quanto números
console.log(coresSelecionadas)
console.log(coresSelecionadas[0])

// Funções :

function frase(){
    console.log("Crescendo no mundo!")
}

function planta(name, lastName) {
    console.log("Hello " + name + lastName )

}

function square(number) {
    return number + number
}

frase()
planta("Maria ", "Jonh")
console.log(square(1))