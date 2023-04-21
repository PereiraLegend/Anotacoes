/*
// Anima.c - Isabel H. Manssour
// Um programa OpenGL simples que mostra a animação 
// de quadrado em  uma janela GLUT.
// Este código está baseado no Bounce.c, exemplo 
// disponível no livro "OpenGL SuperBible", 
// 2nd Edition, de Richard S. e Wright Jr.

#include <windows.h>
#include <gl/glut.h>

// Tamanho e posição inicial do quadrado
GLfloat x1 = 100.0f;
GLfloat y1 = 150.0f;
GLsizei rsize = 50;                                                    

// Tamanho do incremento nas direções x e y 
// (número de pixels para se mover a cada
// intervalo de tempo)
GLfloat xstep = 1.0f;
GLfloat ystep = 1.0f;

// Largura e altura da janela
GLfloat windowWidth;
GLfloat windowHeight;


// Função callback chamada para fazer o desenho
void Desenha(void)
{
     glMatrixMode(GL_MODELVIEW);
     glLoadIdentity();
                   
     // Limpa a janela de visualização com a cor de fundo especificada
     glClear(GL_COLOR_BUFFER_BIT);

     // Especifica que a cor corrente é vermelha
     //         R     G     B
     glColor3f(1.0f, 0.0f, 0.0f);
  
     // Desenha um quadrado preenchido com a cor corrente
     glBegin(GL_QUADS);
               glVertex2i(x1,y1+rsize); 
               glVertex2i(x1,y1);
               // Especifica que a cor corrente é azul
               glColor3f(0.0f, 0.0f, 1.0f);
               glVertex2i(x1+rsize,y1);
               glVertex2i(x1+rsize,y1+rsize);               
     glEnd();

     // Executa os comandos OpenGL
     glutSwapBuffers();
}

// Função callback chamada pela GLUT a cada intervalo de tempo
// (a window não está sendo redimensionada ou movida)
void Timer(int value)
{
    // Muda a direção quando chega na borda esquerda ou direita
      if(x1 > windowWidth-rsize || x1 < 0)
            xstep = -xstep;

    // Muda a direção quando chega na borda superior ou inferior
    if(y1 > windowHeight-rsize || y1 < 0)
          ystep = -ystep;
          
    // Verifica as bordas.  Se a window for menor e o 
    // quadrado sair do volume de visualização 
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

// Inicializa parâmetros de rendering
void Inicializa (void)
{   
    // Define a cor de fundo da janela de visualização como preta
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
}

// Função callback chamada quando o tamanho da janela é alterado 
void AlteraTamanhoJanela(GLsizei w, GLsizei h)
{
     // Evita a divisao por zero
     if(h == 0) h = 1;
                           
     // Especifica as dimensões da Viewport
     glViewport(0, 0, w, h);

     // Inicializa o sistema de coordenadas
     glMatrixMode(GL_PROJECTION);
     glLoadIdentity();

     // Estabelece a janela de seleção (left, right, bottom, top)     
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
*/
// Interacao.c - Isabel H. Manssour
// Um programa OpenGL simples que desenha um  quadrado em
// uma janela GLUT de acordo com interações do usuário.
// Este código está baseado nos exemplos 
// disponíveis no livro "OpenGL SuperBible", 
// 2nd Edition, de Richard S. e Wright Jr.

#include <gl/glut.h>

GLfloat xf, yf, win;
GLint view_w, view_h;

// Função callback chamada para fazer o desenho
void Desenha(void)
{
     glMatrixMode(GL_MODELVIEW);
     glLoadIdentity();
                   
     glClear(GL_COLOR_BUFFER_BIT);
     // Desenha um retângulo preenchido com a cor corrente
     glBegin(GL_POLYGON);
               glVertex2f(0.0f, 0.0f);
               glVertex2f(xf, 0.0f);
               glVertex2f(xf, yf);
               glVertex2f(0.0f, yf);               
     glEnd();
     glFlush();
}

// Inicializa parâmetros de rendering
void Inicializa (void)
{   
    // Define a cor de fundo da janela de visualização como preta
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    xf=50.0f;
    yf=50.0f;
    win=250.0f;
}

// Função callback chamada quando o tamanho da janela é alterado 
void AlteraTamanhoJanela(GLsizei w, GLsizei h)
{ 
    // Especifica as dimensões da Viewport
    glViewport(0, 0, w, h);
    view_w = w;
    view_h = h;                   

    // Inicializa o sistema de coordenadas
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D (-win, win, -win, win);
}

// Função callback chamada para gerenciar eventos de teclado
void GerenciaTeclado(unsigned char key, int x, int y)
{
    switch (key) {
            case 'R': 
            case 'r':// muda a cor corrente para vermelho
                     glColor3f(1.0f, 0.0f, 0.0f);
                     break;
            case 'G':
            case 'g':// muda a cor corrente para verde
                     glColor3f(0.0f, 1.0f, 0.0f);
                     break;
            case 'B':
            case 'b':// muda a cor corrente para azul
                     glColor3f(0.0f, 0.0f, 1.0f);
                     break;
    }
    glutPostRedisplay();
}
           
// Função callback chamada para gerenciar eventos do mouse
void GerenciaMouse(int button, int state, int x, int y)
{
    if (button == GLUT_LEFT_BUTTON)
         if (state == GLUT_DOWN) {
                  // Troca o tamanho do retângulo, que vai do centro da 
                  // janela até a posição onde o usuário clicou com o mouse
                  xf = ( (2 * win * x) / view_w) - win;
                  yf = ( ( (2 * win) * (y-view_h) ) / -view_h) - win;
         }
    glutPostRedisplay();
}

// Função callback chamada para gerenciar eventos do teclado   
// para teclas especiais, tais como F1, PgDn e Home
void TeclasEspeciais(int key, int x, int y)
{
    if(key == GLUT_KEY_UP) {
           win -= 20;
           glMatrixMode(GL_PROJECTION);
           glLoadIdentity();
           gluOrtho2D (-win, win, -win, win);
    }
    if(key == GLUT_KEY_DOWN) {
           win += 20;
           glMatrixMode(GL_PROJECTION);
           glLoadIdentity();
           gluOrtho2D (-win, win, -win, win);
    }
    glutPostRedisplay();
}
                      
// Programa Principal 
int main(void)
{
     glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
     glutInitWindowSize(350,300);
     glutInitWindowPosition(10,10);
     glutCreateWindow("Exemplo de Interacao");
     glutDisplayFunc(Desenha);
     glutReshapeFunc(AlteraTamanhoJanela);
     glutKeyboardFunc(GerenciaTeclado);
     glutMouseFunc(GerenciaMouse);
     glutSpecialFunc(TeclasEspeciais);     
     Inicializa();
     glutMainLoop();
}