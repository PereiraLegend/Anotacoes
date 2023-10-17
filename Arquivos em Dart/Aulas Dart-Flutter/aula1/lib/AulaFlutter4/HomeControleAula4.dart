import 'package:flutter/material.dart';
import 'HomePageAula4.dart';

class HomeControle extends InheritedNotifier<ValueNotifier<int>> {
  HomeControle({Key? key, required Widget child, }) 
      : super(
          key: key,
          child: child,
          notifier: ValueNotifier(0),
        );

  static HomeControle of(BuildContext context){
    return context.dependOnInheritedWidgetOfExactType<HomeControle>()!;
  }

  int get value => notifier!.value;

  increment(){
    notifier!.value++;
  }
  /*
  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) {
    // TODO: implement updateShouldNotify
    //throw UnimplementedError();
    return false;
  }
  */
}