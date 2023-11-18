import conexao from "../database/conexao.js"

class SelecaoRepository {
    // Aqui dentro terei o crud, onde inplanto o método para cada uma das ações que tenho no controller
    // Ficando aqui dentro todas as regras ligadas ao mysql
    // CRUD
    create (body) { // ADD
        /*
        const sql = "INSERT INTO selecoes SET ?;" 
        conexao.query(sql, selecao, (erro,result,fields) => {
             if(erro) {
                 console.log(`Erro no Select ${erro}`)
                 res.status(404).json({'erro':'Dado Não pôde ser alterado - Aquisição não atendida'})
             } else {
                 res.status(201).json(result)
             }
        })
        */
        const sql = "INSERT INTO selecoes SET ?;" 
        return new Promise((resolve, reject) => {
            conexao.query(sql, body, (erro, result) => {
                if(erro) return reject(`Erro no Cadastro ${erro}`)
                const linha = JSON.parse(JSON.stringify(result))
                return resolve(linha)
            })
        })

    }

    findAll() { // READ
        
        //Aqui eu refatoro esse código que veio de controller para que a resposta venha corretamente:
        /*
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (erro, result, fields) => { 
            if(erro) {
                console.log(`Erro no Select ${erro}`)
                res.status(404).json({'erro':'Dados Não Localizado'})
            } else {
                res.status(201).json(result)
            }
            console.log(erro,result)
        })
        */
       // Para isso eu utilizo Promise para obter uma representação de dados correta
       const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject(`Erro no Select ${erro}`)
                // fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado)) //Aqui eu recebo os dados da requisição dentro do mysql e converto em texto pa mostrar esses dados de forma adequada no servidor
                return resolve(linha)
            })
        })
    }

    findById(id) { // READ ID
        /*
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
        */
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => { // Aqui é necessário adicionar "id", porquê é o que ele vai receber
                if(erro) return reject(`Erro no Select ID ${erro}`)
                const linha = JSON.parse(JSON.stringify(result))
                return resolve(linha)
            })
        })
    }

    update(body, id) { // UPDATE
                /*
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(sql, [body, id], (erro, result, fields) => {
             if(erro){
                 console.log(`Erro no Update ${erro}`)
                 res.status(400).json({'erro':'Dado não pôde ser alterado'})
             } else {
                 res.status(200).json(result)
             }
        })
        */
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [body, id], (erro, result) => {
                if(erro) return reject(`Erro no Update ${erro}`)
                const linha = JSON.parse(JSON.stringify(result))
                return resolve(linha)
            })
        })
    }

    delete(id) { // DELETE
        /*
        const sql = "DELETE FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, result, fields) => {
            if(erro){
                console.log(`Erro no Select ${erro}`)
                res.status(404).json({'erro':'Dado não pôde ser excluido'})
            } else {
                res.status(200).json(result)
            }
        })
        */
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if(erro) return reject(`Erro no Delete ${erro}`)
                const linha = JSON.parse(JSON.stringify(result))
                return resolve(linha)
            })
        })
    }

}

export default new SelecaoRepository()
