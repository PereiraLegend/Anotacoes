#include <stdio.h>
#include <graphics.h>

int main()
{
	int radius = 10;
	char ch = '\0';

	// initialize window with caption "Teste"
	initwindow(700, 500, "Teste");
	while(ch != 's')
	{
		cleardevice(); // clear screen
		// draw circle on position 100, 200 with radius 100
		circle (100, 200, 100);
		// draw line from 60,60 to 100,200
		line (60, 60, 100, 200);
		// draw a bar
		bar(10, 10, 20, 100);
		circle(350, 250, radius);
		ch = getch();
		if(ch == '+' && radius <= 230)
			radius++;
		else if(ch == '-' && radius >= 10)
			radius--;
		else
			break;
	}
	closegraph();
	return 0;
}