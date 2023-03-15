#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <math.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	int A, B;
	int V,D;
	printf("Informe o primeiro número:\n");
	scanf("%i",&A);
	printf("Informe o segundo número:\n");
	scanf("%i",&B);
	V = sqrt(A + B);
	D = A % B;
	printf("A raiz quadrada da soma dos dois números é de: %i \n", V);
	printf("O resto da divisão do primeiro pelo segundo: %i \n", D);
}
