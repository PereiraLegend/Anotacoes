/*
Dados primitivos são (imutáveis) - string, number, boolen, undefined, null (bigint, symbol)
*/
// Mas como é que eu consigo mudar o let?
let nome = "Luiz";
nome = "otávio"; // No caso não foi uma mudança, foi uma substituição, onde o valor foi trocado, ou seje eu troquei "adesivos"
console.log(nome); 
// ex.: se eu tentar mudar apenas a string que foi posta:
let nome2 = "Luiz";
nome2[0] = "R" ;
console.log(nome2[0], nome2); // O R não será trocado
console.log("-------------------");
// Mas posso copiar o valor de uma variável para outra variável
let a = "A";
let b = a; // Aqui o a foi copiado por b
console.log(a,"|", b);
// agora se eu mudar a variável de a 
a = "Outra coisa";
console.log(a,"|", b); // o valor de b continua o mesmo
// Agora dndo uma olhada em valores que não são primitivos
// Dados por referência, eles são mutáveis - Array, Object, function - são passados por referÊncia, ou seja, ele aponta para o memso valor da memória
let a_ = [1,2,3]; // no caso aqui o dado é armazenado em um espaço na memória, e tanto a variável, quanto a cópia tem acesso a esse mesmo dado
let b_ = a_; // Cópia
console.log(a_,"|",b_);
a_.push(4); // Se eu adicionar mais um valor no array
console.log(a_,"|",b_); // Se você prestar bem atenção, anbos terão uma adição de 4, o que prova que ambos apontam pra o mesmo lugar na memória
// e se eu remover algo do b:
b_.pop();
console.log(a_,"|",b_); // o a tmabém será afetado, pois ambos apontam para o mesmo lugar na memória, ou seja, de ambos serão retirados algo

// Se eu qusier que o valor de b seja totalmente independente, então:
console.log("-------------------");
let a0 = [1,2,3];
let b0 = [...a0]; // aqui foi feita uma cópia sem referência, ou seja, apartir daqui o valor de b se tornou completamente independente

console.log(a0,"|",b0);
a0.push(4);
console.log(a0,"|",b0); // Só no a0 foi adicionado o valor
// No caso uando const
const az = {
    nome: "Luiz",
    sobrenome: "Otávio",
};
const bz = az;

az.nome = "João";
console.log(bz) // No caso aqui vai ter a alteração que houve em az, pois ambo apontam para o mesmo lugar na memória
// Se eu quiser que não tenha esse comportamento:
console.log("-------------------");
const ad = {
    nome: "Luiz",
    sobrenome: "Otávio",
};
const bd = {...ad};

ad.nome = "João";
console.log(bd); // Mesmo o a tendo sido alterado, o bd continua normal, sem alteração, pois foi dado uma cópia concreta para o mesmo
