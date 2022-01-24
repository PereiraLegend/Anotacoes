function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}
console.log(mostraHora());

function funcaoDointervalo() {
    console.log(mostraHora());
}

setInterval(funcaoDointervalo, 1000);// set interval é basicamente de quanto em quanto tempo eu quero que algo seja executado
//Diferente do de cima eu posso também criar uma função direta
setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer);
}, 3000); // Ela executa, mas apenas uma vez, parando a contagem das funções acima em um determinado ponto pré definido;

setTimeout(function(){
    console.log("Olá mundo!");
}, 5000); // Em 5 segundos ele vai exibir esta mensagem;