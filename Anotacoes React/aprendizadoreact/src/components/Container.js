// Children
const Container = ({ children }) => { // Para utilizar o children eu o passo como parâmetro aqui

    // Vamos dizer que aqui tenha apenas componentes que irão abraçar outros componentes
    return(
        <div className="container"> {/**Vamos dizer que eu queo formatar essa div e quero imprimir os componentes dentro*/}
            {/**Para fazer isso vou em App.js e utilizo o "<Conteiner>" como uma tag html */}
            {children}
        </div>
    )
}

export default Container
