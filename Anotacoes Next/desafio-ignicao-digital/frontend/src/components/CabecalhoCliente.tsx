"use client"
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
//import LogoutButton from "@/components/LogoutButton"

export default function CabecalhoUser() {

    return (
        <div>
            <main className="flex w-[100%] justify-between bg-[#4F46E5] items-center p-5">
                <div>
                </div>
                <div className="text-white text-3xl">
                    Dashboard Cliente
                </div>
                <div className="flex justify-evenly">
                    <button className="mr-4 bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
                </div>
            </main>
        </div>
    );
}
