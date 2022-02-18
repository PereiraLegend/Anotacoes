//Criando rotas no servidor
//Ver aula 03 do curso de node de CBFCursos
const http = require("http");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    //Aqui em baixo eu crio três rotas, ou seja, na primeira rota que eu coloco após o localhost:3000 o "/" eu tenho o seja bem vindo
    //Na segunda rota quando eu coloco o "/canal" após o localhost:3000 ele vai mostrar "Servidor Lucas"
    //E na terceira rotaeu tenho o "/curso", onde após ser digitado depois do localhost:3000, ele vai mostrar "Curso de Node" 
    if(req.url=="/"){
        res.write("<h1>Seja Bem vindo</h1>");
    } else if(req.url=="/canal"){
        res.write("<h1>Servidor Lucas</h1>");
    } if(req.url=="/curso"){
        res.write("<h1>Curso de Node</h1>");
    }
    res.end();
});

servidor.listen(porta, host, ()=>{console.log("Servidor Rodando")});