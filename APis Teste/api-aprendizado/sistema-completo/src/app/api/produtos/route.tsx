import { NextApiRequest, NextApiResponse } from "next"
import connection from "../../../../database/bd"

export async function getAllProdutos(req: NextApiRequest, res: NextApiResponse){ //Listar Produtos
    try{
        const produtos = await connection.execute('SELECT * FROM produtos')
        return new Response(JSON.stringify(produtos[0]), {
            status: 200
        }) // [0] é colocado para não retornar o buffer
    } catch (error) {
        console.log("Erro ao retornar os itens", error)
        return res.json({error: 'Erro ao retornar os itens'})
    }
}

export async function getThisProduct(req: NextApiRequest, res: NextApiResponse){ //Listar um produto
    try{
        const id = req.query.id
        console.log(id)
        const produto = await connection.execute('SELECT * FROM produtos WHERE id = ?', [id])
        return new Response(JSON.stringify(produto[0]), {
            status: 200
        })
    } catch (error) {
        console.log("Erro ao retornar o item: ", error)
        return res.json({error: 'Erro ao retornar o item'})
    }
}

export const GET = process.env.REQUEST_METHOD === 'produtos' ? getThisProduct : getAllProdutos 