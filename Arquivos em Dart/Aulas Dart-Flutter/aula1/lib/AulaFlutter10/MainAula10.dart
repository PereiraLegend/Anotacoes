import 'package:aula1/AulaFlutter10/HomePageAula10.dart';
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