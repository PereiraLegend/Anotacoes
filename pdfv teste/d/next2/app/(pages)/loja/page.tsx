import MenuSbar from "@/app/components/menuSbar"
import Footer from "@/app/components/footer"
import Card from "../../components/card"

export default function Loja(){
    return(
        <div>
            <MenuSbar/>
            <div className="w-[100%] h-[100%]">
                <div className="bg-green-400 w-[90%] h-[250px] mr-[5%] ml-[5%] mt-[30px] rounded-2xl flex justify-between mb-[30px] relative">
                    <img src="/imgs/loja-tudo3.jpg" className="w-[100%] h-[100%] rounded-2xl" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <p className="absolute top-0 left-0 text-white p-8 pt-16 font-serif font-bold text-4xl">Mobílias, Decorações, Sofás e Luminárias</p>
                    <p className="absolute top-20 left-0 text-white p-8 pt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam eligendi pariatur sed, ipsa recusandae sequi, quod, veritatis repellendus vitae repellat modi. Asperiores voluptates laboriosam animi expedita necessitatibus dolorem consequatur!</p>
                </div>
                <div className="w-[90%] mr-[5%] ml-[5%] flex justify-between">
                    <div className="bg-red-300 w-[23%] h-[120px] rounded-2xl relative cursor-pointer">
                        <img src="/imgs/loja-moveis.jpg" className="w-[100%] h-[100%] rounded-2xl " />
                        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                        <p className="absolute top-0 left-0 text-white font-serif text-4xl p-10">Mobílias</p>
                    </div>
                    <div className="bg-red-300 w-[23%] h-[120px] rounded-2xl relative cursor-pointer"> 
                        <img src="/imgs/loja-jarros.jpg" className="w-[100%] h-[100%] rounded-2xl " />
                        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                        <p className="absolute top-0 left-0 text-white font-serif text-4xl p-10">Decorações</p>
                    </div>
                    <div className="bg-red-300 w-[23%] h-[120px] rounded-2xl relative cursor-pointer">
                        <img src="/imgs/loja-sofas.jpg" className="w-[100%] h-[100%] rounded-2xl " />
                        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                        <p className="absolute top-0 left-0 text-white font-serif text-4xl p-10">Sofás</p>
                    </div>
                    <div className="bg-red-300 w-[23%] h-[120px] rounded-2xl relative cursor-pointer">
                        <img src="/imgs/loja-lustre.jpg" className="w-[100%] h-[100%] rounded-2xl " />
                        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                        <p className="absolute top-0 left-0 text-white font-serif text-4xl p-10">Luminárias</p>
                    </div>
                </div>
                <div className="bg-white w-[90%] mr-[5%] ml-[5%] mt-[30px] flex justify-between">
                    <div className="bg-gray-400 w-[21%] h-[100%] rounded-2xl">
                        <div className="flex justify-center m-5 text-black">Filtrar por:</div>
                        <div className="ml-4">
                            <li className="ml-4 list-none">
                                <details open>
                                    <summary className="cursor-pointer">Categorias</summary>
                                    <ul className="ml-8 cursor-pointer">
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer"/><label htmlFor="checkbox" className="ml-2">Luminárias</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Mobílias</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Sofás</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer"/><label htmlFor="checkbox" className="ml-2">Decorações</label></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="ml-4 list-none">
                                <details open>
                                    <summary className="cursor-pointer">Ordenar Por</summary>
                                    <ul className="ml-8 cursor-pointer">
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Maior Preço</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Menor Preço</label></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="ml-4 list-none">
                                <details open>
                                    <summary className="cursor-pointer">Cores</summary>
                                    <ul className="ml-8 cursor-pointer">
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Preto</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Branco</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Cinza</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Azul</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Verde</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Amarelo</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Vermelho</label></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="ml-4 list-none">
                                <details open>
                                    <summary className="cursor-pointer">Marca</summary>
                                    <ul className="ml-8 cursor-pointer">
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 1</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 2</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 3</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 4</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 5</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Marca 6</label></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="ml-4 list-none mb-5">
                                <details open>
                                    <summary className="cursor-pointer">Textura</summary>
                                    <ul className="ml-8 cursor-pointer">
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Madeira</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Metálico</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Veludo</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Plástico</label></li>
                                        <li className="flex flex-row items-center"><input type="checkbox" name="" id="" className="cursor-pointer" /><label htmlFor="checkbox" className="ml-2">Couro</label></li>
                                    </ul>
                                </details>
                            </li>
                        </div>
                    </div>
                    <div className="bg-white w-[76%] h-[100%]">
                        <div className="flex-wrap">
                            <div className="w-[100%] flex justify-between gap-2">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                            <div className="w-[100%] flex justify-between gap-2 mt-2">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                            <div className="w-[100%] flex justify-between gap-2 mt-2">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                            <div className="w-[100%] mt-1 mb-1">
                                <hr />
                            </div>
                            <div className="flex justify-end">
                                <div className="mt-4">
                                    <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">1</span>
                                    <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">2</span>
                                    <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">3</span>
                                    <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">4</span>
                                    <span className="border-gray-600 border-2 b-2 pl-2 pr-2 pt-1 pb-1 mr-2 hover:bg-gray-400 hover:text-black hover:cursor-pointer">Próxima</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[90%] mr-[5%] ml-[5%] mt-[30px] mb-[30px]">
                    <hr className="border-gray-400 border-2"/>
                    <br />
                    <h1 className="font-serif flex justify-center text-3xl">Qual a melhor escolha para o seu estilo de ambiente?</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut dignissimos nemo voluptas doloremque repellendus optio tenetur, 
                        debitis sunt qui nam laudantium aut aliquam est vitae quod facere itaque atque! Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Sapiente corrupti autem doloribus ad nemo aliquid eum deserunt, sunt aut explicabo at facere tempora voluptates neque asperiores 
                        exercitationem non, quae voluptatum.</p>
                        <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat ipsum voluptatibus, consequatur suscipit sit laborum et maxime, 
                        reiciendis repudiandae veritatis tenetur beatae, iure quaerat quo! Aliquam, dolore. Alias, nostrum?Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Suscipit consequatur perferendis vitae temporibus soluta. Perferendis, velit, temporibus officia id soluta dignissimos 
                        qui sed deserunt aliquam facere esse laborum harum modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio totam 
                        soluta deserunt nulla ullam in reprehenderit dolorum voluptates! Perspiciatis magni, sequi illo id dolor quidem eos laboriosam unde? 
                        Aliquam, modi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sed labore cum quasi, animi earum deleniti temporibus rerum 
                        modi, ipsum facilis non, velit debitis sapiente molestiae libero qui exercitationem excepturi.</p>
                        <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ratione esse pariatur dolores sit voluptates, eius labore id, nulla ab 
                        in aut perferendis quibusdam perspiciatis nostrum cumque quia tempora minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit assumenda provident nam sunt impedit animi, odio nulla corporis vitae ducimus a laudantium fugit ipsum tempora iure, totam, et corrupti 
                        recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla fugiat maiores. In maxime sed explicabo? Nemo, quia 
                        maxime culpa cumque exercitationem magni repudiandae accusamus similique odit, aperiam dolorum excepturi.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}