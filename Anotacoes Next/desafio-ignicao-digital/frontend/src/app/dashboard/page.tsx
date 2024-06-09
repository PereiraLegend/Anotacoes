import CabecalhoCliente from "@/components/CabecalhoCliente"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import UsuariosCliente from "@/components/UsuariosCliente"

export default async function dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || session?.user?.role !== "Cliente") {
        redirect("/login")
    }
    //console.log('Verificando:', session.user?.name)
    return (
        <div>
            <CabecalhoCliente />
            <div className='flex items-center justify-center text-xl pt-5 font-bold'>
                Olá, seja bem vindo(a) {session?.user?.name}!
            </div>
            <UsuariosCliente />
        </div>
    )
}