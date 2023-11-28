// No componente 2 eu vou passar uma sintaxe mais moderna envolvendo arrow function
const Component2 = () => { // No caso posso invorcar isso com se fosse uma árvore, ou seja, ao invés de isso ir diretamente para app, eu posso invocálo em outro componente
    const Clique = () => {
        console.log("O botão foi apertado")
        alert("O botão foi apertado")
    }
    
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={Clique}>Aperte</button> {/**Na própria tag tenho acesso á eventos, como no html, e se eu abro e fecho chaves, já posso criar isso dentro desse componente */}
            {/**Também posso utilizar o evento diretamente no componente, ex.: */}
            <hr/>
            {/**Abaixo ao invés de eu criar uma função eu a coloco dentro do onClik */}
            <button onClick={() => console.log("teste")}>Evento de Elemento</button>
            {/** Importando imagens, há duas maneiras de importar imagens */}
        </div>
    )
}

export default Component2