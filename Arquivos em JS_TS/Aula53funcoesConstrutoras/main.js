// Função construtora -> objetos
// Função fabrica -> objetos --criaPessoa
// Construtora -> Pessoa (new) // Aqui agente elimina a parte do cria, pois na construtora, ela sempre é dada com letra maiúscula
function Pessoa (nome, sobrenome) { // Como essa função é uma função construtora, o corpo dessa função já vai ser o objeto a ser criado, o JS já reconhece isso desse mesmo jeito
    // Se eu quiser criar uma variável privada, que só está disponivél dentro dessa função construtora
    const ID = 12345 // Aqui eu criei uma variável privada

    // Atributos ou métodos privados
    this.nome = nome //Seria como se eu falasse Pessoa.nome = 
    this.sobrenome = sobrenome //No caso com o this aqui dentro não é necessário ter um return

    //Criando um método
    this.metodo = () => { // Uma arrow function
        console.log(this.nome + " Sou um método")
    }
}

const p1 = new Pessoa("Luiz", "Otávio") // A palavra new cria um objeto vazio, faz o this apontar para o objeto que está sendo utilizado
const p2 = new Pessoa("Maria", "Oliveira")
p2.metodo()