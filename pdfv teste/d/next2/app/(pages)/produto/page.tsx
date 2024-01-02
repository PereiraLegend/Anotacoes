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
                        <p className="text-sm pt-2 text-gray-600 line-through">De: R$ 40,00</p>
                        <p className="text-sm pt-2">Por: <span className="text-5xl font-bold text-green-600">R$ 20,00</span></p>
                        <p className="text-2sm pt-2 font-bold">à vista no Pix ou Cartão</p>
                        <p className="text-sm pt-2">ou <span className="font-bold">R$ 25,00</span> em até <span className="font-bold">5x de R$ 5,00</span> no cartão sem juros</p>
                        <p className="text-sm pt-2 underline cursor-pointer">Veja também outras formas de pagamento</p>
                        <input type="button" value="Comprar" className="bg-green-600 text-white pt-4 pb-4 pl-24 pr-24 mt-2 font-bold text-2xl cursor-pointer hover:bg-green-700" />
                        <p className="text-sm pt-4 font-bold">Calcular o frete e o prazo</p>
                        <div className="flex pt-2">
                            <input type="text" placeholder="Digite seu Cep" id=""  className="border-2 border-spacing-2 p-2"/>
                            <input type="button" value="Calcular" className="bg-blue-800 ml-4 text-white pl-4 pr-4 cursor-pointer hover:bg-blue-900" />
                        </div>
                        <p className="text-sm pt-2 underline cursor-pointer">Não lembro o meu Cep</p>
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