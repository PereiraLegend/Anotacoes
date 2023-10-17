import 'package:aula1/AulaFlutter4/HomePageAula4.dart';
import 'package:flutter/material.dart';
// OBSERVAÇÃO: SEMPRE QUE CRIAR UMA CLASSE É BOM CRIAR UM NOVO ARQUIVO PARA ELA, NAS AULAS ANTERIORES FOI APENAS PARA APRESENTAR O FLUTTER
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