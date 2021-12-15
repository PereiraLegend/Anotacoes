/*
&& -> false && true -> false "o valor mesmo"
|| -> sempre vai retornar o valor verdadeiro

FALSY - valores que avaliam em falso quando necessário

*false
0
'' "" ``
null / undefined
NaN

*/
console.log("Luiz almeida" && 0 && "Maria"); // vai retornar apenas "o valor mesmo", ou seja o 0
// Se
console.log("Luiz almeida" && true && "Maria"); // vai retornar o último valor, onde houve que todos foram "true", e por isso ele vai retornr o valor da ultima
console.log("------------------");
// Tudo abaixo é "Nagativo" para o JS
console.log("Luiz" && "" && "Maria"); // Vai mostrar o "" que é um valor falso quando necessário, onde observe que se fosse negativo ele retornaria o último valor visto, "Maria"
console.log("Luiz" && '' && "Maria");
console.log("Luiz" && `` && "Maria");
// Obs.: Na execução as três linhas acima vão ficar vaizas, pois tudo aqui está como FALSY e negativo
console.log("Luiz" && null && "Maria");
console.log("Luiz" && undefined && "Maria");
console.log("Luiz" && NaN && "Maria");
console.log("------------------");
console.log(0 || false || null || "Luiz Almeida" || true); // O OR sempre vai retornar o valor verdadeiro, ou seja "Luiz Almeida"
