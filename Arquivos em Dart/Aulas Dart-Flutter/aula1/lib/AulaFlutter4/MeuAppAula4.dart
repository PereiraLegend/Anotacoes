import 'package:aula1/AulaFlutter4/HomeControleAula4.dart';
import 'package:aula1/AulaFlutter4/HomePageAula4.dart';
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget{
  const MyApp(Set<Key?> set, {super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: HomeControle(
        child:HomePage(),
      ),
    ); 
  }
}