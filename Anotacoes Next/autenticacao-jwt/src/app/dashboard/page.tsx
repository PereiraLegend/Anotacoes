import CabecalhoUser from "@/components/CabecalhoUser"
//import LogoutButton from "@/components/LogoutButton"
import TesteSistemas from "@/components/TesteSistemas"
// import ServerTeste from "@/components/ServerTeste"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || session?.user?.role !== "USER") {
        redirect("/")
    }
    //console.log('Verificando:', session.user?.name)
    return (
        <div>
            <CabecalhoUser />
            <div>Olá, {session?.user?.name}</div>
            <div>Dashboard User</div>
            {/* <div><LogoutButton/></div> */}
            <div><TesteSistemas /></div>
            {/* <div><ServerTeste/></div> */}
        </div>
    )
}