/*
import React from 'react';

interface PageProps{
    params: {
        postId: string
    }
}

function PostPage({ postId }) {
  // Lógica do componente
  // Geralmente aqui é retornado a lógica do banco de dados
  return (
    <div>
      <h1>Post {postId}</h1>
      {/* Conteúdo do post *}

    </div>
  );
}

export default PostPage;
*/
/*
// Agora a lógica de postagem :
import react from "react"
interface PageProps {
    params: {
        postId: string
    }
}

const page = async ({params} : PageProps) => {
    // Lógica do banco de dados

    return (
        <div>
            {/* Utilizando-se da lógica de servidor aqui ele retorna o que for digitado depois do post\...  *}
            <div>{params.postId}</div>
        </div>
    )
}

export default page
*/
/*
import react from "react"
const page = async (props: any) => {
    console.log(props)
    return(
        <div>
            <div>ola</div>
        </div>
    )
}
export default page
*/
// mais informações https://www.youtube.com/watch?v=Sbl04kOL1dM aos 30:00 minutos
//Posso transformar isso em um componente de servidor:
const page = async (props:any) =>{
    return (
        <div>
            <div>Ola</div>
        </div>
    )
}
/*
// Isto abaixo é um exemplo que não existe mais
export async function getServerSideProps() {
    return(
        props:{}
    )
}
*/
export default page
//Para otimizar e deixar a página mais rápida ver o link https://www.youtube.com/watch?v=Sbl04kOL1dM no minuto 43:00