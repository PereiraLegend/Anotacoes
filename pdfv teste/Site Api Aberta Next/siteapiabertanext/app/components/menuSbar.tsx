//import React from 'react'
import '../styles/all.modules.css'

function menuSbar(){
    return (
        <div className="container-menu-bar">
            <nav>
                <div>
                    <img src="/img/savantlogo.png" alt="" className="img-savant" />
                </div>
                <div id='teste' className="al-navbar">
                    <a href="#">Introdução</a>
                    <a href="#">Sobre</a>
                    <a href="#">Documentações</a>
                    <a href="#">Certificações</a>
                    <a href="#">Contato</a>
                </div>
                <div>
                    <img src="/img/icebergLogo.png" alt="" className="img-iceberg" />
                </div>
            </nav>
        </div>
    )
}
export default menuSbar
