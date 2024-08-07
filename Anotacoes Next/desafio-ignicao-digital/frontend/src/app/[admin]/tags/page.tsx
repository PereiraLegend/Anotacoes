import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import CabecalhoAdmin from '@/components/CabecalhoAdmin';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import TagsAdmin from '@/components/TagsAdmin';

export default async function DashboardAdmin() {
    const session = await getServerSession(authOptions);
    console.log("Regra: ", session?.user?.role);
    console.log("RRRRRRRRRR: ", session);

    if (!session || session?.user?.role !== "Admin") {
        redirect("/login");
    }

    return (
        <div>
            <CabecalhoAdmin />
            <div>
                <div className='flex items-center justify-center text-xl pt-5 font-bold'>
                    Tags
                </div>
                <TagsAdmin />
            </div>
        </div>
    );
}
