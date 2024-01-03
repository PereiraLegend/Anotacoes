import MenuSbar from "@/app/components/menuSbar"
import Footer from "@/app/components/footer"
import { FaUser } from "react-icons/fa"
import Comentario from "@/app/components/comentario"
import Cardpost from "@/app/components/card-post"
import Card from "@/app/components/card"

export default function Postagem(){
    return(
        <div>
            <MenuSbar/>
            <div className="bg-white w-[90%] h-[100%] mr-[5%] ml-[5%] mt-[30px] flex">
                <div className="bg-white w-[80%] h-[100%]">
                    <div>
                        <div className="flex items-center ml-[5%]">
                            <div className="bg-gray-200 w-[60px] h-[60px] border p-6 flex justify-center items-center rounded-[15%]">
                                <div className="text-xl">
                                    <FaUser/>
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="font-bold">Marcelo Miranda</p>
                                <p className="text-sm">Blogueiro</p>
                            </div>
                            <div className="bg-blue-600 w-[80px] h-[50px] flex justify-center items-center rounded-lg ml-[40%] mr-2 cursor-pointer hover:bg-blue-700">
                                <img src="/imgs/icone-facebook.png" className="w-[30px] h-[30px]" />
                            </div>
                            <div className="bg-red-400 w-[80px] h-[50px] flex justify-center items-center rounded-lg mr-2 cursor-pointer hover:bg-red-500">
                                <img src="/imgs/icone-instagram.png" className="w-[30px] h-[30px]" />
                            </div>
                            <div className="bg-blue-400 w-[80px] h-[50px] flex justify-center items-center rounded-lg mr-2 cursor-pointer hover:bg-blue-500">
                                <img src="/imgs/icone-linkedln.png" className="w-[30px] h-[30px]" />
                            </div>
                            <div className="bg-green-500 w-[80px] h-[50px] flex justify-center items-center rounded-lg mr-2 cursor-pointer hover:bg-green-600">
                                <img src="/imgs/icone-whatsapp.png" className="w-[30px] h-[30px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <hr />
                    </div>
                    <div className="">
                        <h1 className="font-serif text-3xl flex justify-center">Como escolher a cadeira certa para o seu tipo de ambiente?</h1>
                        <p className="w-[90%] mr-[5%] ml-[5%] mt-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate obcaecati similique dicta. Perspiciatis vero et, illum in totam sint voluptatibus, eveniet quas officiis minus vitae! Sed dolorem ullam veritatis nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi rem fuga, numquam recusandae repellendus? Dolorem quo tenetur facilis fugit voluptates maxime sequi cum expedita deleniti, quam aliquam illum non.</p>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit!</p>
                        <div className="w-[90%] mr-[5%] ml-[5%] mt-6 mb-6 flex justify-center">
                            <img src="/imgs/sala2.jpg" className="w-[500px] rounded-xl" />
                        </div>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni hic ad. Incidunt hic in accusamus, veniam error esse est perferendis ipsum ut, ea quam omnis tempore! Nostrum, iusto iure.</p>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis fugit neque omnis explicabo amet, aliquid cumque architecto. Adipisci, velit illum tempora fugiat ipsum corrupti. Dolorum illum nemo ipsum exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci animi facere saepe velit ad soluta nemo quibusdam, accusantium reiciendis sed architecto quasi, numquam non in tempore tenetur neque.</p>
                        <div className="w-[90%] mr-[5%] ml-[5%] mt-6 mb-6 flex justify-center">
                            <img src="/imgs/sala2.jpg" className="w-[500px] rounded-xl" />
                        </div>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni hic ad. Incidunt hic in accusamus, veniam error esse est perferendis ipsum ut, ea quam omnis tempore! Nostrum, iusto iure.</p>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis fugit neque omnis explicabo amet, aliquid cumque architecto. Adipisci, velit illum tempora fugiat ipsum corrupti. Dolorum illum nemo ipsum exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci animi facere saepe velit ad soluta nemo quibusdam, accusantium reiciendis sed architecto quasi, numquam non in tempore tenetur neque.</p>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni hic ad. Incidunt hic in accusamus, veniam error esse est perferendis ipsum ut, ea quam omnis tempore! Nostrum, iusto iure.</p>
                        <p className="w-[90%] mr-[5%] ml-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate nesciunt deleniti ut ipsam. Reiciendis beatae, accusamus maxime, est sapiente atque quos fuga illum, mollitia dignissimos sint excepturi voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis fugit neque omnis explicabo amet, aliquid cumque architecto. Adipisci, velit illum tempora fugiat ipsum corrupti. Dolorum illum nemo ipsum exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci animi facere saepe velit ad soluta nemo quibusdam, accusantium reiciendis sed architecto quasi, numquam non in tempore tenetur neque.</p>
                    </div>
                    <div className="w-[90%] mr-[5%] ml-[5%] mb-[30px]">
                        <h1 className="font-serif text-4xl mt-10 mb-10">Comentários</h1>
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
                        <h1 className="font-serif text-4xl mt-10 mb-10">Veja nossas outras postagens também</h1>
                        <div className="flex">
                            <Cardpost/>
                            <Cardpost/>
                            <Cardpost/>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[20%] h-[100%]">
                    <h1 className="flex justify-center text-2xl">Ofertas</h1>
                    <div className="w-[90%] mr-[5%] ml-[5%] flex justify-center items-center flex-col gap-2">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}