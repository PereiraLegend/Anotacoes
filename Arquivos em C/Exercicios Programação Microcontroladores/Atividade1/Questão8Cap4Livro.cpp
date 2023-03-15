#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	int P=2,Q=3,R=12;
	float S=4.5;
	float Z;
	// Z=100 * Q / P + R; //Letra A Resposta: 162.00
	// Z= P + R % 5 - Q / 2; // Letra B Resposta: 3.00
	// Z= R % (P+1) - Q * R; // Letra C Resposta: -36.00
	// Z= 1 + (R + Q) / Q; // Letra D Resposta: 6.00
	// Z= 2 * S % 3 + S; // Letra E Resposta: 
	// Z=((20 / 3) / 3) + 2; // Letra F Resposta: 4.00
	// Z= 1 + (P*3+2*R)*(1/5); // Letra G Resposta: 1.00
	// Z= 2 + (R*10) / (1/S); // Letra H Resposta: 542.00
	printf("%.2f", Z);
	
}
