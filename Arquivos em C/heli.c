#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <GL/glut.h>
#include "image.h"

#define PI 3.1415

#define COORD_TEXTURA_PLANO 1.0
#define COORD_TEXTURA_HELICOPTERO 1.0
#define COR_DO_PLANO 0.52,0.52,0.78,1.0
#define COR_DO_HELICOPTERO 0.3,0.52,0.18,1.0
#define TEXTURA_DO_PLANO "montanhas.rgb"
#define TEXTURA_DO_HELICOPTERO "camuflagem.rgb"
#define GLUT_KEY_I 105
#define MAX_MISSILES 10
#define MISSILE_SPEED .2

GLint WIDTH =800;
GLint HEIGHT=600;

GLfloat obs[3]={0.0,7.0,0.0};
GLfloat look[3]={0.0,3.0,0.0};
GLuint  textura_plano;
GLuint  textura_helicoptero;

GLshort texturas=1;
GLfloat tetaxz=0;
GLfloat raioxz=6;
GLuint  heli;

GLfloat angle = 0.0;

GLfloat heliPosX = 0.0;
GLfloat heliPosY = 0.0;
GLfloat heliPosZ = -1.0;
GLfloat Angle = 0.0; 

float heliceRotation = 0.0;
//////////////////////////////////////////////////////////////////

GLfloat torpedo1PosX = 1.0;
GLfloat torpedo1PosY = 0.0;
GLfloat torpedo1PosZ = -0.1;

GLfloat torpedo2PosX = -1.0;
GLfloat torpedo2PosY = 0.5;
GLfloat torpedo2PosZ = -0.1;

GLfloat projectilePosX = heliPosX;
GLfloat projectilePosY = heliPosY + 1.2;
GLfloat projectilePosZ = heliPosZ;
GLboolean projectileActive = GL_FALSE;

GLboolean torpedo1Active = GL_FALSE;
GLboolean torpedo2Active = GL_FALSE;

GLboolean heliNoChao = GL_TRUE;
GLboolean heliceAtiva = GL_FALSE;

GLfloat ctp[4][2]={
	{-COORD_TEXTURA_PLANO,-COORD_TEXTURA_PLANO},
	{+COORD_TEXTURA_PLANO,-COORD_TEXTURA_PLANO},
	{+COORD_TEXTURA_PLANO,+COORD_TEXTURA_PLANO},
	{-COORD_TEXTURA_PLANO,+COORD_TEXTURA_PLANO}
};

GLfloat cta[4][2]={
	{-COORD_TEXTURA_HELICOPTERO,-COORD_TEXTURA_HELICOPTERO},
	{+COORD_TEXTURA_HELICOPTERO,-COORD_TEXTURA_HELICOPTERO},
	{+COORD_TEXTURA_HELICOPTERO,+COORD_TEXTURA_HELICOPTERO},
	{-COORD_TEXTURA_HELICOPTERO,+COORD_TEXTURA_HELICOPTERO}
};

void reshape(int width, int height){
	WIDTH=width;
	HEIGHT=height;
	glViewport(0,0,(GLint)width,(GLint)height);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(70.0,width/(float)height,0.1,30.0);
	glMatrixMode(GL_MODELVIEW);
}
void drawProjectile() {

    glPushMatrix();
    glTranslatef(projectilePosX, projectilePosY, projectilePosZ);
    glColor3f(1.0, 0.0, 0.0);
    glutSolidSphere(0.1, 10, 10);
    glPopMatrix();

}
void drawCylinder(float baseRadius, float topRadius, float height, int slices, int stacks) {

    GLUquadricObj* quadric = gluNewQuadric();
    gluCylinder(quadric, baseRadius, topRadius, height, slices, stacks);
    gluDeleteQuadric(quadric);
}
void timer(int value) {
    angle += 1.0; // Incrementa o ângulo de rotação
	
    if (angle > 360.0) {
        angle -= 360.0; // Mantém o ângulo dentro do intervalo de 0 a 360
    }
    glutPostRedisplay(); // Marca a janela para ser redesenhada

	if (projectileActive) {
        projectilePosZ += MISSILE_SPEED; // Ajuste a velocidade do projétil conforme necessário
        if (projectilePosZ > 10.0) {
            projectileActive = GL_FALSE;
        }
    }
    // Define o intervalo de tempo para o próximo evento de temporizador
    glutTimerFunc(16, timer, 0);
}

