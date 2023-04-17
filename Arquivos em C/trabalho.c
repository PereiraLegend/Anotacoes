#include <windows.h>
#include <glut.h>

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