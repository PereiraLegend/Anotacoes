"use client"
import Image from "next/image";
import { useState } from "react"


export default function Home() {
  const [Abrir, setAbrir] = useState(false)
  const MenuA = () => {
    setAbrir(!Abrir)
  }
  const MenuF = () => {
    setAbrir(false)
  }

  return (
    <div>
      <main className="w-[100%] h-[101px] bg-[#0F52BA] flex justify-between items-center">
        <div className="ml-[5%]">
          <Image src="/logo.png" alt="Minha imagem" width={300} height={100} />
        </div>

        <div className="mr-[5%]">
          <input type="button" value="carrinho" onClick={MenuA} className="bg-white p-2 rounded-lg cursor-pointer hover:bg-slate-500" />
          <div className={`fixed top-0 right-0 h-full bg-[#0F52BA] shadow-lg transition-transform duration-300 ease-in-out transform ${Abrir ? 'translate-x-0' : 'translate-x-full'} w-96`}>
            <div className="">
              <div className="flex justify-between p-4">
                <div>
                  <p className="text-white font-bold text-[27px]">Carrinho <br/>de compras</p>
                </div>
                <div>
                  <button onClick={MenuF} className="text-white hover:text-gray-800 hover:bg-white focus:outline-none font-bold bg-black p-1 rounded-[100%]">✕</button>
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
                  <div className="text-white font-bold text-[27px]">R$ XXXX</div>
              </div>
              <input type="button" value="Finalizar Compra" className="w-[100%] h-[97px] bg-[#000000] text-white text-[28px] cursor-pointer absolute bottom-0 z-20"/>
            </div>
          </div>
        </div>

      </main>

      <div>
        Meio
      </div>

      <footer className="w-[100%] h-[34px] bg-[#EEEEEE] flex justify-center items-center fixed bottom-0">
        <div>MKS sistemas © Todos os direitos reservados</div>
      </footer>
    </div>
  );
}
