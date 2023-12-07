// Aqui para inportar essa parte do tratamento de erros do projeto eu exporto AuthRequiredError e o extendo de Error, o que copia todas as propriedades de erro
export class AuthRequiredError extends Error { //Aqui dentro crio um constructor
    constructor(message = "Autenticação é Requerida") {
        super(message)
        this.name = 'AuthRequiredError' // Isso vai se referir aonde quer que toda esse constructor seja chamado
    }
}