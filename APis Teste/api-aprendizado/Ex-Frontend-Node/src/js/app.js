const express = require('express')
const path = require('path')
const rota = require('./router')

const app = express()

const diretorioP = path.join(__dirname, './css')
console.log('Diretório: ',diretorioP)
app.use(express.static(diretorioP))

app.use(rota)


module.exports = app