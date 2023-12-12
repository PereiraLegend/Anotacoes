import '../styles/all.modules.css'

function introducao(){
    return(
        <div id="introducao" className="content">
            <center>
                <h1>Introdução</h1>
            </center>

            <div className="cards-intro">
                <div className="card-intro-txt">
                    <div className="texto-In">
                        <center><h2>Seja Bem Vindo a Iceberg Api</h2></center>
                        <p>A API da Iceberg te permite interagir diretamente com todas as informações que você precisa para desenvolver suas integrações como desejar.</p>
                    </div>
                    <div className="texto-In">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam distinctio quo animi?
                            Cupiditate animi placeat doloribus quis unde deserunt a, necessitatibus voluptas assumenda.
                            Perspiciatis nihil accusamus tempore excepturi repellendus aliquid?</p>
                    </div>
                    <div className="texto-In cards-intro ">
                        <div className="textarea-form cards-intro-txt-2 form-txt-">
                            <h3>Base URL:</h3>
                            <textarea id="codigo-textarea" name="story" rows="3" cols="30">
                                https://savantweb.com.br
                            </textarea>
                        </div>
                        <div className="cards-intro-txt form-span">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsam consequatur aspernatur neque dolor recusandae, fugit cum veritatis dolorum vitae dicta inventore ipsum sunt possimus quos unde accusamus, magni iure.</span>
                        </div>
                    </div>
                </div>

                <div className="card-intro-img">
                    <img src="../img/Server-amico.png" alt="" className="img-server" />
                </div>
            </div>
            <div className="texto-In">
                <hr />
            </div>
            
            <center><h2>Autenticação</h2></center>
            <div className="texto-In cards-intro ">
                <div className="cards-intro-txt form-span">
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsam consequatur aspernatur neque dolor recusandae, fugit cum veritatis dolorum vitae dicta inventore ipsum sunt possimus quos unde accusamus, magni iure.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error voluptatum earum minima fugiat deleniti ullam, quam impedit, vitae rem quidem? Aliquid voluptatum repudiandae illum corrupti fugiat voluptas ipsa ad.</span>
                </div>
                <div className="textarea-form cards-intro-txt">
                    <h3>Exemplo cURL:</h3>
                    <textarea id="codigo-textarea-2" name="story" rows="3" cols="40">https://savantweb.com.br</textarea>
                </div>
            </div>
            <div className="texto-In">
                <hr/>
            </div>

            <center><h2>Explore a Api</h2></center>
            <div className="texto-In">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis sint nulla, at voluptates voluptas dolorum ipsum recusandae enim harum architecto exercitationem itaque est quaerat quae facere fuga rerum eligendi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eligendi perspiciatis quia asperiores repellat reprehenderit, qui saepe id! Aspernatur non ipsa animi, dicta explicabo fugit voluptate voluptatibus autem perferendis provident?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro doloribus ducimus possimus nam distinctio autem sunt illo tempora earum repudiandae pariatur ab nesciunt, quae ipsam aperiam, vero quis quidem!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit facilis deleniti repellendus aspernatur ut praesentium sed perferendis maiores voluptate eligendi iusto animi doloremque, libero repudiandae officia ullam voluptates. Sint?</p>
            </div>
        </div>
    )
}

export default introducao