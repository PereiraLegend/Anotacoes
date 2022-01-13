// Para capturar o evento de submit no formulário
const form = document.querySelector("#formulario"); //Para armazenar dentro de uma função form

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Serve para previnir um evento
    //console.log("Evento previnido"); // Coloca uma mensagem no console
    //setResultadoMensagem("Hello World"); // coloca uma mensagem de texto no html onde foi inserido
    
    const inputPeso = evento.target.querySelector("#peso"); // O target serve para mostrar aonde foi clicado
    const inputAltura = evento.target.querySelector("#altura");

    const peso = Number(inputPeso.value); // Aqui eu converto os valores que serão inseridos no label em number para o JavaScript
    const altura = Number(inputAltura.value);

    // Para validar se a altura e o peso são válidos como number
    if (!peso){
        setResultadoMensagem("Peso inválido", false);
        return; // O return evita de a operação continuar executando após se tonar inválida;
    }
    if (!altura){
        setResultadoMensagem("Altura inválida", false);
        return;
    }

    // Para cálcular o IMC fazemos:
    const imc = getIMC(peso, altura);
    const NivelIMC = getNivelIMC(imc);
    console.log(imc, NivelIMC); // Mostra o resultado no console
    const msg = `Seu IMC é ${imc} (${NivelIMC})`; // Mensagem para o HTML

    setResultadoMensagem(msg, true); // Faz parte da validação

});

/**
 * //Aqui é uma função para apresentar um valor dentro da caixa branca de texto/div criada no html
 * function setResultadoMensagem (msg) {
 *     const resultado = document.querySelector("#resultado");
 *     // Posso digitar o de baixo do jeito que ele está abaixo ou posso introduzir um html nele
 *     // resultado.innerHTML = msg;
 *     resultado.innerHTML = `<p>${msg}</p>`;
 * }
 */

// Outra forma de fazer é:

/**
 * Para fazer mais edição do html para o css
 * eu poderia colocar a função acima assim:
 * function setResultadoMensagem (msg) {
 *  const resultado = document.querySelector("#resultado");
 *  resultado.innerHTML = "";  // Observe que esta parte continua vazia
 *  const p = document.createElement("p"); // aqui está a criação do documento 
 *  p.classList.add("paragrafo-resultado"); //aqui está a classe aonde será inserido o texto
 *  p.innerHTML = "Qualquer coisa"; //aqui está a mensagem ou o que foi escrito
 *  resultado.appendChild(p); // Aqui finalmente o valor é invocado
 * }
 */

//Aqui eu separei a função de criar parágrafos
function criaP() {
    const p = document.createElement("p");
    return p;
}

//Aqui está a função que os dois grandes exemplos comentados acima mostram no html
// Ou seja essa é a função para mostrar uma mensagem
function setResultadoMensagem(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add("bad")
    }
}

function getIMC(peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2); // Obs.: O comando toFixed serve para ver as casas decimais 
}

function getNivelIMC (imc){
    const nivel = ["Abaixo do Peso","Peso normal","Sobrepeso","Obesidade grau 1","Obesidade grau 2","Obesidade grau 3"]
    if (imc > 18.5){
        return nivel[0];
    }
    else if (18.5 <= nivel <= 24.9){
        return nivel[1];
    }
    else if (25 <= nivel <= 29.9){
        return nivel[2];
    }
    else if (30 <= nivel <= 34.9){
        return nivel[3];
    }
    else if (35 <= nivel <= 39.9){
        return nivel[4];
    }
    else if (nivel <= 40){
        return nivel[5];
    }
}