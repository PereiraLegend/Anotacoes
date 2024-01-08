/* 
const express = require("express")
const app = express()
const port = 4000;

// Rota padrão - Rota raiz
app.get('/', (req,res) => {
    //Send serve para enviar algo
    res.send('Olá Mundo! \n Hello Worlds!')
})

// Escutar a porta 3000
app.listen(port, () => {
    console.log(`A porta utilizada é localhost:${port}`)
})
*/
// Novo modo de fazer: Separando o servidor das rotas
// Otimizando  - Separando o app.js e o server.js
import express from 'express' //Inportando o express

const app = express() // Criando uma instância do express

//Para fazzer o express entender dados no formato json, ou seja "indicar para o express ler body com json"
app.use(express.json())


// mock - exemplo de lista de entrada de dados
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'França', grupo:'G'},
    {id:3, selecao:'Portugal', grupo:'G'},
    {id:4, selecao:'Noruega', grupo:'G'},
    {id:5, selecao:'Espanha', grupo:'B'},
]

//quero buscar os dados por id, mas para isso preciso criar uma função auxiliar para fazer a seleção por id
//aqui eu retorno o objeto por id
function buscarSelecaoPorId(id){
    // Aqui vou retornar do array seleções os dados filtrados, onde cada objeto do arrays vai se chamar selecao e 
    // vai ser processado de uma arroy function fazendo a conparação lógica do filter
    return selecoes.filter( selecao => selecao.id == id)
}

//quero apagar objetos mas antes preciso do id
//Aqui eu pego a posição ou index do elemento no array por id
function buscaIndexSelecao(id){
    // Aqui eu utilizo o findIndex ou "filter index"
    // ou seja utilizando a mesma lógica de buscar seleção por id, irei ter como retorno o indice do id que estou passando
    return selecoes.findIndex(selecao => selecao.id == id)
}

//get serve para pegar dados
// Rota padrão/ raiz
app.get('/', (req,res) => { //BASE
    //lenbrete send serve para enviar dados
    res.send('Teste: Olá Mundo')
})

app.get('/teste', (req,res) => { //READ
    //res.send('Lista de Seleções')
    //res.send(selecoes)
    res.status(200).send(selecoes) // status 200 indica que deu certo
})

// criando um get para pegar seleções por id
app.get('/teste/:id', (req,res) => { //READ
    /*
    let index = req.params.id
    console.log(index)
    */
    res.json(buscarSelecaoPorId(req.params.id))
})

//post serve para postar dados
app.post('/teste', (req,res) => { //CREATE
    // No caso nesse exemplo eu quero inserir dados no array seleções
    selecoes.push(req.body)
    //status 201 quer dizer sucesso na criação
    // Na criação da interface para a postagem de dados eu uso o app insomnia
    res.status(201).send('Seleção cadastrada com sucesso!')
})

//criando rota para apagar
app.delete('/teste/:id', (req,res) => { //DELETE
    //O index e o id são coisas diferentes, o id pode ser o número 1, mas o index, a sua posição é o "0"
    let index = buscaIndexSelecao(req.params.id)
    //Aqui ele vai retornar "0" pois é o index do id passado pela função
    //console.log(index)
    //para apagar precisamos dizer que quero fazer um splice, ou seja cortar um array
    selecoes.splice(index, 1)
    res.send(`Seleção com id: ${req.params.id} excluida com sucesso!`)
})

//Para alterar dados o processo é semelhante a apagar
app.put('/teste/:id', (req,res) => { //UPDATE
    let index = buscaIndexSelecao(req.params.id)
    // A diferença é que não fazemos um splice
    //selecoes.splice(index,1)
    
    //aqui dizemos que no array seleções, de acordo com o index que estamos manipulando agora ("selecoes[index]...") , de acordo com om parâmetro selecao ("...selecao...")
    //, ele vai receber ("...=...") o valor que vai ser passado na requisição ("...req...") , no corpo da requisição ("...body...") , e o parâmetro que for ("...selecao")
    //vai ser o substituto
    selecoes[index].selecao = req.body.selecao

    //a mesma lógica de cima se aplica aqui enbaixo
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
    //res.send(`Alretação do id: ${req.params.id} alterado com sucesso!`)
})

export default app // Exportando o express