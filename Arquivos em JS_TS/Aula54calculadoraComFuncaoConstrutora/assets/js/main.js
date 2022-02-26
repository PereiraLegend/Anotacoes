function Calculadora() {
    this.display = document.querySelector(".display")

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        this.display.addEventListener("keypress", e => {
            if (e.keycode === 13) {
                this.calculo();
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener("click", event => {
            const el = event.target // O el aqui é o elemento que está sendo cliquado, ou seja a tecla
            if (el.classList.contains("btn-num")) this.addNumDisplay(el) // Adicionar um número no display
            if (el.classList.contains("btnLimpar")) this.limpar() // Limpar tudo da barra de texto
            if (el.classList.contains("btn-ap")) this.apagar() // Apaga um número 
            if (el.classList.contains("btn-eq")) this.calculo() // faz o cálculo do que foi escrito
        })
    }
    // Para adicionar no display
    this.addNumDisplay = el => {
        this.display.value += el.innerText // Obs.: uma função também pode ser declarada assim, onde o "el" fica sem os parênteses e o corpó da função sem as chaves
        this.display.focus() //Aqui ele muda o foco para o display, assim fazendo o botão não ficar selecionado
    }
    this.limpar = () => this.display.value = ""
    this.apagar = () => this.display.value = this.display.value.slice(0, -1)
    this.calculo = () => {
        try {
            const conta = eval(this.display.value)
            if (!conta) {
                alert("Conta inválida")
                return
            }
            this.display.value = conta
        } catch (e) {
            alert("Conta inválida")
            return
        }
    }

}
const calculadora = new Calculadora()
calculadora.inicia()