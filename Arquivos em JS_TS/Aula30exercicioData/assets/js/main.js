// Ver apenas a data
/** 
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = `Só para ver: ${data.toString()}`;
*/

// Ver toda a data do exercicio
const h1 = document.querySelector(".container h1");
const data = new Date();

function DiaTexto(dia){
    let d;
    switch (dia){ // Além do swicth posso usar também o if ou uma lista (array), no caso do array o indice seria o numero, mas ele retornaria o "return d[dia];" com os arrays armazenados dentro do "d"
        case 0:
            d = "Domingo";
            return d;
        case 1:
            d = "Segunda-feira";
            return d;
        case 2:
            d = "Terça-feira";
            return d;
        case 3:
            d = "Quarta-feira";
            return d;
        case 4:
            d = "Quinta-feira";
            return d;
        case 5:
            d = "Sexta-feira";
            return d;
        case 6:
            d = "Sábado";
            return d;
        default:
            d = "";
            return d;
    }
}

function Mes(mes){
    let m;
    switch (mes){
        case 0:
            m = "Janeiro";
            return m;
        case 1:
            m = "Fevereiro";
            return m;
        case 2:
            m = "Março";
            return m;
        case 3:
            m = "Abril";
            return m;
        case 4:
            m = "Maio";
            return m;
        case 5:
            m = "Junho";
            return m;
        case 6:
            m = "Julho";
            return m;
        case 7:
            m = "Agosto";
            return m;
        case 8:
            m = "Setenbro";
            return m;
        case 9:
            m = "Outubro";
            return m;
        case 10:
            m = "Novenbro";
            return m;
        case 11:
            m = "Dezenbro";
            return m;
        default:
            m = "";
            return m;
    }
}

h1.innerHTML = `${DiaTexto(data.getDay())}, ${data.getDate()} de ${Mes(data.getMonth())} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()} `;

//Ou tudo isso pode ser resumido a: (Obs.: vendo a documentação tudo o que foi escrito acima pode ser resumido ao que está abaixo)

/**
 * const h1 = document.querySelector(".container h1");
 * const data = new Date();
 * const opcoes = {
 *      dateStyle: "full",
 *      timeStyle: "short"
 * }
 * h1.innerHTML = data.toLocaleDateString("pt-Br", opcoes);
 */