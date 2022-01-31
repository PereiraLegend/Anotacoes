// Função Normal, onde declarado desse jeito, mesmo se eu escrever antes de ela ser declarada ela vai funcionar, pois o conpilador da mesma:
Ola();
function Ola(){
    console.log("Ola");
}
Ola();
//Se eu atribuirt um valor dentro de uma constante:
const nome = function(){
    console.log("Lucas");
}
nome(); // Ele se torna uma função // Graças a isso posso colocar ela como uma instância de outra função

function ExecutaFuncao(funcao){
    console.log("Vou executar a sua função abaixo:")
    funcao();
}
ExecutaFuncao(nome);//Aqui ele é instanciado

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
functionArrow();