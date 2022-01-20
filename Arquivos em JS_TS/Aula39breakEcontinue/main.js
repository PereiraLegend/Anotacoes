// Break e Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Para fazer a contagem normal
for (let numero of numeros){
    if (numero === 2 || numero === 5){
        console.log("pulei o numeor 2 e o numero 5"); // Observe que isso foi colocado antes do continue
        continue; // ao numero ser igual a 2 ele vai cair nessa condição, ou seja, assim que cair nessa condição, ele vai pular o "console.log(numero);" abaixo e repetir denovo o laço
    }

    if (numero === 7) {
        console.log("quebrei o loop no 7"); // Observe que esse "console.log" foi digitado antes do break
        break; // Aqui ele cancela o loop e sai do mesmo
    }
    console.log(numero); // Como o break foi dado antes, ele nem vai chegar a fazer este ultimo "console.log"
}
