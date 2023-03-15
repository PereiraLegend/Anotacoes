#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
int main(int argc, char** argv){
	div_t VALOR;
	int i;
	printf("O valor absoluto de -65 = %d \n\n", abs(-65));
	VALOR = div(10,3);
	printf("Na divisao de 10 por 3, o quociente = %d\n", VALOR.quot);
	printf("Na divisão de 10 por 3, o resto = %d\n\n", VALOR.rem);
	printf("Um numero aleatório entre 1 e 10 (utilizando srand) = ");
	srand(time(NULL));
	for(i=1;i<=5;i++){
		printf(" %d ", rand()%10+1);
	}
	
}