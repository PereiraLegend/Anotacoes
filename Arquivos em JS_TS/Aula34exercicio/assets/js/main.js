const elementos = [
    {tag: "p", texto: "Frase 1"}, // 0 
    {tag: "div", texto: "Frase 2"}, // 1
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase 4"},
];
console.log(elementos);

const container = document.querySelector(".container"); // Aqui eu seleciono a classe
const div = document.createElement("div");

for (let i=0; i < elementos.length; i++) {
    //console.log(elementos[i].tag); //Posso colocar o .tag aqui para que ele pegue os tags armazenados dentro do "elementos"
    // Também posso desestruturar o objeto fazendo assim via desestruturação
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHtml = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
/** Para mais informações ver seção 3 video 53 do curso de full stack */