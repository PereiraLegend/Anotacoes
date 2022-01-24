// Try, Catch, Throw
//Se eu tentar criar um erro, como por exemplo uma variável que não existe:
try {// Aqui diz: "se não funcionar"
    console.log(naoExisto);// Essa variável não existe
} catch (err) { // "então execute"
    console.log("Essa variável não existe.");
}
//---------------------------------------------------------
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------");
function soma(x,y) {
    if (typeof x !== "number" || typeof y !== "number") {
        //throw("x ou y precisam ser números."); // No caso ele mostra o "caminho" do erro
        //Para caso eu queira colocar um objeto error
        throw new Error("x e y precisam ser números."); // Com isso temos um erro igual ao javascript
    }
    return x + y;
}
console.log(soma(1,2));
console.log(soma("a",2));

try {
    console.log(soma(1,2));
    console.log(soma("1",2));
} catch(error) {
    console.log(error);
}