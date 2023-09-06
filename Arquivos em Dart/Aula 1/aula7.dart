void main(){
  // Mapas
  // Em linguagens de programação , em quase todos há o objeto chamado "mapa", o mapa é muito parecido com listas e sequências do objetos
  // O mapa basicamente é uma sequêcia de objetos, porém na lista possuo ela em indices e no mapa tenho uma sequência sem utilizar index com elas
  // eu utilizo uma chave, onde cada chave vai estar associada a um objeto;
  // Uma lista normal abaixo:
  List<String> lista = ["Verde","Amarelo"];
  print(lista); // A lista inteira
  print(lista[0]); // O item no indice 0 da lista
  // Em mapas fica assim:
  Map<String, String> mapa = {'chave':'valor'}; //Aqui dentro do map eu passo dois tipos dentro de <>, o tipo da chave e o tipo do valor, e ao invés de usar "[]" eu utilizo {}
  // Acima dentro de {} é dado a {'chave':'valor'}
  print(mapa); // Chamar todo o mapa
  print(mapa['chave']); // Aqui eu ponho a chave e ele me retorna o valor

  // Se eu quiser adicionar valores para dentro de um mapa:
  // Primeira forma: (Método put)
  mapa.putIfAbsent('novaChave', () => 'novoValor'); // dentro desse método eu passo a chave e o segundo é uma função que adiciona o valor
  print(mapa);
  // Segunda forma: (Adicionando direntamento adicionando uma chave para ele)
  mapa['novaChave2'] = 'novoValor2';
  print(mapa);

  // Também posso remover valores, para remover valores:
  mapa.remove('chave'); // No "mapa" eu removo objetos através da chave, ou seja sempre que eu trabalho com mapa eu utilizo a chave
  print(mapa);

  // Também posso atualizar, eu atualizo de duas formas
  // passando a chave com o valor já alterado:
  mapa['novaChave2'] = 'atualizando';
  print(mapa);
  // Utilizando um método já existente
  mapa.update("novaChave2", (value) => 'atualizando2');
  print(mapa);

  // Tabém posso iterar sobre o mapa
  mapa.forEach((chave, valor) => print("A chave é: $chave, o valor é: $valor")); // Aqui ele vai iterar sobre os mapas
  // posso iterar também encima das chaves
  mapa.keys.forEach(print); // Aqui chamo as chaves (Obs.: No decorrer do código eles foram alterados)
  mapa.values.forEach(print); // Aqui chamo os valores (Obs.: No decorrer do código eles foram alterados)
}