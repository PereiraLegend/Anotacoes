import React from 'react'
//import InstagramEmbed from './InstagramEmbed';

export default function introducao() {
    return (
        <div>
            <div className="bg-blue-100 h-[600px] flex ">
                <div className="bg-orange-300 h-[600px] w-[30%] hover:cursor-pointer hover:backdrop-blur group">
                    <img className="w-[100%] h-[100%]" src="imgs/modelo1.jpg" alt=""/>
                    <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                        <div className='flex justify-center mt-[50%]'>
                            <h1 className='text-4xl'>Coleção de Inverno</h1>
                        </div>
                        <div className='flex justify-center mt-[5%]'>
                            <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-400 h-[600px w-[30%] hover:cursor-pointer hover:backdrop-blur group">
                    <img className="w-[100%] h-[100%]" src="imgs/modelo2.jpg" alt=""/>
                    <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                        <div className='flex justify-center mt-[50%]'>
                            <h1 className='text-4xl'>Coleção de Verão</h1>
                        </div>
                        <div className='flex justify-center mt-[5%]'>
                            <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-400 h-[100%] w-[40%] grid grid-cols-2 grid-rows-2">
                    <div className="bg-red-400 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/hmodelo8.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Sandálias</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-900 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/cmodelo9.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Chapéus</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/bmodelo14.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Bolsas</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-400 h-[100%] w-[100%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/amodelo12.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Acessórios</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
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
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg border p-4">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Moda Jeans</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-500 w-[300px] h-[300px] ml-[3%] hover:cursor-pointer hover:backdrop-blur group">
                        <img className="w-[100%] h-[100%]" src="imgs/lemodelo17.jpg" alt=""/>
                        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg border p-4">
                            <div className='flex justify-center mt-[35%]'>
                                <h1 className='text-3xl'>Moda Legging</h1>
                            </div>
                            <div className='flex justify-center mt-[5%]'>
                                <div className='border p-2 hover:cursor-pointer hover:bg-gray-700'>Conheça</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="bg-gray-50 h-[800px] w-[50%] flex justify-center">
                    <img className="w-[] h-[100%]" src="imgs/modelo19.jpg" alt=""/>
                </div>
                <div className="bg-yellow-200 h-[800px] w-[50%]">
                <div className='flex justify-center mt-[10%]'>
                        <img className="w-[40%]" src="imgs/modelo241.png" alt=""/>
                    </div>
                    <div className='flex justify-center mt-[5%]'>
                        <div className='text-3xl text-gray-700 border border-gray-700  p-2 hover:cursor-pointer hover:bg-white'>Moda Infantil</div>
                    </div>
                    <div className='flex justify-center'>
                        <img className="w-[40%]" src="imgs/modelo231.png" alt=""/>
                    </div>
                </div>
            </div>

            <div className="bg-blue-200 w-[100%] h-[600px]">
                <div>
                    <h1 className='flex justify-center text-3xl pt-10'>Aconpanhe as novas tendências no nosso Instagram</h1>
                </div>
                <div className='flex p-10 justify-center'>
                    <img className='w-[18%] m-5 hover:cursor-pointer hover:border'  src="imgs/modelo25.jpg" alt=""/>
                    <img className='w-[18%] m-5 hover:cursor-pointer hover:border'  src="imgs/modelo25.jpg" alt=""/>
                    <img className='w-[18%] m-5 hover:cursor-pointer hover:border'  src="imgs/modelo25.jpg" alt=""/>
                    <img className='w-[18%] m-5 hover:cursor-pointer hover:border'  src="imgs/modelo25.jpg" alt=""/>
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