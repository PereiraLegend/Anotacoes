/*Alunos: Lucas Pereira dos Santos - Emily Caroline Abreu e Silva- Matheus Batista Rezende*/
#include <stdlib.h>
#include <GL/glut.h>
#include <math.h>
#include <stdio.h>
//#include <glut.h>
#include <windows.h>

// Definindo as constantes
#define LARGURA 640
#define ALTURA 480
#define PI 3.14159265358979323846

// FPS (quadros por segundo)
#define FPS 60

// Variáveis para o jogo
int pontuacao_jogador1 = 0;
int pontuacao_jogador2 = 0;
bool jogo_pausado = false;

// Variáveis para a bola
float bola_posicao_x = LARGURA/2;
float bola_posicao_y = ALTURA/2;
float bola_direcao_x = 1;
float bola_direcao_y = 1;
float bola_velocidade = 9;
float bola_raio = 10;

// Variáveis para os jogadores
float jogador1_posicao_y = ALTURA/2;
float jogador2_posicao_y = ALTURA/2;
float jogador_altura = 80;
float jogador_largura = 10;
float jogador_velocidade = 12;

// Função para desenhar a bola
void desenhaBola(){
    glColor3f(1,1,1);
    glBegin(GL_TRIANGLE_FAN);
        glVertex2f(bola_posicao_x, bola_posicao_y);
        for(float angulo = 0; angulo < 2*PI; angulo += PI/16)
            glVertex2f(bola_posicao_x + bola_raio*cos(angulo), bola_posicao_y + bola_raio*sin(angulo));
        glVertex2f(bola_posicao_x + bola_raio*cos(0), bola_posicao_y + bola_raio*sin(0));
    glEnd();
}

// Função para desenhar os jogadores
void desenhaJogador(float jogador_posicao_y){
    glColor3f(1,1,1);
    glBegin(GL_QUADS);
        glVertex2f(LARGURA - 20, jogador_posicao_y - jogador_altura/2);
        glVertex2f(LARGURA - 20, jogador_posicao_y + jogador_altura/2);
        glVertex2f(LARGURA - 20 - jogador_largura, jogador_posicao_y + jogador_altura/2);
        glVertex2f(LARGURA - 20 - jogador_largura, jogador_posicao_y - jogador_altura/2);
    glEnd();
}

// Função para desenhar as linhas do cenário do jogo
void desenhaLinhaCircular(float raio, int numPontos) {
    glBegin(GL_LINE_LOOP);
    for(int i = 0; i < numPontos; i++) {
        float angulo = 2.0f * 3.1415926f * i / numPontos;
        float x = raio * cos(angulo);
        float y = raio * sin(angulo);
        glVertex2f(x, y);
    }
    glEnd();
}

// Fução para desenhar o cenário
void desenhaLinhas(){
	// Linha Branca Horizontal
    glColor3f(1,1,1);
    glBegin(GL_LINES);
        glVertex2f(LARGURA/2, 0);
        glVertex2f(LARGURA/2, ALTURA);
    glEnd();

    // desenha um círculo no centro da tela
    glColor3f(1, 1, 1);
    glPushMatrix();
    glTranslatef(LARGURA/2, ALTURA/2, 0);
    desenhaLinhaCircular(40.0f, 40);
    glPopMatrix();
    
    // desenha o ponto de aparecimento no centro
    glColor3f(1, 1, 1);
    glPushMatrix();
    glTranslatef(LARGURA/2, ALTURA/2, 0);
    desenhaLinhaCircular(2.0f, 2);
    desenhaLinhaCircular(3.0f, 3);
    desenhaLinhaCircular(2.5f, 3);
    glPopMatrix();

}

// Função para atualizar a posição da bola
void atualizaBola(){
    if(!jogo_pausado){
        // Verificando se a bola está colidindo com as paredes
        if(bola_posicao_y + bola_raio >= ALTURA || bola_posicao_y - bola_raio <= 0)
            bola_direcao_y = -bola_direcao_y;

        // Verificando se a bola está colidindo com os jogadores
        if(bola_posicao_x + bola_raio >= LARGURA - jogador_largura && bola_posicao_y + bola_raio >= jogador2_posicao_y - jogador_altura/2 && bola_posicao_y - bola_raio <= jogador2_posicao_y + jogador_altura/2)
            bola_direcao_x = -bola_direcao_x;
        else if(bola_posicao_x - bola_raio <= jogador_largura && bola_posicao_y + bola_raio >= jogador1_posicao_y - jogador_altura/2 && bola_posicao_y - bola_raio <= jogador1_posicao_y + jogador_altura/2)
            bola_direcao_x = -bola_direcao_x;

        // Atualizando a posição da bola
        bola_posicao_x += bola_velocidade * bola_direcao_x;
        bola_posicao_y += bola_velocidade * bola_direcao_y;

        // Verificando se a bola saiu da tela
        if(bola_posicao_x + bola_raio < 0){
            pontuacao_jogador2++;
            bola_posicao_x = LARGURA/2;
            bola_posicao_y = ALTURA/2;
        }
        else if(bola_posicao_x - bola_raio > LARGURA){
            pontuacao_jogador1++;
            bola_posicao_x = LARGURA/2;
            bola_posicao_y = ALTURA/2;
        }
    }
}

