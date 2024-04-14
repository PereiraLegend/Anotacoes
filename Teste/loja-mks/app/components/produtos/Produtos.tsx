import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Products from "../api/products";
import { IoCart } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import { IoClose } from "react-icons/io5";

export default function Produtos() {
    const [Abrir, setAbrir] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    const [Resolucao, setResolucao] = useState(false);

    const MenuA = () => {
        setAbrir(!Abrir);
    };

    const MenuF = () => {
        setAbrir(false);
    };

    const { isLoading, isError, data } = Products();

    const adicionarAoCarrinho = (item) => {
        const existente = carrinho.find((produto) => produto.id === item.id);
        if (existente) {
            const novoCarrinho = carrinho.map((produto) =>
                produto.id === item.id ? { ...produto, quantidade: produto.quantidade + 1 } : produto
            );
            setCarrinho(novoCarrinho);
        } else {
            setCarrinho([...carrinho, { ...item, quantidade: 1 }]);
        }
    };

    const aumentarQuantidade = (index) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho[index].quantidade++;
        setCarrinho(novoCarrinho);
    };

    const diminuirQuantidade = (index) => {
        const novoCarrinho = [...carrinho];
        if (novoCarrinho[index].quantidade > 1) {
            novoCarrinho[index].quantidade--;
            setCarrinho(novoCarrinho);
        }
    };

    const calcularTotalItem = (item) => {
        return item.price * item.quantidade;
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + calcularTotalItem(item), 0);
    };

    const removerCardCarrinho = (index) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);
        setCarrinho(novoCarrinho);
    };

    const calcularTotalItensCarrinho = () => {
        return carrinho.reduce((total, item) => total + item.quantidade, 0);
    };

    const finalizarCompra = () => {
        alert("Compra finalizada");
        window.location.reload();
    };

    useEffect(() => {
        const funcaoResolucao = () => {
            setResolucao(window.innerWidth > 1366);
        };

        funcaoResolucao();
        window.addEventListener("resize", funcaoResolucao);

        return () => {
            window.removeEventListener("resize", funcaoResolucao);
        };
    }, []);
    return (
        <div className="" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, lineHeight: '19px' }}>
            <main className="w-[100%] h-[101px] bg-[#0F52BA] flex justify-between items-center relative">
                <div className="ml-[5%]">
                    <Image src="/logo.png" alt="Minha imagem" width={300} height={100} className="pt-2" />
                </div>

                <div className="mr-[5%]">
                    <motion.button type="button" onClick={MenuA} className="bg-white p-2 rounded-lg cursor-pointer hover:bg-slate-500 flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <IoCart size={19} className="mr-2" /><p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{calcularTotalItensCarrinho()}</p>
                    </motion.button>
                </div>

            </main>

            <div className="flex justify-center items-center mt-[5%] mb-[5%] relative">
                {isLoading ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="bg-white border rounded-xl shadow-md w-[218px] h-[285px] cursor-pointer relative">
                                <Skeleton width={218} height={150} className="rounded-t-xl" />
                                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl font-bold" style={{ background: "linear-gradient(to right, blue, black)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>Carregando...</motion.div>
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
                            <motion.div key={index} className="bg-white border rounded-xl shadow-md w-[218px] h-[285px] cursor-pointer relative" whileHover={{ scale: 1.05 }}>
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
                                <motion.button onClick={() => adicionarAoCarrinho(item)} className="text-white bg-[#0F52BA] w-[100%] h-[32px] flex justify-center items-center absolute bottom-0 cursor-pointer text-[14px] rounded-b-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FiShoppingBag className="mr-2" /> COMPRAR</motion.button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p>Nenhum produto encontrado</p>
                )}
            </div>



            {/** Barra lateral */}
            <div className={`fixed top-0 right-0 h-full bg-[#0F52BA] shadow-lg transition-transform duration-300 ease-in-out transform ${Abrir ? 'translate-x-0' : 'translate-x-full'} w-96`}>
                <div className="">
                    <div className="flex justify-between p-4">
                        <div>
                            <p className="text-white font-bold text-[27px] pb-3" style={{ lineHeight: '19px' }}>Carrinho </p>
                            <p className="text-white font-bold text-[27px]" style={{ lineHeight: '19px' }}>de compras</p>

                        </div>
                        <div>
                            <motion.button onClick={MenuF} className="text-white hover:text-gray-800 hover:bg-white focus:outline-none font-bold bg-black p-1 rounded-[100%]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><IoClose className="text-2xl" /></motion.button>
                        </div>
                    </div>

                    <div className="p-4" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
                        {/**Card compra */}
                        {carrinho.map((item, index) => (
                            <div key={index} className="bg-white h-[95px] flex felx-row justify-between items-center rounded-lg mb-[10px] mr-2 ml-2 pr-2 pl-2 relative">
                                <button onClick={() => removerCardCarrinho(index)} className="absolute top-[-5px] right-[-5px]  bg-black text-white p-1 rounded-full"><IoClose className="text-sm" /></button>
                                <div><img src={item.photo} alt="" className="w-[50px] h-[50px] " /></div>
                                <div className="w-[113px]">{item.name}</div>
                                <div>
                                    <p className="text-[5px] mb-[-1px]">Qtd:</p>
                                    <div className="flex items-center border p-1 rounded-lg">
                                        <button onClick={() => diminuirQuantidade(index)} className="pl-1 pr-1 border-r">-</button>
                                        <span className="pl-1 pr-1">{item.quantidade}</span>
                                        <button onClick={() => aumentarQuantidade(index)} className="pl-1 pr-1 border-l">+</button>
                                    </div>
                                </div>
                                <div>R$ {calcularTotalItem(item)}</div>
                            </div>
                        ))}
                    </div>

                    {/**Valor final */}
                    <div className="absolute bottom-0 z-20 w-[100%]">

                        <div className="flex items-center justify-between p-4  ">
                            <div className="text-white font-bold text-[27px]">Total</div>
                            <div className="text-white font-bold font text-[27px]">R$ {calcularTotal()}</div>
                        </div>
                        <motion.input type="button" value="Finalizar Compra" className="w-[100%] h-[97px] bg-[#000000] text-white text-[28px] cursor-pointer " whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={finalizarCompra} />

                    </div>
                </div>
            </div>
            <footer className={`w-[100%] h-[34px] bg-[#EEEEEE] flex justify-center items-center ${Resolucao ? "fixed bottom-0" : ""}`}>
                <div>MKS sistemas © Todos os direitos reservados</div>
            </footer>
        </div>
    );
}
