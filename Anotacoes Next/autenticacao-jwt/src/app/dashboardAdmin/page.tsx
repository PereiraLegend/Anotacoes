import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function dashboardAdmin() {
    const session = await getServerSession()

    if(!session) {
        redirect("/")
    }
    return(
        <div>
            <main>
                <div>

                </div>
                <div>
                    
                </div>
            </main>
            Dashboard Admin
        </div>
    )
}