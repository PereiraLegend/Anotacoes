// defineProperty - defineProperties // Definimdo as propriedades dos objetos, também podemos fazer métodos acessores, mas na próxima aula

//Aqui é para uma única chave
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque

    Object.defineProperty(this, "estoque", { // Aqui eu congelo a variável
        enumerable: true, // Aqui eu decido se o objeto que está abixo dentro dessa variável no caso estoque pode ou não estar visivél
        value: estoque,
        writable: false, // Aqui eu digo se o objeto dentro dessa variável pode ou não ser alterado
        configurable: false, // configurable como false não permite apagar a variável e reconfigurar a variável
    })
}
const p1 = new Produto("Camiseta", 20, 3)
p1.estoque = 500000000
delete p1.estoque // Aqui eu ordenei que a chave fosse apagada, mas como deixei o configurable como false, ele inpede ela de ser apagada
console.log(p1)
// Se eu quiser puxar as chaves do objeto
console.log(Object.keys(p1))
// Se eu tentar iterar usando for in para a visualização das chaves
for(let chave in p1) { // No caso aqui tabém fica dependente do que o enumerable decidir, ou seja se o estoque fica ou não fica visivél
    console.log(chave)
}
console.log("--------------------------------------------------")
///////////////////////////////////////////////////////////////////////

//Para diversas chaves
function Produto2(nome, preco, estoque) {
    //this.nome = nome
    //this.preco = preco
    this.estoque = estoque

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true,
        },
    })    
}

const p2 = new Produto2("Camiseta", 20, 3)
console.log(Object.keys(p2))

for(let chave in p2) {
    console.log(chave)
}