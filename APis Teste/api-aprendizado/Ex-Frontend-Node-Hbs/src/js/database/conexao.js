const mysql = require('mysql2/promise')

require('dotenv').config()

const conexao = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
})
/*
conexao.connect((error) => {
    if(error) {
        console.log(`Erro ao conectar ao banco de dados ${error}`)
        console.error(`Erro ao conectar ao banco de dados ${error}`)
    }
    else{
        console.log('Banco de dados conectado com sucesso!')
    }
})
*/
module.exports = conexao