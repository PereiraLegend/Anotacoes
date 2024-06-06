const mongoose = require("mongoose")
const { Schema } = mongoose

const TagsSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Tags = mongoose.model("Tags", TagsSchema)

module.exports = {
    Tags,
    TagsSchema,
}