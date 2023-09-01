// Trabalhando com objetos

void main(){
  Carro mercedes = Carro("mercedes");
  Carro gol = Carro("gol");
  //Para acessar o valor de um objeto basta usar o ponto "."
  //Se eu utilizar o mesmo assim:
  mercedes._segredo; // Eu acabo tendo acesso á variável 
  // Isso acontece porquê no dart todas as classes privadas são ocultas a outros arquivos .dart
  // Ou seja, se eu tenho um carro.dart e tenho objetos privados que começam com undeline "_" dentro dele,
  // na minha classe pessoa.dart eu não consigo enchergar os atributos privados do meu "carro"
  // se eu quiser preservar algo que apenas o próprio arquivo tenha acesso eu uso o encapsulamento, pois 
  //por padrão todos os objetos são públicos
  //mercedes.valorDoCarro = 10; //Aqui ele não vai conseguir abrir sem um método setter, mas não vai conseguir atribuir valores para esse atributo que está protegido e não possui um setter
}

class Carro {
  final String modelo;
  // Encapsulando objetos
  // Para deixar encapsulado (privado) adiciona-se o "_" antes do nome da variável
  String _segredo = "Muito Dinheiro";

  // Métodos Getters e Setters
  int _valor = 1000;
  int get valorDoCarro => _valor; //Dessa forma o valor da variável fica pública

  //Para permitir a alteração de valor
  // Obs.: O "=>" é uma arrow function
  void setValue(int valor) => _valor = valor;

  Carro(this.modelo);
}