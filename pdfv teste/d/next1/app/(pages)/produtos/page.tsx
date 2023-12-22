import MenuSbar from '../../Components/menuSbar'
import Footer from '../../Components/footer'
import MenuPbar from '../../Components/menuPbar'
import Catalogo from '../../Components/catalogo'

export default function Produtos(){
    return (
        <div>
            <MenuSbar/>
            <div>
                <div className='bg-blue-300 w[100%] h-[40px] flex justify-center items-center cursor-pointer'>
                    <div>Verifique as nossas promoções de Inverno !!!</div>
                </div>
            </div>
            <div className='flex'>
                <div className='bg-red-800 w-[18%] h-[100%]'>
                    <MenuPbar/>
                </div>
                <div className=' w-[82%] h-[100%] p-10'>
                    <Catalogo/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}