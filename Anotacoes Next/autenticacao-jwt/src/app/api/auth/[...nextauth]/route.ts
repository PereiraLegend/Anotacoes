import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions = {
    pages: {
        signIn: "/login", // Página de login customizada
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
                    console.log("token------:", authData.token);
                    console.log("nome-------:", authData.nome);
                    console.log("regra------:", authData.regra);

                    if (!authData.token || !authData.nome) {
                        return null;
                    }

                    cookies().set("jwt", authData.token);
                    return {
                        id: authData.id,
                        name: authData.nome,
                        role: authData.regra,
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
                token.role = user.role; // Adicionar a regra ao token
            }
            console.log("JWT Callback - Token:", token);
            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role; // Salvar a regra na sessão
            console.log("Session Callback - Session:", session);
            return session;
        }
    }
};

// Exportando o NextAuth com as opções configuradas
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
