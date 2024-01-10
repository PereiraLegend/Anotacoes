// Rotas
const connection = require('./database/conexao')
const express = require('express')
const { response } = require('./app')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res) => { // RAIZ
    res.status(200).send('As rotas estão funcionando!')
})

router.get('/produtos', async (req,res) => { // READ
    try{
        const produtos = await connection.execute('SELECT * FROM produtos')
        return res.status(200).json(produtos[0]) // [0] é colocado para não retornar o buffer
    } catch (error) {
        console.log("Erro ao retornar os itens", error)
        return res.status(200).json({error: 'Erro ao retornar os itens'})
    }

})

router.get('/produtos/:id', async (req, res) => { // READ
    try{
        if (!req.body) {
            return res.status(400).json({ error: 'Esse id não existe ou não pode ser listado' });
        }        

        const id = req.params.id
        const produto = await connection.execute('SELECT * FROM produtos WHERE id = ?', [id]);
        return res.status(200).json(produto[0])
    } catch (error) {
        console.log("Erro ao retornar as informações do item", error)
        return res.status(200).json({error: 'Erro ao retornar as informações do item'})
    }

})

router.post('/produtos', async (req, res) => { // POST
    try {
        const body = req.body
        console.log("Aqui é este -> ",body)
        const adproduto = await connection.query('INSERT INTO produtos SET ?',body)
        return res.status(200).json(adproduto[0])
    } catch (error) {
        console.error('Erro ao inserir produto:', error)
        return res.status(500).json({ error: 'Erro ao inserir produtos' })
    }
});

router.put('/produtos/:id', async (req,res) => { // UPDATE
    try {
        const id = req.params.id
        const body = req.body
        console.log("O id é ----> ", id)
        console.log("O body é ----> ", body)
        return await connection.query('UPDATE produtos SET ? WHERE id=?', [body, id])

    } catch (error) {
        console.error('Erro ao alterar o produto: ', error)
        return res.status(500).json({erro: 'Erro ao alterar o produto'})
    }
})

router.delete('/produtos/:id', async (req,res) => { // DELETE
    try{
        if (!req.id) {
            return res.status(400).json({ error: 'Esse id não existe ou não pode ser apagado' });
        }

        const id = req.params.id;
        console.log("O id para ser apagado é: ", id);
        return await connection.query('DELETE FROM produtos WHERE id=?', [id]);
        
    } catch (error){
        console.error('Erro ao deletar o produto: ', error)
        return res.status(500).json({error: 'Erro ao deletar o produto'})
    }
})

module.exports = router