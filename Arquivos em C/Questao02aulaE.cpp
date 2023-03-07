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
	
	if(A>(B>C)){
		printf(" %i %i %i\n",C,B,A);
	}
	else if(A>(C>B)){
		printf(" %i %i %i\n",B,C,A);
	}
	else if(B>(A>C)){
		printf(" %i %i %i\n",C,A,B);
	}
	else if(B>(C>A)){
		printf(" %i %i %i\n",A,C,B);
	}
	else if(C>(A>B)){
		printf(" %i %i %i\n",B,A,C);
	}
	else if(C>(B>A)){
		printf(" %i %i %i\n",A,B,C);
	}
	

}
