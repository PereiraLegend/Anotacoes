#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float milhas;
	printf("Convertendo milhas para quil�metros:\n");
	scanf("%f",&milhas);
	printf("O tanto de quil�metros convertidos � de: %.3f", milhas*1.61);
}
