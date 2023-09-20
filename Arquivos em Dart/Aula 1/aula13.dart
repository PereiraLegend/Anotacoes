void main() {
  // Aplicando Extensions
  // A "extensão" é um mecanismo do dart onde ele oferece a possibilidade de um objeto existente ganhar novas propriedades
  // Supondo uma string abaixo, e quero que seja colocado a primeira letra maiúscula
  String nome = 'lucas';
  print(nome.toUpperCase()); // Com isso coloco todas as latras maiúsculas, mas quero uma forma de que apenas a primeira letra do nome seja maiúscula
  // Posso fazer assim:
  print(nome[0].toUpperCase() + nome.substring(1)); // Com isso consigo deixar a primeira letra maiúscula, mas o código fica muito grande,
  // mas posso criar uma class para fazer isso apenas com chamado caso hajam muitas requisisções
  print(Utils().toFirstCharToUpperCase(nome));
  // A questão é o simplificamento, e é aqui que as extensões entram, ou seja usando "extension" ficaria assim:
  print(nome.toFirstCharToUpperCase());
  // a vantagem da extension, é que eu agora posso importa-la de qualquer lugar
  print('manuela'.toFirstCharToUpperCase()); // Colocando a extension, automáticamente ela se aplica para todo o resto do código
  // O poder das extensões é muito alto, posso adicionar extensões para praticamente todos os objetos do dart
  print(EnumTest.enumValue);
  // Dando mais poder caso queira que ele seja vinculado a mais de uma informação
  print('|' + EnumTest.enumValue.toValue()); // ele retorna o "xpto"
  print('|' + EnumTest.enumNovo.toValue());
}

enum EnumTest {
  enumValue, enumNovo;
  
}
// Dando mais "poderes" para o enum supondo o caso de que eu queira que ele seja vinculado a mais de uma informação, no caso de um id ou warever
extension ExtensionsEnum on Enum {
  String toValue() {
    Map map = {
      EnumTest.enumValue:'xpto',
      EnumTest.enumNovo: 'novoValor'
    };
    return map[this];
    //return "xpto";
  }
}


// Dessa forma eu crio uma extensão para deixar a primeira letra do print maiúsculo
// Uma extensão é composta pelo objeto indicador de extensão "extension", o nome dela , e o objeto sobre o qual ela vai trabalhar
extension ExtensionsString on String {
  toFirstCharToUpperCase() {
    return this[0].toUpperCase() + this.substring(1);
  }
}

class Utils {
  toFirstCharToUpperCase(String value) {
    return value[0].toUpperCase() + value.substring(1);
  }
}