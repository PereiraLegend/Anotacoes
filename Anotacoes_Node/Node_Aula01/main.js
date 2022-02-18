const http = require("http");

http.createServer((requisicao, resposta) => { // request e response
    resposta.writeHead(200,{"Content-Type":"text/plain"})
    resposta.write("Aprendendo Node - Por Lucas Pereira\n");
    resposta.end();

}).listen(1337);