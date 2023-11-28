// Video Referência : https://www.youtube.com/watch?v=lCemyQeSCV8
/**
 *  Para que esse arquivo typescript seja compilado preciso iniciar ele no terminal
 *  com o comando "tsc --init" ele criará um arquivo de configuração
 */
/**
 * Para compilar esse arquivo typescript é necessário mudar no arquivo de configuração o:
 * Diretório de Saída:
 * "rootDir": "./" para "rootDir": "./src"
 * Diretório de Deploy:
 * "outDir": "./" para "outDir": "./dist/js"
 */
/**
 * Após isso basta digitar tsc no terminal que ele fará a compilação do arquivo javascript para o
 * typescript, onde podemos ver que a pasta "js" e o arquivo "index.js" foram gerados, onde podemos
 * ver que ele imprimiu exatamente a mesma coisa (Obs.: Nem sempre vai ser assim, pois algumas 
 * funcionalidades serão transferidas de outra forma no javascript, e se elas não fizeram diferença
 * nem mesmo aparecerão no arquivo gerado)
 */
/**
 * Para fazer a compilação automática basta digitar "tsc -w" que qualquer alteração é compilada 
 * instântaneamente
 */
/**
 * O typescript é uma extensão do javascript
 */
/**
 * O typescript trabalha com uma linguagem não dinâmica
 */
/**
 * Na maioria das vezes podemos escrever todos os códigos em javascript normal, sem 
 * se preocupar com o typescript, mas para algumas questões é bom incluir o typescript
 * para poder adicionar a padronização de código
 */
/**
 * Ou seja para declarar uma variável em typescript é o mesmo que declarar em javascript
 */
let x = 10
/**
 * Agora para definir a tipagem em umargumento/parâmetro basta eu definir:
 */
const y:number = 20 // São as tipagens: number, string, boolean, ...
console.log(y)
/**
 * Agora se eu tentar mudar a tipagem da mesma forma que eu posso fazer no javascript:
 * let y:number = 10 // Aqui é pré estabelecido um padrão
 * y = 'teste'
 * console.log(y)
 * Não só daria erro como também o compilador acusaria o erro antes mesmo de o arquivo ser executado
 * Normalmente ele nem mesmo mostraria esse código pois está errado
 */

// Outras funcionalidades do typescript:

/**
 * Inferência x Anotation:
 * São duas maneiras de definir um valor com um tipo que no caso é por inferência ou por anotation:
 * Para criar uma váriável basta digita-la e informar o valor, ex.:
 */
let z = 12
/**
 * Ao declarar um tipo da variável, como na linha 38 e 60 desse código estou criando uma anotation, o 
 * que diminui o código gerado, mas se eu tento mudar o dado por inferência, como por exemplo:
 * z = "teste" // Eu não consigo mudar, como se ele estivesse tipado, pois ele foi definido por inferência como
 * um número, ou seja é praticamente como fazer a mesma coisa abaixo:
 * let q:number = 12 // Isto seria uma anotation, na prática, anbos tem a mesma função e fazem a mesma coisa
 */

/**
 *  Tipos Básicos:
 * São os tipos que utilizamos no dia a dia:
 */
let PrimeiroNome: string = "Marcelo"
let idade: number = 20
const eAdmin: boolean = true

/**
 * Temos também os objetos que são escritos com letras maiúsculas e os tipos que são letras minúsculas
 * String != string
 */
console.log(typeof PrimeiroNome)
console.log(PrimeiroNome)
PrimeiroNome = "Thomas"
console.log(PrimeiroNome)

/**
 * Há também os tipos chamados objetos //Object
 * que são os arrays, listas
 */
const contagem = [1,2,3,4,5]
console.log(contagem)
console.log(contagem.length)
/**
 * Também  posso fazer criar a variável da contagem assim:
 * const contagem: number[] = [1,2,3,4,5]
 */
/**
 * Se eu tentasse utilizar um método que não existe em um array, ele também não teria um resultado correto:
 * console.log(contagem.parseFloat()) // Daria erro
 * console.log(contagem.toUpperCase()) // Daria erro
 * Anbos irão dar erro pois não tem como usa-los em listas
 */
/**
 * Várias ferramentas aparecem e ao continuar criando o código o que facilita a programação no typescript
 */
