// LISTAS E COLUNAS EXEMPLOS DE USO PRÁTICO 2 STACK
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return _HomePageState();
  }
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold ( 
      appBar: AppBar(
        title: const Text('Aula 10'),
      ),
      // STACK SERVE PARA DAR UM EIXO DE PROFUNDIDADE, OU SEJA COLOCAR UMA COISA ENCIMA DA OUTRA
      body: Stack( // ELE FUNCIONA IGUAL AO COLUMN E ROW UTILIZANDO CHILDREN
        children: [
          Container( // A MÁGICA DO STACK É QUE ELE NÃO VAI FICAR DO LADO E NEM ABAIXO E SIM ACIMA
            color: Colors.red,
            height: 100,
            width: 100,
          ),
          Container( // A MÁGICA DO STACK É QUE ELE NÃO VAI FICAR DO LADO E NEM ABAIXO E SIM ACIMA
            color: Colors.green,
            height: 100,
            width: 100,
          ),
        ],
      )
    );
  }
}