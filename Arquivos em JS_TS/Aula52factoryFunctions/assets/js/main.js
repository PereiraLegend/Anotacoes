

function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnLimpar: document.querySelector(".btnLimpar"),


        inicia() {
            alert("Oi, Bom dia");
            this.cliqueBotoes();
            this.clearDisplay();
        },
        cliqueBotoes() {
            document.addEventListener("click", function(e) {
                const el = e.target; // "el" de elemento
                if(el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display.value += valor; // Aqui eu concateno o valor do botão com o valor escrito dentro dele
        }


    }
}

const calculadora = criaCalculadora();
calculadora.inicia();