/**Nota: Esta é a página padrão de app, tudo o que estava aqui foi apagado e substituido */
// Sobre o tartamento de erros: Se allgo acontecer durante a busca e renderização da página, para não deixar o usuário a deriva, uma mensagem amigável é exibida na tela depois de passar pelo 
// limite de erro uma mensaegm é exibida
// Digamos que esta é uma página de autenticação, ou seja ninguém que esteja logado pode acessar esta página
import { AuthRequiredError } from "@/lib/exceptions"

const session = null

function Home() {
  if(!session){ // Com isso se eu navegar para esta página posso ver que a autenticação é necessária para o acesso deste recurso, contudo para tratá-lo utilizando o next propriamente dito 
                // posso utilizar mais um arquivo com nome predefinido pelo next para esse tipo de situação, o "error.tsx" ou seja assim como o "loading.tsx" ele deve respeitar a pasta rota
                // ao que é indicado, nesse caso como essa page pertence a rota raiz, "error.tsx" se localizará na mesma pasta a que se refere
    //throw new Error('Autenticacao "Auth" é requerida para acessar esta página') // Para facilitar isto posso utilizar AuthRequiredError substituindo o que vem depois de "new"
    throw new AuthRequiredError() // para fazer isso, esta chamada eu crio uma pasta lib na raiz do projeto e crio um arquivo exceptions e o importo da pasta de onde eu criei
  }
  return (
    <main>
      <div>Esta é a página raiz, onde há autenticação</div>
    </main>
  )
}

export default Home