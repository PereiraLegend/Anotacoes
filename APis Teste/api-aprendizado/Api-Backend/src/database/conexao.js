const mysql = require('mysql2/promise')

require('dotenv').config()

console.log(process.env.MYSQL_DB)
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.MYSQL_USER)

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

module.exports = connection