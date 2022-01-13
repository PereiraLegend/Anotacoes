// ? :
const pontuacaoUsuario = 999;
if (pontuacaoUsuario>=1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal");
}
// Para diminuir ou "Encurtar" a expressão acima poderiamos fazer dessa forma
// (condicao) ? "Valor para verdadeiro" : "Valor para falso";
const pontuacaoUsuario2 = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal"; // As duas últimas mensagens dessa linha se referen a "se" e "se não"
console.log("nivelUsuario");

const corUsuario = null;
const corPadrao = corUsuario || "Preta"; // Ao final se for nula a cor é preta, pois ela vem depois depois do ou
console.log(nivelUsuario, corPadrao)