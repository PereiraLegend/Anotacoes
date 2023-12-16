import Image from 'next/image'
import MenuSbar from './Components/menuSbar'
import Introducao from './Components/introducao'

export default function Home() {
  return (
    <div>
      <MenuSbar/>
      <Introducao/>
    </div>
  )
}
