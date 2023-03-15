#include <time.h>
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv){
	time_t TEMPO;
	struct tm MOMENTO; /*Estrutura que permite obter elementos separados da data e hora do sistema*/
	time(&TEMPO);
	MOMENTO=*localtime(&TEMPO);
	printf("Dia.....: %02d \n", MOMENTO.tm_mday);
	printf("Mes.....: %02d \n", MOMENTO.tm_mon + 1);
	printf("Ano.....: %04d \n", MOMENTO.tm_year + 1900);
	printf("Hora....: %02d \n", MOMENTO.tm_hour);
	printf("Minuto..: %02d \n", MOMENTO.tm_min);
	printf("Segundo.: %02d \n", MOMENTO.tm_sec);
	return 0;
} 