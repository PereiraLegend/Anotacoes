#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float milhas;
	printf("Convertendo milhas para quilômetros:\n");
	scanf("%f",&milhas);
	printf("O tanto de quilômetros convertidos é de: %.3f", milhas*1.61);
}
