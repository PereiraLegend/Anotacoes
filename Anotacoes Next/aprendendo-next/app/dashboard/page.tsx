const page = async ({}) => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      // No caso aqui eu armazeno os dados em cache e os revalido em determinados espaços de tempo, o que evita puxa-los toda vez, o que faz com que eu economize 
      cache: 'no-store', // Aqui eu forço a pegar o cach ou fazer outro tipo de manipulação com ele
   })
   const data = await res.json()
   return (
      <div>
         <div>dashboard</div>
         {/**Renderizando o json */}
         <div>{JSON.stringify(data)}</div>
      </div>
   )
}
export default page
