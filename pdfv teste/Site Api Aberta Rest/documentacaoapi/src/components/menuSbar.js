import React from 'react'
import '../css/all.css'

function menuSbar(){
    return (
        <div className="container-menu-bar">
            <nav>
                <div>
                    <img src="/img/savantlogo.png" alt="" srcset="" className="img-savant" />
                </div>
                <div id='teste' nameClass="al-navbar">
                    <a href="#">Introdução</a>
                    <a href="#">Sobre</a>
                    <a href="#">Documentações</a>
                    <a href="#">Certificações</a>
                    <a href="#">Contato</a>
                </div>
                <div>
                    <img src="/img/icebergLogo.png" alt="" srcset="" className="img-iceberg" />
                </div>
            </nav>
        </div>
    )
}
export default menuSbar
