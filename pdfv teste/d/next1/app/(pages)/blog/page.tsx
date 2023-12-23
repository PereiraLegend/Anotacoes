import MenuSbar from "../../Components/menuSbar"
import Footer from "../../Components/footer"

export default function Blog(){
    return(
        <div>
            <MenuSbar/>
            <div>
                <div className="bg-red-200 w-[100%] h-[600px] flex">
                    <div className="bg-black ml-10 mt-10 mb-10 w-[60%] h-[87%] cursor-pointer"></div>
                    <div className="bg-black ml-10 mt-10 mb-10 mr-10 w-[40%] h-[87%] cursor-pointer"></div>
                </div>
                <div className="bg-white w-100% h-[600px] flex justify-evenly">
                    <div className="h-[280px] flex-2">
                        <div className="flex m-10 bg-red-200 cursor-pointer">
                            <div className="bg-black w-[200px] h-[200px]"></div>
                            <div className="max-w-[400px] m-2">
                                <div className="text-3xl">Qual acessório devo usar?</div>
                                <div className="text-xl">Aqui você vai saber qual será o seu melhor look</div>
                            </div>
                        </div>
                        <div className="flex m-10 bg-red-200 cursor-pointer">
                            <div className="bg-black w-[200px] h-[200px]"></div>
                            <div className="max-w-[400px] m-2">
                                <div className="text-3xl">Qual acessório devo usar?</div>
                                <div className="text-xl">Aqui você vai saber qual será o seu melhor look</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[280px] flex-2">
                        <div className="flex m-10 bg-red-200 cursor-pointer">
                            <div className="bg-black w-[200px] h-[200px]"></div>
                            <div className="max-w-[400px] m-2">
                                <div className="text-3xl">Qual acessório devo usar?</div>
                                <div className="text-xl">Aqui você vai saber qual será o seu melhor look</div>
                            </div>
                        </div>
                        <div className="flex m-10 bg-red-200 cursor-pointer">
                            <div className="bg-black w-[200px] h-[200px]"></div>
                            <div className="max-w-[400px] m-2">
                                <div className="text-3xl">Qual acessório devo usar?</div>
                                <div className="text-xl">Aqui você vai saber qual será o seu melhor look</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="bg-red-200 w-[100%] h-[350px] flex justify-center items-center cursor-pointer">
                    <div className="bg-black w-[95%] h-[280px]"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}