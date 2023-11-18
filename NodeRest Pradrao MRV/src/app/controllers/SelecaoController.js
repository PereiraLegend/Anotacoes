// Por padrão o nome do arquivo do controller vai ser o arquivo que ele vai manipular aconpanhado com o nome controller
import conexao from "../database/conexao.js"

class SelecaoController{ //Aqui no controller é criado um método para cada uma das ações - Select - Update - Read - Delete

    async index(req,res) { //READ // Quando trago para cá tiro a arroy string .
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (erro, result, fields) => { 
            if(erro) {
                console.log(`Erro no Select ${erro}`)
                res.status(404).json({'erro':'Dados Não Localizado'})
            } else {
                res.status(201).json(result)
            }
        })
        
    }

    async show(req,res) { //READ
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro,result, fields) => {
            const linha = result[0]
            if(erro) {
                console.log(`Erro no Select ID ${erro}`)
                res.status(404).json({'erro':'Dado Não Localizado'})
            } else {
                res.status(201).json(linha)
            }
        })
    }

    async store (req,res) { //CREATE 
        const selecao = req.body 
        const sql = "INSERT INTO selecoes SET ?;" 
        conexao.query(sql, selecao, (erro,result,fields) => {
             if(erro) {
                 console.log(`Erro no Select ${erro}`)
                 res.status(404).json({'erro':'Dado Não pôde ser alterado - Aquisição não atendida'})
             } else {
                 res.status(201).json(result)
             }
        })
    }
    
    async update(req,res) { //UPDATE 
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
     }

     async delete(req,res) { //DELETE
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
    }

}
// padrão Singleton
export default new SelecaoController()