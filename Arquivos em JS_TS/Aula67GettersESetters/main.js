// Getters e Setters // Definimdo as propriedades dos objetos, também podemos fazer métodos acessores getters e setters
// Getters e Setters servem para proteger, ou validar, ou "encapsular" em outras linguagens de programação
// O getter serve para obter o valor
// o setter serve para "setar" o valor
//Aqui é para uma única chave
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque

    let estoquePrivado = estoque
    Object.defineProperty(this, "estoque", { // Aqui eu congelo a variável
        enumerable: true, // Aqui eu decido se o objeto que está abixo dentro dessa variável no caso estoque pode ou não estar visivél
        configurable: false, // configurable como false não permite apagar a variável e reconfigurar a variável
        get: function() {
            return estoque // Com isso você vê que o valor ficou como getter
        },
        set: function(valor) {
            if (typeof valor !== "number"){
                throw new TypeError("Mensagem")
            }
            estoquePrivado = valor
        }
        //Os abaixo não são usados:
        //value: estoque,
        //writable: false, // Aqui eu digo se o objeto dentro dessa variável pode ou não ser alterado
    })
}
const p1 = new Produto("Camiseta", 20, 3)
console.log(p1)

p1.estoque = 500 // Aqui foi setado um valor para o estoque "Setter"
console.log(p1.estoque)

console.log("---------------------------------------------")
/////////////////////////
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace("coisa.", "") // Aqui no replace eu digo que quero trocar "coisa" por "nada"
            nome = valor
        }
    }
}
const p2 = criaProduto("Camiseta")
p2.nome = "Qualquer coisa."
console.log(p2.nome)