/**
 * Se eu quiser adicionar um elemento também vai dar para adicionar:
 */
contagem.push(10)
console.log(contagem)
/**
 * No caso de tuplas posso pré determinar o que vai ser posto, por exemplo:
 * (E quando eu predeterminar os valores deve ser feito exatamente na ordem)
 */
let tupla: [number, string, string[]] = [8, "Carlos", ["Azul", "Vermelho"]]
/**
 * Ao predefinir valores eu não posso alterar eles depois, como por exemplo:
 * tupla = [true,false, true] // Aqui estou passando um código booleano, o que não corresponde ao que passei como
 * parâmetro, outro erro que o ts acusaria
 */
/**
 * Objects Literals
 * Isso foi algo que eu foi definido e eu não posso mudar a forma dele, ou seja é um objeto literal, que é uma instância
 * de uma classe determinado por alguma propriedade valor, aonde tem um formato:
 * objects literals -> {pronpt: value}
 * Ex.:
 */
const pessoa: {nome: string, idade: number} = {
    nome: "freitas",
    idade: 18,
}
console.log(pessoa)
// Posso checar as propriedades dele:
console.log(pessoa.nome)
/**
 * Se eu tentasse aplicar mais uma propriedade daria erro:
 * pessoa.emprego = "Empresário"
 */
/**
 * Any:
 * Any aceita qualquer tipo de dado, ou seja, posso redefinir o valor da variavél depois de ele ser usado
 */
let g: any = 0
console.log(g)
g = "Tijolo"
console.log(g) // Posso alterar o valor e tipo da variável ao meu beel prazer
// O any vai contra a filosofia do typescript, pois torna as variáveis flutuantes
/**
 * Union Type
 * É usado quando eu não se quanto tipos de dados uma solução irá ter, então para trabalhar com o mais
 * complexo eu utilizo o union type, que serve para passar ou um parâmetro ou outro parâmetro de tipo:
 */
let id: string | number = 10
/**
 * Agora se eu fosse redefinir essa variável eu só poderia redefinir como string ou number, outros como o
 * boolean ficariam de fora
 */
console.log(id)
id = "20" //Se eu definisse como um "true" daria erro
console.log(id)
/**
 * Type Alias
 * Há outro recurso chamado type alias, com ele posso determinar o nome de um tipo especial, ou seja, posso
 * predefinir os tipos usados e chamalos utilizando apenas um fator, Ex.: na linha 153, eu passo o "string" ou
 * o number, para evitar colocar os dois, eu crio um função que os armazena:
 */
type tipoId = number | string
const usaId : tipoId = 50
console.log(usaId)
/**
 * É bem util para colunas de bancos de dados para resumir a informação, ou tipagens complexas e bem mais
 * especificas, podendo chamalos para outras variaveis que façam coisas diferentes, mas que necessitam de um tipo
 * ou de number ou de string
 */
/**
 * Enum
 * Outra funcionalidade é o enum, ele enumera uma coleção e consegue utilizar dados mais complexos de formas mais
 * simples, por exemplo: Tenho que determinar no sistema o tamanho de roupas, mas não quero ficar escrevendo, por
 * exemplo: tamanho de roupas (tam: Médio, tam: Pequeno), e quero ter uma forma mais simples de se referenciar esses
 * tipos de roupas, então vou criar:
 */
// Tenho a opção de criar um objetopara poder enumerar os tipos
enum Tam {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}
// E como poderei referenciar em um site que tem um objeto chamado:
const camisa = {
    nome: "Camisa de gola",
    tam: Tam.M // Faço isso a partir do objeto referênciado
}
// E o resultado vai ser:
console.log(camisa) // Pode haver outras formas simples, mas essa é a mais simples

/**
 * Literal Types
 * No literal types eu posso determinar um valor com um tipo, ou seja, eu posso determinar que a variável aceite
 * apenas um valor, ou seja o literal types é um valor para um tipo
 */

let teste: "aleatoriovalor"
/**
 * No exemplo acima, apesar de ser um let eu não consigo mudar para algum valor que não seja o valor acima:
 * teste = "valorqualquer" // Isso daria erro
 * Ou seja, é um valor literal para um tipo, e a unica forma de mudar isso é colocando:
 */
