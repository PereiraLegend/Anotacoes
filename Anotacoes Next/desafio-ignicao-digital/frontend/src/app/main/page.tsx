"use client"
import { useRouter } from "next/navigation"

export default function Main() {
    const route = useRouter()
    const btnLogin = () => {
        route.push('/login')
    }
    return (
        <div className="flex justify-center items-center">
            <main className="flex w-[100%] justify-between bg-[#4F46E5] items-center p-5">
                <div className="text-white text-3xl font-bol cursor-pointer" >
                    Gerenciador
                </div>
                <div className="flex justify-evenly">
                    <button className="mr-4 bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-300" onClick={btnLogin} >Login</button>
                </div>
            </main>
        </div>
    )

}