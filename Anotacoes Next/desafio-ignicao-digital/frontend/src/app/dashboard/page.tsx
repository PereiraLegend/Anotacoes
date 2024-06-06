import CabecalhoUser from "@/components/CabeclhoUser"
//import TesteSistemas from "@/components/TesteSistemas"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || session?.user?.role !== "Cliente") {
        redirect("/login")
    }
    //console.log('Verificando:', session.user?.name)
    return (
        <div>
            <CabecalhoUser />
            <div>Olá, {session?.user?.name}</div>
            <div>Dashboard User</div>
            {/* <div><LogoutButton/></div> */}
            {/* <div><TesteSistemas /></div> */}
            {/* <div><ServerTeste/></div> */}
        </div>
    )
}