void metralhadora(){
	glPushMatrix();
	glTranslatef(0.5, -0.3, 1); // Ajuste a altura da tábua acima da esfera
	glScalef(0.1, 0.1, 1.2); // Ajuste as dimensões da tábua conforme necessário
	glColor3f(0.0, 0.0, 0.0);
	glutSolidCube(1.0);
	glPopMatrix();
}

void shootProjectile() {
    if (!projectileActive) {
        projectilePosX = heliPosX + 0.5;
        projectilePosY = heliPosY + 1.2;
        projectilePosZ = heliPosZ + 5.0;
        projectileActive = GL_TRUE;
    }
}

void torpedo1(){
	
	

    //torpedos();
    glTranslatef(torpedo1PosX, torpedo1PosY, torpedo1PosZ);
    glPushMatrix();
	glTranslatef(-0.2, 0.9, 3.6); // Ajuste a altura do torpedo acima da esfera
	glScalef(0.3, 0.3, 1.2); // Ajuste as dimensões do torpedo conforme necessário
	glColor3f(1.0, 0.0, 0.0);
	glutSolidCube(1.0);
	glPopMatrix();
	/*
	glTranslatef(torpedo2PosX, torpedo2PosY, torpedo2PosZ);
	glPushMatrix();
	glTranslatef(-0.9, 0.4, 3.6); // Ajuste a altura do torpedo acima da esfera
	glScalef(0.3, 0.3, 1.2); // Ajuste as dimensões do torpedo conforme necessário
	glColor3f(1.0, 0.0, 0.0);
	glutSolidCube(1.0);
	*/
	
	if (torpedo1Active) {
        torpedo1PosZ += MISSILE_SPEED; // Atualize a posição do torpedo (exemplo: movendo-se para frente)
        if (torpedo1PosY > -1.0) {
            torpedo1PosY -= 0.01; // Ajuste a velocidade de movimento do torpedo conforme necessário	
        } else {
            torpedo1Active = GL_FALSE; // Termina a animação do torpedo
            torpedo1PosY = 0.5; // Reinicia a posição do torpedo para a posição inicial
        }
    }
    glPushMatrix();
}

void torpedo2(){
	
	

    //torpedos();
    /*
    glTranslatef(torpedoPosX, torpedoPosY, torpedoPosZ);
    glPushMatrix();
	glTranslatef(-0.2, 0.9, 3.6); // Ajuste a altura do torpedo acima da esfera
	glScalef(0.3, 0.3, 1.2); // Ajuste as dimensões do torpedo conforme necessário
	glColor3f(1.0, 0.0, 0.0);
	glutSolidCube(1.0);
	glPopMatrix();
	*/
	glTranslatef(torpedo2PosX, torpedo2PosY, torpedo2PosZ);
	glPushMatrix();
	glTranslatef(-0.9, 0.4, 3.6); // Ajuste a altura do torpedo acima da esfera
	glScalef(0.3, 0.3, 1.2); // Ajuste as dimensões do torpedo conforme necessário
	glColor3f(1.0, 0.0, 0.0);
	glutSolidCube(1.0);
	
	if (torpedo2Active) {
        torpedo2PosZ += MISSILE_SPEED; // Atualize a posição do torpedo (exemplo: movendo-se para frente)
        if (torpedo2PosY > -1.0) {
            torpedo2PosY -= 0.01; // Ajuste a velocidade de movimento do torpedo conforme necessário
        } else {
            torpedo2Active = GL_FALSE; // Termina a animação do torpedo
            torpedo2PosY = 0.5; // Reinicia a posição do torpedo para a posição inicial
        }
    }
    
    glPushMatrix();
}


