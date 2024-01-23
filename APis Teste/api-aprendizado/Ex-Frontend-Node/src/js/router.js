const express = require('express')
const rota = express.Router()
const conecta = require('./database/conexao')
const { register } = require('module')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    /*
    conecta.query('INSERT INTO usuarios SET ?', req.body, (error, results) => {
        if (error) {
            return console.log('Deu Erro ao inserir dados na tabela: ', error)
        } else if (results){
            return console.log('Dados cadastrados com sucesso! ', results)
        }
    })
    */

    conecta.query('SELECT emailusuario FROM usuarios WHERE emailusuario = ?', [emailusuario], async (error,results) => {
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
                message: 'alert(Senhas não conferem)'
            })
        }
        let criptosenha = await bcrypt.hash(senhausuario, 8) // Criptografando a senha, aqui defino a variavél e o número de rodadas de criptografia eu quero
        console.log(criptosenha)
        
    })
     
    console.log("Teste-->: ",req.body)
    //res.send("<h1>Formulario Enviado</h1>")
})

module.exports = rota