//Tarefa de questões, Aluno: Lucas Pereira Dos Santos
//Questão 1
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int a=1;
	float b = 2.3;
	char c[]= "Carro";
	
	int *ponteiroA;
	float *ponteiroB;
	char *ponteiroC;
	
	ponteiroA = &a;
	ponteiroB = &b;
	ponteiroC = &c;
	
	printf("Valores alocados: ");
	printf("%i %2.f %s \n",a,b,c);
	printf("\n");
	printf("Valor do a : %i \n",a);
	printf("Ponteiro do a: %i \n", *ponteiroA);
	printf("\n");
	printf("Valor do b : %.2f \n",b);
	printf("Ponteiro do b: %.2f \n", *ponteiroB);
	printf("\n");
	printf("Valor do c : %c \n",c);
	printf("Ponteiro do c: %c \n", *ponteiroC);
	printf("\n");
	
	*ponteiroA = 3;
	*ponteiroB = 2.1;
	*ponteiroC = "moto";
	
	printf("\n");
	printf("Valor Alterado do ponteiroA: %i \n",a);
	printf("Valor Alterado do ponteiroB: %.2f \n",b);
	printf("Valor Alterado do ponteiroC: %c \n",c);
	
	return 0;
}

