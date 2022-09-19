//Tarefa de questões, Aluno: Lucas Pereira Dos Santos |Matricula: 202002552051
//Questão 2
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int a = 2, b = 3;
	printf("a vale %i, e seu endereço é %i \n", a, &a);
	printf("b vale %i, e seu endereço é %i \n", b, &b);
	
	if(&a > &b){
		printf("O endereço a de %i é maior que b de %i", &a,&b);
	}
	if(&a < &b){
		printf("O endereço b de %i é maior que a de %i", &b,&a);
	}
	return 0;
}
