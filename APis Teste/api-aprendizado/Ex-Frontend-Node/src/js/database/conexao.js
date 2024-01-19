const mysql = require('mysql2/promise')

require('dotenv').config()

const connect = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
})

connect.connect((error) => {
    if(error) {
        console.log(`Erro ao conectar ao banco de dados ${error}`)
        console.error(`Erro ao conectar ao banco de dados ${error}`)
    }
    else{
        console.log('Banco de dados conectado com sucesso!')
    }
    
})

module.exports = connect