const { Tags: TagsModels } = require("../models/TagsModels")

const TagsController = {
    getId: async (req,res) => {
        try {
            const id = req.params.id
            const tags = await TagsModels.findById(id)

            if (!tags) {
                res.status(404).json({ msg: "Tag não encontrada!" })
                return
            }

            res.status(200).json(tags)
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    },

    getAll: async (req,res) => {
        try {
            const tags = await TagsModels.find()
            res.status(200).json(tags)
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    },

    create: async (req,res) => {
        try {
            const tags = {
                nome: req.body.nome, 
                descricao: req.body.descricao,
            }

            const response = await TagsModels.create(tags)

            res.status(201).json({ response, msg: "Tag cadastrada com sucesso!" })
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    },

    update: async (req,res) => {
        try {
            const id = req.params.id

            const tags = {
                nome: req.body.nome,
                descricao: req.body.descricao,
            }

            const updateTags = await TagsModels.findByIdAndUpdate(id, tags)

            if (!updateTags) {
                res.status(404).json({ msg: "Tag não encontrada" })
                return
            }

            res.status(200).json({ updateTags, msg: "Tag atualizada com sucesso!" })
        } catch (error) {
            console.log(`Erro ao atualizar a tag: ${error}`)
        }
    },

    delete: async (req,res) => {
        try {
            const id = req.params.id
            const tag = await TagsModels.findById(id)
            if (!tag) {
                res.status(404).json({ msg: "Tag não encontrada" })
                return
            }
            const deleteTag = await TagsModels.findByIdAndDelete(id)
            res.status(200).json({ deleteTag, msg: "Tag deletada com sucesso! " })
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    }
}

module.exports = TagsController