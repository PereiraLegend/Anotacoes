#include <graphics.h>
#include <stdio.h>

int main (){
	initwindow(400,400);
	char a[5];
	
	settextjustify(CENTER_TEXT, CENTER_TEXT);
	settextstyle(DEFAULT_FONT, HORIZ_DIR, 3);
	setcolor(RED);
	for (int i = 30; i >= 0; i--){
		sprintf(a, "%d", i);
		outtextxy(getmaxx()/2,getmaxy()/2,a);
		delay(1000);
		if(i == 0)
			break;
		cleardevice();
	}
	getch();
}