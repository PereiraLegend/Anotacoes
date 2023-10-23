// LISTAS E COLUNAS EXEMPLOS DE USO PRÁTICO
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return _HomePageState();
  }
}

class _HomePageState extends State<HomePage> {

  final controller = TextEditingController();
  
  final list = <String>[]; //CRIANDO UMA LISTA DE STRINGS

  @override
  Widget build(BuildContext context) {
    return Scaffold ( 
      appBar: AppBar(
        title: const Text('Aula 9'),
      ),
      body: Column(
        children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row( // AQUI EU UTILIZO A ROW PARA COLOCAR DE FORMA HORIZONTAL A CAIXA DE ENTRADA DE TEXTO E O BOTÃO
              children: [
                Expanded(
                  child: TextField(
                    controller: controller,
                  ),
                ),
                IconButton(
                  onPressed: () {
                    final text = controller.text;
                    setState(() {
                      list.add(text); //AQUI ADICIONO UM TEXTO NA LISTA
                    });
                    controller.clear(); //AQUI LIMPO O TEXTO ASSIM QUE ELE É ADICIONADO
                  },
                  icon: const Icon(Icons.add),
                ),
              ],
                      ),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: list.length,
                itemBuilder: (context, index){
                  final item = list[index];
                  return ListTile(
                    title: Text(item),
                  );
              }),
            ),
        ],
      ),
    );
  }
}