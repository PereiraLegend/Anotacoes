// Nesta página eu crio um tratamento de erros para a "page.tsx" da pasta rota a que ela está (a que se refere)
// Obs.: Esses scripts abaixo "padrões" não são necessários, posso utilizar os do próprio react
 // Feito de forma "padrão" next:
/*
import { FC } from 'react'

interface errorProps {}

const error: FC<errorProps> = ({}) => {
    return (
        <div>
            <div>Deu erro</div>
        </div>
    )
}

export default error
*/
//feito da forma react:
"use client"

const error = ({ // Posso passar os erros por aqui, ou deixar esta parte vazia caso queira
    //Esta parte recebe duas propriedades, o error e o reset
    error,
    reset // O reset é uma função que podemos chamar para refazer a última açãoe ver se isso corrige o erro
}:{ //Adicionando isso eu mexo na definição dos tipos
    error: Error,
    reset: () => void
}) => { 
    return(
        <div>
            <div>Deu erro na autenticação</div>
            {/**Posso chamar o reset colocando na tela um botão  */}
            <button onClick={reset}>Tentar Novamente</button> {/**Aqui eu chamo o reset, ou a função dentro dele que eu defini, ou seja para recarregar a página*/}
        </div>
    )
}

export default error
// Com isso ao invés de o next mostrar um erro horrivél na tela ele mostra uma página bem requintada e elegante criada para dizer ao usuário que algo está com erro
// ou inacessível