//Tarefa de quest�es, Aluno: Lucas Pereira Dos Santos |Matricula: 202002552051
//Quest�o 3
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
	printf("O valor de a � %i e seu endere�o � %i\n", a, &a);
	printf("O valor de b � %i e seu endere�o � %i\n", b, &b);
	printf("\n");
	if(&a > &b){
		printf("O conteudo do maior endere�o �: %i", a);
	}
	else{
		printf("O conteudo do maior endere�o �: %i", b);
	}
	return 0;
}
