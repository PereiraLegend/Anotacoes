void main(){
  // Callable Interface
  // facilita a leitura de código // serve para melhorar a semântica dos códigos
  // Esse abaixo é um código normal do dart
  BuscarAlunos buscarAlunos = BuscarAlunos();
  buscarAlunos.buscar(); // e se eu quisesse retirar o ".buscar();" e mesmo assim ele retornasse o resultado
  buscarAlunos.call(); // Aqui eu mostro o "call"
  buscarAlunos(); // Aqui eu omito o "call", e ainda sim ele executa de forma mais otimizada
}
class BuscarAlunos {
  void buscar() => print('ana, marta, jose');
  void call() => print('cristina, jacira, eduardo'); // Utilizando o "call" eu posso omitir o ".buscar();" para otimizar meu código
}