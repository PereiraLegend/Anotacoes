void main(){
  //Trabalhando com enums // Enums é uma forma onde eu trabalho com valores que representam uma determinada informação e que essa informação é imutável
  var pagamento  = Pagamento();
  //pagamento.pagar('Pix'); // O programa roda
  // Se eu adicionar algo que nao existe como 'cheque' nesse código
  //pagamento.pagar('cheque'); // O programa ainda roda, contudo ele não retorna nada, e é aqui um caso de uso para o enum
  pagamento.pagar(TipoPagamento.PIX as String);
  
}

enum TipoPagamento {
  PIX, BOLETO, CARTAO; // Agora eu não passo mais uma string e sim um "Tipo pagamento"
}
// Aqui utilizamos extension para formular o que está dentro do "PIX, BOLETO, CARTAO"
extension ExtensionTipoPagamento on TipoPagamento {
  String toValue() {
    Map map = {
      TipoPagamento.PIX: 'Pix',
      TipoPagamento.BOLETO: 'Boleto',
      TipoPagamento.CARTAO: 'Cartao',
    };
    return map[this];
  }
}


class Pagamento {
  void pagar(String tipoPagamento) {
    if(tipoPagamento == 'Pix') {
      print('Pagando com o pix...');
    } else if (tipoPagamento == 'Boleto') {
      print('Pagando com boleto...');
    } else if (tipoPagamento == 'Cartao'){
      print('Pagando com Cartão...');
    }
  }
}