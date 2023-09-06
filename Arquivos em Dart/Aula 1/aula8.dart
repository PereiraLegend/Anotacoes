import 'dart:convert';
void main(){
  // Conversão de objetos para json e conversão de json para objetos
  // json utiliza diretamente mapas
  // json é um tipo de objeto que agente vai trafegar quando consumir grande parte das apis, ou seja ele é um objeto
  // json no dart nada mais é do que uma "String"
  // Criando um jason
  // Para validar o json é bom utilizar um site 
  // Para fazer um Json virar um objeto:
  String json = '''
  {
    "usuario": "lucas@email.com",
    "senha": 123456,
    "permissoes": [
      "owner", "admin"
    ]
  }
'''; // Utilizando o ''' ''' eu crio uma string de múltiplas linhas
  // também posso colocar "listas" dentro do json; 
  print(json);
  //
  var resultJson = jsonDecode(json);
  print(resultJson);
  print(resultJson.runtimeType); // Para descobrir o tipo de arquivo, o que dará "_Map"
  print(resultJson["usuario"]); // Chamando pela chave para aparecer o indice
  //Quando são listas dentro do json
  print(resultJson['permissoes']); // Aqui eu entro dentro da lista
  print(resultJson['permissoes'][0]); // Aqui eu acesso o indice
  print("=======================================================================");
  // Fazendo um objeto virar um Json:
  Map mapa = {
    'nome': 'lucas',
    'pass': 123,
    'permissions': ['owner', 'admin']
  };
  print(mapa); // para ver como o mapa se encontra
  //transformando ele em json
  var result = jsonEncode(mapa); // Aqui o json é convertido
  print(result);
}