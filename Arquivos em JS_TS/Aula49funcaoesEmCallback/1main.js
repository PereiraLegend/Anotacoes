// Essa função serve para dar um tempo aleatório para a execução das funções póstunbras, ou seja ela gera um número aleatório
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());
// Verifique que ele executa os que vem primeiro
function f1(){
    setTimeout(function() {
        console.log("f1");
    }, rand());
}

function f2(){
    setTimeout(function() {
        console.log("f2");
    }, rand());
}

function f3(){
    setTimeout(function() {
        console.log("f3");
    }, rand());
}
f1();
f2();
f3();
console.log("Olá Mundo!");