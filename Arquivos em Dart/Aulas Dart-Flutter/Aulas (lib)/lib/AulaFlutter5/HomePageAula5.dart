// WIDGETS STATEFUL 
/*
//import 'package:aula1/AulaFlutter4/MeuAppAula4.dart';
import 'package:aula1/AulaFlutter5/HomeControleAula5.dart';
import 'package:flutter/material.dart';
import 'HomeControleAula5.dart';

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
*/

//VEJA A DIFERENÇA DO CÓDIGO DA ULTIMA AULA E DO CÓDIGO DESSA AULA, ONDE TODA AQUELA MODULARIZAÇÕA PODE SER SUBSTITUIDA POR 
//UM CÓDIGO BEM MAIS SIMPLES, ONDE SÓ EXISTE TRÊS TIPOS DE WIDGETS, O STATEFUL O STATELESS E O IHETEDWIDGET, EXISTINDO TRÊS TIPOS DE WIDGETS
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget { // NO STATEFUL NÓS GANHAMOS DUAS COISAS, A PRIMEIRA COISA É A GERÊNCIA DO SEU PRÓPRIO ESTADO SEM DEPENDER DE UM IGERTED WIDGET
                                        // E A SEGUNDA COISA QUE SE GANHA É CONSEGUIR ESCUTAR O CILO DE VIDA DA CRIAÇÃO DO WIDGET
  @override
  State<HomePage> createState() {
    return _HomePageState();
  }
  
}
class _HomePageState extends State<HomePage> {
  /*
  // VENDO O CICLO DE VIDA:

  @override
  void initState(){
    super.initState();
  }
  
  @override
  void dispose(){
    super.dispose();
  }
  // DESSA FORMA EU POSSO VER UM CILO DE VIDA ONDE EU POSSO EXECUTAR FUNÇÕES DO COMEÇO DO WIDGET E QUANDO ELE FOR DESTRUIDO
  */

  //TAMBÉM TEMOS O CONTROLE DE ESTADO, O QUE SIGNIFICA QUE PARA FAZER E ALTERAR O CONTADOR EU FAÇO:
  var contador = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold ( 
      appBar: AppBar(
        title: Text('Exemplo'),
      ),
      body:Center( 
        child:Text('Aula 5 Vezes Repetidas: \nVezes que o botão foi apertado: $contador'),
      ),
      floatingActionButton: FloatingActionButton( 
        child: Icon(Icons.add),
        onPressed: (){ 
          /*
          print('Botão Clicou: $contador');
          contador++;
          */
          //PARA FAZER O CONTADOR DA INTERFACE DO APLICATIVO ATUALIZAR EM TEMPO REAL UTILIZO SETSTATE QUE SÓ PODE SER UTILIZADO DENTRO DE UMA CLASSE STATE
          setState(() { //UTILIZANDO ISSO EU TENHO UM CONTROLE DE ESTADO SÓ MEU
            contador++;
          });
        },
      ),
    );
  }

}