const express = require('express')
const rota = express.Router()
//const conexao = require('./database/conexao') 
//const formularioregistro = document.getElementById('fomulario-registro')

rota.use(express.json())

// Rotas Dinâmicas

rota.get("/", (req,res) => {
    /*
    try {
        res.send("<h1>Teste: Olá Mundo!!!!!!!!!!!!!!</h1>")
    } catch (error){
        console.log(`Erro: ${error}`)
    }
    */
   res.render('../src/views/index.hbs', {title: 'Home'})
})

rota.get("/registro", (req,res) => {
    res.render('../src/views/registro.hbs', {title: 'Registro'})
})

rota.get("/login", (req,res) =>{
    res.render('../src/views/login.hbs', {title: 'Login'})
})

rota.get("/teste", (req,res) => {
    res.send("Rota Teste")
})

// Rotas de Dados

rota.post("/registro", async (req,res) => {
    console.log(req.body)
    res.send("<h1>Formulario Enviado</h1>")
})

module.exports = rota