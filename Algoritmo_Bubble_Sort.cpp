#include <stdlib.h>
#include <stdio.h>
#define vinte 20

int main(){
	int i, x, cont, num[vinte] = {9,8,7,6,5,4,3,2,1,15,14,13,12,11,10,16,17,20,19,18};
	
	// Mosrando os arrays
	printf("Valores no Array:\n");
	for (i = 0; i < vinte; i++) {
 		printf("%d \n", num[i]);
	}
	
	// Ordenando:
	
 	for (cont = 1; cont < vinte; cont++) {
    	for (i = 0; i < vinte - 1; i++) {
     		if (num[i] > num[i + 1]) {
       			x = num[i];
       			num[i] = num[i + 1];
       			num[i + 1] = x;
     		}
   		}
 	}
	
	// Deixando em ordem crescente
	printf("Valores no Array em ordem crescente:\n");
	for (i = 0; i < vinte; i++) {
 		printf("%d \n", num[i]);
	}
	
	printf("\n");
	
	return 0;
}


