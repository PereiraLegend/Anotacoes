#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float pes;
	printf("Convertendo pés para metros");
	printf("Informe quantos pés há: \n");
	scanf("%f",&pes);
	printf("A conversão de pés para metros é de: %.3f", pes*3.28);
}
