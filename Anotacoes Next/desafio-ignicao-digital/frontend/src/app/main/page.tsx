"use client"
import { useRouter } from "next/navigation"

export default function Main() {
    const route = useRouter()
    const btnLogin = () => {
        route.push('/login')
    }
    return(
        <div className="flex justify-center items-center">
            <main className="flex flex-col justify-center items-center rounded-lg bg-blue-300 w-[400px] mt-4">
                <div className="text-2xl mb-4 mt-4 font-bold">Login Gerenciador</div>
                <div className="mb-4">
                    <div className="mr-4 bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-300" onClick={btnLogin}>Login</div>
                </div>
            </main>
        </div>
    )

}