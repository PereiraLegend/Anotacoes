void main(){
  // Nova forma de trabalhar com enuns no dart
  var pagamento = Pagamento();
  pagamento.pagar(TipoPagamento.BOLETO);
}

enum TipoPagamento {
  //PIX, BOLETO, CARTAO
  PIX(1,'Pix'),
  BOLETO(2,'Boleto'),
  CARTAO(3,'Cartao');
  
  // A diferença é que eu crio um "Construtor" dentro do enum, crio ele e passo para o enum os valores, onde depois nós podemos adicionar os valores no enum
  final String value;
  final int id;
  const TipoPagamento(this.id, this.value);
}

class Pagamento {
  void pagar(TipoPagamento tipoPagamento){
    if(tipoPagamento.value == 'Pix'){
      print('Pagando com pix id: ${tipoPagamento.id}...');
    } else if (tipoPagamento.value == 'Boleto'){
      print('Pagando com Boleto id: ${tipoPagamento.id}...');
    } else if (tipoPagamento.value == 'Cartao'){
      print('Pagando com Cartão id: ${tipoPagamento.id}...');
    }
  }
}
