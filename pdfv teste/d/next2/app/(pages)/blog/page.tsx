import MenuSbar from "@/app/components/menuSbar"
import Footer from "@/app/components/footer"
import Cardpost from "@/app/components/card-post"
import Card from "@/app/components/card"

export default function Blog(){
    return(
        <div>
            <MenuSbar/>
            <div className="w-[100%] h-[100%] mb-7">
                <div className="bg-white w-[90%] h-[450px] mr-[5%] ml-[5%] flex justify-between mt-3">
                    <div className="bg-white w-[34%] h-[100%]">
                        <div className="bg-green-200 w-[100%] h-[49%] mb-[2.6%] rounded-xl relative cursor-pointer">
                            <img src="/imgs/sala2.jpg" alt="" className="w-[100%] h-[100%] rounded-xl"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                            <p className="absolute bottom-0 left-0 text-white p-8 font-serif text-2xl">Qual o melhor sofá pra vc comprar?</p>
                        </div>
                        <div className="bg-green-200 w-[100%] h-[49%] rounded-xl relative cursor-pointer">
                            <img src="/imgs/sala2.jpg" alt="" className="w-[100%] h-[100%] rounded-xl"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                            <p className="absolute bottom-0 left-0 text-white p-8 font-serif text-2xl">Qual o melhor sofá pra vc comprar?</p>
                        </div>

                    </div>

                    <div className="bg-yellow-300 w-[65%] h-[100%] rounded-xl relative cursor-pointer">
                        <img src="/imgs/sala2.jpg" alt="" className="w-[100%] h-[100%] rounded-xl"/>
                        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                        <p className="absolute bottom-0 left-0 text-white p-8 font-serif text-2xl">Qual o melhor sofá pra vc comprar?</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-[90%] mr-[5%] ml-[5%] mb-[30px]">
                <h1 className="text-3xl font-serif ">Últimas Postagens</h1>
                <div className="flex justify-between">
                    <div className="bg-white w-[80%] h-[100%]">
                        <div className="flex">
                            <Cardpost/>
                            <Cardpost/>
                            <Cardpost/>
                        </div>
                        <div className="flex">
                            <Cardpost/>
                            <Cardpost/>
                            <Cardpost/>
                        </div>
                        <div className="flex">
                            <Cardpost/>
                            <Cardpost/>
                            <Cardpost/>
                        </div>
                        <div className="flex justify-end">
                            <div className="mt-4 mb-4">
                                <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">1</span>
                                <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">2</span>
                                <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">3</span>
                                <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">4</span>
                                <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">Próxima</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[19%] h-[100%]">
                        <h1 className="flex justify-center text-2xl">Ofertas</h1>
                        <div className="w-[90%] mr-[5%] ml-[5%] flex justify-center items-center flex-col gap-2">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}