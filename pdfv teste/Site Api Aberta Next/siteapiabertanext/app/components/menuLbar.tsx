import React from 'react'
import Link from 'next/link'
import '../styles/all.modules.css'
//import React, {useEffect} from 'react';

function menuLbar(){

    return(
        <div id="barL" className="sidebar">
            
            <ul className="lista-menu-l">

                <li><p>APIs</p></li>

                <li><Link href={'/'}>Introdução</Link></li>
                <li><hr/></li>
                <li>
                    <details>
                        <summary>Site</summary>
                        <ul className="lista-menu-l-seletor">
                        <li><Link href={'/'}>Site Post</Link></li>
                        <li><Link href={'/'}>Site Get</Link></li>
                        <li><Link href={'/'}>Site Put</Link></li>
                        <li><Link href={'/'}>Site Delete</Link></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Estoque</summary>
                        <ul className="">
                            <li><a href="#">Página 5</a></li>
                            <li><a href="#">Página 6</a></li>
                            <li><a href="#">Página 7</a></li>
                            <li><a href="#">Página 8</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Relatórios</summary>
                        <ul className="">
                            <li><a href="#">Página 9</a></li>
                            <li><a href="#">Página 10</a></li>
                            <li><a href="#">Página 11</a></li>
                            <li><a href="#">Página 12</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Pdv</summary>
                        <ul className="">
                            <li><a href="#">Página 13</a></li>
                            <li><a href="#">Página 14</a></li>
                            <li><a href="#">Página 15</a></li>
                            <li><a href="#">Página 16</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Relatório de Perdas</summary>
                        <ul className="">
                            <li><a href="#">Página 13</a></li>
                            <li><a href="#">Página 14</a></li>
                            <li><a href="#">Página 15</a></li>
                            <li><a href="#">Página 16</a></li>
                        </ul>
                    </details>
                </li>
            </ul>

        </div>
    )
}

export default menuLbar