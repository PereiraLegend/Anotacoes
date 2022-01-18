const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p"); // Aqui ele cria uma node list, ou seja um pseudo array

const estilosBody = getComputedStyle(document.body); // Aqui eu quero adicionar um estilo CSS
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    // Não posso por background-color aqui
    p.style.backgroundColor = backgroundColorBody;
}