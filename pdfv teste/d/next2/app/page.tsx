/* eslint-disable @next/next/no-img-element */
import MenuSbar from "./components/menuSbar"
import Footer from "./components/footer"
import { FiArrowRight, FiShoppingCart } from "react-icons/fi"

export default function Home() {
  return (
    <div>
      <div className="bg-gray-400 bg-no-repeat">
        <MenuSbar />
        <div className="w-[100%] h-[600px]">
          <div className="ml-[5%] w-[45%] text-white">
            <div className="text-7xl font-serif space-y-7 mt-6">Possuimos as <span className="text-yellow-600">M</span>elhores <span className="text-yellow-600">M</span>obílias do <span className="text-yellow-600">M</span>ercado</div>
            <div className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque vitae, beatae architecto debitis vero similique, illum et ea veniam, repellat eligendi excepturi nulla maxime. Reiciendis maxime corporis ipsam officia.</div>
            <div className="w-[200px] bg-yellow-600 p-5 mt-5 flex justify-center font-serif text-xl hover:cursor-pointer hover:border-2">Explore</div>
          </div>
        </div>
      </div>
      <div className="ml-[5%] mr-[5%] bg-gray-200 rounded-2xl mt-[-50px]">
        <div className="w-[100%] h-[400px] flex justify-center items-center justify-evenly">
          <div className="w-[26%] h-[80%] bg-blue-300 rounded-2xl"></div>
          <div className="w-[26%] h-[80%] bg-blue-300 rounded-2xl"></div>
          <div className="w-[26%] h-[80%] bg-blue-300 rounded-2xl"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-serif font-bold mt-12 mb-6">Categorias</h1>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px]">
        <div className="w-[48.8%] h-[250px] bg-red-300 rounded-2xl">
        </div>
        <div className="w-[48.8%] h-[250px] bg-red-300 rounded-2xl"></div>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px]">
        <div className="w-[48.8%] h-[250px] bg-red-300 rounded-2xl"></div>
        <div className="w-[48.8%] h-[250px] bg-red-300 rounded-2xl"></div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-serif font-bold mt-12 mb-6">Produtos em Destaque</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg font-serif mb-6">Confira os nossos melhores produtos</h1>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px]">
        <div className="w-[31%] h-[400px] bg-gray-50 ">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center"> 
            <img src="/imgs/mobilia1.png" className="h-[100%]" alt=""/> 
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-50">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia3.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-50">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia4.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px]">
        <div className="w-[31%] h-[400px] bg-gray-50">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia5.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-50">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia6.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-50">
          <div className="w-[100%] h-[300px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia7.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Comprar <FiShoppingCart /></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="bg-yellow-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Ver Mais <FiArrowRight /></div>
      </div>
      <div className="ml-[5%] mr-[5%]">
        <div className="bg-blue-300 w-[100%] h-[450px] rounded-2xl flex items-center">
          <div className="w-[50%] h-[100%] flex justify-center">
          <img src="/imgs/mobilia8.png" className="h-[100%]" alt=""/>
          </div>

          <div className="w-[50%] h-[100%]">
            <div className="text-blue-400 font-bold text-sm mt-5 mb-5">Economize até 20%</div>
            <div className="font-serif text-6xl w-[70%]">Novidades Da Temporada</div>
            <div className="mt-5 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quos corrupti saepe inventore molestiae minima vitae, sint ut placeat, facilis nulla reiciendis dignissimos facere nostrum sit magni itaque ullam rerum.</div>
            <div className="flex justify-start">
              <div className="bg-blue-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-8  hover:border">Novidades <FiArrowRight /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <h1 className="text-4xl font-serif font-bold mt-12 mb-6">Nosso Blog</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg font-serif mb-6">Confira as novas postagens</h1>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px]">
        <div className="w-[31%] h-[400px] bg-gray-300">
          <div className="w-[100%] h-[320px] bg-blue-100">
            <img src="/imgs/sala1.jpg" className="h-[100%] w-[100%]" alt=""/>
          </div>
          <div className="font-serif text-2xl flex ">Como estilizar a sua sala de estar com as tendências desse inverno</div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-300">
          <div className="w-[100%] h-[320px] bg-blue-100">
          <img src="/imgs/sala2.jpg" className="h-[100%] w-[100%]" alt=""/>
          </div>
          <div className="font-serif text-2xl flex ">Como estilizar a sua sala de estar com as tendências desse inverno</div>
        </div>
        <div className="w-[31%] h-[400px] bg-gray-300">
          <div className="w-[100%] h-[320px] bg-blue-100">
          <img src="/imgs/sala3.jpg" className="h-[100%] w-[100%]" alt=""/>
          </div>
          <div className="font-serif text-2xl flex ">Como estilizar a sua sala de estar com as tendências desse inverno</div>
        </div>
      </div>
      <div className="ml-[5%] mr-[5%] mt-20">
        <div className="bg-red-900 bg-[url(/imgs/textura.jpg)] w-[100%] h-[350px] rounded-2xl flex justify-center flex-col">
          <div className="font-serif text-white text-4xl flex justify-center mt-8"> Receba nossas novidades por Email</div>
          <div className="text-white flex justify-center mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab doloribus, esse animi </div>
          <div className="font-serif text-white text-2xl flex justify-center">Receba as Novidades</div>
          <div className="w-[100%]  flex justify-center mt-6">
            <input className="w-[60%] text-xl" type="text" name="" id="" placeholder="Email" />
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Enviar <FiArrowRight /></div>
          </div>
        </div>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between mt-16">
        <div className="text-4xl font-serif font-bold">Últimas Tendências</div>
        <div className="flex justify-center">
          <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14 hover:border">Ver Mais <FiArrowRight /></div>
        </div>
      </div>
      <div className="ml-[5%] mr-[5%] flex justify-between m-[30px] mb-16">
        <div className="w-[23%] h-[300px] bg-gray-50">
          <div className="w-[100%] h-[200px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia7.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[23%] h-[300px] bg-gray-50">
          <div className="w-[100%] h-[200px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia6.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[23%] h-[300px] bg-gray-50">
          <div className="w-[100%] h-[200px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia5.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14">Comprar <FiShoppingCart /></div>
          </div>
        </div>
        <div className="w-[23%] h-[300px] bg-gray-50">
          <div className="w-[100%] h-[200px] bg-blue-100 flex justify-center">
          <img src="/imgs/mobilia4.png" className="h-[100%]" alt=""/>
          </div>
          <div className="font-serif text-xl flex justify-center">Cadeira de Escritório</div>
          <div className="text-lg flex justify-center">R$ 20,00</div>
          <div className="flex justify-center">
            <div className="bg-gray-400 pl-7 pr-7 pt-2 pb-2 flex items-center hover:cursor-pointer mb-14">Comprar <FiShoppingCart /></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
