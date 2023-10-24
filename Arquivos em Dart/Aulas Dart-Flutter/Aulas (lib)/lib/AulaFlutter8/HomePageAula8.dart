// LISTAS E COLUNAS LISTVIEW
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
    //// COMO FAÇO O USO PRÁTICO DE LISTVIEW VISTO NO FINAL DESSE CÓDIGO ////
    //// SE EU CRIAR UM LISTA DE NOMES POR EXEMPLO ////
    final names = ['Joao', 'Maria', 'Joaquim', 'Manuel', 'Sara'];
    ////  ////
    return Scaffold ( 
      appBar: AppBar(
        title: Text('Aula 8'),
      ),
      body:SizedBox(  
        width: double.infinity,
        height: double.infinity,
        // OS COMANDOS "SingleChildScrollView" E "Column" PODEM SER FACILMENTE TROCADOS POR "ListView"
        /**
        child:SingleChildScrollView( 
          child: Column(
            children: [ 
              for(var i =0; i<10;i++) 
                Container(
                  width: double.infinity, 
                  height: 80,
                  margin: const EdgeInsets.all(8),
                  color: Colors.red,
                ),
            ],
          ),
        ),
        */
        // POSSUI A MESMA IDEIA DE UMA COLUMN E DO SCROLL
        child:ListView.builder( // O ListView POSSUI UM CONSTRUTOR PARA FACILITAR A IDEIA DE CONSTRUÇÃO DE LISTAS CHAMADO DE "Builder"
          /**
          itemCount: 10, // GRAÇAS E ESSE COMANDO ELE DUPLICA 10 VEZES SEM PRECISAR DE UM FOR 
          itemBuilder: (context, index) {
            return Container(
              width: double.infinity,
              height: 80,
              margin: const EdgeInsets.all(8),
              color: Colors.blue,
            );
          },
          */

          // POSSO DIZER QUANTOS ITENS EU QUERO ITERAR OU QUANTOS VÃO TER:
          // COLOCANDO O COMANDO ACIMA COMO UM USO PRÁTICO:
          // PEGO A VARIÁVEL CRIADA ACIMA E A MANIPULO:
          itemCount: names.length, // AQUI PUXO O TAMANHO DO ARRAY
          itemBuilder: (context, index) {
            final name = names[index]; // DUPLICO O ARRAY PARA PEGAR OS NOMES
            return ListTile(
              title: Text(name), // AQUI FAÇO COM QUE A LISTA CHAME OS NOMES QUE ESTÃO CONTIDOS DENTRO DO ARRAY
            );
          },
        ),
      ),
    );
  }
}