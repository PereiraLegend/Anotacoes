// Por padrão o nome do arquivo do controller vai ser o arquivo que ele vai manipular aconpanhado com o nome controller
//import conexao from "../database/conexao.js" Isso aqui é apagado pois o código não usa
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController{ //Aqui no controller é criado um método para cada uma das ações - Select - Update - Read - Delete

    async index(req,res) { //READ // Quando trago para cá tiro a arroy string .
        // Aqui crio regras genéricas para chamar o método responsável por fazer a tarefa
        const linha = await SelecaoRepository.findAll() //O tempo de resposta é totalmente assincrono e por isso é necessário colocar async na frente desse método e para informar que ele é assincrono
                                                  //e colocar await na frente dessa chamada para dizer para ele "aguardar" pela resposta, já que ela não é imediata
        res.json(linha) // Eu retorno no formato json
    }

    async show(req,res) { //READ
        // como ele requer um id eu o coloco aqui:
        const id = req.params.id
        const linha = await SelecaoRepository.findById(id) // Ele retorna o id aqui
        res.json(linha)
    }

    async store (req,res) { //CREATE 
        const body = req.body 
        const linha = await SelecaoRepository.create(body)
        res.json(linha)

    }
    
    async update(req,res) { //UPDATE 
        const id = req.params.id
        const body = req.body
        const linha = await SelecaoRepository.update(body, id)
        res.json(linha)
    }

     async delete(req,res) { //DELETE
        const id = req.params.id
        const linha = await SelecaoRepository.delete(id)
        res.json(linha)
    }

}
// padrão Singleton
export default new SelecaoController()