import express from 'express' 
//import conexao from './app/database/conexao.js'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express() 

app.use(express.json())

function buscarSelecaoPorId(id){

    return selecoes.filter( selecao => selecao.id == id)
}

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// ROTAS
app.get('/teste', SelecaoController.index) 

app.get('/teste/:id', SelecaoController.show)

app.post('/teste', SelecaoController.store)

app.put('/teste/:id', SelecaoController.update)

app.delete('/teste/:id', SelecaoController.delete)


export default app 
