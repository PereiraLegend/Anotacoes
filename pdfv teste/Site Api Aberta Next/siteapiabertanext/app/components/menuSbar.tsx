//import React from 'react'
import '../styles/all.modules.css'
import Link from 'next/link'
function menuSbar(){
    return (
        <div className="container-menu-bar">
            <nav>
                <div>
                    <img src="/img/savantlogo.png" className="img-savant" />
                </div>
                <div id='teste' className="al-navbar">
                    <Link href={'/'}>Introdução</Link>
                    <Link href={"/"}>Sobre</Link>
                    <Link href={"/"}>Documentações</Link>
                    <Link href={"/"}>Certificações</Link>
                    <Link href={"/"}>Contato</Link>
                </div>
                <div>
                    <img src="/img/icebergLogo.png" className="img-iceberg" />
                </div>
            </nav>
        </div>
    )
}
export default menuSbar
