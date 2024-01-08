// Aqui possuirá todos os códigos necessários para se conectar a uma base de dados sql
import mysql from "mysql"
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'bdcopa'
})

conexao.connect()

export default conexao //eu exporto a conexão pois irei utiliza-lo em outros lugares
