#include <stdio.h>
#include <stdlib.h>
#include <locale.h> // Essa biblioteca chama uma linguagem que � definida
int main(){
	setlocale(LC_ALL,"Portuguese"); // Aqui defino para que o c leia os caracteres especiais da lingua portuguesa
	// Coment�rio de uma linha � dado por duas barras
	/*
	Coment�rios de mais de uma linha, podem ser definidos com duas barras e dois asteriscos
	*/
	
	printf("IDE\n");// Toda instru��o acaba com ponto e v�rgula, "printf" escreve uma frase que est� contido em dois par�nteses e duas aspas onde o texto � inserido
	// Preste aten��o para deixar o c�digo mt bem identado
	
	// Para a declara��o de vari�v�l ela precisa ser bem especificada:
	int i = 1; // Aqui eu disse que ela � inteira e de valor "1"
	int a = 2;
	printf("%i + %i = %i \n", i, a, i + a);// Aqui eu disse que queria o valor da soma das variaveis representado pelo %i
	// Toda vari�vel possui um nome, tipo, tamanho, e valor
	// Posso ter outros tipos tamb�m, como float, double, char, dentre outros esses s�o os mais usados
	float r = 2.444;
	float b = 3.1;
	printf("%f + %.2f = %f\n", r, b, r + b); // Observe que aconta foi similar a do int, mas foi diferente j� que serve apenas para n�meros inteiros, e o float para n�meros reais
	// Observe tamb�m acima o %.2f, serve para limitar o total de valores escritos na execu��o do c�digo, nom caso os valores que vem ap�s a v�rgula
	// Atentesse tamb�m as regras de defini��o de v�riaveis, como o nome de uma n�o poder conter espa�os entre a mesma ou etc;
	// Outras curiosidades
	/*
	interager i% po %d
	float / double %f
	char %c
	string %s
	boolan b%
	
	%u m�dulo de um n�mero
	%p endere�o de mem�ria
	%e endere�o de mem�ria
	%e ou %E para inprimir uma nota��o cientifica
	%% para inprimir s� um sinal de porcentagem
	*/
	char palavra[20] = "Camisa"; // Para chamar um char ou palavra de uma vari�vel char defina o tamanho do espa�o de mem�ria
	char o[] = "Bola"; // O que est� dentro da string pode ficar sem especifica��o do tamanho, vai executar do mesmo jeito;
	printf("O que e dito e: %s \n", palavra);
	printf("Tambem e dito: %s \n", o);
	
	//Para fazer a entrada de dados pelo usu�rio:
	int num1, num2;
	printf("Informe o primeiro n�mero:\n");
	scanf("%i",&num1); // Fa�o a entrada de dados utilizando o scanf, onde primeiro informo o tipo de vari�vela a ser inserida e seto com "&" a variav�l que ser� armazenada
	printf("Informe o segundo n�mero:\n");
	scanf("%i",&num2);
	printf("A soma dos dois n�meros � de: %i",num1 + num2);
	
	
	return 0;
}

