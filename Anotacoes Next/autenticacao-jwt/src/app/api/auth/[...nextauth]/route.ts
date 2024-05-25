import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {     // Para adicionar a minha página de login customizada
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: { // Aqui é criado um "tela de login" que o próprio next auth cria, com a rota já criada por padrão: "http://localhost:3000/api/auth/signin"
                nome: { label: "Nome", type: "text", placeholder: "****" },
                password: { label: "Senha", type: "password", placeholder: "****" }
            },
            async authorize(credentials) {
                if(!credentials){
                    return null
                }
                if(credentials.nome === "lucas" && credentials.password === "1234" ){
                    return {
                        id: "1",
                        name: "lucas",
                        password: "1234"
                    }
                }
                return null
                /*
                const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                if (res.ok && user) {
                    return user
                }
                return null
                */
            }
        })
    ]
})
export { handler as GET, handler as POST }