// A função-palavra function tem argumentos que sustenta todos os argumentos enviados
function funcao(a,b,c){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6,7);
// supondo que eu tenha outra função 
function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
funcao2(1,2,3);
// Caso eu queira fazer uma função
function funcao3(a,b = 0){
    console.log(a+b);
}
funcao3(2,7);// Se eu colocasse uma string no meio, ele concatenaria

//Fazendo uma conta

function conta(operador, acumulador, ...numeros) { // Os três pontos aqui significam resto da operação// Após ser dado o resto da função não pode ser mais possivel adicionar mais valores após isso
    // console.log(arguments);
    for(let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador += numero;
        if (operador === "*") acumulador += numero;
    }
    console.log(acumulador);
}
conta("+", 0, 20, 30, 40);