//Ver aula 03 do curso de node de CBFCursos
const http = require("http");
const url = require("url");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    //Aqui ele mostra os parâmetros
    res.write(req.url);
    const p = url.parse(req.url,true).query;
    res.write("<br/>"+p.nome);
    res.write("<br/>"+p.curso);
    res.end();
});

servidor.listen(porta, host, ()=>{console.log("Servidor Rodando")});