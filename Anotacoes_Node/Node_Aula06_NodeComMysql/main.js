(async ()=>{
    //const db=require("./db")
    //console.log("Inserir novo cliente")
    //await db.insereClientes({Clientescol:"Lucas",Clientescol1:"Pereira"})


    const db=require("./db")
    console.log("Cliente atualizado")
    await db.atualizaClientes(idClientes=1,{Clientescol:"Lucas",Clientescol1:"Pereira"})
    console.log("cliente " + idClientes + " atualizado")

    /*//Para deletar

    const id = 3//Aqui coloca qual eu quero deletar
    await db.deletarCliente(id)

    **/

    console.log("Selecionar todos os clientes")
    const clientes = await db.todosClientes()
    console.log(clientes)
})()