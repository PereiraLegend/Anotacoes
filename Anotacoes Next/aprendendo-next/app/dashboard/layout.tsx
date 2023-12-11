// Posso definir um layout dentro das rotas pastas sem definir na base
import {FC, ReactNode} from 'react'
interface LayoutProps {
    children: ReactNode
}

export const metadata = {
    title: 'APi Dashboard Estudo', //Aqui defino o titulo real da página quando navegamos // No caso se eu deixar isso definido apenas no layout principal vai ficar para todo o site, e se eu quiser definir um titulo diferente para cada aba eu defini isso nos arquivos layouts de cada pasta rota
    description: 'Generated by create next app',// Aqui mostra a descrição da página abaixo do link
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div>Dashboard</div>
        </div>
    )
}

export default Layout