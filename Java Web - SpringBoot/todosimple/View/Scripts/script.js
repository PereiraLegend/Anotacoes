const tasksEndpint = "http://localhost:8080/task/user" // Ao chamar assim ele vai listar as tarefas do usuário logado

// Função para controlar o loader
function hideLoader() {
    document.getElementById("loading").style.display = "none"
    alert("Foi")
}

// Função de criação da tabela
function show(tasks){
    let tab = `<thead>
                    <th scope='col'>#</th>
                    <th scope='col'>Descrição</th>
               </thead>`;
    
    for (let task of tasks){
        tab +=`<tr>
                    <td scope='row'>${task.id}</td>
                    <td>${task.description}</td>
               </tr>`
    }

    document.getElementById("tasks").innerHTML = tab
}

// Função de conexão com a api
async function getTasks(){
    let key = "Authorization"
    const response = await fetch(tasksEndpint, {
        method: "GET",
        headers: new Headers({
            Authorization: localStorage.getItem(key),
        }),
    })

    var data = await response.json()
    console.log(data)
    if (response) hideLoader()
    show(data)
}

document.addEventListener("DOMContentLoaded", function (event){
    if (!localStorage.getItem("Authorization"))
    window.location = "/View/login.html"
})

getTasks()