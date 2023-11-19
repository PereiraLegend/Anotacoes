// Para mais melhorias ver video: https://www.youtube.com/watch?v=I9TxMBnWrdg&t=3s
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

//Há algumas melhorias que posso fazer nas rotas, como um arquivo proprio, para mais informações ver o video do final do arquivo:

app.get('/teste', SelecaoController.index) 

app.get('/teste/:id', SelecaoController.show)

app.post('/teste', SelecaoController.store)

app.put('/teste/:id', SelecaoController.update)

app.delete('/teste/:id', SelecaoController.delete)


export default app 
// Para mais melhorias ver video: https://www.youtube.com/watch?v=I9TxMBnWrdg&t=3s