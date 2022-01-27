const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//Cria li
function criaLi() {
    const li = document.createElement("li");
    return li;
}

//Para ver qual tecla estou pressionando]
inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//Linpar o input
function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += "";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar"; //pode ser tanto innerText, quanto innerHTML
    li.appendChild(botaoApagar);
}

//Cria tarefa
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//Para capturar o evento de clique do botão
btnTarefa.addEventListener("click", function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    console.log(inputTarefa.value);
});

document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // replace serve para substituir uma palavra por outra, já o .trim() serve para retirar espoaços do final da variável
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);// O stringfy converte uma string para um formato JSON
    localStorage.setItem("tarefas", tarefasJSON);
}

//função para ler as tarefas e jogar no navegador
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();