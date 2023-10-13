void main(){
  // Tratamento de Erros
  try { // tentar alguma coisa
    print((2/0).toInt());// Essa divisão por 0 dará erro // o "toInt()" foi adicionado porquê toda divisão no dart vai retornar um double
  } catch(e, stackStrace) { // capturar a falha // O catch pode receber até dois parâmeteos, o primeiro parâmetro é o erro, o segundo é a pilha de erro
    print("===============================================================");
    print("Deu erro");
    print("===============================================================");
    print(e); // Chamando o parâmetro assim ele mostrará o erro que ocorreu
    print("===============================================================");
    print(stackStrace); // Aqui ele vai "printar" a pilha de erro
    print("===============================================================");
    // Caso eu queira propagar o erro, ou seja não quero tratar, ("Quero que quem tratou propague") eu utilizo o rethrow
    print("printando o erro $e");
    //rethrow; // propagando o erro, e tudo o que vem depois desse comando não é executado
    // Caso eu não queira propagar um erro, ou seja eu quero devolver uma exception falando algo
    //throw Exception("Ocorreu um Erro"); // retornar um novo erro
    // Aplicando a excessão de erro customizada
    throw CustomError("Erro Customizado"); // Se for colocado apenas assim ele irá retornar uma "Instance of 'CustomError'"
  }
}
// Construindo a própria excessão de erro
class CustomError implements Exception {
  final String error;
  CustomError(this.error);
}