require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const conexao = require('./app/database/conexao')
const PORT = process.env.PORT || 5002

app.use(cors())
app.use(express.json())

conexao()

const routes = require("./app/routes/router")

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

app.get("/", (req,res) => {
    res.send("Olá Mundo!")
})

module.exports=app