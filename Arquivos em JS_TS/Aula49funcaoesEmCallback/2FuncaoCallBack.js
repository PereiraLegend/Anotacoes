// Essa função serve para dar um tempo aleatório para a execução das funções póstunbras, ou seja ela gera um número aleatório
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());
// Verifique que ele executa os que vem primeiro
function f1(callback){
    setTimeout(function() {
        console.log("f1");
        if (callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function() {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function() {
        console.log("f3");
        if (callback) callback();
    }, rand());
}


// Ou seja, da forma que foi escrito abaixo o f3, independente do tempo de execução, numca será executado antes de f2, que num também será executado antes de f3, e só após passar por todos é que o "Olá Mundo" será executado
f1(function() {
    f2(function() {
        f3(function() {
            console.log("Olá Mundo");
        });
    });
});

// Para mais referências ver a aula