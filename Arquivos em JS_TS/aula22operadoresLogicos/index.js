/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÂO
*/
console.log(true && true && true); // No AND todas as expressões precisam ser verdadeiras
console.log(true && false && true); // Se uma for falsa, o resultaod final será falso
// obs.: Também posso jogar dentro de uma expressão
console.log("------------------");
console.log(true || false || false); // No OR pelo menos uma tem que ser verdadeira para retornar verdadeira
console.log(false || false || false); // se todas forem falsas, então o retorno será false
console.log("------------------");
console.log(!true); // O NOT nega o resultado, ou seja ele transforma no inverso
console.log(!false); // Ele retorna o inverso
console.log("------------------");
console.log(!!true); // Aqui eu neguei duas vezes o mesmo valor, o que fará ele resultar em true novamente
console.log(!!false); // Aqui eu fiz o mesmo que o de cima
// também posso mesclalas
console.log("------------------");

console.log(!true && false || true); // A lógica segue do NOT, para o AND e por último o OR