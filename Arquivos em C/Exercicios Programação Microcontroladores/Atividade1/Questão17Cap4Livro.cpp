#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <math.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	int A, B;
	int V,D;
	printf("Informe o primeiro n�mero:\n");
	scanf("%i",&A);
	printf("Informe o segundo n�mero:\n");
	scanf("%i",&B);
	V = sqrt(A + B);
	D = A % B;
	printf("A raiz quadrada da soma dos dois n�meros � de: %i \n", V);
	printf("O resto da divis�o do primeiro pelo segundo: %i \n", D);
}
