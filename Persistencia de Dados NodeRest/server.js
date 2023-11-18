import app from './src/app.js'
// a conexao com o bd será chamada pelo servidor, pois só poderá ser usado o programa e a base de dados se o servidor estiver em pé
import conexao from './infra/conexao.js'

const PORT = 5000
//antes de chamar o servidor precisamos trabalhar a conexão:
//fazer a conexão // o método connect nos conecta a uma base de dados
conexao.connect((erro) => {
    if(erro){
        console.log(`A conexão falhou: ${erro}`)
    } else {
        console.log('Conectado ao banco de dados com sucesso!')
        //Da forma que o ja é executado de cima para baixo, eu só consigo me conectar a aplicação se o banco de dados estiver prontamente conectado
        //Assim eu posso mover o "escutador" da porta para dentro do else
        app.listen(PORT, () => { // Escutar
        console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
        })
    }
})


