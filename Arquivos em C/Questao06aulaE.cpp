#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"portuguese");
	int i = 0 , e;
	for(i == 1; i<101; i++){
		e += i;
		printf(" %i ",i );
	}
	printf("\n A soma é %i", e - 1);
}
