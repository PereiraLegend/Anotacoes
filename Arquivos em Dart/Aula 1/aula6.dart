void main() async{ // Adicionando o asyc eu transformo tudo (todo o método em uma "Future")
  // Future, Async e Await
  
  String nome = "Lucas";
  late String cep;
  // Se fosse para ser feito apenas com String seria assim:
  // String cep = getCepByName("Rua dos Bobos");
  // E com uma "Future" fica assim:
  Future<String> cepFuture = getCepByName("Rua dos Bobos");
  // Printando como uma String normal ficaria assim:
  // print(cepFuture);
  // Como agora é uma "Future" se eu colocasse o ultimo "print" ele daria o resultado de "Instance of 'Future<String>'"
  // cepFuture.then((result) => print(result));
  // print(cepFuture); // Aqui o resultado foi printado

  cep = await cepFuture; // Como todo o método foi transformado em async em coloco o await // O await é colocado para "aguardar" enquanto o await for resolvido
  // quando o await for resolvido ele devolve para o set o valor a ser devolvido que nesse caso é uma string
  print(cep); // Como cep é uma late se eu executar o arquivo sem inicializar ela ele dará um erro de variável não inicializada

}
// Aqui defino um objeto do tipo "Future", onde ele vai fazer uma requisição e após essa condição ser determinada agente consegue retornar o valor desse objeto
// Então o retono é do tipo "Future<String>" e não do tipo "String"
Future<String> getCepByName(String name){
  // Simulando uma requisição na internet
  // Se fosse uma string normal seria: "return "0000000";"
  // Mas como agora é uma "Future":
  return Future.value("0000000"); 
}