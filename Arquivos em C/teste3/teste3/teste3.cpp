#include <iostream>
#include <string>
#include <Windows.h>
#include <conio.h>
#include <sstream>
#include <math.h>
#include <gl\GL.h>
#include <gl\GLU.h>
#include <GL\freeglut.h>
#pragma comment(lib, "OpenGL32.lib")
int altura = 750;
int largura = 600;
int intervalo = 1000 / 60;

void Inicializador(int& argc, char** argv) {
	// Inicializador
	glutInit(&argc, &argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPH);
	glutInitWindowSize(altura, largura);
	glutCreateWindow("GAMC-JANUARY [PONG]");

}

void desenho() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();

	glutSwapBuffers();
}

void update(int val) {
	glutTimerFunc(intervalo, update, 0);
	glutPostRedisplay();
}

void Configurar2D(int altura, int largura) {
	glViewport(0, 0, altura, largura);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(0.0f, altura, 0.0f, largura, 0.0f, 1.0f);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

int main(int argc, char* argv) {
	Initialize_GL(argc, argv);
	glutDisplayFunc(draw);
	glutDisplayFunc(intervalo, update, 0);

	glViewport(0, 0, altura, largura);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(0.0f, altura, 0.0f, largura, 0.0f, 1.0f);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();

	glutMainLoop();
	return 0;
}