//import conexao from './database/conexao.js'
//const conexao = require('./database/conexao')

const express = require('express')
const app = express()
const port = 3000

// Escutar o servidor
app.listen(port, () => {
    console.log("O servidor está rodando na porta:", port)
})


// Rotas
app.get('/', (req,res) => { // Rota principal
    res.send("Api em Funcionamento")
})
app.get('/dados', (req,res) => { // Listar todos os dados
    return res.send("teste")
})
app.get('/dados/:id', (req,res) => { // Listar um dado
    return res.send("teste2")
})