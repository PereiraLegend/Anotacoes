import express from 'express' 
const app = express() 

app.use(express.json())

const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'França', grupo:'G'},
    {id:3, selecao:'Portugal', grupo:'G'},
    {id:4, selecao:'Noruega', grupo:'G'},
    {id:5, selecao:'Espanha', grupo:'B'},
]

function buscarSelecaoPorId(id){

    return selecoes.filter( selecao => selecao.id == id)
}

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req,res) => { //BASE
    res.send('Teste: Olá Mundo')
})

app.get('/teste', (req,res) => { //READ
    res.status(200).send(selecoes)
})

app.get('/teste/:id', (req,res) => { //READ
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/teste', (req,res) => { //CREATE
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

app.delete('/teste/:id', (req,res) => { //DELETE
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id: ${req.params.id} excluida com sucesso!`)
})

app.put('/teste/:id', (req,res) => { //UPDATE
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao

    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app 