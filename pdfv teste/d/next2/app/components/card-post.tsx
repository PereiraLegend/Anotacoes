import { FiArrowRight, FiShoppingCart } from "react-icons/fi"
import { FaCalendar } from "react-icons/fa"
import Link from "next/link"

export default function Cardpost(){
    return(
        
        <div className="w-[100%] h-[450px] bg-white cursor-pointer hover:border-2">
            <Link href={"/postagem"}>
                <div className="w-[100%] h-[300px] bg-white flex justify-center">
                <img src="/imgs/sala2.jpg" className="h-[100%] p-2 rounded-2xl" alt=""/>
                </div>
                <div className="font-serif text-lg flex justify-center pr-2 pl-2">Como escolher a cadeira certa para o seu tipo de ambiente?</div>
                <div className="text-sm flex items-center ml-2"><FaCalendar/> 01/01/2024</div>
                <div className="text-sm ml-2 mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia modi recusandae. Porro, illum itaque maxime...</div>
            </Link>
        </div>
    )
}