//Tarefa de quest�es, Aluno: Lucas Pereira Dos Santos |Matricula: 202002552051
//Quest�o 2
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int a = 2, b = 3;
	printf("a vale %i, e seu endere�o � %i \n", a, &a);
	printf("b vale %i, e seu endere�o � %i \n", b, &b);
	
	if(&a > &b){
		printf("O endere�o a de %i � maior que b de %i", &a,&b);
	}
	if(&a < &b){
		printf("O endere�o b de %i � maior que a de %i", &b,&a);
	}
	return 0;
}
