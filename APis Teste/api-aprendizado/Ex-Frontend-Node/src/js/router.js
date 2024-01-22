const express = require('express')
const rota = express.Router()
const conecta = require('./database/conexao')
const { register } = require('module')
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

    const { nomeusuario,emailusuario,senhausuario,senhausuarioconf } = req.body
    conecta.query('SELECT email FROM usuarios WHERE email = ?', [emailusuario], (error,results) => {
        if(error) {
            console.log(error)
        } 
        if( results.length > 0) {
            return res.render('register', {
                message: 'Este email já está sendo usado'
            })
        }
        else if(senhausuario !== senhausuarioconf){
            return res.render('register', {
                message: 'Senhas não conferem'
            })
        }
    })
    console.log("Teste-->: ",req.body)
    res.send("<h1>Formulario Enviado</h1>")
})

module.exports = rota