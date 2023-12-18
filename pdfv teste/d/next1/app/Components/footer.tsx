import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return(
        <footer className="bg-gray-900 h-[300px] w-[100%] flex text-white">
        <div className="bg-gray-900 w-[23%] ml-[10%] mr-[1%] mt-8">
            <h1 className="text-2xl flex justify-center">Moda</h1>
            <ul className=''>
                <li className=' flex justify-center'>Quem Somos</li>
                <li className=' flex justify-center'>Ofertas</li>
                <li className=' flex justify-center'>Coleções</li>
                <li className=' flex justify-center'>Blog</li>
            </ul>
        </div>

        <div className="bg-gray-900 w-[23%] ml-[1%] mr-[1%] mt-8">
            <h1 className="text-2xl flex justify-center">Endereço</h1>
            <p className='flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi nihil enim placeat quis repudiandae facere maxime praesentium. Aspernatur quasi saepe, quidem voluptas accusamus dolores ipsam quis totam aperiam quod!</p>
        </div>

        <div className="bg-gray-900 w-[23%] ml-[1%] mr-[1%] mt-8">
            <h1 className="text-2xl flex justify-center">Contatos</h1>
            <h1 className="text-2xl flex justify-center">Coleções</h1>
            <h1 className="text-2xl flex justify-center">Moda</h1>
            <h1 className="text-2xl flex justify-center">Moda Infantil</h1>
        </div>

        <div className="bg-gray-900 w-[23%] ml-[1%] mr-[10%] mt-8">
            <h1 className="text-2xl">Acompanhe-nos</h1>
            <div className='text-xs flex w-[180px] justify-center'>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '0.75rem' }} />
                <p className='text-gray-900'>____</p>
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '0.75rem' }} />
                <p className='text-gray-900'>____</p>
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '0.75rem' }} />
                <p className='text-gray-900'>____</p>
                <FontAwesomeIcon icon={faPinterest} style={{ fontSize: '0.75rem' }} />
                
            </div>
        </div>
        </footer>
    )
}