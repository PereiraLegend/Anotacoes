// Criando uma calculadora:
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int num1, num2;
	int selecao;
	printf("Informe o primeiro valor: \n");
	scanf("%i",&num1);
	
	printf("Informe o tipo de opera��o: \n");
	printf("|1 - Soma|2 - Subtra��o|3 - Multiplica��o|4 - Divis�o|\n");
	printf("Selecione um n�mero acima: ");
	scanf("%i",&selecao);
	
	printf("Informe o segundo valor: \n");
	scanf("%i",&num2);
	
	if (selecao==1){
		printf("A soma de %i e de %i � de %i", num1, num2, num1 + num2);
		return 0;
	}
	if (selecao==2){
		printf("A subtra��o de %i e de %i � de %i", num1, num2, num1 - num2);
		return 0;
	}
	if (selecao==3){
		printf("A multiplica��o de %i e de %i � de %i", num1, num2, num1 * num2);
		return 0;
	}
	if (selecao==4){
		printf("A divis�o de %i e de %i � de %i", num1, num2, num1 / num2);
		return 0;
	} 
	return 0;
}
