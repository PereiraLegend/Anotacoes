import { FaStar, FaUser, FaShareAlt, FaReply } from "react-icons/fa"

export default function Comentario(){
    return(
        <div className=" w-[100%] h-[180px] border-t-2">
            <div className="flex pt-2">
                <div className="bg-gray-200 w-[60px] h-[60px] border p-6 flex justify-center items-center rounded-[50%]">
                    <div className="text-xl">
                        <FaUser/>
                    </div>
                </div>
                <div className="ml-2">
                    <div className="text-sm">Fulano de Tal</div>
                    <div className="flex text-2xl text-yellow-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="ml-16">
                <div className="font-bold">Asmei este produto!</div>
                <div className="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laborum pariatur aut sint voluptatem consequuntur corrupti expedita architecto cum cupiditate harum unde est repudiandae ab excepturi, labore voluptatum nulla sunt.</div>
                <div className="flex gap-2">
                    <div className="flex items-center justify-between text-sm text-green-500 border border-green-500 w-[110px] hover:cursor-pointer">Compartilhar <FaShareAlt/></div>
                    <div className="flex items-center justify-between text-sm text-blue-500 border border-blue-500 w-[99px] hover:cursor-pointer">Responder <FaReply/></div>
                </div>
            </div>
        </div>
    )
}