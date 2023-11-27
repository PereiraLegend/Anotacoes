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