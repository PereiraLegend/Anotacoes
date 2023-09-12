//Abstração, Herança e Polimorfismo
//Obs.: O Dart não possui interfaces, o que ele possui são abstract class, que seriam exatamente mais ou menos uma interface
//Obs.: em resumo é um contrato que alguém deve seguir
void main(){


  //Parte de herança
  David david = David();
  david.falar();
  print(david.falar()); //Aqui eu consigo acessar o ".falar()" pela herança da classe "pai" para a classe "filho"

  //Parte Polimorfismo
  // No polimorfismo o objeto pode assumir diferentes respostas
  Pagamento pagamento = PagarComBoleto();
  pagamento.pagar();

  pagamento = PagarComPix();
  pagamento.pagar();
}

//Abstração
abstract class Pessoa{ //Aqui crio uma classe abstrata
  String comunicar(); // Eu não faço a implementação disso // Isso é um método

}

class PessoaET implements Pessoa { //Aqui eu implemento a Pessoa a PEssoaET
  String comunicar() {
    return "Olá Mundo";
  }
}

class PessoaNaoET implements Pessoa {
  String comunicar(){
    return "Bom Dia";
  }
}

//Herança
class Pai{
  String falar(){
    return "Girias";
  }
}

class David extends Pai { // Aqui eu extendo uma classe para herdar as suas caracteristicas

}

//Polimosfismo

abstract class Pagamento {
  void pagar();
}

class PagarComBoleto implements Pagamento {
  void pagar(){
    print("Pagando com boleto");
  }
}

class PagarComPix implements Pagamento {
  void pagar(){
    print("Pagando com pix");
  }
}