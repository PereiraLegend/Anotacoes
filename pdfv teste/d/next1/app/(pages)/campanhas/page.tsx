import MenuSbar from "../../Components/menuSbar"
import Footer from "../../Components/footer"

export default function Campanhas(){
    return(
        <div>
            <MenuSbar/>
            <div className="bg-blue-300 w-[100%] h-[700px] text-white">
                <div className="flex justify-center p-8 text-3xl">Campanha Moda do Inverno</div>
                <div className="flex justify-evenly">
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                </div>
            </div>
            <div className="bg-yellow-300 w-[100%] h-[700px] text-white">
                <div className="flex justify-center p-8 text-3xl">Campanha Moda do Verão</div>
                <div className="flex justify-evenly">
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                </div>
            </div>
            <div className="bg-pink-300 w-[100%] h-[700px] text-white">
                <div className="flex justify-center p-8 text-3xl">Campanha Moda Infantil</div>
                <div className="flex justify-evenly">
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                    <div className="bg-black w-[40%] h-[550px] cursor-pointer flex justify-center items-center"><div className=" text-6xl">Moda</div></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}