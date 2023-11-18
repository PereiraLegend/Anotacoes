import express from 'express' 
import conexao from '../infra/conexao.js'
const app = express() 

app.use(express.json())

/* Na aplicação real não utilizamos o mock de exemplo
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'França', grupo:'G'},
    {id:3, selecao:'Portugal', grupo:'G'},
    {id:4, selecao:'Noruega', grupo:'G'},
    {id:5, selecao:'Espanha', grupo:'B'},
]
*/

function buscarSelecaoPorId(id){

    return selecoes.filter( selecao => selecao.id == id)
}

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

/* Na aplicação real não utilizamos a rota padrão pois o que inporta é o acesso aos recursos
app.get('/', (req,res) => { //BASE
    res.send('Teste: Olá Mundo')
})
*/


// ROTAS
app.get('/teste', (req,res) => { //READ - LISTAR OS DADOS DO BANCO DE DADOS
    const sql = "SELECT * FROM selecoes;" // Aqui passo a instrução para o sql
    conexao.query(sql, (erro, result, fields) => { // dentr da arroy function eu passo três parâmetros
        if(erro) {
            console.log(`Erro no Select ${erro}`) // Aqui eu indico e enfeito o erro
            res.status(404).json({'erro':'Dados Não Localizado'}) // Aqui eu indico e enfeito o erro 
        } else {
            res.status(200).json(result)
        }
    }) // Aqui passo três parâmetros sql. arroy function,
    
}) 

app.get('/teste/:id', (req,res) => { //READ
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro,result, fields) => {
        const linha = result[0] // aqui eu crio a "linha" para receber apenas o primeiro parâmetro do array
        if(erro) {
            console.log(`Erro no Select ID ${erro}`)
            res.status(404).json({'erro':'Dado Não Localizado'})
        } else {
            res.status(200).json(linha) // aqui eu puxo a linha
        }
    })
})

app.post('/teste', (req,res) => { //CREATE - FAZER A POSTAGEM DE DADOS
    /*
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
    */
   const selecao = req.body // a seleção vem do body, que é o corpo da seleção, que no caso não é o mesmo body do html, aqui ele indica os valores fora o id
   const sql = "INSERT INTO selecoes SET ?;" //SET significa configuração
   conexao.query(sql, selecao, (erro,result,fields) => {
        //const linha = result[0] aqui não é necessário pegar o valor de apenas um indice
        if(erro) {
            console.log(`Erro no Select ${erro}`)
            res.status(400).json({'erro':'Dado Não pôde ser alterado - Aquisição não atendida'})
        } else {
            res.status(201).json(result)
        }
   })
})

app.delete('/teste/:id', (req,res) => { //DELETE
    /*
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id: ${req.params.id} excluida com sucesso!`)*/
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, result, fields) => {
        if(erro){
            console.log(`Erro no Select ${erro}`)
            res.status(404).json({'erro':'Dado não pôde ser excluido'})
        } else {
            res.status(200).json(result)
        }
    })
})

app.put('/teste/:id', (req,res) => { //UPDATE - ATUALIZAR, não serve pra criar, ou seja ele diz que faz update de um id que não existe, mas na prática não faz pq não existe, então é preciso de um verificador de existência
    //put é diferente de patch
    /*
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao

    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
    */
   const id = req.params.id
   const selecao = req.body
   const sql = "UPDATE selecoes SET ? WHERE id=?;"
   conexao.query(sql, [selecao, id], (erro, result, fields) => {
        if(erro){
            console.log(`Erro no Update ${erro}`)
            res.status(400).json({'erro':'Dado não pôde ser alterado'})
        } else {
            res.status(200).json(result)
        }
   })
})

export default app 
