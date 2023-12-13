import '../styles/sub-paginas.modules.css';

function sitePost(){

    return(
        <div className="content al-bar-react">
        <div className="bloco-g">
            <div className="bloco-al margin-dir al-topo">
                <h2>Site Post</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore aliquid error cum et eligendi repellendus repudiandae dolor dolore, quas suscipit tenetur optio reiciendis. Aperiam accusamus sequi voluptatem officiis deleniti!</p>
                <p>Rota <span className="tag-esp">Post</span> de Site:</p>
                <div className="label-n-edit" contenteditable="false">localhost:5000/src/produtos/cataolo/ean</div>
                <hr />
            </div>
            <div className="bloco-al margin-esq">
                
                <div className="form-requisicao">
                    <div className="titu-requisicao">
                        <div>
                            <h4>Requisição</h4>
                        </div>
                        <div>
                            <h4>cURL <i className="fa-solid fa-up-right-and-down-left-from-center"></i></h4>
                        </div>
                    </div>
                    <div className="al-img-txta">
                        <textarea id="cURL" name="story" rows="5" cols="47">codigo</textarea>
                        <div className="img-textarea">
                            <img src="img/imagem-api.png" alt="Miniatura" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bloco-g">
            <div className="bloco-al margin-dir">
                <div className="parametros">
                    <details>
                        <summary>Parâmetros de Requisição</summary>
                        <ul>
                            <li>
                                <span className="form-font-t1-b">Parâmetro 1</span>
                                <br />
                                <div className="form-font-info">
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos delectus vel inventore perferendis ullam quisquam eos suscipit, dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                </div>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Parâmetro 2</span>
                                <br />
                                <div className="form-font-info">
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos delectus vel inventore perferendis ullam quisquam eos suscipit, dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                </div>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Parâmetro 3</span>
                                <br />
                                <div className="form-font-info">
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos delectus vel inventore perferendis ullam quisquam eos suscipit, dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                </div>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Parâmetro 4</span>
                                <br />
                                <div className="form-font-info">
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos delectus vel inventore perferendis ullam quisquam eos suscipit, dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                </div>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Parâmetro 5</span>
                                <br />
                                <div className="form-font-info">
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos delectus vel inventore perferendis ullam quisquam eos suscipit, dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                </div>
                            </li>
                        </ul>
                    </details>
                
                    <details>
                        <summary>Parâmetros de Resposta</summary>
                        <ul>
                            <li>
                                <span className="form-font-t1-b">Resposta 1</span>
                                <br />
                                <span className="">Res</span>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Resposta 2</span>
                                <br />
                                <span className="">Res</span>
                            </li>
                            <li>
                                <span className="form-font-t1-b">Resposta 3</span>
                                <br />
                                <span className="">Res</span>
                            </li>
                        </ul>
                    </details>

                    <details>
                        <summary>Erros</summary>
                        <ul>
                            <li>
                                <div className="parametros-2">
                                    <br />
                                    <details>
                                        <summary>Erro XXX</summary>
                                        <ul>
                                            <li>
                                                <span className="form-font-t1-b">Lorem lorem lorem</span>
                                                <br />
                                                <span>Lorem ipsum, dolor sit amet consectetur dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                            </li>
                                        </ul>
                                    </details>
                                
                                    <details>
                                        <summary>Erro XXX</summary>
                                        <ul>
                                            <li>
                                                <span className="form-font-t1-b">Lorem lorem lorem</span>
                                                <br />
                                                <span>Lorem ipsum, dolor sit amet consectetur dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                            </li>
                                        </ul>
                                    </details>

                                    <details>
                                        <summary>Erro XXX</summary>
                                        <ul>
                                            <li>
                                                <span className="form-font-t1-b">Lorem lorem lorem</span>
                                                <br />
                                                <span>Lorem ipsum, dolor sit amet consectetur dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                            </li>
                                        </ul>
                                    </details>

                                    <details>
                                        <summary>Erro XXX</summary>
                                        <ul>
                                            <li>
                                                <span className="form-font-t1-b">Lorem lorem lorem</span>
                                                <br />
                                                <span>Lorem ipsum, dolor sit amet consectetur dolorem sint sapiente quod cumque quo at facilis error magni, velit voluptatem. Voluptas!</span>
                                            </li>
                                        </ul>
                                    </details>
                                </div>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="bloco-al margin-esq">
                
                <div className="form-requisicao">
                    <div className="titu-requisicao">
                        <div>
                            <h4>Resposta de Exemplo</h4>
                        </div>
                        <div>
                            <h4><i className="fa-solid fa-up-right-and-down-left-from-center"></i></h4>
                        </div>
                    </div>
                    <div className="al-img-txta">
                        <textarea id="cURL" name="story" rows="5" cols="47">codigo</textarea>
                        <div className="img-textarea">
                            <img src="img/imagem-api-3.png" alt="Miniatura" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="texto-In">
            <hr />
        </div>

        <center><h2>Explore a Api</h2></center>
        <div className="texto-In">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis sint nulla, at voluptates voluptas dolorum ipsum recusandae enim harum architecto exercitationem itaque est quaerat quae facere fuga rerum eligendi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eligendi perspiciatis quia asperiores repellat reprehenderit, qui saepe id! Aspernatur non ipsa animi, dicta explicabo fugit voluptate voluptatibus autem perferendis provident?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro doloribus ducimus possimus nam distinctio autem sunt illo tempora earum repudiandae pariatur ab nesciunt, quae ipsam aperiam, vero quis quidem!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit facilis deleniti repellendus aspernatur ut praesentium sed perferendis maiores voluptate eligendi iusto animi doloremque, libero repudiandae officia ullam voluptates. Sint?</p>
        </div>
    </div>

    );
}

export default sitePost