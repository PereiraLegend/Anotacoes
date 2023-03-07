#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"portuguese");
	int a, b;
	printf("Informe o primeiro valor inteiro: \n");
	scanf("%i",&a);
	printf("Informe o segundo valor inteiro: \n");
	scanf("%i",&b);
	
	if(a > b){
		printf("O maior valor é: %i",a);
	}
	else if(a < b){
		printf("O maior valor é: %i",b);
	}
	else{
		printf("Os valores são iguais: %i", a);
	}
}
