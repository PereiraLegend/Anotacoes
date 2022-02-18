// instalação do express "npm install --save"
// aqui eu crio um servidor normal
const http = require("http")
const porta = process.env.PORT

const servidor = http.createServer((req,res)=>{
    // Posso fazer separado
    res.statusCode = 200
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Curso Node------")
})

servidor.listen(porta || 3000,()=>{console.log("Servidor Rodando")}) // Aqui diz que eu posso acessar uma porta ou na posta padrão que estou utilizando, ou na 3000