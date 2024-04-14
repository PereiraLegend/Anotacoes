import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Importando motion do Framer Motion
import Products from "../api/products";
import { IoCart } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import Skeleton from "react-loading-skeleton"; // Importando o Skeleton

export default function Produtos() {
    const [Abrir, setAbrir] = useState(false);
    const MenuA = () => {
        setAbrir(!Abrir);
    };
    const MenuF = () => {
        setAbrir(false);
    };

    const { isLoading, isError, data } = Products();

    return (
        <div className="" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '19px' }}>
            <main className="w-[100%] h-[101px] bg-[#0F52BA] flex justify-between items-center relative">
                <div className="ml-[5%]">
                    <Image src="/logo.png" alt="Minha imagem" width={300} height={100} className="pt-2" />
                </div>

                <div className="mr-[5%]">
                    <motion.button type="button" onClick={MenuA} className="bg-white p-2 rounded-lg cursor-pointer hover:bg-slate-500 flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><IoCart size={19} className="mr-2" /> Contador</motion.button>
                </div>

            </main>

            <div className="flex justify-center items-center mt-[5%] mb-[5%] relative">
                {isLoading ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="bg-white border rounded-xl shadow-md w-[218px] h-[285px] cursor-pointer relative">
                                <Skeleton width={218} height={150} className="rounded-t-xl" />
                                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl font-bold" style={{ background: "linear-gradient(to right, blue, black)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",}}>Carregando...</motion.div>
                                <div className="flex justify-between p-2">
                                    <Skeleton width={150} height={20} />
                                    <div>
                                        <Skeleton width={50} height={20} />
                                    </div>
                                </div>
                                <Skeleton count={2} className="ml-3 mr-3 mb-2" />
                                <motion.button className="text-white bg-[#0F52BA] w-[100%] h-[32px] flex justify-center items-center absolute bottom-0 cursor-pointer text-[14px] rounded-b-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FiShoppingBag className="mr-2" /> COMPRAR</motion.button>
                            </div>
                        ))}
                    </div>
                ) : isError ? (
                    <p>Ocorreu um erro ao carregar os produtos.</p>
                ) : data ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                        {data.map((item, index) => (
                            <motion.div key={index} className="bg-white border rounded-xl shadow-md w-[218px] h-[285px] cursor-pointer relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <div className="flex justify-center items-center">
                                    <img src={item.photo} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="flex justify-between p-2">
                                    <h3 className="text-[16px] font-semibold text-[#2C2C2C]">{item.name}</h3>
                                    <div>
                                        <p className="text-white bg-[#373737]  p-1 rounded-lg text-[15px] font-bold">R${Math.trunc(item.price)}</p>
                                    </div>
                                </div>
                                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, lineHeight: '12px' }} className="text-[#2C2C2C] text-[10px] leading-3 ml-3 mr-3">Redesigned from scratch and completely revised</p>
                                <motion.button className="text-white bg-[#0F52BA] w-[100%] h-[32px] flex justify-center items-center absolute bottom-0 cursor-pointer text-[14px] rounded-b-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FiShoppingBag className="mr-2" /> COMPRAR</motion.button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p>Nenhum produto encontrado</p>
                )}
            </div>

            <footer className="w-[100%] h-[34px] bg-[#EEEEEE] flex justify-center items-center fixed bottom-0">
                <div>MKS sistemas © Todos os direitos reservados</div>
            </footer>

            {/** Barra lateral */}
            <div className={`fixed top-0 right-0 h-full bg-[#0F52BA] shadow-lg transition-transform duration-300 ease-in-out transform ${Abrir ? 'translate-x-0' : 'translate-x-full'} w-96`}>
                <div className="">
                    <div className="flex justify-between p-4">
                        <div>
                            <p className="text-white font-bold text-[27px]">Carrinho <br />de compras</p>
                        </div>
                        <div>
                            <motion.button onClick={MenuF} className="text-white hover:text-gray-800 hover:bg-white focus:outline-none font-bold bg-black p-1 rounded-[100%]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>✕</motion.button>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-white h-[95px] flex felx-row justify-between items-center rounded-lg mb-[10px]">
                            <div>Imagem</div>
                            <div>Titulo</div>
                            <div>qt</div>
                            <div>valorT</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4">
                        <div className="text-white font-bold text-[27px]">Total</div>
                        <div className="text-white font-bold font text-[27px]">R$ XXXX</div>
                    </div>
                    <motion.input type="button" value="Finalizar Compra" className="w-[100%] h-[97px] bg-[#000000] text-white text-[28px] cursor-pointer absolute bottom-0 z-20" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />
                </div>
            </div>
        </div>
    );
}
