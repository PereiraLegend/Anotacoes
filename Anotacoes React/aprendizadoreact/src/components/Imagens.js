/**Opcionalmente posso fazer um import: onde importo na pasta*/
// import arvore from '../'
// Ai eu defino uma variável para a importação e a chamo em src dentro de image, o que é diferente de chamar direto abaixo

const Imagens = () => {
    return (
        <div>
            {/**Importando imagens: */}
            <img src="/assets/arvore.jpg" />
            {/**<img src={arvore} />*/} {/**Assim posso chamar indices especificos, como por exemplo um id ou outra coisa que esteja relacionado com este item */}
        </div>
    )
}
export default Imagens