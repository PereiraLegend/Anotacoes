#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <math.h>
int main(){
	setlocale(LC_ALL,"portuguese");
	int QtVendas, i=1,b;
	float PrecoCarro,ComissaoPorPreco, SalarioF, Val;
	printf("Informe quantos carros o funcionario vendeu: \n");
	scanf("%i",&QtVendas);
	while(i<QtVendas + 1){
		printf("Informe o valor do %i� carro: \n", i);
		scanf("%f",&PrecoCarro);
		ComissaoPorPreco = (5*PrecoCarro)/100;
		Val = Val + ComissaoPorPreco;
		b++;
		i++;
	}
	printf("O C�culo do sal�rio final � de:  SalarioF = 1500 + %i*99,95 + %.2f \n", QtVendas, Val);
	SalarioF = 1500 + QtVendas*99,95 + Val;
	printf("O valor do sal�rio do funcion�rio desse m�s � de: %.2f", SalarioF);
}
