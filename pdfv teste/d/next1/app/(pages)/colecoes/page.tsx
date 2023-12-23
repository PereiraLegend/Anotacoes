import MenuSbar from "../../Components/menuSbar"
import Footer from "../../Components/footer"

export default function Colecoes(){
    return(
        <div>
            <MenuSbar/>
            <div>
                <div className="bg-blue-600 w-[100%] h-[700px] text-white">
                    <div className="flex justify-center p-8 text-3xl">Coleção Verona</div>
                    <div className="flex justify-evenly">
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-gray-400 w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    </div>
                </div>
                <div className="bg-green-300 w-[100%] h-[700px] text-white">
                    <div className="flex justify-center p-8 text-3xl">Coleção Maxima</div>
                    <div className="flex justify-evenly">
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-gray-400 w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    </div>
                </div>
                <div className="bg-pink-600 w-[100%] h-[700px] text-white">
                    <div className="flex justify-center p-8 text-3xl">Coleção Pink</div>
                    <div className="flex justify-evenly">
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-gray-400 w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                        <div className="bg-black w-[26.6%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}