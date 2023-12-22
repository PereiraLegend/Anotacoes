export default function MenuPbar(){
    return(
        <div className="list-none bg-white">
            <div className="flex justify-center">Filtros</div>
            <li className="ml-4">
                <details>
                    <summary className="cursor-pointer">Categorias</summary>
                    <ul className="ml-8 cursor-pointer">
                        <li>Moda Infantil</li>
                        <li>Moda Jeams</li>
                        <li>Moda Legging</li>
                    </ul>
                </details>
            </li>
            <li className="ml-4">
                <details>
                    <summary className="cursor-pointer">Preços</summary>
                    <ul className="ml-8 cursor-pointer">
                        <li>Maior Preço</li>
                        <li>Menor Preço</li>
                    </ul>
                </details>
            </li>
            <li className="ml-4">
                <details>
                    <summary className="cursor-pointer">Tamanhos</summary>
                    <ul className="ml-8 cursor-pointer">
                        <li>Tamanho P</li>
                        <li>Tamanho M</li>
                        <li>Tamanho G</li>
                        <li>Tamanho GG</li>
                    </ul>
                </details>
            </li>
            <li className="ml-4">
                <details>
                    <summary className="cursor-pointer">Peças</summary>
                    <ul className="ml-8 cursor-pointer">
                        <li>Vestidos</li>
                        <li>Camisas</li>
                        <li>Shorts</li>
                        <li>Calças</li>
                        <li>Calçados</li>
                        <li>Chapéus</li>
                    </ul>
                </details>
            </li>
            <li className="ml-4">
                <details>
                    <summary className="cursor-pointer">Estoque</summary>
                    <ul className="ml-8 cursor-pointer">
                        <li>No Estoque</li>
                        <li>Fora do Estoque</li>
                    </ul>
                </details>
            </li>
            <div className="w-[100%] h-[600px] bg-gray-500 text-white">
                <div className="m-4 flex justify-center">Nossas Redes Sociais</div>
                <div className="m-4">Siga-nos em nossas redes sociais e aconpanhe as nossas dicas exclusivas, conteúdo novo todo dia, com aquela maquiagem para combinar com o look</div>
            </div>
        </div>
    )
}