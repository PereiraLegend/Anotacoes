// Trabalho 3 - Estrutura de Dados em C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

struct Aluno{
 char nome[45];
 int matricula;
 char curso[35];
 struct {
 	int periodo;
 	int pagamento;
 	int ano;
 };
};

main() {
 setlocale(LC_ALL,"portuguese");
 struct Aluno alunos[5];
 int i;
 for(i = 0; i < 5; i++) {
 
 printf("Entre com o %iº nome:\n",i++);
 gets(alunos[i].nome);
 fflush(stdin);
 
 printf("Entre com a matricula:\n");
 
 scanf("%d", &alunos[i].matricula);
 fflush(stdin);
 
 printf("Entre com o curso:\n");
 gets(alunos[i].curso);
 
 printf("Entre com o periodo:\n");
 gets(alunos[i].curso);
 
 printf("Entre com o pagamento:\n");
 gets(alunos[i].curso);
 
 printf("Entre com o ano:\n");
 gets(alunos[i].curso);
 
 printf("-----------------------------------------\n");
 
 }
 
 for(i = 0; i < 5; i++){
 printf("-----------------------------------------\n");
 printf ("\n\nSuccessful Application: (%iº plicação Bem sucedida)\n",i);
 printf("\nNome: %s\n",alunos[i].nome);
 printf("\nMatricula: %d\n", alunos[i].matricula);
 printf("\nCurso: %s\n", alunos[i].curso);
 
 }
 
 //getch();
 
 return 0;
}
