"use client"
import { useEffect, useState } from 'react';
//import LogoutButton from "@/components/LogoutButton"

export default function CabecalhoUser() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <main className="flex w-[100%] justify-between bg-[#4F46E5] items-center p-5">
                <div>
                    <button className="text-white text-3xl bg-[#4F46E5] rounded-lg" id="menu" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                <div className="text-white text-3xl">
                    Dashboard User
                </div>
                <div className="flex justify-evenly">
                    {/* <LogoutButton /> */}
                </div>
            </main>

            <div className="flex">
                {/**Menu Lateral */}
                <div className={`w-[10%] text-lg bg-[#4F46E5] ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1">
                        Home
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1">
                        Posts
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1">
                        Sistemas
                    </div>
                    <div className="cursor-pointer bg-[#4F46E5] hover:bg-gray-300 p-1 rounded-lg m-1">
                        Usuarios
                    </div>
                </div>
            </div>
        </div>
    );
}
