//Trabalahando use state
import { useState, useEffect } from "react" //Também posso passar o useeffect onde eu posso executar alguma coisa quando quiser, baseado em alguma referência de algum dado, tudo isso são hooks

// Nesse código abaixo se eu não usar use state ele pode até me retornar o valor 31 no console.log, mas ele não atualizará quando eu chamar a idade, isso mostra o problema de mesclar js e html
const Hoks = () => {
    let idade = 30
    // para usar o use state:
    const [novaIdade, setNovaIdade] = useState(40) // Ou seja defino uma variável para alterar e outra para consultar

    const mudarIdade = () => {
        idade = 31
        console.log(idade)
    }

    const mudarNovaidade = () => {
        setNovaIdade(45)
    }

    useEffect(() => { // Ele aceita uma função anônima como argumento
        console.log("Testando useEffect")
    })

    return (
        <div>
            {/**Sem o use state */}
            <p>Idade: {idade}</p>
            <button onClick={mudarIdade}>Mudar nova Idade</button>
            {/**Com o use state */}
            <p>Idade: {novaIdade}</p>
            <button onClick={mudarNovaidade}>Mudar nova Idade</button>
        </div>
    )
}
export default Hoks

