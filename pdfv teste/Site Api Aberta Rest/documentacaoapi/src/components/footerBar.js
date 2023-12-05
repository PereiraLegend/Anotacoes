import '../css/all.css'

function footerBar() {
    return(
        <div>
            <footer>
                <div className="main-footer">
                    <div className="atendimento al-footer">
                        <h2>Atendimento</h2>
                        <a href="#">contato.savantweb.gmail.com</a>
                        <a href="#">Teresina-Piauí</a>
                    </div>
                    <div className="contato al-footer">
                        <h2>Contato</h2>
                        <a href="#">Fale Conosco</a>
                        <a href="#">Vagas</a>
                    </div>
                    <div className="explore al-footer">
                        <h2>Explore</h2>
                        <a href="#">Sobre Nós</a>
                        <a href="#">Projetos</a>
                    </div>
                    <div className="Nos acompanhe al-footer">
                        <h2>Nos Acompanhe</h2>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    
                </div>
                <hr />
                <div className="main-footer">
                    <div className='imgfooterlogo'>
                        <img src="img/logosavantmenor.png" alt="" srcset="" className="img-logo-menor" />
                    </div>
                    <div>
                        <p>@2023 - <span className='spanfooter' >SavantWeb</span> Todos os direito reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footerBar