void compoe_heli(void){
    GLUquadricObj *quadric;

    GLfloat asa[][3]={
    	{-4.0,0.0,0.0},
    	{+4.0,0.0,0.0},
    	{0.0,0.0,3.0}
    };

    GLfloat cauda[][3]={
    	{0.0,0.0,0.0},
    	{0.0,2.0,-1.0},
    	{0.0,2.0,0.0},
	    {0.0,0.0,2.0}
    };
    /* inicia a composicao do heli */
    heli = glGenLists(1);
    glNewList(heli, GL_COMPILE);

	/* asas */ // Aqui as asas são multiplicadas por 0.25 para reduzir do seu tam
	glBegin(GL_TRIANGLES); 
	glColor3f(0.0, 0.5, 0.0);
	glTexCoord2fv(cta[0]); glVertex3f(asa[0][0]*0.25, asa[0][1]*0.25, asa[0][2]*0.25);
	glTexCoord2fv(cta[1]); glVertex3f(asa[1][0]*0.25, asa[1][1]*0.25, asa[1][2]*0.25);
	glTexCoord2fv(cta[3]); glVertex3f(asa[2][0]*0.25, asa[2][1]*0.25, asa[2][2]*0.25);
	glEnd();


  
    /* corpo */
    quadric = gluNewQuadric();
    gluQuadricTexture(quadric, GL_TRUE);
    glColor3f(0.0, 0.5, 0.0);
    gluCylinder(quadric, 0.1, 0.5, 4, 12, 3);
  
    /* cauda */ // Aqui a cauda é multiplicada por 0.25 vezes para reduzir do seu tamanho original para 4 vezes menor do que é
	glBegin(GL_POLYGON); 
	glColor3f(0.0, 0.5, 0.0);
	glTexCoord2fv(cta[0]); glVertex3f(cauda[0][0]*0.25, cauda[0][1]*0.25, cauda[0][2]*0.25);
	glTexCoord2fv(cta[1]); glVertex3f(cauda[1][0]*0.25, cauda[1][1]*0.25, cauda[1][2]*0.25);
	glTexCoord2fv(cta[2]); glVertex3f(cauda[2][0]*0.25, cauda[2][1]*0.25, cauda[2][2]*0.25);
	glTexCoord2fv(cta[3]); glVertex3f(cauda[3][0]*0.25, cauda[3][1]*0.25, cauda[3][2]*0.25);
	//glColor3f(0.0, 0.0, 0.0);
	glEnd();


    /* cabine do piloto */
	glTranslatef(0, 0.3, 3.5);
	glPushMatrix();

	glScalef(0.0, 0.0, 0.0); // Ajuste as dimensões da hélice conforme necessário
	
	glBindTexture(GL_TEXTURE_2D, textura_helicoptero); // Carrega a textura
	glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
	glEnable(GL_TEXTURE_2D);
	
	glutSolidCube(2.0);
	glPopMatrix();

	glPushMatrix();
	glScalef(2.0, 2.0, 2.0); // Aumenta a escala para 1.5x em todas as dimensões
	glColor3f(0.2, 0.4, 0.2);  // Verde escuro

	glutSolidSphere(0.5, 20, 20); // Desenha uma esfera sólida com raio 0.5
	glPopMatrix();
	
	
	// Desenho do cilindro
    glPushMatrix();
    glTranslatef(0, 1.4, -1.4);
    glScalef(2.0, 2.0, 2.0);
    glTranslatef(0, 0, 0.7); // Ajuste a altura do cilindro em relação à esfera
    glRotatef(90, 1, 0, 0);
    glColor3f(0.0, 0.0, 0.0); // Define a cor preta

    drawCylinder(0.1, 0.1, 0.6, 20, 1); // Ajuste os parâmetros do cilindro conforme necessário
    glPopMatrix();
	
	// Desenho dos pés
	
	glPushMatrix();
	glTranslatef(0.3, -1, -0.1); // Ajuste a altura da tábua acima da esfera
	glScalef(0.1, 0.1, 1.2); // Ajuste as dimensões da tábua conforme necessário
	glutSolidCube(1.0);
	glPopMatrix();

	glPushMatrix();
	glTranslatef(-0.3, -1, -0.1); // Ajuste a altura da tábua acima da esfera
	glScalef(0.1, 0.1, 1.2); // Ajuste as dimensões da tábua conforme necessário
	glutSolidCube(1.0);
	glPopMatrix();
	
	// Desenho da metralhadora

	metralhadora();

    /* termina a composicao do heli*/
    glEndList();
}

