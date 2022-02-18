//Para instalar as extensões mysql usamos o comando: "npm install mysql2 --save"
const conectar = async () =>{
    if(global.conexao && global.conexao.state != "disconected")
        return global.conexao
    const mysql=require("mysql2/promise")
    const con=mysql.createConnection("mysql://root:1234567localhost:3306/cursonode")//--Não esquecer da senha
    console.log("Conectou ao Banco")
    global.conexao=con
    return con
}

const todosClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query("SELECT * FROM clientes")
    return await linhas
}

conectar()
module.exports = {todosClientes}