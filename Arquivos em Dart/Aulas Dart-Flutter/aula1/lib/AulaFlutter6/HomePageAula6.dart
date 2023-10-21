// LISTAS E COLUNAS
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return _HomePageState();
  }
}

class _HomePageState extends State<HomePage> {
  var contador = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold ( 
      appBar: AppBar(
        title: Text('Aula 6'),
      ),
      body:SizedBox(  // AQUI ESTOU ADICIONANDO UMA COLUNA // O "CENTER" COLOCADO AQUI PREDEFINE QUE TUDO SERÁ ALINHADO AO MEIO // O "SIZEDBOX" DEIXA LIVRE PARA ALINHAR MANUALMENTE
        // UTILIZANDO O SIZEDBOX PRECISO PREDEFINR:
        width: double.infinity, // O QUE DEIXA A FORMATAÇÃO LIVRE PARA CUSTOMIZAR
        
        child: Column( // PARA TRANSFORMAR AQUI EM UMA LINHA TODA A COLONA ABAIXO OU VICE VERSA BASTA TROCAR NESSA PARTE DO CÓDIGO "Column" POR "Row"
          // PARA VER O EIXO NÓS UTILIZAMOS:
          //mainAxisAlignment: MainAxisAlignment.center, // ELE RECEBE A FORMA DE COMO EU QUERO INICIAR O EIXO PRINCIPAL, OU SEJA EU CRIO UMA COLUNA ABAIXO, MAS DEFINO EM QUAL PARTE DA TELA ELA VAI SER INICIALIZADA
                                                       // ELE PODE INICIAR NO CENTRO, NO TOPO, ABAIXO, ETC
          //mainAxisAlignment: MainAxisAlignment.spaceAround, // POSSO PREDEFINIR ESPAÇOS ENTRE OS ITENS UTILIZANDO ISTO, COMO NO ALINHAMENTO UTILIZANDO HTML E CSS, DEIXANDO ESPAÇAMENTOS IGUAIS ENTRE OS FILHOS ALGO
                                                            // UTILIZADO NA RESPONSIVIDADE
          //mainAxisAlignment: MainAxisAlignment.spaceBetween, // A MESMA COISA QUE É DADA ACIMA, CONTUDO COM UMA PEQUENA DIFERENÇA ENVOLVENDO AS BORDAS
                                                             //UTILIZADO NA RESPONSIVIDADE
          mainAxisAlignment: MainAxisAlignment.spaceEvenly, // A MESMA COISA QUE A PARTE DE CIMA, MAS COM PEQUENAS DIFERENÇAS 
                                                            // UTILIZADO NA RESPONSIVIDADE
          // TRABALHANDO COM EIXOS NA COLUNA: // ELES RECENTRALIZAM A COLUNA 
          //crossAxisAlignment: CrossAxisAlignment.center, // O ALINHAMENTO VAI SER CENTRALIZADO
          //crossAxisAlignment: CrossAxisAlignment.end, // VAI SER REALINHADO NO FINAL (LADO DIREITO DA TELA)
          crossAxisAlignment: CrossAxisAlignment.start, // VAI SER REALINHADO NO COMEÇO (LADO ESQUERDO DA TELA)
          // TRABALHANDO COM EIXOS NAS LINHAS: // ELES RECENTRALIZAM A LINHA INVERTENDO OS VALORES ACIMA


          children: [ // AQUI A COLUNA É HERDADA DA FUNÇÃO PASSADA
            Container( // AQUI CRIO UM CONTAINER E COLOCO ALGO DENTRO DO MESMO, ALGO QUE LENBRA HTML E CSS
              width: 80,
              height: 80,
              color: Colors.red,
            ),
            Container( // OUTRO QUADRADO CRIADO, OBSERVE QUE UTILIZANDO ISSO E TUDO O QUE JÁ FOI DADO JÁ POSSO CRIAR UMA PEQUENA ESTILIZAÇÃO PARA O APP
              width: 80,
              height: 80,
              color: Colors.blue,
            ),
            Container( // OBSERVE QUE ELE SEMPRE VAI HERDAR A POSIÇÃO E SEMPRE VAI TER O COMPORTAMENTO DE FICAR ABAIXO DOS OUTROS JÁ QUE ELE FAZ PARTE DO "CHILD"
              width: 80,
              height: 80,
              color: Colors.green,
            ),
            Text("Aula 6"), //TUDO HERDA ESSE COMPORTAMENTO
          ],
        ),
      ),
    );
  }
}