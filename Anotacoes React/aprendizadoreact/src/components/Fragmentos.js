// Se lembre que as divs que foram geradas para corresponder a regra de que sempre tem que haver um "pai" é obrigatória sempre que eu for gerar um novo componente, e sempre apenas há um elemento pai
// Para contornar isso eu posso utilizar os fragmentos

const Fragmentos = () => {
    return (
        // Para utilizar o fragments, basicamente coloco tags vazias "<></>", que ele faz a mesma coisa da classe pai, e assim posso encher isso de "Filhos"
        <> {/**Com isso não há um fragmento pai, e não terá aquela div que sempre conta no código */}
            <p>Primeiro</p>
            <p>Segundo</p>
            <p>Terceiro</p>
        </>
    )
}

export default Fragmentos