const http = require("http")
const eventos = require("events")
const EventoEmissor = new eventos.EventEmitter()

//Criando uma função "final"
const final =()=>{console.log("Fim do processo")}

EventoEmissor.on("msg",()=>{console.log("Curso de node")})
EventoEmissor.on("fim",final)

const porta = process.env.PORT || 3000
const retorno = ()=>{console.log("Servidor Rodando")}
const servidor = http.createServer((req, res)=>{
    //Chamando o evento
    EventoEmissor.emit("msg")

    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("Curso Node")

    //Chamando o evento
    EventoEmissor.emit("fim")
    res.end()
})
servidor.listen(porta,retorno)