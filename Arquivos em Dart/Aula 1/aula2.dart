//Estruturas de Repetição
void main(){
  //Enquanto:
  for(int i = 1; i <= 10; i++){
    print(i*2);
  }

  int contador = 10;
  while(contador != 1){
    //logic
    contador = contador - 1;
    print('Loop -> $contador ');
  } 
}