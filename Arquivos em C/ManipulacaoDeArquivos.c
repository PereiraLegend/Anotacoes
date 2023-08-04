/*#include <stdio.h>

int main(){
	FILE *arq;
	arq = fopen("LUCASP.txt","a");
	fclose(arq);
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
/*
#include <stdio.h>
int main(){
	FILE *arq;
	char ENTRADA;
	arq = fopen("ArquivoTeste.txt","a");
	printf("Informe um caractere alfanumérico: ");
	ENTRADA = getchar();
	fputc(ENTRADA, arq);
	fclose(arq);
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
/*
#include <stdio.h>
int main(){
	FILE *arq;
	char SAIDA;
	
	arq = fopen("ArquivoTeste.txt","r");
	printf("Os caracteres do arquivo sao: ");
	do{
		SAIDA = fgetc(arq);
		putchar(SAIDA);
	} while (SAIDA != EOF);
	
	printf("\n");
	fclose(arq);
	
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
/*
#include <stdio.h>

int main(){
	FILE *arq;
	char PALAVRA[21];
	
	arq = fopen("ArquivoTeste2.txt","w");
	printf("Informe uma palvra de ate 20 caracteres: ");
	scanf("%s",&PALAVRA);
	
	fprintf(arq, "%s", PALAVRA);
	
	fclose(arq);
	
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
/*
#include <stdio.h>

int main(){
	FILE *arq;
	char PALAVRA[21];
	
	arq = fopen("ArquivoTeste2.txt","r");
	
	fscanf(arq,"%s",PALAVRA);
	
	printf("Palavra = %s\n", PALAVRA);
	
	fclose(arq);
	
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
/*
#include <stdio.h>

int main(){
	FILE *arq;
	char LETRA;
	
	arq = fopen("ArquivoTeste3.txt","w");
	printf("Informe uma frase: ");
	while((LETRA = getchar()) != '\n'){
		putc(LETRA, arq);
	}
	fclose(arq);
	printf("\n");
	fflush(stdout);
	return 0;
}
*/
#include <stdio.h>

int main(){
	FILE *arq;
	char LETRA;
	
	arq = fopen("ArquivoTeste3.txt","r");
	
	printf("Frase = ");
	
	while((LETRA = fgetc(arq)) != EOF){
	printf("%c", LETRA);
	}
	printf("\n");
	fclose(arq);
	
	printf("\n");
	fflush(stdout);
	return 0;
}