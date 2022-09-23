#include <stdio.h>
#include <stdlib.h>
#include <ctype.h> // Serve para manipular bibliotecas de várias maneiras
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	char c;
	int num1;
	printf("Digite um caracter em letra minúscula: \n");
	scanf("%c", &c);
	
	if(c >= 'a'){ // Fica maior do que a por conta dos valores que estão fora dele são outros caracteres como o *
		printf("Segue a letra digitada maiúscula: > %c <\n", toupper(c)); //Transformar letra mainúscula em maiúscula
	}
	
	printf("Informe um número: \n");
	scanf("%i",&num1);
	
	if(num1>5){
		printf("Ele é maior que 5");
	} 
	else {
		printf("Ele é menor que 5");
	}
	
	return 0;
}
