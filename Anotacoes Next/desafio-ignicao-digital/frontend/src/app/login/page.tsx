"use client"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginForm() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const router = useRouter()

    async function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(formData.get("email"))

        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }
        console.log(data)

        const result = await signIn("credentials", {
            redirect: false,
            ...data,
        })

        if (result?.ok) {
            const response = await fetch("/api/auth/session")
            const session = await response.json()

            console.log("teste-O->:", session?.user?.role)

            if (session?.user?.role === "Admin") {
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
                            <input id="email-address" name="email" type="email" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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