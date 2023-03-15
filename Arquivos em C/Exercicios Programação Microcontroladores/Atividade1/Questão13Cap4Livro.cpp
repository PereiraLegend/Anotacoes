#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float libras;
	printf("Conventendo libras para newtons: \n");
	printf("Informe a quantidade de libras: \n");
	scanf("%f",&libras);
	printf("\nO número de Newtons é de: %.3f", libras*4.9);
}
