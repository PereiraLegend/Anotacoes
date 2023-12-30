import MenuSbar from "@/app/components/menuSbar"
import Footer from "@/app/components/footer"
import Card from "@/app/components/card"
import Comentario from "@/app/components/comentario"
import { FaStar} from "react-icons/fa"

export default function Produto(){
    return(
        <div>
            <MenuSbar/>
            <div className="w-[100%] h-[500px]">
                <div className="w-[90%] h-[100%] mr-[5%] ml-[5%] flex justify-between mt-[30px]">
                    <div className="bg-white w-[58%] h-[500px] flex justify-between">
                        <div className="bg-white w-[10%] h-[100%] flex flex-wrap">
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                            <div className=" bg-blue-50 w-[100%] h-[50px] flex justify-center items-center hover:border-2 hover:border-black hover:cursor-pointer hover:bg-gray-300 hover:opacity-50">
                                <img src="/imgs/mobilia5.png" className="w-[] h-[50px]" />
                            </div>
                        </div>
                        <div className="bg-blue-50 w-[88%] h-[100%] flex justify-center items-center">
                            <img src="/imgs/mobilia5.png"/>
                        </div>
                    </div>
                    <div className="bg-white w-[40%] h-[500px]">
                        <h1 className="text-3xl font-bold ">Cadeira de Escritório</h1>
                        <p className="text-sm font-thin">Cod.:000-A00</p>
                        <div className="flex">
                            <div className="flex text-2xl text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="pl-1 text-sm text-yellow-400 mt-1">80 Avaliações</p>
                        </div>
                        <p className="border-2 text-green-600 w-[240px] p-1 mt-2">Economize pagando pelo pix!</p>
                        <p className="text-sm text-gray-600 line-through">De: R$ 40,00</p>
                    </div>

                </div>
            </div>
            <div className="w-[90%] mr-[5%] ml-[5%] h-[100%] mt-5 mb-5 flex justify-between">
                <div className="w-[58%]">
                    <h1 className="font-serif text-2xl">Especificações Técnicas</h1>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Cor</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Garantia</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Instruções</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Material</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Modelo</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Peso</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Peso Suportado</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Materia do Enchimento</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Dimensões</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Parafusos</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Pés</div>
                        <div>XXXX</div>
                    </div>
                    <div className="pt-2 border-b flex">
                        <div className="w-[50%] font-bold mb-2">Material Revestimento</div>
                        <div>XXXX</div>
                    </div>
                </div>
                <div className="w-[40%]">
                    <h1 className="text-xl mb-3">Informações Importantes</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi amet maxime est odio repellendus culpa quod sequi corrupti, fugit impedit omnis fugiat quis quaerat dolore veniam. Corporis quod at excepturi.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugiat, nostrum, mollitia perspiciatis officia ut eos ipsum molestiae tenetur ad repellendus porro magni necessitatibus nihil quidem sapiente nam sunt corrupti.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga maiores molestiae reprehenderit repellendus nemo ex eum illum voluptatibus harum facilis inventore, ab sunt, explicabo odio rerum, eius suscipit eos.</p>
                </div>
            </div>
            <div className="w-[90%] mr-[5%] ml-[5%]">
                <h1 className="font-serif text-4xl mt-10 mb-10">Para combinar com seu pedido:</h1>
                <div className="flex gap-2">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <h1 className="font-serif text-4xl mt-10 mb-10">Veja Também:</h1>
                <div className="flex gap-2">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className="w-[90%] mr-[5%] ml-[5%]">
                <h1 className="font-serif text-4xl mt-10 mb-10">Avaliações</h1>
                <Comentario/>
                <Comentario/>
                <Comentario/>
                <Comentario/>
                <Comentario/>
                <div className="flex items-center justify-center">
                    <div className="w-[300px] flex items-center justify-center border-2 border-yellow-400 text-yellow-400 text-xl cursor-pointer hover:bg-yellow-400 hover:text-white">Mais Comentários</div>
                </div>

            </div>
            <div className="w-[90%] mr-[5%] ml-[5%] mb-[30px]">
                <h1 className="font-serif text-4xl mt-10 mb-10">Sobre</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla fugit tempore dolor a mollitia. Temporibus placeat praesentium ullam! Non architecto vel excepturi itaque eaque magni laudantium fugit doloremque adipisci ea?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur quaerat aperiam nulla, nihil repellendus enim quis quod odit in nostrum vitae quisquam hic officiis pariatur molestiae eius minus! Nam.</p>
            </div>
            <Footer/>
        </div>
    )
}