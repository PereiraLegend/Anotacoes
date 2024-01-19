const express = require('express')
const { response } = require('./app')
const rota = express.Router()

rota.use(express.json())

rota.get("/", (req,res) => {
    /*
    try {
        res.send("<h1>Teste: Olá Mundo!!!!!!!!!!!!!!</h1>")
    } catch (error){
        console.log(`Erro: ${error}`)
    }
    */
   res.render('../views/index.hbs')
})

rota.get("/teste", (req,res) => {
    res.send("Rota Teste")
})

module.exports = rota