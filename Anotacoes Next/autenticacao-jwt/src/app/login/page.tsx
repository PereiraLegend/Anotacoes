"use client"//Adiciono essa parte aqui pois quero que essa parte seja rodada no lado do cliente
import { FormEvent } from "react"
import { signIn } from "next-auth/react" // Chamando o next auth
import { useRouter, useSearchParams } from "next/navigation"

// Aula referência: https://www.youtube.com/watch?v=oSDjImNvlGs
export default function LoginForm() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const router = useRouter()

    async function login (e: FormEvent<HTMLFormElement>){ //chamar os dados que estão dentor do formulário
        e.preventDefault() // Evitar erros
        const formData = new FormData(e.currentTarget) // Adicionando os dados que estão dentro do formulário a um objeto
        console.log(formData.get("email"))

        const data = { // Criando um mock de dados conforme o que existe dentro do objeto
            email: formData.get("email"),
            password: formData.get("password"),
        }
        console.log(data)
        // Adicionando o NextAuth ao projeto
        const result = await signIn("credentials", { // Aqui eu digo que passo o tipo "credentials"
            redirect: false,
            ...data, // Aqui eu pego os dados do mock crido anteriormente de "data"
            //callbackUrl: "/dashboard", // Aqui eu falo para onde devo mandar "ele"
        })

        if (result?.ok) {
            const response = await fetch("/api/auth/session")
            const session = await response.json()
            
            console.log("teste-O->:", session?.user?.role)

            if(session?.user?.role === "ADMIN") {
                router.push("/admin/dashboard")
            } else {
                router.push("/dashboard")
            }
        } else {
            console.log("Erro de Login: ", result?.error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={login}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input id="email-address" name="email" type="email" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Lembrar Senha
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Esqueceu a senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: solid/lock-closed */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4 8V6a4 4 0 014-4h4a4 4 0 014 4v2h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Logar
                        </button>
                    </div>
                        {error === "CredentialsSignin" && (
                            <div className="text-red-500">Erro no Login</div>
                        )}                   
                </form>
            </div>
        </div>
    )
}