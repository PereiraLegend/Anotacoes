// return
// Retorna um valor
// Termina um valor
function criaPessoa(nome,sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa("Luiz", "Otavio");
const p2 = {
    nome: "Joao",
    sobrenome: "Oliveira"
};

console.log(typeof p1);
console.log(typeof p2); // Aqui nessas duas variáveis criam objetos