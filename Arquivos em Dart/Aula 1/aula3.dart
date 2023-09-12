// Classes, Métodos e Atributos
void main(){
  // Criando Atributos
  Celular celularDoLucas = Celular("Azul", 500, 6.5, 6);
  Celular celularDoMarcos = Celular("Rosa", 300, 4.5, 4);
  Celular celularDaAna = Celular("Branco", 600, 6.7, 8);

  //Para chamar o nome de uma pessoa eu coloco o nome e o atributo;
  print(celularDoLucas.cor); // Aqui eu tenho um objeto de celular
  print(celularDaAna.toString()); // Retornando as strings
  print(celularDoMarcos.toString());
  //Aqui eu chamo o outro método criado, como é double a assinatura do método é feita de forma diferente
  print(celularDoLucas.valorDoCelular(1000)); // Com base na quantidade de processadores ele retorna um valor 
  // Posso atribuir isso tabém em uma variável
  double resultado = celularDoLucas.valorDoCelular(1000);
  print(resultado);
}

//Classes
//Isso também pode ser visto como um tipo de objeto conposto
class Celular {
  // Quando quero que o celular tenha valores normais eu declaro a string normal
  // Mas qunaod eu não quero que ela já tenha um valor padrão adicionamos final, ou seja, a responsabilidade de passar valores fica com o consultor
  final String cor;
  final int qtdPros;
  final double tamanho;
  final double peso;

  //Criando um construtor para o "Celular", para que ele crie celulares de acordo com a cor, a quantidade de processadores, o peso e o tamanho
  Celular(this.cor, this.peso, this.tamanho, this.qtdPros);

  //Retornando um Método
  String toString(){ //Aqui ele retorna uma string
    return 'Cor $cor, qtdPros $qtdPros, Peso $peso, Tamanho $tamanho';
  }
  double valorDoCelular(double valor){ //valor base do celular
    return valor * qtdPros;
  }
}

