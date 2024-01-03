import MenuSbar from "@/app/components/menuSbar"
import Footer from "@/app/components/footer"

export default function Contato() {
    return (
        <div>
            <MenuSbar />
            <div className="w-[100%] h-[100%]">
                <div className="w-[90%] ml-[5%] mr-[5%] mt-[30px] flex justify-around">
                    <h1 className="font-serif flex justify-center text-5xl">Contatos</h1>
                </div>
                <div className="w-[90%] ml-[5%] mr-[5%] mt-[30px] flex justify-between">
                    <div className="bg-gray-400 w-[68%] h-[100%] rounded-2xl">
                        <h1 className="font-serif flex justify-center text-2xl mt-5 mb-5">Precisa de informações mais especificas ou quer fazer uma encomenda especial?</h1>
                        <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique pariatur impedit facere aliquid modi dolores, recusandae consectetur, sapiente hic rem tempora earum dolor architecto soluta voluptatem quaerat laboriosam dignissimos!</p>
                        <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique pariatur impedit facere aliquid modi dolores, recusandae consectetur, sapiente hic rem tempora earum dolor architecto soluta voluptatem quaerat laboriosam dignissimos!</p>
                        <p className="ml-5 text-xl">Email:</p>
                        <div className="ml-5 mr-5 mb-5 flex flex-col">
                            <input type="text" className="mb-2 w-[30%] border" />
                            <p className="text-xl">Mensagem:</p>
                            <textarea name="" id="" cols="30" rows="10" className="border"></textarea>
                            <div className="flex justify-center mt-5">
                                <input type="button" value="Enviar" className="bg-green-400 w-[100px] text-xl p-2 hover:cursor-pointer hover:border" />

                            </div>
                        </div>
                    </div>
                    <div className="w-[29%] h-[100%] rounded-2xl flex flex-col justify-between">
                        <div className="bg-gray-400 w-[100%] h-[300px] rounded-2xl mb-[40px]">
                            <h1 className="font-serif flex justify-center text-2xl mt-5 mb-5">FaQ.:</h1>
                            <div className="flex justify-center mb-5">
                                <p>Tel.: (00) 00 00000 - 0000</p>
                            </div>
                            <div className="flex justify-center mb-5">
                                <p>Tel.: (00) 00 00000 - 0000</p>
                            </div>
                            <div className="flex justify-center mb-5">
                                <p>Tel.: (00) 00 00000 - 0000</p>
                            </div>
                            <div className="flex justify-center mb-5">
                                <p>Tel.: (00) 00 00000 - 0000</p>
                            </div>
                            <div className="flex justify-center">
                                <p>Tel.: (00) 00 00000 - 0000</p>
                            </div>
                        </div>

                        <div className="bg-gray-400 w-[100%] h-[300px] rounded-2xl">
                            <h1 className="font-serif flex justify-center text-2xl mt-5 mb-5">Redes Socias</h1>
                            <div className="flex justify-evenly">
                                <div className="flex justify-center mb-5">
                                    <img src="/imgs/icone-instagram.png" className="w-[80px] cursor-pointer"/>
                                </div>
                                <div className="flex justify-center mb-5">
                                    <img src="/imgs/icone-facebook.png" className="w-[80px] cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="flex justify-center mb-5">
                                    <img src="/imgs/icone-linkedln.png" className="w-[80px] cursor-pointer"/>
                                </div>
                                <div className="flex justify-center mb-5">
                                    <img src="/imgs/icone-whatsapp.png" className="w-[80px] cursor-pointer"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[90%] mr-[5%] ml-[5%] mt-[30px] mb-[30px]">
                    <hr className="border-gray-400 border-2" />
                    <br />
                    <h1 className="font-serif flex justify-center text-3xl">Você necessita de mais suporte?</h1>
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
            <Footer />
        </div>
    )
}