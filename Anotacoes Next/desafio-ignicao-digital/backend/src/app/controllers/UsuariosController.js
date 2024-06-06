const { Usuarios: UsuariosModel } = require("../models/UsuariosModels")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UsuariosController = {
    register: async (req,res) => {
        const {nome, email, password, regra} = req.body;
        try {
            let usuario = await UsuariosModel.findOne({ email })
            if (usuario) {
                return res.status(400).json({ msg: "Usuário já existe" })
            }

            usuario = new UsuariosModel({
                nome,
                email,
                password,
                regra,
            })

            const salt = await bcrypt.genSalt(10)
            usuario.password = await bcrypt.hash(password, salt)
            await usuario.save()

            const payload = {
                usuario: {
                    id: usuario._id,
                    regra: usuario.regra,
                }
            }

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:360000 }, (error, token) => {
                if (error) throw error
                res.json({ token })
            })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Erro no Servidor")
        }
    },

    login: async (req,res) => {
        const { email, password } = req.body
        try {
            let usuario = await UsuariosModel.findOne({ email })
            if(!usuario){
                return res.status(400).json({ msg: "Credenciais Inválidas" })
            }

            const checarSenha = await bcrypt.compare(password, usuario.password)
            if (!checarSenha) {
                return res.status(400).json({ msg: "Credenciais Inválidas" })
            }

            const payload = {
                usuario: {
                    id: usuario.id,
                    regra: usuario.regra,
                    nome: usuario.nome
                }
            }

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (error, token) => {
                if (error) throw error
                res.json({ token, email, regra: usuario.regra, nome: usuario.nome })
            })
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Erro no Servidor")
        }
    },

    getId: async (req,res) => {
        try {
            const id = req.params.id
            const usuarios = await UsuariosModel.findById(id)

            if(!usuarios) {
                res.status(404).json({ msg: "Usuário não encontrado!" })
                return
            }

            res.status(200).json(usuarios)
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    },

    getAll: async (req, res) => {
        try {
            const usuarios = await UsuariosModel.find()
            res.status(200).json(usuarios)
        } catch (error) {
            console.log(`Deu erro em: ${error}`)
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            const usuario = {
                nome: req.body.nome,
                regra: req.body.regra,
            }

            const updateUsuario = await UsuariosModel.findByIdAndUpdate(id, usuario)

            if(!updateUsuario) {
                res.status(404).json({ msg: "Usuario não encontrado" })
                return
            }

            res.status(200).json({ updateUsuario, msg: "Usuario atualizado com sucesso!" })
        } catch (error) {
            console.log(`Erro ao atualizar usuario`)
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const usuario = await UsuariosModel.findById(id)

            if(!usuario) {
                res.status(404).json({ msg: "Usuario não encontrado" })
                return
            }
            const deleteUsuario = await UsuariosModel.findByIdAndDelete(id)
            res.status(200).json({ deleteUsuario, msg: "Usuaro deletado com sucesso!" })
        } catch (error) {
            console.log(`Erro ao deletar dados: ${error}`)
        }
    }
}

module.exports = UsuariosController