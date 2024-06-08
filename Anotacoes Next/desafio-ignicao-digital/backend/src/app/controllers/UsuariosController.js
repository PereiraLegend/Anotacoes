const { Usuarios: UsuariosModel } = require("../models/UsuariosModels")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UsuariosController = {
    register: async (req,res) => {
        const {nome, email, password, regra, tags} = req.body;
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
                tags,
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
                    nome: usuario.nome,
                    tags: usuario.tags
                }
            }

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (error, token) => {
                if (error) throw error
                res.json({ token, email, regra: usuario.regra, nome: usuario.nome, tags: usuario.tags })
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

    getMe: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            if (!token) {
                return res.status(401).json({ msg: 'Token JWT não fornecido' });
            }
    
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded || !decoded.usuario || !decoded.usuario.id) {
                return res.status(401).json({ msg: 'Token JWT inválido ou não contém informações do usuário' });
            }
    
            const userId = decoded.usuario.id;
            const tagsId = decoded.usuario.tags;
    
            res.status(200).json({ id: userId, tags: tagsId });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Erro no Servidor");
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
                tags: req.body.tags,
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