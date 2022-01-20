// While e Do While

// Para fazer a contagem até o 10
let i = 0;

while (i <= 10) { // While significa enquanto ele estiver...
    console.log(i);
    i++;
}
//
console.log("------------------------------");
// Para separar as letras dos nomes em linhas diferentes
const nome = "Luiz";
let e = 0;
while (e < nome.length) {
    console.log(nome[e]);
    e++;
}
//
console.log("------------------------------");
//Essa função serve para pegar um número aleatório entre min e max
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);// A função Math.floor() serve para arredondar um número
}
const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);
console.log("A condição de o rand ser diferente de 10 é", rand !== 10);
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log("------------------------------");
// a diferencça de While e Do while é que o While checa a condição e depois executa o código, ou seja "enquanto acontecer alguma coisa ele faz alguma coisa"
// no caso do Do While ele primeiro faz a coisa e depois checa, ou seja, ele vai checar o código primeiro e depois checar a condição
 do {
    rand = random(min, max);
    console.log(rand);
 } while(rand !== 10);