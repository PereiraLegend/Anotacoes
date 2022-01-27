function criaHoraDosSegundos(segundos){ // Aqui eu crio a hora dos segundos, 
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12: false, 
        timeZone: "UTC"
    });
}

let segundos = 0;
let timer; // com é um let , ele é visto dentro da função de fora para dentro, mas não pode ser de dentro para fora, aqui no caso deu certo
function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
        console.log(criaHoraDosSegundos(segundos));
    }, 1000);
}


const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

iniciar.addEventListener("click", function(event){ // Aqui eu adicionei o evento de clique no botão
    //relogio.innerHTML = "Cliquei em iniciar"// Vai adicionar um texto na posição do termo relogio
    //alert("Cliquei em iniciar");

    //Aqui para adicionar ou retirar uma função CSS
    relogio.classList.remove("zerado");
    relogio.classList.remove("pausado");
    clearInterval(timer)
    iniciaRelogio();
});

pausar.addEventListener("click", function(event){
    //Para adicionar/retirar uma ação CSS
    relogio.classList.remove("zerado");
    relogio.classList.add("pausado");
    clearInterval(timer);//Para a ação
});

zerar.addEventListener("click", function(event){
    //Para adicionar CSS
    relogio.classList.add("zerado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
});

/**Uma função a mais, só que ela serve para diferentes códigos */
//Aqui no que eu clico ela mostra onde eu cliquei na página, no caso aonde eu cliquei
document.addEventListener("click", function(e){
    console.log(e.target);
});