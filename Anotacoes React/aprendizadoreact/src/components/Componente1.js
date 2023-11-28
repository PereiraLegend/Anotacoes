import Component2 from "./Componente2-hierarquia"

function Componente1 () { // Ao criar um component eu preciso importar ele em app.js
    // Posso adicionar variáveis fora do template e depois adiciona-la dentro do template:
    const nome = "Ana"
    return (// Obs.: abaixo no html eu posso ter apenas um elemento pai //Todas as nomenclaturas especiais que dão conflito com as do javascript do react precisam ser trocadas por nomenclaturas especiais, por exemplo, uma "class" deve ser trocada pelo caractere especial "className"
    //por isso ao digitar apenas class, ele dará erro // o "for" também dará erro, e deve ser substituido por "htmlFor" // Entre outros, erros vão ser acusados no console do navegador
        <div className="componente1"> 
            <p>Primeiro Componente</p>
            {/** comentários dentro do código html podem ser feitos assim, com chaves e o indicador de comantários do js */}
            {/** No caso as chaves representam ou "dizem" que posso executar javascript dentro delas, por exemplo: */}
            {2 + 2 /**A resposta dessa soma vai aparecer no html */}
            {/** Ou seja, no meio do nosso código posso incluir regras do javascript */ console.log("Posso definir regras") /**Onde posso executar n coisas, mesclando Html ao javascript */}
            <p>Nome: {nome}</p>
            <Component2 /> {/**Aqui eu importo um componente no outro */}
        </div>
    )
}

export default Componente1 // Aqui eu exporto a função