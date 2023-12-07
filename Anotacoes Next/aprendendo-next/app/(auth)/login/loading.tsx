// Assim como "page.tsx", esse arquivo obrigatóriamente deve ter o nome "loading.tsx"
// Básicamente essa página tem um prpósito de apresentar um "loading", uma mensagem, ou uma animação dentro da página "page" desse arquivo rota para que o usuário não fique ocioso ou confuso
// sobre a demora de carregamento da página, caso a requisição demore
import { FC } from 'react'

interface loadingProps {

}
const loading: FC<loadingProps> = ({}) => {
    return(
        <div>
            <div>loading</div> {/**Aqui eu defino o que vai estar na página de loading de espera dessa respectiva página/rota, pode ser qualquer coisa como uma frase ou animação de carregamento*/}
        </div>
    )
}

export default loading
