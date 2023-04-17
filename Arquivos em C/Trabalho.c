/*
#include <windows.h>
#include <GL/glut.h>

// Vari�veis globais
int Xi = 100, Yi = 100, Xo = 1;

void Desenha(void)
{
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

glClear(GL_COLOR_BUFFER_BIT);
glColor3f(1.0f, 0.0f, 0.0f);
glBegin(GL_QUADS); // Quadrado de cor azul

glVertex2i(Xi, Yi);
glVertex2i(Xi, Yi-50);


glColor3f(0.0f, 0.0f, 1.0f); // COR
glVertex2i(Xi+50, Yi-50); // Coordenada do v�rtice
glVertex2i(Xi+50, Yi); // Coordenada do V�rtice
glEnd(); // Fim do Desenho
glFlush(); // Renderiza��o
}

void Inicializa (void)
{
glClearColor(0.0f, 0.0f, 0.0f, 1.0f); // Background Verde,Vermelho,Azul,Preto
}

void MudaTamanhoJanela(GLsizei w, GLsizei h)
{
if(h == 0) h = 1;

glViewport(0, 0, w, h);// Altura e largura

glMatrixMode(GL_PROJECTION);
glLoadIdentity();
if (w <= h)
gluOrtho2D (0.0f, 250.0f, 0.0f, 250.0f*h/w);
else
gluOrtho2D (0.0f, 250.0f*w/h, 0.0f, 250.0f);
}

void Atualiza(int value)
{
// Atualiza a posi��o do quadrado
Xi += Xo;

// Inverte a dire��o do movimento quando o quadrado chega ao limite da janela
if (Xi < 0 || Xi > 200) {
Xo = -Xo;
}

// Redesenha o quadrado
glutPostRedisplay();

// Chama a fun��o novamente ap�s 16 milissegundos
glutTimerFunc(1, Atualiza, 1);
}

int main(void)
{
glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
glutInitWindowSize(350,350); //Tamanho da Janela do programa
glutInitWindowPosition(50,30);// Posi��o em a janela aparece
glutCreateWindow("Quadrado");
glutDisplayFunc(Desenha);
glutReshapeFunc(MudaTamanhoJanela);
Inicializa();

// Registra a fun��o Atualiza para ser chamada no loop principal
glutTimerFunc(1, Atualiza, 1);

glutMainLoop();
}
*/
// Anima.c - Isabel H. Manssour
// Um programa OpenGL simples que mostra a anima��o 
// de quadrado em  uma janela GLUT.
// Este c�digo est� baseado no Bounce.c, exemplo 
// dispon�vel no livro "OpenGL SuperBible", 
// 2nd Edition, de Richard S. e Wright Jr.

#include <windows.h>
#include <gl/glut.h>

// Tamanho e posi��o inicial do quadrado
GLfloat x1 = 100.0f;
GLfloat y1 = 150.0f;
GLsizei rsize = 50;                                                    

// Tamanho do incremento nas dire��es x e y 
// (n�mero de pixels para se mover a cada
// intervalo de tempo)
GLfloat xstep = 1.0f;
GLfloat ystep = 1.0f;

// Largura e altura da janela
GLfloat windowWidth;
GLfloat windowHeight;


// Fun��o callback chamada para fazer o desenho
void Desenha(void)
{
     glMatrixMode(GL_MODELVIEW);
     glLoadIdentity();
                   
     // Limpa a janela de visualiza��o com a cor de fundo especificada
     glClear(GL_COLOR_BUFFER_BIT);

     // Especifica que a cor corrente � vermelha
     //         R     G     B
     glColor3f(1.0f, 0.0f, 0.0f);
  
     // Desenha um quadrado preenchido com a cor corrente
     glBegin(GL_QUADS);
               glVertex2i(x1,y1+rsize); 
               glVertex2i(x1,y1);
               // Especifica que a cor corrente � azul
               glColor3f(0.0f, 0.0f, 1.0f);
               glVertex2i(x1+rsize,y1);
               glVertex2i(x1+rsize,y1+rsize);               
     glEnd();

     // Executa os comandos OpenGL
     glutSwapBuffers();
}

// Fun��o callback chamada pela GLUT a cada intervalo de tempo
// (a window n�o est� sendo redimensionada ou movida)
void Timer(int value)
{
    // Muda a dire��o quando chega na borda esquerda ou direita
      if(x1 > windowWidth-rsize || x1 < 0)
            xstep = -xstep;

    // Muda a dire��o quando chega na borda superior ou inferior
    if(y1 > windowHeight-rsize || y1 < 0)
          ystep = -ystep;
          
    // Verifica as bordas.  Se a window for menor e o 
    // quadrado sair do volume de visualiza��o 
   if(x1 > windowWidth-rsize)
         x1 = windowWidth-rsize-1;

   if(y1 > windowHeight-rsize)
         y1 = windowHeight-rsize-1;

    // Move o quadrado
    x1 += xstep;
    y1 += ystep;

    // Redesenha o quadrado com as novas coordenadas 
    glutPostRedisplay();
    glutTimerFunc(33,Timer, 1);
}

// Inicializa par�metros de rendering
void Inicializa (void)
{   
    // Define a cor de fundo da janela de visualiza��o como preta
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
}

// Fun��o callback chamada quando o tamanho da janela � alterado 
void AlteraTamanhoJanela(GLsizei w, GLsizei h)
{
     // Evita a divisao por zero
     if(h == 0) h = 1;
                           
     // Especifica as dimens�es da Viewport
     glViewport(0, 0, w, h);

     // Inicializa o sistema de coordenadas
     glMatrixMode(GL_PROJECTION);
     glLoadIdentity();

     // Estabelece a janela de sele��o (left, right, bottom, top)     
     if (w <= h)  {
		windowHeight = 250.0f*h/w;
		windowWidth = 250.0f;
     }
     else  { 
		windowWidth = 250.0f*w/h;
		windowHeight = 250.0f;
     }
     
     gluOrtho2D(0.0f, windowWidth, 0.0f, windowHeight);
}

// Programa Principal 
int main(void)
{
     glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
     glutInitWindowSize(400,350);
     glutInitWindowPosition(10,10);
     glutCreateWindow("Anima");
     glutDisplayFunc(Desenha);
     glutReshapeFunc(AlteraTamanhoJanela);
     glutTimerFunc(33, Timer, 1);
     Inicializa();
     glutMainLoop();
}
