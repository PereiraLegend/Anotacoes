(async ()=>{
    const db=require("./db")
    console.log("Inserir novo cliente")
    await db.insereClientes({Clientescol:"Lucas",Clientescol1:"Pereira"})

    console.log("Selecionar todos os clientes")
    const clientes = await db.todosClientes()
    console.log(clientes)
})()