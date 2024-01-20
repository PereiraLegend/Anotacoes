const express = require('express')
//const conexao = require('./database/conexao')
const path = require('path')
const rota = require('./router')
const hbs = require('hbs')
const app = express()

const diretorioP = path.join(__dirname, '../css')
console.log('Diretório: ',diretorioP)
app.use(express.static(diretorioP))
hbs.registerPartials(path.join(__dirname, '../views/partials'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine','hbs')
app.use(rota)


module.exports = app