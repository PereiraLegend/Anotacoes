//AULA 2 // METERIAL APP

import 'package:flutter/material.dart';
void main() {
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      //home: Center(child: Text('Aula 2')) // POSSO FAZER DIRETAMENTE AQUI, OU POSSO INSTANCIAR LOGO ABAIXO
      home: HomePage(),
    ); //  UM WIDGET UTILIZADO APENAS UMA VEZ NO COMEÇO DO CÓDIGO, ELE SUBSTITUI TODA A PARTE APAGADA DA AULA 1 // O MATERIAL WIDGET SÓ VAI PREDEFINIR O QUE ESTÁ ACONTECENDO
  }
}
class HomePage extends StatelessWidget{ // POSSO CHAMAR ESSA CLASSE NA CLASSE DE CIMA
  @override
  Widget build(BuildContext context) {
    return Material ( // DEFINO AQUI COMO MATERIAL QUE FAZ HERANÇA DO MATERIAL APP 
      child:Center(
        child:Text('Aula 2')
      ),
    );
  }
}
