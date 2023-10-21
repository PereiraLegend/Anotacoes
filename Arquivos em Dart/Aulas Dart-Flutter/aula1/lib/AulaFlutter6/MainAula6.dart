import 'package:aula1/AulaFlutter6/HomePageAula6.dart';
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