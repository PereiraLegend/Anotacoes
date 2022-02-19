//Para instalar as extensões mysql usamos o comando: "npm install mysql2 --save"
const conectar = async () =>{
    if(global.conexao && global.conexao.state != "disconected")
        return global.conexao
    const mysql=require("mysql2/promise")
    const con=mysql.createConnection("mysql://root:20140126aB#$%@127.0.0.1:3306/cursonode")//--Não esquecer da senha
    console.log("Conectou ao Banco")
    global.conexao=con
    return con
}

const todosClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query("SELECT * FROM clientes")
    return await linhas
}

const insereClientes = async(clientes)=>{
    const con = await conectar()
    const sql = "INSERT INTO clientes (Clientescol, Clientescol1) VALUES (?,?)"
    const valores = [clientes.Clientescol, clientes.Clientescol1]
    await con.query(sql, valores)
}


const atualizaClientes = async(idClientes,clientes)=>{
    const con = await conectar()
    const sql = "UPDATE clientes SET Clientescol = ?, Clientescol1 = ? WHERE id=?"
    const valores = [clientes.Clientescol, clientes.Clientescol1, idClientes]
    console.log(idClientes)
    console.log(clientes.Clientescol)
    console.log(clientes.Clientescol1)
    await con.query(sql, valores)
}

const deletarCliente = async(id) =>{
    const con = await conectar()
    const sql = "DELETE FROM clientes WHERE idClientes=?"
    const valores = [id]
    await con.query(sql,valores)
}

module.exports = {todosClientes, insereClientes, atualizaClientes}