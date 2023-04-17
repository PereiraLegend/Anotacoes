#include <GL/glut.h>
#include <math.h>
#include <stdio.h>
/* Dimensoes da janela */
#define LARGURA  500        //largura da janela
#define ALTURA   400        //altura da janela
#define RAIO_BOLA 10        //raio da bola
#define LARGURA_RAQUETE 15  //largura da raquete
#define ALTURA_RAQUETE 70   //altura da raquete

/* Velocidade inicial da bola */
#define VELOCIDADE_BOLA_X 3
#define VELOCIDADE_BOLA_Y 3

/* Velocidade maxima permitida da bola */
#define VELOCIDADE_MAXIMA_BOLA 15

/* Tempo de atualizacao do jogo */
#define TEMPO_ATUALIZACAO 20

/* Constantes para representar as teclas de movimentacao */
#define TECLA_CIMA 101
#define TECLA_BAIXO 103

/* Variaveis globais */
int xBola, yBola;           //posicao da bola
int xRaquete1, yRaquete1;   //posicao da raquete 1
int xRaquete2, yRaquete2;   //posicao da raquete 2
int velocidadeBolaX, velocidadeBolaY;   //velocidade da bola
int pontuacao1, pontuacao2; //pontuacao de cada jogador

/* Funcao que desenha a cena */
void desenhaCena(void)
{
    /* Limpa a janela */
    glClear(GL_COLOR_BUFFER_BIT);

    /* Desenha a bola */
    glColor3f(1, 1, 1);
    glBegin(GL_TRIANGLE_FAN);
    for (int i = 0; i <= 360; i += 10) {
        glVertex2f(xBola + RAIO_BOLA * cos(i), yBola + RAIO_BOLA * sin(i));
    }
    glEnd();

    /* Desenha as raquetes */
    glColor3f(1, 1, 1);
    glBegin(GL_QUADS);
    glVertex2i(xRaquete1, yRaquete1);
    glVertex2i(xRaquete1 + LARGURA_RAQUETE, yRaquete1);
    glVertex2i(xRaquete1 + LARGURA_RAQUETE, yRaquete1 + ALTURA_RAQUETE);
    glVertex2i(xRaquete1, yRaquete1 + ALTURA_RAQUETE);
    glVertex2i(xRaquete2, yRaquete2);
    glVertex2i(xRaquete2 + LARGURA_RAQUETE, yRaquete2);
    glVertex2i(xRaquete2 + LARGURA_RAQUETE, yRaquete2 + ALTURA_RAQUETE);
    glVertex2i(xRaquete2, yRaquete2 + ALTURA_RAQUETE);
    glEnd();

    /* Exibe a pontuacao */
    char pontuacao[100];
    sprintf(pontuacao, "%d - %d", pontuacao1, pontuacao2);
    glColor3f(1, 1, 1);
    glRasterPos2f(LARGURA / 2 - 20, ALTURA - 20);
    for (int i = 0; i < strlen(pontuacao); i++) {
        glutBitmapCharacter(GLUT_BITMAP_TIMES_ROMAN_24, pontuacao[i]);
    }
    /* Exibe a cena */
    glutSwapBuffers();
}