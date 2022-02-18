//Aqui ele acessa um arquivo
// Aqui se prestar atenção você cria o servidor e altera o html, e com isso ele não precisa ser desligado e ligado novamente, pois ele já atualiza automaticamente
// Ver aula 05 de node do curso do CBFCursos
const http = require("http")
const fs = require("fs")
const porta = process.env.PORT

const server = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,arquivo)=>{//O readFile vai ler o arquivo e anexar em "arquivo"
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000,()=>{console.log("Servidor Rodando")})