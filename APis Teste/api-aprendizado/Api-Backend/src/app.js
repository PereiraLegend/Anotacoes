// Aplicação
const express = require('express')
const router = require('./router')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(router)
module.exports = app

// Configurando o core para que a aplicação apenas seja acessada apenas pelo endereço do site em especifico
/*
const corsOptions = {
    origin: ['http://seu-site-1.com', 'http://seu-site-2.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
*/