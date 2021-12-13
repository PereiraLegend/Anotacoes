// Funções executam ações, para eu criar funções:
function saudacao() {
    console.log('Bom dia!');
};
saudacao();
// Obs.: Tudo o que está dentro da função está "Protegido", ou seja, eu não consigo acessar o que está dentro da função fora a função
// Eu também posso criar parâmetros dentro da minha função:
function saudacao2(nome) {
    console.log(`Bom dia ${nome}!`)
};
saudacao2("Lucas"); // Essa função é reutilizável, ou seja, posso chamar em qualquer lugar do código, também posso passar qualquer parâmetro que eu queira
saudacao2("Luiz");
saudacao2("Bruna");
// Algo no navegador
console.log("--------------------")
function saudacao3(nome) {
    console.log(`Bom dia ${nome}!`)
    //Se eu quiser que a minha função retorne um valor
    return nome;
};
const variavel = saudacao3("Luiz");
console.log(variavel); // Vai retornar como undefined se a função não retornar nenhum valor

// Para simplificar, eu posso pegar o de cima e simplificar para o de baixo
console.log("--------------------")
function saudacao4(nome) {
    return `Bom dia ${nome}!`;
};
const variavel2 = saudacao3("Luiz");
console.log(variavel); // Vai retornar como undefined se a função não retornar nenhum valor
// Função para a soma de dois valores:
function soma(x, y) {
    const resultado = x + y;
    return resultado;
    // Uma reslava sobre as funções, tudo o que é escrito abaixo de return  não é executado, ex:
    //console.log('Escobar'); // não será executado pela função, apenas o que vem antes
}
console.log(soma(2,2));
console.log(soma(5,7)); // Se você prestar atenção eu tenho acesso ao valor do resultado, mas não tenho acesso a variável resultado
// console.log(resultado); // Vai dar erro, pois não tenho acesso a nada do que está dentro da função
// Obs.: Esse 'resultado', só existe dentro da função, então posso criar fora da função uma constante resultado, onde anbos serão bem diferentes:
const resultado_ = soma(2,2); // obs.: adicionei o '_' para o VScode parar de acusar erro 
console.log(resultado_); // Não dará erro
console.log("--------------------")
// se eu colocar o valor da função vazio dentro da chamada dela:
function soma2(x, y) {
    const result = x + y;
    return result;
}
const result = soma();
console.log(result); // Vai retornar um NaN
// Para não dar o erro de cima, eu posso predefinir um valor caso não seja digitado nada
function soma3(x = 1, y = 1) {
    const resulta = x + y;
    return resulta
}
const resulta = soma3();
console.log(resulta);
// Mais modos de criar funções
const raiz = function (n){ // no caso isso vai criar uma função anônima
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(4));
// Também posso declarar assim:
const raiz2 = (p) => { // Isso chamasse arrow function
    return p ** 0.5;
}
console.log(raiz2(81))
// Simplificando a de cima, no caso se ela tiver apenas um parâmetro, e usado para simplificar a vida do programador:
const raiz3 = n => n ** 0.5; // acredite ou não, isso é uma função
console.log(raiz(64));