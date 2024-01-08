const express = require('express')
const server = express()

server.get('/',(req,res) => {
    return res.json({mensagem: 'A api está funcionando!'})
})
server.get('/usuario',(req,res) => {
    return res.json({usuario: "Lucas"})
})

server.listen(3000, () => {
    console.log("O servidor está funcionando!")
})
