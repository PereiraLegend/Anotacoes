#include <stdio.h>
#include <stdlib.h>
#include <locale.h> // Essa biblioteca chama uma linguagem que é definida
int main(){
	setlocale(LC_ALL,"Portuguese"); // Aqui defino para que o c leia os caracteres especiais da lingua portuguesa
	// Comentário de uma linha é dado por duas barras
	/*
	Comentários de mais de uma linha, podem ser definidos com duas barras e dois asteriscos
	*/
	
	printf("IDE\n");// Toda instrução acaba com ponto e vírgula, "printf" escreve uma frase que está contido em dois parênteses e duas aspas onde o texto é inserido
	// Preste atenção para deixar o código mt bem identado
	
	// Para a declaração de variávél ela precisa ser bem especificada:
	int i = 1; // Aqui eu disse que ela é inteira e de valor "1"
	int a = 2;
	printf("%i + %i = %i \n", i, a, i + a);// Aqui eu disse que queria o valor da soma das variaveis representado pelo %i
	// Toda variável possui um nome, tipo, tamanho, e valor
	// Posso ter outros tipos também, como float, double, char, dentre outros esses são os mais usados
	float r = 2.444;
	float b = 3.1;
	printf("%f + %.2f = %f\n", r, b, r + b); // Observe que aconta foi similar a do int, mas foi diferente já que serve apenas para números inteiros, e o float para números reais
	// Observe também acima o %.2f, serve para limitar o total de valores escritos na execução do código, nom caso os valores que vem após a vírgula
	// Atentesse também as regras de definição de váriaveis, como o nome de uma não poder conter espaços entre a mesma ou etc;
	// Outras curiosidades
	/*
	interager i% po %d
	float / double %f
	char %c
	string %s
	boolan b%
	
	%u módulo de um número
	%p endereço de memória
	%e endereço de memória
	%e ou %E para inprimir uma notação cientifica
	%% para inprimir só um sinal de porcentagem
	*/
	char palavra[20] = "Camisa"; // Para chamar um char ou palavra de uma variável char defina o tamanho do espaço de memória
	char o[] = "Bola"; // O que está dentro da string pode ficar sem especificação do tamanho, vai executar do mesmo jeito;
	printf("O que e dito e: %s \n", palavra);
	printf("Tambem e dito: %s \n", o);
	
	//Para fazer a entrada de dados pelo usuário:
	int num1, num2;
	printf("Informe o primeiro número:\n");
	scanf("%i",&num1); // Faço a entrada de dados utilizando o scanf, onde primeiro informo o tipo de variávela a ser inserida e seto com "&" a variavél que será armazenada
	printf("Informe o segundo número:\n");
	scanf("%i",&num2);
	printf("A soma dos dois números é de: %i",num1 + num2);
	
	
	return 0;
}

