import React from 'react'
import { Link } from 'react-router-dom'
import '../css/all.css'
//import React, {useEffect} from 'react';

function menuLbar(){

    return(
        <div id="barL" class="sidebar">
            
            <ul class="lista-menu-l">

                <li><p>APIs</p></li>

                <li><Link to="/">Introdução</Link></li>
                <li><hr/></li>
                <li>
                    <details>
                        <summary>Site</summary>
                        <ul class="lista-menu-l-seletor">
                        <li><Link to="/sitepost">Site Post</Link></li>
                        <li><Link to="/siteget">Site Get</Link></li>
                        <li><Link to="/siteput">Site Put</Link></li>
                        <li><Link to="/sitedelete">Site Delete</Link></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Estoque</summary>
                        <ul class="">
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
                        <ul class="">
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
                        <ul class="">
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
                        <ul class="">
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