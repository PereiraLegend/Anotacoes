#include <stdio.h>
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	int A,B,C;
	printf("Informe o número A: \n");
	scanf("%i",&A);
	printf("Informe o número B: \n");
	scanf("%i",&B);
	printf("Informe o número C: \n");
	scanf("%i",&C);
	
	if((A>B) && B>C){
		printf("%i %i %i\n",A,B,C);
	}
	else if((A>C) && (C>B)){
		printf("%i %i %i\n",A,C,B);
	}
	else if((B>A) && (A>C)){
		printf("%i %i %i\n",B,A,C);
	}
	else if((B>C) && (C>A)){
		printf("%i %i %i\n",B,C,A);
	}
	else if((C>A) && (A>B)){
		printf("%i %i %i\n",C,A,B);
	}
	else if((C>B) && (B>A)){
		printf(" %i %i %i\n",C,B,A);
	}
	

}
