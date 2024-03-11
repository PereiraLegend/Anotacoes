require('dotenv').config()

const PORT = process.env.PORT || 8080

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const flash = require('express-flash')
const session = require('express-session')
const path = require('path')
const bcrypt = require('bcrypt')

const knex = require('./Database/connection')

const produtoControllers = require('./controller/produtoControllers')
const usersControllers = require('./controller/usersControllers')
const perdasControllers = require('./controller/perdasControllers')
const bannersControllers = require('./controller/bannersControllers')
const apiController = require('./controller/api')

const axios = require('axios')

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}))

app.use(flash())

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(cors())

app.use('/', produtoControllers)
app.use('/', usersControllers)
app.use('/', perdasControllers)
app.use('/', bannersControllers)
app.use('/', apiController)

app.get('/login', (req, res) => {
    var error = req.flash('error')
    var mail = req.flash('mail')

    error = (error == undefined || error.length == 0) ? undefined : error
    mail = (mail == undefined || mail.length == 0) ? undefined : mail

    if (req.session.user != undefined) {
        return res.redirect('/')
    }

    res.render('login', { error: error, mail: mail })
})

app.post('/login', async (req, res) => {
    var { email, senha } = req.body

    var users = await knex.raw(`
    SELECT * FROM users u
     INNER JOIN tb_funcao tf
      ON u.funcao = tf.idfuncao
       WHERE email = '${email}'
        AND senha = '${senha}'
    `)

    if (users.rows[0] != undefined) {
        req.session.user = users.rows[0]['username']
        req.session.funcao = users.rows[0]['nomefuncao']
        req.session.email = users.rows[0]['email']
        res.redirect('/')
    } else {
        var error = 'Credenciais inválidas!'
        req.flash('error', error)
        req.flash('mail', email)
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) => {
    req.session.user = undefined
    res.redirect('/login')
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})