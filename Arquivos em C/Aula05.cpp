#include <stdio.h>
#include <stdlib.h>
#include <ctype.h> // Serve para manipular bibliotecas de v�rias maneiras
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	char c;
	int num1;
	printf("Digite um caracter em letra min�scula: \n");
	scanf("%c", &c);
	
	if(c >= 'a'){ // Fica maior do que a por conta dos valores que est�o fora dele s�o outros caracteres como o *
		printf("Segue a letra digitada mai�scula: > %c <\n", toupper(c)); //Transformar letra main�scula em mai�scula
	}
	
	printf("Informe um n�mero: \n");
	scanf("%i",&num1);
	
	if(num1>5){
		printf("Ele � maior que 5");
	} 
	else {
		printf("Ele � menor que 5");
	}
	
	return 0;
}
