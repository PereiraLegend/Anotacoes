import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function dashboardAdmin() {
    const session = await getServerSession()

    if(!session) {
        redirect("/")
    }
    return(
        <div>
            Dashboard Admin
        </div>
    )
}