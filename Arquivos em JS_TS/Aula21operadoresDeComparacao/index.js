/*
Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
== igualdade (valor) **********
=== igualdade estrita (valor e tipo)
!= diferente (valor) **********
!== diferente estrito (valor e tipo)
*/
console.log(10 > 5); // aqui vai retornar um valor booleano, ou seja, se 10 é maior que 5, o que vai dar true
// posso jogar o de cima em uma variável
const comp = 10 > 5
console.log(comp);
const comp_1 = 10 >= 5
console.log(comp_1); // Vai continuar como true, já que não é maior e nem igual a 10, senão daria false
const comp_2 = 10 < 11
console.log(comp_2)
console.log("------------------");
const num1 = 10;
const num2 = 11;
const comp__ = num1 < num2;
console.log(comp__);
console.log("------------------");
const num1_ = 10;
const num2_ = 11;
const com = num1_ == num2_ // não é recomendável o uso do == pois se for outro tipo de número, no caso uma string escrita um número, o JS daria como verdadeiro e leria a string como se fosse um número
console.log(com);
/**
 * const num1_ = 10; // number
 * const num2_ = "11"; // string// aqui foi escrito como uma string, mas o JS leria como um número normal, por conta de ter sido usado o ==
 * const com = num1_ == num2_;
 * console.log(com);
 */
console.log("------------1------");
const num_1_ = 10;
const num_2_ = "10";
const comp_0_ = num_1_ === num_2_;
console.log(comp_0_);
// E agora falando de != e !==
// o != e o !== seguem a mesma lógica de == e ===, ou seja, o normal lerá a string como um número, e o !== lerá pelo tipo
console.log("------------------");
const nun1 = 10; // Number
const nun2 = "10"; // String
const c = nun1 != nun2; // o resultado vai dar de que eles não são diferentes ou seja false
console.log(c);

const n1 = 10;
const n2 = "10";
const cn = n1 !== n2; // o resultado daqui vai dar de que eles são sim diferentes ou  seja true
console.log(cn);

// O recomendado é sempre utilizar o !== e o ===

