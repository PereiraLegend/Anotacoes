#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"portuguese");
	int a, b, r;
	printf("Informe o primeiro valor inteiro: \n");
	scanf("%i",&a);
	printf("Informe o segundo valor inteiro: \n");
	scanf("%i",&b);
	
	if(a > b){
		r = a-b;
		printf("O resultado é: %i", r);
	}
	else if(a < b){
		r = b-a;
		printf("O resultado é: %i", r);
	}
}
