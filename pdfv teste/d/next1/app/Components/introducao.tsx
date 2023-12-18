import React from 'react'
//import InstagramEmbed from './InstagramEmbed';

export default function introducao() {
    return (
        <div>
            <div className="bg-blue-100 h-[600px] flex ">
                <div className="bg-orange-300 h-[600px] w-[30%]  hover:cursor-pointer hover:backdrop-blur group">
                    <img className="w-[100%] h-[100%]" src="imgs/modelo1.jpg" alt=""/>
                    <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                        <h1>Coleção de Inverno</h1>
                    </div>
                </div>
                <div className="bg-green-400 h-[600px w-[30%] hover:cursor-pointer hover:backdrop-blur group">
                    <img className="w-[100%] h-[100%]" src="imgs/modelo2.jpg" alt=""/>
                    <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                        <h1>Coleção de Verão</h1>
                    </div>
                </div>
                <div className="bg-blue-400 h-[100%] w-[40%] grid grid-cols-2 grid-rows-2">
                    <div className="bg-red-400 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/hmodelo8.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Sandálias</h1>
                        </div>
                    </div>

                    <div className="bg-red-900 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/cmodelo9.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Chapéus</h1>
                        </div>
                    </div>

                    <div className="bg-white h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/bmodelo14.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Bolsas</h1>
                        </div>
                    </div>

                    <div className="bg-gray-400 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/amodelo12.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Acessórios</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-gray-800 ">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl mt-6 text-white">Aquilo que vem para ficar</h1>
                </div>
                <div className="h-[480px] w-[100%] flex justify-center items-center">
                    <div className="bg-green-500 w-[300px] h-[300px] mr-[3%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/jmodelo16.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Moda Jeans</h1>
                        </div>
                    </div>
                    <div className="bg-red-500 w-[300px] h-[300px] ml-[3%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/lemodelo17.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <h1>Moda Leg</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="bg-gray-50 h-[800px] w-[50%] flex justify-center">
                    <img className="w-[] h-[100%]" src="imgs/modelo19.jpg" alt=""/>
                </div>
                <div className="bg-yellow-200 h-[800px] w-[50%]">
                    <h1>Moda Infantil</h1>
                </div>
            </div>

            <div className="bg-blue-200 w-[100%] h-[600px]">
                <div>
                    <h1>Aconpanhe as novas tendências no nosso Instagram</h1>
                </div>
                <div>
                    
                </div>

            </div>

            <div className="bg-blue-960 h-[480px] w-[100%] flex">
                <div className="bg-orange-800 h-[480px] w-[45%]"><img className="w-[100%] h-[100%]" src="imgs/lmodelo15.jpg" alt=""/></div>
                <div className="bg-green-900 h-[480px] w-[55%]">
                    <h1>Visite Nossas Lojas</h1>
                </div>
            </div>

        </div>
    )
}