const num1 = [1,2,3]
const num2 = [4,5,6]
const a3 = num1 + num2
// Se eu tentar concatenar usando o método convencional:
console.log(typeof a3) // Primeiro que o type of de ae é string
console.log(a3) // segundo ele junta om 3 ao 4 como uma string
console.log("-------------------------------------")
// Para isso existe um método próprio:
const a4 = num1.concat(num2) // Com isso se torna possivél a concatenação
console.log(a4)
console.log("-------------------------------------")
//Agora se eu quiser adicionar mais coisas
const a5 = num1.concat(num2, [7,8,9], "Lucas") // Observe que posso adicionar mais dos diversos métodos ai dentro, que serão adicionados
console.log(a5)
console.log("-------------------------------------")
// Também há outra maneira de concatenação com o rest operator
// ... rest -> ... spread
const a6 = [...num1, ...num2] // Desse jeito é dado a concatenação entre os dois valores
console.log(a6)
// E se eu quiser adicionar mais valores no meio
const a7 = [...num1, "Lucas", ...num2, [20,30,40], ...[20,30,40]]// Observe que no [20,30,40] foi um array literal e ele o armazenou em um único espaço da string, mas se eu qusier adiciona-lo eu uso o spread operator "..." antes do memso
console.log(a7)
