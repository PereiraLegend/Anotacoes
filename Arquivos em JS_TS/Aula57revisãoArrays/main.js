const nomes = ['Eduardo','Maria','Joana'] // Ou pode ser também digitado assim: "const nomes = new Array("Eduardo","Maria","Joana");"
nomes[2] = "João"
console.log(nomes)
delete nomes[2]
console.log(nomes)
console.log("---------------------------------------------------------")
// Por referencia
const novo = nomes // Aqui tudo o que acontece em novo reflete em pop
novo.pop()
console.log(nomes)
console.log("---------------------------------------------------------")
//Agora se eu fizer uma cópia direta do nomes, e fizer uma mudança, ela só vai alterar a cópia
const novo2 = [...nomes]
novo2.pop()
console.log(novo2)// a cópia perde um índice
console.log(nomes)// o original continua normal
console.log("---------------------------------------------------------")
//para ver o tamanho do array
console.log(nomes.length)
// Também posso colocar comandos dentro de variáveis 
const nomes2 = ["Eduardo","Maria","Joana"]
const removido = nomes2.pop() //Aqui eu joguei dentro da variável // também posso trocar o pop por shift, que ao invés de retirar o último indice do array, ele tira o primeiro
console.log(nomes2, removido) // Aqui eu removo um dos indices do array, e o mostro o que foi removido
console.log("---------------------------------------------------------")
//Para adicionar mais coisas ao array utilizo o push
nomes2.push("João")
nomes2.push("Carlos")
console.log(nomes2)
// Para caso eu queira adicionar mais coisa, só que no inicio do array
nomes2.unshift("Edinaldo")
console.log(nomes2)
console.log("---------------------------------------------------------")
// Posso também fatiar os meus arrays
console.log(nomes2)
const novo_ = nomes2.slice(1, 3) // Aqui eu fatio até o elemento dentro do slice, mas o último elemento nunca é mostrado, e para fazer de trás pra frente, basta colocar valores negativos
console.log(novo_)
console.log("---------------------------------------------------------")
// Para converter um nome em uma string
const nome = "Luiz Otávio Miranda"
console.log(nome)
const nomes_ = nome.split(" ") // No caso o split mostra o fator de separação para a string, e no caso na constante nome é o espaço, também pode ser a virgula ou qualquer outra coisa
console.log(nomes_)
// Agora e se quiser fazer o contrário?, ou seja fazer com que o array vire uma string
const nomevv = [ 'Luiz', 'Otávio', 'Miranda' ]
const _nomes = nomevv.join(" ") // Aqui mostra o que é que vai definir o separador, no caso esse foi dado como espaço
console.log(_nomes)
