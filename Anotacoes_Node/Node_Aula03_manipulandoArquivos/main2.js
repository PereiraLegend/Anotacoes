//Aqui ele não acessa um arquivo, mas o cria, no caso ele está criando um arquivo do tipo txt com nome de teste e um conteúdo
const http = require("http")
const fs = require("fs")
const porta = process.env.PORT

const server = http.createServer((req,res)=>{
    fs.appendFile("teste.txt","Curso de Node",(err)=>{//O appendFile eu vou indicar pra ele o conteudo que eu quero dentro do mesmo, ou seja, eel cria um arquivo
    // No appendFile se o arquivo existe ele anexa no arquivo e se não exiote ele cria o arquivo, se eu7 estivesse usando o open ele abriria, se não existir ele criaria
        if(err)throw err
        console.log("Arquivo Criado")
        res.end()
    })
})

server.listen(porta || 3000,()=>{console.log("Servidor Rodando")})