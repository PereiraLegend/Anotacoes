//O Dart é uma linguagem bastante tipada
//Pode ser usado para desenvolvimento web, miblie, servidores, etc;

void main(){
  // Introdução a Variáveis
  print("Hello World");
  String varNome = "Lucas";
  print(varNome);

  int valVariavel = 10;
  print(valVariavel);

  bool eVerdadeiro = true;
  print(eVerdadeiro);

  //Variáveis para listas:
  //Eu informo a lista, falo o formato dela e depois prossigo para o nome da variavel
  List<String> listaDePalavras = ["Lucas","Aritóteles"];
  print('${listaDePalavras[0]} - ${listaDePalavras[1]}');

  // Introdução a null-safety
  // Introduzir nulo na variável, não é algo tão utilizado
  //String none; //se eu declarar um valor simplesmente nulo irá dar erro, mas posso forçar ele a ser nulo através dessa técnica
  //print(none);
  //Ao adicionar um "?" minha variável já pode receber valores nulos
  String? none;
  print(none); // ele vai retornar null, por é um valor sem ser nulo
  //Mas se eu querer dizer (forçar) que a variavel não é nula eu escrevo "print(none!)" // Irá resultar em erro pois eu disse que a variave é não é nula, mas ela é nulo
  // Isso pode ser usado em casos bem especificos

  late String sobrenome; // No late a variável será utilizada antes e depois de a mesma ser inicializada
  sobrenome = 'Lucas P';
  print(sobrenome);

  //Operadores condicionais If e Else, swith case
  bool seguirEmFrente = true;
  if(seguirEmFrente){
    print("Andar");
  }
  // ignore: dead_code
  else {
    print("Parar");
  }
  var num1 = 10;
  var num2 = 50;
  if(num1>num2){
    print("Num1 é maior que num2");
  }
  else {
    print("Num1 não é maior que Num2");
  }

  int valorInt = 5;
  switch(valorInt){
    case 0:
      print('ZERO');
      break;
    case 1:
      print('UM');
      break;
    case 2:
      print("DOIS");
      break;
    default:
    print('PADRÃO');
  }





}

