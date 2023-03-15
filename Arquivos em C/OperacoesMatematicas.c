#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main(){
	printf("O valor de 2 elevado a 3 (sem casas decimais) = %.5f \n", pow(3,0));
	printf("O valor de 3 elevado a 0 (com duas casas decimais) = %.2f \n", pow(3,0));
	
	printf("A raiz quadrada de 48 (sem casas decimais) = %.5f \n", sqrt(48));
	printf("A raiz quadrada da raiz quadrada de 16 (com duas casas decimais) = %.2f \n", sqrt(sqrt(16)));
	
	printf("A raiz cubica de 27 (com tres casas decimais) = %.3f \n", cbrt(27));
}