teste = "aleatoriovalor" // E dessa forma estaria certo
/**
 * Geralmente é bem utilizado com null, para que eu possa inicial a variável, como por exemplo:
 */
let teste2: "valoral" | null
teste2 = null // ou "valoral"
/**
 * A utilidade disso é por exemplo em uma autenticação, onde isso fica como uma flag mostrando que o usuário está
 * logado ou autenticado
 */
/**
 * Funções
 * Com as funções posso fazer argumentos, por exemplo:
 */
function sum(n:number,m: number){ // Se eu colocar apenas as variáveis de entrada de dados o typescript acusará como erro, e por isso devo passar os tipos delas
    return n + m
}
console.log(sum(12,12))
/**
 * Agora se eu passar um boolean ou uma string para a função ele dará erro, por conta da tipagem da função que eu defini
 */
// Eu tembém posso tipar o retorno de uma função, por exemplo:
function fale(name: string): string{ // Ao definir tipo, nesse caso foi uma string após os parênteses, eu defimno o retorno dela, independente se o valor de entrada dela for outro
    return `Hello ${name}` // O retorno obrigatóriamente terá de ser no tipo definido após o parênteses
}

console.log(fale("Lucas"))
/**
 * E se eu quisesse tipar uma função que não tem um retorno explicito:
 */
function semRetorno(msg: string): void{ // Posso passar o void como opcional // Mas ele explicita que essa função não tem retorno
    console.log(msg) // O Typescript não vê problemas nisso
}
semRetorno("Teste!")
/**
 * E se eu quiser argumentos opcionais para a função:
 */
function opcional(name: string, tratamento?: string){ // Para eu dizer que o "tratamento" não é opcional sempre eu coloco o "?" antes dos dois pontos
    console.log(`Olá ${tratamento} ${name}`)
}

opcional("Lucas") // Se eu colocar apenas isso ele vai retornar um undefined, no caso um erro de lógica de referência // E para isso preciso tratalo
// Como tratar:
function opcional2(name:string, tratamento?: string){
    if(tratamento){ // Com isso faço o tratamento de dados // Verifico se o argumanto vem ou não vem
        console.log(`Iaé ${tratamento} ${name}`)
    } else {
        console.log(`Iaé ${name}`)
    }
}
opcional2("Carlos")
opcional2("José","senhor")

/**
 * Interfaces
 * Elas basicamente padronizam algo para podermos reutilizar como tipo
 * Abaixo crio uma interface para funções matemáticas
 */
interface ParametrosMatematicos { // Aqui defino funções matemáticas que aceitam dois dados numéricos
    n1: number,
    n2: number
}
// Para acessar n1 e n2 que são objetos eu uso funções:
function somnumeros(nums: ParametrosMatematicos) { // Aqui eu tipo a passagem de dados para esta função chamando a interface, ou seja chamo para ela dois objetos numéricos
    return nums.n1 + nums.n2
}
// Para executar essa função eu passo:
console.log(somnumeros({n1:1, n2:2})) // Aqui eu passo os objetos
/**
 * Isso nos ajudar a passar os argumentos de maneira externalizada, para que possamos reaproveitar em outras funções
 * Por exemplo, vou criar outra função que reaproveite os mesmos valores:
*/
function mulnumeros(nums: ParametrosMatematicos) {
    return nums.n1 * nums.n2
}
console.log(mulnumeros({n1:2,n2:3}))

/**
 * Com isso também consigo tipar variáveis:
 */
const somarNum:ParametrosMatematicos = {
    n1:5,
    n2:10
}
console.log(somarNum)
// Calculando:
console.log(somnumeros(somarNum))

/**
 * Narrowing
 * É um recurso mais teórico, serve para a checagem de tipos, ou seja, é a forma de garantir que um tipo que agente quer, chegue em uma determinada linha
 * de código para executar a lógica, o narrowing, ele foi feito na linha 251, onde ele chagou se vinha o "tratamento";
 * Fora isso temos o narrowing de typoff, por exemplo:
 */
function checar(info: number | boolean){ // Já que chega dois tipos de dados, e eles são opcionais eu devo tratálos quando o outro não vir
    if (typeof info === "number"){ // Aqui eu trato para onde deve ir a informação recebida de acordo com o tipo
        console.log(`O número é ${info}`)
    } else {
        console.log(`Não foi passado um número`)
    }
}
checar(5)
checar(true)

