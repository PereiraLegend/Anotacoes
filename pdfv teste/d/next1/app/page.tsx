import Image from 'next/image'
import MenuSbar from './Components/menuSbar'
import Introducao from './Components/introducao'
import Footer from './Components/footer'

export default function Home() {
  return (
    <div>
      <MenuSbar/>
      <Introducao/>
      <Footer/>
    </div>
  )
}
