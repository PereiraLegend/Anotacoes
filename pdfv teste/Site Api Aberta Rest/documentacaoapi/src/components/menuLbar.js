import '../css/all.css'
//import React, {useEffect} from 'react';

function menuLbar(){

    return(
        <div id="barL" class="sidebar">
            
            <ul class="lista-menu-l">

                <li><p>APIs</p></li>

                <li><a href="./main.html" target="_top">Introdução</a></li>
                <li><hr/></li>
                <li>
                    <details>
                        <summary>Site</summary>
                        <ul class="lista-menu-l-seletor">
                            <li><a href="./site-Post.html" target="_top">Site Post</a></li>
                            <li><a href="./site-Get.html" target="_top">Site Get</a></li>
                            <li><a href="./site-Put.html" target="_top">Site Put</a></li>
                            <li><a href="./site-Delete.html" target="_top">Site Delete</a></li>
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