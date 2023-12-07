//Conceitos fundamentais, componentes do servidor


/* código base, mas posso colocar um código como o que é feito no react
import React from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
   return (<div>login</div>)
}

export default Page;
*/
// Fazendo como se faz no react eu eu não especificar que isto é do "lado do cliente" o "console.log("Olá")" não será executado do lado do cliente, ou seja, tenho que especificar que isto é
// do lado do cliente colocando: "use client"
// Ou seja isto será executado do lado do servidor e enviado de volta para que o cliente seja relamente renderizado
/*
"use client"

const page = () => {

   console.log("Olá") //Sempre que eu vir para essa página, tudo será renderizado e executado

   return (<div>Login</div>)
}

export default page
*/

// Como o que foi visto no tópico passado, há o conceito de conponentes de servidor, onde utilizando-se do vdom e dom, posso manipular a página, a execução, a renderização entre outras coisas
// para que sejam feitas no próprio servidor ou no cliente para melhorar/aumentar o desenpenho da página, ficando a pergunta: Como lidamos com a experiência do usuário nos componentes do servidor?
import axios from 'axios'
import { error } from 'console'

const page = async () => { // Marco a função/arrow funtion como assíncrona e então posso fazer consultas no banco de dados:
   // Criando um servidor json local e puxando dados dele: // Aqui estarei instalando o json-server e testando nele:

   // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1') // pode ser utilizado o teste também : localhost:5003/dados/1 ou 127.0.0.1:5003/dados/1
   // Esse código acima vai retornar na página os valores que estão contidos nesta rota em especifico
   // Assim vemos o quão fácil é chamar rotas através do next
   // Agora surge uma questão: Como lidamos corretamente com o carregamento de estados para que não possamos realmente mantê-lo no estado e, em seguida, faça uma verificação de estado para
   // saber se estamos carregando esta solicitação de Api corretamente, por que por ser um componente de servidor, não podemos usar nenhum "gancho" de reação no código da linha 38, o que é uma 
   // distinção bem importante para fazer com que eles também só possam ser usados em componentes de cliente, porquê dependem de "cliente-side apis", então como lidamos com o conjunto de
   // carregamento, por exemplo, digamos que esta chamada de banco de dados demorou muito, veja o exemplo abaixo:
   // digamos que o peso const será igual a qualquer quantidade de milissegundos que passarmos para esta função, então ela será resolvida após esta quantidade de tempo (milissegundos)
   const wait = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms)) // Utilizando isto eu vou "simular" uma requisição demorada e um servidor para que eu possa usar a ferramente "loading"

   await wait(5000) // Com isso ao recarregar a página ela vai demorar 5 segundos para recarregar, levando muito tempo e deixando o usuário confuso ficando sem carregamento de estados e nem nada 
   // por quê estamos buscando os dados em um componente do servidor, e para aliviar esse problema o nextjs pensou em uma maneira de aliviar esse problema, através de algo chamado "loading.tsx"
   // o que podemos fazer dentro da "pasta rota", o loading.tsx é um componente assim como page.tsx com uma sintaxe fixa, uma página que obrigatóriamente deve ter o nome loading.tsx
   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

   // Um exemplo dessa forma possui um problema: o que aconteceria se algo der errado durante este estágio de busca de dados?
   // Então vamos gerar um novo erro para dizer um não desligando, ou seja, vamos dizer que o usuário não está autenticado, então ele não seria capaz de ver este componente atualmente
   // throw new Error('Não autenticado') // Isso acaba sendo um erro não tratado que estou lançando, o que faz a página dar erro, para contornar e fazer o tratamento adequado de erros vá para "app/page.tsx"
   console.log("Ola")
   return (
      <div>
         <p>Login</p>
         <div>{JSON.stringify(data)}</div>
      </div>
   )
}

export default page