// Função para atualizar a posição dos jogadores
void atualizaJogadores(){
    if(!jogo_pausado){
        // Movendo o jogador 1
        if(GetAsyncKeyState(0x57)){
            jogador1_posicao_y += jogador_velocidade;
            if(jogador1_posicao_y + jogador_altura/2 > ALTURA)
                jogador1_posicao_y = ALTURA - jogador_altura/2;
        }
        else if(GetAsyncKeyState(0x53)){
            jogador1_posicao_y -= jogador_velocidade;
            if(jogador1_posicao_y - jogador_altura/2 < 0)
                jogador1_posicao_y = jogador_altura/2;
        }

       // Movendo o jogador 2
		if(GetAsyncKeyState(VK_UP)){ // código hexadecimal para a tecla 'w'
    	jogador2_posicao_y += jogador_velocidade;
    	if(jogador2_posicao_y + jogador_altura/2 > ALTURA)
        jogador2_posicao_y = ALTURA - jogador_altura/2;
		}
		else if(GetAsyncKeyState(VK_DOWN)){ // código hexadecimal para a tecla 's'
    	jogador2_posicao_y -= jogador_velocidade;
    	if(jogador2_posicao_y - jogador_altura/2 < 0)
        jogador2_posicao_y = jogador_altura/2;
		}

    }
}

// Função para desenhar o placar
void desenhaPlacar(){
    char texto_placar[50];
    sprintf(texto_placar, "%d - %d", pontuacao_jogador1, pontuacao_jogador2);

    glPushMatrix();
    glLoadIdentity();

    // calcula a largura do texto em pixels
    int largura_texto = glutBitmapLength(GLUT_BITMAP_HELVETICA_18, (const unsigned char*)texto_placar);
	glColor3f(1.0f, 1.0f, 1.0f);
    // ajusta a posição da string para o centro superior da janela
    glRasterPos2f((LARGURA - largura_texto) / 2.0, ALTURA - 20);

    // desenha a string
    for(int i = 0; texto_placar[i] != '\0'; i++)
        glutBitmapCharacter(GLUT_BITMAP_HELVETICA_18, texto_placar[i]);
    glPopMatrix();
}

// Função para desenhar os elementos do jogo
void desenhaCena(){
	glClearColor(0.0, 0.5, 0.0, 1.0);
    glClear(GL_COLOR_BUFFER_BIT);

    // Desenhando a bola
    desenhaBola();

    // Desenhando o jogador 1
    glPushMatrix();
	glTranslatef(0, jogador1_posicao_y, 0);
	glColor3f(0, 0, 1);
	glRectf(0, -jogador_altura/2, jogador_largura, jogador_altura/2);
	glPopMatrix();

    // Desenhando o jogador 2
    glPushMatrix();
	glTranslatef(LARGURA - jogador_largura, jogador2_posicao_y, 0);
	glColor3f(1, 0, 0);
	glRectf(0, -jogador_altura/2, jogador_largura, jogador_altura/2);
	glPopMatrix();

    // Desenhando Cenário
    desenhaLinhas();
    
    // Desenhando o placar
    desenhaPlacar();

    glutSwapBuffers();
}

// Função de inicialização do OpenGL
void inicializa(){
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(0, LARGURA, 0, ALTURA, -1, 1);
    glMatrixMode(GL_MODELVIEW);
    glClearColor(0, 0, 0, 0);
}

// Função para atualizar a cena
void atualizaCena(int periodo){
    atualizaBola();
    atualizaJogadores();
    glutPostRedisplay();
    glutTimerFunc(1000/FPS, atualizaCena, 0);
}

// Criando a janela
int main(int argc, char** argv){
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
    glutInitWindowSize(LARGURA, ALTURA);
    glutCreateWindow("Trabalho Ping Pong com C");

    glutDisplayFunc(desenhaCena);
    glutTimerFunc(0, atualizaCena, 0);
    inicializa();

    glutMainLoop();

    return 0;
}
