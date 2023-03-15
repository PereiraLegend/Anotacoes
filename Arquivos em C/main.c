#include "biblioteca.h"
#include <stdio.h>
#include <stdlib.h>

int main(){
	int num1,num2, maximo;
    printf("Entre com o primeiro numero: \n");
    scanf('%d',num1);
    printf("Entre com o segundo número: \n");
    scanf('%d',num1);
    
    maximo = max(num1,num2);
    printf("O valor do maior numero e : %d \n",maximo);
    return 0;
}
