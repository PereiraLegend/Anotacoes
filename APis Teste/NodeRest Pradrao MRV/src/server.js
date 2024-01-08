import app from './app.js'
// a conexao com o bd será chamada pelo servidor, pois só poderá ser usado o programa e a base de dados se o servidor estiver em pé

const PORT = process.env.PORT || 5000

/* abaixo tem o exemplo de se fazer com tratamento de erros
//antes de chamar o servidor precisamos trabalhar a conexão:
//fazer a conexão // o método connect nos conecta a uma base de dados
import conexao from './infra/conexao.js'
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
 */
// O melhor jeio de se fazer é deixar de uma forma simples de entrar assim seria a parte de baixo com apenas, sem a parte do tratamento de erros: 
// mas é melhor 

app.listen(PORT, () => { // Escutar
console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
})

// O objetivo é que este arquivo chame apenas o escutador de rotas, e ela não vai ter como função chamar o conector por isso é para considerar apenas as partes que não estão marcadas como texto
// Ref.: https://www.youtube.com/watch?v=m5HB3aoumwU