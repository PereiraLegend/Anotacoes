import Cards from './cards'

export default function Catalogo(){
    return (
        <div>
            <div className="ml-4 mb-9 flex">
                <div className="bg-gray-500 p-1 text-white">
                    Pesquisa: <input type="text" className='text-black' />
                </div>
                <div className="ml-4 flex">
                    <div className="ml-4 bg-gray-500 p-1 text-white">#Tamanho</div>
                    <div className="ml-4 bg-gray-500 p-1 text-white">#Preço</div>
                    <div className="ml-4 bg-gray-500 p-1 text-white">#Peças</div>
                    <div className="ml-4 bg-gray-500 p-1 text-white">#Estoque</div>
                </div>
            </div>
            <div className='w-[100%]'>
                <div className='flex justify-around'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <div className='flex justify-around'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <div className='flex justify-around'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <div className='border p-2 border-gray-800 w-[100%] flex justify-between hover:cursor-pointer'>
                    <div>Página Anterior</div>
                    <div>1</div>
                    <div>Próxima Página</div>
                </div>
            </div>
        </div>
    )
}