void display(void){
	glEnable(GL_DEPTH_TEST);
  
	glDepthMask(GL_TRUE);
	glClearColor(1.0,1.0,1.0,1.0);
	glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
  
	glPushMatrix();

	/* calcula a posicao do observador */
	obs[0]=raioxz*cos(2*PI*tetaxz/360);
	obs[2]=raioxz*sin(2*PI*tetaxz/360);
	gluLookAt(obs[0],obs[1],obs[2],look[0],look[1],look[2],0.0,1.0,0.0);

	// Após o desenho do helicóptero
	if (projectileActive) {
	    drawProjectile();
	}

  
	/* habilita/desabilita uso de texturas*/
	if(texturas){
		glEnable(GL_TEXTURE_2D);  
	}
	else{
    	glDisable(GL_TEXTURE_2D);
	}
    // Verificação se o helicóptero está tocando o chão
    if (heliPosY <= 0.0) {
        if (heliNoChao) {
            // Ligar ou desligar a hélice apenas se estiver tocando o chão
            if (heliceAtiva)
                heliceRotation += 5.0;
            else
                heliceRotation = 0.0;
        }

        heliNoChao = GL_TRUE;
    }
    else {
        heliNoChao = GL_FALSE;
    }
	// Textura chão
	glColor4f(COR_DO_PLANO);
	glTexEnvf(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_DECAL);
	glBindTexture(GL_TEXTURE_2D,textura_plano);

	glBegin(GL_QUADS);
	glTexCoord2fv(ctp[0]);
	glVertex3f(-10, 0, 10);
	glTexCoord2fv(ctp[1]);
	glVertex3f(10, 0, 10);
	glTexCoord2fv(ctp[2]);
	glVertex3f(10, 0, -10);
	glTexCoord2fv(ctp[3]);
	glVertex3f(-10, 0, -10);
	glEnd();

	// Verificação para limitar a posição do helicóptero dentro da textura do chão (Evita que o mesmo ultrapasse os limites do mapa)
	if (heliPosX < -9.5)
    	heliPosX = -9.5;
	else if (heliPosX > 9.5)
    	heliPosX = 9.5;
  	if (heliPosZ < -9.5)
    	heliPosZ = -9.5;
	else if (heliPosZ > 9.5)
    	heliPosZ = 9.5;
	if (heliPosY < -0.1)
    	heliPosY = 0.0;
	else if (heliPosY > 9.5)
    	heliPosY = 9.5;
    
	glTranslatef(heliPosX, heliPosY + 1.2, heliPosZ);
    
    glPushMatrix();
    //Translatef(heliPosX, heliPosY + 1.2, heliPosZ); // Translada o helicóptero para a posição desejada
	
    // Desenho do helicóptero
    glBindTexture(GL_TEXTURE_2D, textura_helicoptero);
    glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
    glEnable(GL_TEXTURE_2D);
    glCallList(heli); // Chama a lista de exibição do helicóptero
    
    // Animação da hélice
    
    glPushMatrix();
    glTranslatef(0, 1.2, -0.1); // Ajuste a altura da hélice acima da esfera
    glRotatef(heliceRotation, 0.0, 1.0, 0.0); // Aplica a rotação da hélice em torno do eixo Y
    glScalef(0.3, 0.01, 2.9); // Ajuste as dimensões da hélice conforme necessário
    glColor3f(0.0, 0.0, 0.0);
    glutSolidCube(2.0);
    glPopMatrix();
	
    glPopMatrix();
    
	// Animação da hélice
	if (heliceAtiva) {
    	heliceRotation += 10.0; // Incrementa o ângulo de rotação da hélice
    	if (heliceRotation >= 360.0) {
        	heliceRotation -= 360.0; // Mantém o ângulo dentro do intervalo de 0 a 360
    	}
	}
    
    // Torpedos
    torpedo1();
    glPopMatrix();
    torpedo2();
	
	glPopMatrix();
	
    glPopMatrix();
	
	glColor4f(COR_DO_HELICOPTERO);
	glBindTexture(GL_TEXTURE_2D,textura_helicoptero);
	glPopMatrix();

	glutSwapBuffers();
}


void special(int key, int x, int y){
	switch (key) {
	case GLUT_KEY_UP:
    	obs[1]=obs[1]+1;
    	glutPostRedisplay();
    	break;
	case GLUT_KEY_DOWN:
    	obs[1] =obs[1]-1;
    	glutPostRedisplay();
    	break;
	case GLUT_KEY_LEFT:
    	tetaxz=tetaxz+2;
    	glutPostRedisplay();
    	break;
	case GLUT_KEY_RIGHT:
    	tetaxz=tetaxz-2;
    	glutPostRedisplay();
    	break;
	}
}

