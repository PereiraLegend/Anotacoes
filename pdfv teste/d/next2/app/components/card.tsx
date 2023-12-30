import { FiArrowRight, FiShoppingCart } from "react-icons/fi"

export default function Card(){
    return(
        
            <div className="w-[100%] h-[400px] bg-gray-50 cursor-pointer">
                <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
                <img src="/imgs/mobilia5.png" className="h-[100%]" alt=""/>
                </div>
                <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
                <div className="text-lg flex justify-center">R$ 20,00</div>
                <div className="flex justify-center">
                    <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
                </div>
            </div>
        
    )
}