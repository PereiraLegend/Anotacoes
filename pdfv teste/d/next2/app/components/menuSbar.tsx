import React from "react"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import Link from "next/link"

export default function MenuSbar(){
    return (
        <main className="bg-gray-400">
            <div className="flex justify-between mr-[5%] ml-[5%] border-b border-white">
                <div className="flex cursor-pointer">
                    <Link href="/">
                    <div className="mr-[6%] h-[100%] m-5 text-white">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-3xl"><span className="text-yellow-600">M</span>óveis</div>
                            <div className="flex justify-start">Savant</div>
                        </div>
                    </div>
                    </Link>
                    <div className="flex gap-10 font-bold pl-5">
                        <Link href="/"><div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Home</div></Link>
                        {/**<div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Sobre nós</div>*/}
                        <Link href="/loja"><div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Loja</div></Link>
                        <Link href="/contato"><div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Contato</div></Link>
                        <Link href="/blog"><div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Blog</div></Link>
                        <Link href="/conta"><div className="w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white">Minha Conta</div></Link>
                    </div>
                </div>
                <div className="flex font-bold">
                    <div className="w-[50px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white"><FaSearch/></div>
                    <div className="w-[50px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white"><FaUser/></div>
                    <div className="w-[50px] h-[100px] flex justify-center items-center hover:cursor-pointer text-white hover:border-b-2 hover:border-white"><FaShoppingCart/></div>
                </div>
            </div>

        </main>
    )
}