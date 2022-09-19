//Tarefa de questões, Aluno: Lucas Pereira Dos Santos |Matricula: 202002552051
//Questão 3
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int a;
	int b;
	printf("Informe o valor A:\n");
	scanf("%d",&a);
	
	printf("Informe o valor B:\n");
	scanf("%d",&b);
	
	printf("\n");
	printf("O valor de a é %i e seu endereço é %i\n", a, &a);
	printf("O valor de b é %i e seu endereço é %i\n", b, &b);
	printf("\n");
	if(&a > &b){
		printf("O conteudo do maior endereço é: %i", a);
	}
	else{
		printf("O conteudo do maior endereço é: %i", b);
	}
	return 0;
}
