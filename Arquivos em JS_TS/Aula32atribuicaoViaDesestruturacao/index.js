// Atribuição via desestruturação de Arrays
//               0 1 2 3 4 5 6 7 8
const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero, , quartoNumero, ...resto] = numeros; // Os três pontos siginificam o resto da opção
// Posso deixar um vazio caso eu não queira que me mostre aquela parte
console.log(primeiroNumero, segundoNumero, quartoNumero);
console.log(resto);
console.log("----------------------------------------");
// Atribuição via desestruturação de Objetos
const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};
console.log(pessoa);
console.log(pessoa.nome);

console.log("----------------------------------------");
const {nome = " ", sobrenome} = pessoa;
console.log(nome, sobrenome);

console.log("----------------------------------------");
//Se eu quiser alterar o nome da variável
//const {nome: n = " ", sobrenome} = pessoa;
//console.log(n , sobrenome);

// Aqui em baixo ele vai me dar o endereco
const {endereco: {rua, numero}, endereco} = pessoa; // Posso renomear uma rua colocando "rua = 12345" e se lá encima dentro do objeto estiver vazio a rua ela vai adotar esse valor como padrão
console.log(rua, numero, endereco);

console.log("----------------------------------------");
const {nome, ...resto} = pessoa;
console.log(nome, resto);