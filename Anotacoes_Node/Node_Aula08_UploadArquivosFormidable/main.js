//Para fazer o upload de arquivos, utilizamos o formidadble
//Comando para a instalação do formidable: "npm install formidable"
const http = require("http")
const porta = process.env.PORT || 3000
const formidavel = require("formidable")
const fs = require("fs")

const retorno = ()=>{console.log("Servidor Rodando")}
const servidor=http.createServer((req,res)=>{
    //Se a requisição for igaula ao pedido, ele vai fazer o envio do arquivo
    if (req.url == "/envioDeArquivo"){
        const form = new formidavel.IncomingForm()
        form.parse(req,(erro,campos,arquivos)=>{
            const urlantiga = arquivos.filetoupload.path
            const urlnova = "C:/Users/Luc" + arquivos.filetoupload.name//Aqui no name fica o nome original do arquivo
            fs.rename(urlantiga, urlnova, (erro)=>{
                if (erro) throw erro
                res.write("Arquivo movido!")
                res.end()
            })
        })
    } else {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data>"')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }

})
servidor.listen(porta,retorno)