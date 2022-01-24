/* 
try {
    // É executada quando não há erros
} catch (e) {
    // É executada quando há erros
} finally {
    // Sempre vai ser executado, seja dando erro ou não
}
*/
try {
    // se eu colocar um erro pequena aqui em cima:
    //console.log(a);
    console.log("TRY: Abri um arquivo");
    console.log("TRY: Manipulei o arquivo");
    console.log("TRY: Fechei o arquivo");
    // Posso ter um tryCatch dentro de um try catch
    try {
        console.log(b);
    } catch (e){
        console.log("CATCH 02: Deu Erro");
    }
} catch (e) {
    // com o pequeno erro acima ele vai executar o catch
    console.log("CATCH: Tratando o erro");
} finally {
    console.log("FINALLY: Eu sempre sou executado");
}
console.log("---------------------------------------------------------------------");
// No código baixo ele vai retornar a hora atual:
function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando uma instãncia de Date.");
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString("pt-BR", {
        hora12: false
    });
}
const hora = retornaHora();
console.log(hora);