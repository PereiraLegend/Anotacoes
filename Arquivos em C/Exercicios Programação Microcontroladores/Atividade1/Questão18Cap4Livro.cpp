#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <math.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	float M;
	M = (13+14+15+16+17+18+19+20+21+22+23+24+25)/13;
	printf("A m�dia aritm�tica dos n�meros entre 13 e 25 � de: %.2f", M);
}
