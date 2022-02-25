

function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnLimpar: document.querySelector(".btnLimpar"),
        
        inicia() {
            //alert("Oi, Bom dia");
            this.cliqueBotoes();
            this.clearDisplay();
            this.tecleEnter();
        },

        Contas() {
            let conta = this.display.value; //Aqui resgata o que for digitado na tela

            try {
                conta = eval(conta);

                if(!conta) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = conta
            } catch(e) {
                alert("Conta inválida");
                return;
            }
        },

        tecleEnter() {
            this.display.addEventListener("keyup", e => {
                if (e.keyCode === 13){ // Aqui eu indico a tecla do mause para pressionar
                    this.Contas();
                }
            });
        },

        LimparDisplay() {
            this.display.value = "";
        },

        apagar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener("click", function(e) {
                const el = e.target; // "el" de elemento
                if(el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains("btnLimpar")) {
                    this.LimparDisplay()
                }

                if (el.classList.contains("btn-ap")) {
                    this.apagar()
                }

                if (el.classList.contains("btn-eq")) {
                    this.Contas()
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