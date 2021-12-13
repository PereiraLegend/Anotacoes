const numero = Number(prompt("Informe um valor: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ``

texto.innerHTML += "Respostas: <br/>"
texto.innerHTML += `O Número digitado é ${numero} <br/>`
texto.innerHTML += `A raiz quadrada é ${numero**0.5} <br/>`
texto.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)} <br/>`
texto.innerHTML += `É NaN: ${Number.isNaN(numero)} <br/>`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br/>`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br/>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br/>`