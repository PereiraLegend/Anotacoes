#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float pes;
	printf("Convertendo p�s para metros");
	printf("Informe quantos p�s h�: \n");
	scanf("%f",&pes);
	printf("A convers�o de p�s para metros � de: %.3f", pes*3.28);
}
