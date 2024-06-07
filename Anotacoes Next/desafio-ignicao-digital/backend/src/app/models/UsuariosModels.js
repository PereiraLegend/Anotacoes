const mongoose = require("mongoose")
const { Schema } = mongoose

const UsuariosSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    regra: {
        type: String,
        enum: ['Admin', 'Cliente']
    },
    tags: [{
        type: Array,
    }]
}, {timestamps: true})

const Usuarios = mongoose.model("Usuarios", UsuariosSchema)

module.exports = {
    Usuarios,
    UsuariosSchema,
}