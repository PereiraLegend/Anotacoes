#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"portuguese");
	int i;
	for(i == 1; i<=30; i++){
		if ((i % 4) == 0){
			printf(" %i ", i);
		}
	}
}
