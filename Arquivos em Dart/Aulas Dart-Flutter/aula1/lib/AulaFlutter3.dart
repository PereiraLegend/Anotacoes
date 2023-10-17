//AULA 3 // ERROR LENS E LINT

import 'package:flutter/material.dart';
void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget{
  const MyApp({super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: HomePage(),
    ); 
  }
}
class HomePage extends StatelessWidget{
  //const HomePage({super.key}); // ESSE É O CONSTRUTOR PADRÃO CRIADO
  const HomePage({Key? key}) : super(key: key);// CONSTRUTOR COM REFERÊNCIA NO VIDEO

  @override
  Widget build(BuildContext context) {
    return Scaffold ( // A DIFERENÇA DO SCAFFOLD É QUE EU TENHO UMA SÉRIE DE PROPRIEDADES PARA CRIAR A TELA
      appBar: AppBar( // AQUI CRIO UMA BARRA SUPERIOR
        title: Text('Exemplo'),
      ),
      body:Center( // AQUI DEFINO UM TEXTO PARA O ESCOPO DO APP
        child:Text('Aula 3')
      ),
      floatingActionButton: FloatingActionButton( // AQUI CRIO UM BOTÃO E DIGO O QUE ELE FAZ
        child: Icon(Icons.add), // AQUI CRIOU UM 'FILHO', ONDE EU ATRIBUO ALGO A ELE, NESSE CASO FOI UM ICONE, O "+"
        onPressed: (){ // AQUI DIGO O QUE O BOTÃO FAZ 
          print('Botão Clicou');
        },
      ),
    );
  }
}
