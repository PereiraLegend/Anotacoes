// Para não dar conflitos, eu crio uma function, deixando tudo de fora do escopo global
function meuEscopo () {

    // Da forma antiga

    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const Nome = form.querySelector('.Nome');
        const Sobrenome = form.querySelector('.Sobrenome');
        const Peso = form.querySelector('.Peso');
        const Altura = form.querySelector('.Altura');
        pessoas.push({
            Nome: Nome.Value,
            Sobrenome: Sobrenome.Value,
            Peso: Peso.value,
            Altura: Altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${Nome.value} ${Sobrenome.value}</p>` + `<p>${Peso.value} ${Altura.value}</p>`
    }

    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();