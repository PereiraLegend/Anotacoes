import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

const handler = NextAuth({
    pages: {     // Para adicionar a minha página de login customizada
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: { // Aqui é criado um "tela de login" que o próprio next auth cria, com a rota já criada por padrão: "http://localhost:3000/api/auth/signin"
                nome: { label: "Nome", type: "text", placeholder: "****" },
                password: { label: "Senha", type: "password", placeholder: "****" }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }

                try {
                    const response = await fetch("http://localhost:5001/api/usuario/login", {
                        method: "POST",
                        body: JSON.stringify({
                            nome: credentials.nome,
                            password: credentials.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    })
                    if (response.status !== 200) {
                        return null
                    }
                    const authData = await response.json()
                    console.log("token------:", authData.token)
                    console.log("nome-------:", authData.nome)
                    console.log("regra------:", authData.regra)
                    if (!authData.token || !authData.nome) {
                        return null
                    }
                    cookies().set("jwt", authData.token)
                    return {
                        id: authData.id,
                        name: authData.nome,
                        role: authData.regra
                    }
                } catch (e) {
                    return null
                }
                /*
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
                */
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
    ],
    callbacks: { // Aqui eu adiciono regras
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role; // Adicionar a regra ao token
            }
            console.log("JWT Callback - Token:", token);
            return token;
        },
        async session({ session, token  }) {
            session.user.role = token.role; // Salvar a regra na sessão
            console.log("Session Callback - Session:", session);
            return session;
        }
    }
})
export { handler as GET, handler as POST }

//////////

export const authOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                nome: { label: "Nome", type: "text", placeholder: "****" },
                password: { label: "Senha", type: "password", placeholder: "****" }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                try {
                    const response = await fetch("http://localhost:5001/api/usuario/login", {
                        method: "POST",
                        body: JSON.stringify({
                            nome: credentials.nome,
                            password: credentials.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                    if (response.status !== 200) {
                        return null;
                    }
                    const authData = await response.json();
                    if (!authData.token || !authData.nome) {
                        return null;
                    }
                    cookies().set("jwt", authData.token);
                    return {
                        id: authData.id,
                        role: authData.regra,
                        name: authData.nome,
                    };
                } catch (e) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            console.log("JWT Callback - Token:", token);
            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role;
            console.log("Session Callback - Session:", session);
            return session;
        }
    }
};

export default NextAuth( authOptions );
