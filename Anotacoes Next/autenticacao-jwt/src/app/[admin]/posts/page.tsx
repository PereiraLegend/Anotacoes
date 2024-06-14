import CabecalhoAdmin from "@/components/CabecalhoAdmin"
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function postsAdmin(){
    const session = await getServerSession(authOptions)
    console.log("Regra: ", session?.user?.role)
    console.log("RRRRRRRRRR: ", session)

    if(!session || session?.user?.role !== "ADMIN") {
        redirect("/login")
    } 
    return(
        <div>
            <CabecalhoAdmin/>
            <div className='flex items-center justify-center text-xl pt-5 font-bold'>Posts</div>
        </div>
    )
}