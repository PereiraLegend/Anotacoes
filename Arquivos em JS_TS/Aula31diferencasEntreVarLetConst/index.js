let nome = "Luiz";
var nome2 = "Luiz";
// let nome = "Ana"; // Não posso redeclarar a variável let como outro valor
// var nome2 = "Otávio"; // Aqui também daria erro
console.log(nome , nome2);

const verdadeira = true;
if (verdadeira) {
    let nome = "Otávio"; // Porque dá certo se o let devia estar errado?
    // A Questão é que o let tem escopo de bloco, ou seja { ... bloco}
    // Var só tem escopo de função
    // Ou seja, aqui dentro deste bloco agente está criando outra variável com o mesmo valor de nome
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = "Outra coisa";
        console.log(nome,nome2); // Ou seja a cada bloco é uma variável diferente 
    }
}

console.log(nome , nome2);

console.log("--------------------------------------");
// Se formos conparar com a parte de cima, o let só existre dentro do bloco, mas o var é modificado

let _nome = "Luiz";
var _nome2 = "Luiz";

if (verdadeira) {
    let _nome = "Otávio";
    var _nome2 = "Rogério";

    if (verdadeira) {
        var _nome2 = "Ronaldo";
        let _nome = "Outra coisa";
    }
}

console.log(_nome, _nome2);

// Em funções

function falaoi(){
    var ssnome = "Luiz"; // Como a vaiável esta dentro da funçãoe ela não pode ser acessada de fora dela
    console.log(ssnome); // Não posso colocar esse console.log fora da função pois ele vai dar erro
}

falaoi();

// Se eu declarar uma variavel e só depois declarar ela usando o var o leitor js vai dar como undefined