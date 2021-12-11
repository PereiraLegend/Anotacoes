// Para fazer o exercicio abaixo há duas formas:
// A primeira: ↓
let varB = 'B'; // C
let varA = 'A'; // B
let varC = 'C'; // A
console.log(varA, varB, varC);
const Avar = varA;
varA = varB;
varB = varC;
varC = Avar;
console.log(varA, varB, varC);
console.log('-----------------');
// Ou posso fazer assim: ↓

let varD = 'D';
let varE = 'E';
let varF = 'F';
console.log(varD, varE, varF);
[varD, varE, varF] = [varE, varF, varD]
console.log(varD, varE, varF);