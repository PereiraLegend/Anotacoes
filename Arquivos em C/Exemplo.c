#include <windows.h>
#include <glut.h>
void Desenha(void)
{
 glMatrixMode(GL_MODELVIEW);
 glLoadIdentity();

 glClear(GL_COLOR_BUFFER_BIT);
 glColor3f(1.0f, 0.0f, 0.0f);
 glBegin(GL_QUADS); // Quadrado de cor azul
 glVertex2i(100,150);
 glVertex2i(100,100);

 glColor3f(0.0f, 0.0f, 1.0f);
 glVertex2i(150,100);
 glVertex2i(150,150);
 glEnd();
 glFlush();
}
void Inicializa (void)
{
 glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
}
void MudaTamanhoJanela(GLsizei w, GLsizei h)
{
 if(h == 0) h = 1;

 glViewport(0, 0, w, h);
2
 glMatrixMode(GL_PROJECTION);
 glLoadIdentity();
 if (w <= h)
 gluOrtho2D (0.0f, 250.0f, 0.0f, 250.0f*h/w);
 else
 gluOrtho2D (0.0f, 250.0f*w/h, 0.0f, 250.0f);
}
int main(void)
{
 glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
 glutInitWindowSize(500,350);
 glutInitWindowPosition(50,30);
 glutCreateWindow("Quadrado");
 glutDisplayFunc(Desenha);
 glutReshapeFunc(MudaTamanhoJanela);
 Inicializa();
 glutMainLoop();
}