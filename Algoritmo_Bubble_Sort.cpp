#include <stdio.h>,
#include <stdlib.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	int i, n, l, x;
	int numeros[] = {9,8,7,6,5,4,3,2,1,15,14,13,12,11,10,16,17,20,19,18};
	printf("Vetor => %i", numeros[i]);
	
	for(l = 1; l < 20 -1; l++) {
		if(numeros[i] > numeros[i+1]) {
			x = numeros[i];
			numeros[i] = numeros[i+1];
			numeros[i+1]=x;
		}
	}
	
	for (i = 0; i < 20; i++) {
		printf("%4d", numeros[i]);
	}
}
