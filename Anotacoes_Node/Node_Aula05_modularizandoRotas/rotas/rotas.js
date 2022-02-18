//Aqui eu vou programas todas as rotas
//comando para instalar o router: "npm install router --save"
const express = require("express")
const rotas = express.Router()

//Pense nisso que está abaixo como se fosse um banco de dados virtual como se fosse um banco de dados na memória
let cursoInfo=[
    {"curso":"node","info":"Curso de Node"},
    {"curso":"react","info":"Curso de React"},
    {"curso":"java","info":"Curso de Java"},
    {"curso":"arduino","info":"Curso de Arduino"},
]

rotas.get("/",(req,res)=>{
    res.json({ola:"Seja bem vindo"})
})

rotas.get("/:cursoid",(req,res)=>{
    const curso=req.params.cursoid
    const cursoI=cursoInfo.find(i=>i.curso == curso)
    if(!cursoI){
        res.status(404).json({erro:"Curso não encontrado",cursoPesquisado:curso})//not found
    } else {
        res.status(200).json(cursoI)
    }
})
module.exports = rotas