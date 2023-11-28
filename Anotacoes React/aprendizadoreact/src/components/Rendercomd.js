// Renderização condicional
const Rendercomd = (valor) => { // Também posso passar propriedades diretamente para dentro da função onde ela á definida no App.js
    //const x = 10 // Ao invés de passar o valor por aqui eu passo ele pelo app
    return (
        <div>
            {/**Aqui eu posso colocar uma condição direto no js, e faço uma renderização condicional*/}
            {valor.x > 5 && <p>X é maior que 5</p>} {/**O valor recebido de App.js é passado aqui como "valor." */}
            {/**Também há outra forma mais complexa de fazer isso: */}
            {valor.x > 5 ? <p>X é maior que 5</p> : <p>X é menor que 5</p>}   {/**Ao passa o "?" eu passo um "if" e um "else" entre ":" */}
        </div>
    )
}

export default Rendercomd