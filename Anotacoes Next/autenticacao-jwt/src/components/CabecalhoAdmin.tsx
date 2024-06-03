"use client"
import { useEffect, useState } from 'react';
// import LogoutButton from "@/components/LogoutButton"
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function CabecalhoAdmin() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navegacao = (path: string) => {
        router.push(path)
    }

    return (
        <div>
            <main className="flex w-[100%] justify-between bg-[#4F46E5] items-center p-5">
                <div>
                    <button className="text-white text-3xl pl-6 pr-6 bg-[#4F46E5] rounded-lg" id="menu" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                <div className="text-white text-3xl font-bol cursor-pointer" onClick={() => navegacao('/admin/dashboard')}>
                    Dashboard Admin
                </div>
                <div className="flex justify-evenly">
                    <button className="mr-4 bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
                </div>
            </main>

            <div className="flex">
                {/**Menu Lateral */}
                <div className={`w-[15%] h-[100%] text-white text-lg bg-[#4F46E5] absolute ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1" onClick={() => navegacao('/admin/dashboard')}>
                        Home
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1" onClick={() => navegacao('/admin/posts')}>
                        Posts
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1" onClick={() => navegacao('/admin/sistemas')}>
                        Sistemas
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1" onClick={() => navegacao('/admin/usuarios')}>
                        Usuários
                    </div>
                </div>
            </div>
        </div>
    );
}
