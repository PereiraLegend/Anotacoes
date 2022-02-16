// Uma factory function Aula seção 04 video 75
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {// O método factory guarda vários desse tipo
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor){ 
            valor = valor.split(" ");//Com essa função, a cada espaço esse nome vai ser dividido e retornar um array para min
            this.nome = valor.shift();//Esse shift fará duas coisas, primeiro ele retornará um valor para min, e segundo ele apagará o outro valor
            this.sobrenome = valor.join(" "); // Com isso o sobrenome também é mudado
            console.log(valor);
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`; // Obs.: o this aqui sempre aponta para qual ele está envolvido
        },
        altura: altura,
        peso: peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("Maria","Clara", 1.6, 42);
console.log(p1.fala('falando sobre js'));
console.log(p1.imc());
console.log("----------------------------------");
console.log(p1.nomeCompleto);// retorna o nome completo, está sem o parênteses, pois foi usado o "get"
p1.nomeCompleto = "Pedro Matias Alfredo";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);