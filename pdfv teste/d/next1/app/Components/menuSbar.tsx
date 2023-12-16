export default function menuSbar () {
    return(
        <main className='bg-write-500 h-20'>
            <div className="flex ">
                <div className='bg-gray-600 h-20 w-44 flex justify-center items-center text-5xl cursor-pointer text-white hover:text-black'><p className="">Moda</p></div>

                <div className='flex justify-center items-center h-20'>
                    <li className='flex space-x-4 h-20 justify-center items-center'>
                        <ul className=" hover:bg-red-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer">Quem Somos</ul>
                        <ul className=" hover:bg-red-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer">Campanhas</ul>
                        <ul className=" hover:bg-red-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer">Blog</ul>
                        <ul className=" hover:bg-red-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer">Coleções</ul>
                        <ul className=" hover:bg-red-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer">Contato</ul>
                    </li>
                </div>
            </div>
      </main>
    )
}