/**
 * Generics
 * No generics o tipo de dado não inporta, o que eu quero é executar uma função, onde ela trabalha com aquele tipo de dado, mas ele
 * pode ser qualquer um, no generic pode ser qualquer coisa, e pode ser usado em diferentes situações, ex:
 * tenho uma função que exibe itens de um array
 */
// Obs.: O objetvo é minimizar o uso do Any que já foi visto
function exibirIlista<T>(lista: T[]){ // Para trabalhar com generic abro "<>" e coloco algo que remeta a generic, como "T", e para dizer que o parâmetro dentro do array é genérico, abro ": T[]", aqui digo que trabalho com qualquer tipo de array genérico
    lista.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}
const r1 = [1,2,3]
const r2 = ["a","b","c"]
exibirIlista(r1)
exibirIlista(r2)
/**
 * Ou seja, quando tenho algo determinado por um tipo, eu tenho que sempre optar pelos generics
 */
/**
 * Entrando um pouco na orientação a objetos temos as classes:
 * No typescript podemos utilizar todas as funções das classes
 */
class usuario {
    nome 
    tarefa
    foiaprovado
    //Nas classes eu devo adicionar um método construtor para definir o tipo:
    constructor(nome: string, tarefa: string, foiaprovado: boolean) {
        // por inferência eu tipo os tipos da classe
        this.nome = nome
        this.tarefa = tarefa
        this.foiaprovado = foiaprovado
    }
    // Apenas com a parte de cima dessa class isso fará o que quero, mas também posso criar mátodos dentro dela
    falarnomeusuario () {
        console.log(`O nome do usuário é ${this.nome}`)
    }
    falaridadeusuario (mostrar: boolean) :void{ // Informações do void acima
        if(mostrar){
            console.log(`A idade do usuário é ${this.tarefa}`)
        } else {
            console.log(`Informação restrita!`)
        }
    }
}
const felipe = new usuario("Felipe","Admin",true)
console.log(felipe)
// Chamando o método criado dentro da classe
felipe.falarnomeusuario()
felipe.falaridadeusuario(false)
// interfaces em classes
interface Iveiculo { // por padronização as interfaces geralmente começam com "I" para indicar que é uma interface
    marca: string
    mostrarMarca(): void
}
class Car implements Iveiculo { // Aqui inplemento a interface na classe
    marca
    rodas
    constructor(marca: string, rodas: string){
        this.marca = marca
        this.rodas = rodas
    }
    // A interface dita como a classe vai se comportar
    mostrarMarca(): void {
        console.log(`A marca do carro é: ${this.marca}`)
    }
}

const fusca = new Car("VW", "4")
fusca.mostrarMarca()

/**
 * Herança
 * Quando herdamos uma classe
 */
class SuperCarro extends Car { // Quando herdo eu não preciso aplicar a interface // No caso aqui eu herdei da parte de cima disso
    motor

    constructor(marca: string, rodas:string, motor:number) {
        super(marca, rodas) //aqui passo os valores da classe pai
        this.motor = motor
    }
}
// Criando classes com herança:
const a4 = new SuperCarro("Audi", "4", 2.0)
console.log(a4) // Aqui mostra os valores herdados
a4.mostrarMarca() 

/**
 * Decorators
 * um recursoespecial do typescript, é muito utilizado para a validação de dados, no caso para construir um evento observável em algum ponto determinado de uma classe
 * ou de uma função, (Obs.: É um recurso bem complexo);
 * para utiliza-lo é necessário ir até o arquivo tsconfig.json e descomentar o ""experimentalDecorators": true, " para poder utilizar essa funcionalidade
 */
// constructor decorator
function parametrosBase (){
    return function <T extends {new(...args: any[]): {}}>(constructor: T) { // Squi devo trabalhar de forma que vasi ter classe diferentes interagindo umas com as outras
        // Crio toda a gabiarra acima para setar n classes
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        };
    };
}

@parametrosBase()

class pessoa2 { // Eu quero que isso automaticamente me gere um id e automáticamente me gere a data de criação disso, o que vai vir do sistema, ou seja, gerado de forma automática
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new pessoa2("sam")
console.log(sam)