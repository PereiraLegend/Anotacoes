import Link from 'next/link'

export default function menuSbar () {
    return(
        <main className='bg-write-500 h-20'>
            <div className="flex ">
                <Link href={'/'}><div className='bg-gray-600 h-20 w-44 flex justify-center items-center text-5xl cursor-pointer text-white hover:cursor-pointer'><p className="">Moda</p></div></Link>

                <div className='flex justify-center items-center h-20'>
                    <li className='flex h-20 justify-center items-center'>
                        <Link href={'/sobre'}><ul className=" hover:bg-gray-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer hover:text-white">Quem Somos</ul></Link>
                        <Link href={'/campanhas'}><ul className=" hover:bg-gray-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer hover:text-white">Campanhas</ul></Link>
                        <Link href={'/blog'}><ul className=" hover:bg-gray-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer hover:text-white">Blog</ul></Link>
                        <Link href={'/colecoes'}><ul className=" hover:bg-gray-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer hover:text-white">Coleções</ul></Link>
                        <Link href={'/contato'}><ul className=" hover:bg-gray-600 pt-7 pl-8 pr-8 pb-7 hover:cursor-pointer hover:text-white">Contato</ul></Link>
                    </li>
                </div>
            </div>
      </main>
    )
}