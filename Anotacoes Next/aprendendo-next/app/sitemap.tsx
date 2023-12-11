// Para práticas de SEO, ou seja, práticas de otitização de classificação e busca de sites no google e em outros navegadores, no caso para deixar o site mais visivél para as pessoas
type Post = {
    userId: number,
    id:number,
    title: string,
    body: string
}


export default async function sitemap(){ // Obrigatóriamente o nome da função deve ser "sitemap"
    // No caso além de melhorar a classificação do site, posso melhorar a classificação de itens no site, como páginas, postagens, etc;
    // Aqui enbaixo no caso de eu tiver um site de postagens, e há centenas de posts que pertencem a um site e quero que todas elas sejam indexadas no mapa do site "sidemap"
    // No caso o que eu faço é criar um banco de dados para chamar todas as postagens novamente , abaixo uso o exemplo de postagem utilizada:
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allPosts = (await res.json()) as Post[]

    const posts = allPosts.map((post) => ({ // Isto incluiria todas as rotas dinâmicas para o "sidemap", nesse caso é dado com as rotas dinâmicas
        url: `http://localhost:3000/post/${post.id}`,
        ultimaModificacao: new Date()
    }))
    // Quanto as rotas estáticas, posso indexa-las assim:
    const routes = ['','/about','post'].map((route) => ({
        url: `http://localhost:3000/post/${route}`,
        ultimaModificacao: new Date().toISOString()
    }))
    return [...routes, ...posts] // Aqui ele retorna as consultas no banco de dados para a web , no caso as postagens, e as páginas em si, para facilitar a busca
}

// Para verificar o SEO vá para a rota no navegador: http://localhost:3000/sitemap.xml