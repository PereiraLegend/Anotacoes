import LogoutButton from "@/components/LogoutButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function dashboard() {
    const session = await getServerSession()

    if(!session) {
        redirect("/")
    }

    return(
        <div>
            <div>Olá, {session?.user?.name}</div>
            <div>Dashboard User</div>
            <div><LogoutButton/></div>
        </div>
    )
}