#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float libras;
	printf("Conventendo libras para newtons: \n");
	printf("Informe a quantidade de libras: \n");
	scanf("%f",&libras);
	printf("\nO n�mero de Newtons � de: %.3f", libras*4.9);
}