void keyboard(unsigned char key, int x, int y){
	switch (key) {
	case 27:
		exit(0);
		break;
	case 'f':
    	texturas = !texturas;
    	glutPostRedisplay();
    	break;
	case 'r':
    	raioxz=raioxz+1;
    	glutPostRedisplay();
    	break;
	case 'R':
    	raioxz=raioxz-1;
		if(raioxz==0){
			raioxz=1;
		}
    	glutPostRedisplay();
    	break;
	case 'd':
	case 'D':
		if (heliceAtiva) {
		heliPosZ -= 0.1; // Move o helicóptero para frente
		}break;
	case 'a':
	case 'A':
		if (heliceAtiva) {
    	heliPosZ += 0.1; // Move o helicóptero para trás
		}break;
	case 'w':
	case 'W':
		if (heliceAtiva) {
		heliPosX -= 0.1; // Move o helicóptero para a esquerda
	   }break;
	case 's':
	case 'S':
		if (heliceAtiva) {
    	heliPosX += 0.1; // Move o helicóptero para a direita
	    }break;
	case 'e':
	case 'E':
		if (heliceAtiva) {
    	heliPosY += 0.1; // Move o helicóptero para cima
		}break;
	case 'q':
	case 'Q':
		if (heliceAtiva) {
    	heliPosY -= 0.1; // Move o helicóptero para baixo
		}break;
    case 't':
    	torpedo1Active = GL_TRUE;
    	break;
 	case 'T':
		torpedo2Active = GL_TRUE;
		break;
	case 'M':
	case 'm':
            shootProjectile();
            break;
    case 'i':
    case 'I':
    	if(heliNoChao) {
      heliceAtiva = !heliceAtiva; // Alterna o estado da rotação das hélices
		}
	  break;
	}
	glutPostRedisplay();
}

void carregar_texturas(void){
	IMAGE *img;
	GLenum gluerr;

	/* textura do plano */
	glGenTextures(1, &textura_plano);
	glBindTexture(GL_TEXTURE_2D, textura_plano);
  
	if(!(img=ImageLoad((char*)TEXTURA_DO_PLANO))) {
    	fprintf(stderr,"Error reading a texture.\n");
    	exit(-1);
	}
  
	gluerr=gluBuild2DMipmaps(GL_TEXTURE_2D, 3, 
			   img->sizeX, img->sizeY, 
			   GL_RGB, GL_UNSIGNED_BYTE, 
			   (GLvoid *)(img->data));
	if(gluerr){
    	fprintf(stderr,"GLULib%s\n",gluErrorString(gluerr));
    	exit(-1);
	}

	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR_MIPMAP_LINEAR);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
	glTexEnvf(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_DECAL);

	/* textura do helicoptero */
	glGenTextures(1, &textura_helicoptero);
	glBindTexture(GL_TEXTURE_2D, textura_helicoptero);

  
	if(!(img=ImageLoad((char*)TEXTURA_DO_HELICOPTERO))) {
    	fprintf(stderr,"Error reading a texture.\n");
    	exit(-1);
	}

	gluerr=gluBuild2DMipmaps(GL_TEXTURE_2D, 3, 
			   img->sizeX, img->sizeY, 
			   GL_RGB, GL_UNSIGNED_BYTE, 
			   (GLvoid *)(img->data));
	if(gluerr){
    	fprintf(stderr,"GLULib%s\n",gluErrorString(gluerr));
    	exit(-1);
	}

	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR_MIPMAP_LINEAR);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
	glTexEnvf(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_DECAL);
}

void init(){
	carregar_texturas();
	compoe_heli();
	glShadeModel(GL_FLAT);
	glEnable(GL_DEPTH_TEST);
	glEnable(GL_BLEND);
	glBlendFunc(GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA);
	glEnable(GL_TEXTURE_2D);
}

int main(int argc,char **argv){
	glutInitWindowPosition(0,0);
	glutInitWindowSize(WIDTH,HEIGHT);
	glutInit(&argc,argv);
	glutInitDisplayMode(GLUT_RGB|GLUT_DEPTH|GLUT_DOUBLE);

	if(!glutCreateWindow("Helicóptero de Combate")) {
    	fprintf(stderr,"Error opening a window.\n");
    	exit(-1);
	}

	init();
  
	glutTimerFunc(16, timer, 0);
	glutKeyboardFunc(keyboard);
	glutSpecialFunc(special);
	glutDisplayFunc(display);
	glutReshapeFunc(reshape);
	glutMainLoop();

	return(0);
}
