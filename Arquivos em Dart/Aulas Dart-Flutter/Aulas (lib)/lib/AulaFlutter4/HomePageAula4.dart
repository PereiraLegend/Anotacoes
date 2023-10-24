// MODULARIZAÇÃO EXEMPLOS
//import 'package:aula1/AulaFlutter4/MeuAppAula4.dart';
import 'package:aula1/AulaFlutter4/HomeControleAula4.dart';
import 'package:flutter/material.dart';
import 'HomeControleAula4.dart';

class HomePage extends StatelessWidget{
  //const HomePage({super.key}); // ESSE É O CONSTRUTOR PADRÃO CRIADO
  const HomePage({Key? key}) : super(key: key);// CONSTRUTOR COM REFERÊNCIA NO VIDEO

  @override
  Widget build(BuildContext context) {

    var controller = HomeControle.of(context); // AQUI EU PASSO A EXCLAMAÇÃO '!' POR CONTA DE ELE SER NULO
    
    return Scaffold ( // A DIFERENÇA DO SCAFFOLD É QUE EU TENHO UMA SÉRIE DE PROPRIEDADES PARA CRIAR A TELA
      appBar: AppBar( // AQUI CRIO UMA BARRA SUPERIOR
        title: Text('Exemplo'),
      ),
      body:Center( // AQUI DEFINO UM TEXTO PARA O ESCOPO DO APP
        child:Text('Aula 4 - Cont: ${controller.value}'),
        //child: Text('TTT'),
      ),
      floatingActionButton: FloatingActionButton( // AQUI CRIO UM BOTÃO E DIGO O QUE ELE FAZ
        child: Icon(Icons.add), // AQUI CRIOU UM 'FILHO', ONDE EU ATRIBUO ALGO A ELE, NESSE CASO FOI UM ICONE, O "+"
        onPressed: (){ // AQUI DIGO O QUE O BOTÃO FAZ 
          print('Botão Clicou');
          controller.increment();
        },
      ),
    );
  }
}
