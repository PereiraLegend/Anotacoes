//Aqui eu crio um servidor com express
//Com isso abaixo, eu não preciso do create server, pois o express já prepara todo o caminho
const express = require("express")
const app=express()
const porta = process.env.PORT
// Eu preciso apenas dizer com qual método eu vou trabalhar e definir as rotas
app.get("/", (req,res)=>{ // Aqui eu crio uma rota
    res.send("Seja Bem Vindo")
})
app.get("/canal",(req,res)=>{
    res.json({canal: "Curso Node"})
})

//no express troca-se o servidor por app
app.listen(porta || 3000, ()=>{console.log("Servidor Rodando")})