// LISTAS E COLUNAS SCROLL 
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
        title: Text('Aula 7'),
      ),
      body:SizedBox(  
        width: double.infinity,
        height: double.infinity,
        // PARA EVITAR ERROS DE OVERFLOW, OU SEJA, ERROS DE DESENHOS QUE ULTRAPASSEM O TAMANHO DA TELA EU ADICIONO O SCROLL
        child:SingleChildScrollView( // O SCROLL VAI FAZER COM QUE A MINHA TELA SEJA UM POUCO MAIOR E QUE GERE UM VERDADEIRO SCROLL COMO TODO 
          child: Column(
            //mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            //crossAxisAlignment: CrossAxisAlignment.center,
            children: [ 
              // POSSO COLOCAR UM FOR DIRETAMENTE DENTRO DE UMA LISTA NO DART, QUE VAI FAZER UMA INTERAÇÃO COM CADA ITEM DENTRO DA LISTA
              for(var i =0; i<10;i++) // APENAS COLOCANDO UM FOR DARÁ ERRO DE OVERFLOW, POIS A QUANTIDADE DE ITENS DESENHADOS PASSARIA DO TAMANHO DA TELA
                Container(
                  width: double.infinity, // AO INVÉS DE VALORES TAMBÉM POSSO COLOCAR COMANDOS PARA DEFINIR O TAMANHO E ALINHAMENTO DE ITENS TAMBÉM
                  height: 80,
                  margin: const EdgeInsets.all(8), // COM ESSE COMANDO EU FAÇO ELE SE SEPARAR DO QUE VIER APÓS ELE
                  color: Colors.red,
                ),
            ],
          ),
        ),
      ),
    );
  }
}