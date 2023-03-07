#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"portuguese");
	int i;
	for(i == 0; i<21; i++){
		//printf(" %i ",i);
		if ((i % 2)== 1){
			printf(" %i ", i);
		}
	}
}
