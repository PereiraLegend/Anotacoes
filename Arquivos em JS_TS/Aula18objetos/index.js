// No JS Criamos nossos objetos dessa maneira:
const nome01 = "Luiz";
const sobrenome = "Miranda";
const idade01 = 25;

const nome02 = "Maria";
const sobrenome02 = "Oliveira";
const idade02 = 55;
// Se eu quisesse criar mil pessoas, eu teria que criar variavéis para cada uma das mil, no caso seria mais viável criar um objeto
// Preste bem atenção, colchetes é um array e chaves um objeto
// Para visualizar as pessoas de cima diferente de criar uma variável para cada pessoa e atributo dessas pessoas, eu crio o objeto pessoa1 para armazenar os valores
const pessoa1 = {
    nome: 'Luiz', sobrenome: 'Miranda', idade: 25
};
// Visualizando os atributos dos objetos:
console.log(pessoa1.nome); // Vai mostrar o nome
console.log(pessoa1.sobrenome); // Vai mostrar o sobrenome

// Contudo, ainda mesmo com isso, o código ainda não foi melhorado, ou seja teremos que criar mil objtos no caso
// então para contornar isso, eu posso criar uma função que cria esses objetos para min:
/**
 * Para simplificar a função abaixo também posso colocar:
 * function criaPessoa (nome, sobrenome, idade) { 
 *      return {nome, sobrenome, idade}; // Observe que se eu não defino os parâmetros, ou coloco eles com o mesmo nome, o próprio JS reconhece como os mesmos, por isso ele deixa que fique dessa forma a função
 *  }; 
 */
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa001 = criaPessoa("Luiz", "Otávio", 25);
const pessoa002 = criaPessoa("Mário", "Ayala", 16);
const pessoa003 = criaPessoa("Amanda", "Sousa", 34);
const pessoa004 = criaPessoa("Matias", "Ferreira", 53);
const pessoa005 = criaPessoa("Escobar", "Nascimento", 25);
console.log(pessoa001.nome, pessoa002.nome, pessoa003.nome, pessoa004.nome);// E assim por diante

// Posso colocar também funções dentro de um objeto:
const pessoa0001 = { // aqui eu crio um objeto
    nome: "Luiz",
    sobrenome: "Carvalho",
    idade: 25,

    fala(){ // Aqui eu crio um método
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // Nessa contexto eu peho o valor de nome e sobrenome usando o this
    },

    falaIdade(){
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        ++this.idade;
    }
};
pessoa0001.fala(); // Aqui eu invoco uma função
pessoa0001.falaIdade();
pessoa0001.incrementaIdade(); // Aqui eu incremento a idade da pessoa
pessoa0001.falaIdade(); // aqui eu faloa a idade da pessoa // O resultado é de 25 ele passa para 26