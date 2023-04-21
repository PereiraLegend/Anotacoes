#include<iostream>
#include<conio.h>
#include<dos.h>
#include<stdlib.h>
#include<string.h>
#include <windows.h>
#include <time.h>

using namespace std;

char l[] = "บบบบบ";
int i;

HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
COORD CursorPosition;

void gotoxy(int x, int y) {
  CursorPosition.X = x;
  CursorPosition.Y = y;
  SetConsoleCursorPosition(console, CursorPosition);
}

void setcursor(bool visible, DWORD size) // set bool visible = 0 - invisible, bool visible = 1 - visible
{
  if (size == 0) {
    size = 20; // default cursor size Changing to numbers from 1 to 20, decreases cursor width
  }
  CONSOLE_CURSOR_INFO lpCursor;
  lpCursor.bVisible = visible;
  lpCursor.dwSize = size;
  SetConsoleCursorInfo(console, & lpCursor);
}

void printBorder() {
  for (i = 2; i <= 79; i++) {
    gotoxy(i, 1);
    cout << '-';
    gotoxy(i, 25);
    cout << '-';
  }
  for (i = 1; i <= 25; i++) {
    gotoxy(2, i);
    cout << '|';
    gotoxy(79, i);
    cout << '|';
  }
}
void setplayers() {
  system("cls");
  printBorder();
  gotoxy(4, 3);
  cout << "SCORE : 0";
  gotoxy(50, 3);
  cout << "Press Esc key to quit game";
  for (i = 3; i <= 78; i++) {
    gotoxy(i, 4);
    cout << '-';
  }
  for (i = 0; i <= strlen(l); i++) {
    gotoxy(5, 5 + i);
    cout << l[i];
  }
  for (i = 0; i <= strlen(l); i++) {
    gotoxy(76, 5 + i);
    cout << l[i];
  }
}
void gameplay() {
  setplayers();
  void displayMenu();
  int sc = 0, pp = 0, st = 1;
  int c = 5, k = 5, x = 73, y = 6 + rand() % 15;
  int d = rand() % 2, px, py;
  int op = 1, go = 1;
  int rld = 0, rlu = 0, lru = 0, lrd = 0;

  while (1) {
    if (go == 1) {
      while (!kbhit() && op) {
        px = x;
        py = y;
        gotoxy(x, y);
        cout << "O";
        Sleep(50);
        gotoxy(x, y);
        cout << " ";

        if (st == 1) {
          st = 0;
          if (d == 0) {
            x--;
            y++;
          } else {
            x--;
            y--;
          }
        }

        if (rld) {
          x--;
          y++;
        }
        if (rlu) {
          x--;
          y--;
        }
        if (lru) {
          x++;
          y--;
        }
        if (lrd) {
          x++;
          y++;
        }

        if (x < px && y > py) rld = 1;
        if (x < px && y < py) rlu = 1;
        if (y == 5 && rlu) {
          rld = 1;
          rlu = 0;
        }
        if (y == 24 && rld) {
          rlu = 1;
          rld = 0;
        }
        if (x == 6 && rlu) {
          lru = 1;
          rlu = 0;
        }
        if (x == 6 && rld) {
          lrd = 1;
          rld = 0;
        }
        if (y == 5 && lru) {
          lrd = 1;
          lru = 0;
        }
        if (y == 24 && lrd) {
          lru = 1;
          lrd = 0;
        }
        if (x == 75 && lrd) {
          rld = 1;
          lrd = 0;
        }
        if (x == 75 && lru) {
          rlu = 1;
          lru = 0;
        }

        if (x == 75 || x == 6) {
          Sleep(50);
        }
        if (y == 5 || y == 24) {
          Sleep(50);
        }

        if (lru || lrd) {
          if (y >= 6 && y <= 22) {
            if (y > k + strlen(l) - 3) {
              gotoxy(76, k + strlen(l));
              cout << "บ";
              gotoxy(76, k);
              if (k != 4) cout << ' ';
              k++;
            }
            if (y < k + strlen(l) - 3) {
              gotoxy(76, k);
              cout << "บ";
              gotoxy(76, k + strlen(l));
              if (k + strlen(l) != 25) cout << ' ';
              k--;
            }
          }
        }

        if (x == 6 && (y < c || y > c + strlen(l) - 1)) {
          gotoxy(x, y);
          cout << "YOU LOSE ! Press 'r' or ENTER to play again !";
          op = 0;
          break;
        }

        if (x == 6 && op == 1) {
          gotoxy(4, 3);
          cout << "SCORE : " << ++sc;
        }

      }
    }

    char ch = getch();

    if (ch == ' ' && op == 1) {
      pp = 1;
      go = 0;
      gotoxy(22, 12);
      cout << "GAME PAUSED ! PRESS ENTER to continue !";
    }
    if (ch == 13 && pp && op == 1) {
      pp = 0;
      go = 1;
      gotoxy(22, 12);
      cout << "                                       ";
    }
    if ((ch == 'r' || ch == 'R' || ch == 13) && op == 0) {
      op = 1;
      gameplay();
      break;
    }
    if ((ch == 's' || ch == 'S' || ch == 80) && c <= 19 && op) {
      gotoxy(5, c + strlen(l));
      cout << "บ";
      gotoxy(5, c);
      cout << ' ';
      c++;
    }
    if ((ch == 'w' || ch == 'W' || ch == 72) && c >= 6 && op) {
      gotoxy(5, c - 1);
      cout << "บ";
      gotoxy(5, c + 4);
      cout << ' ';
      c--;
    }
    if (ch == 27) {
      displayMenu();
      break;
    }
  }
}

void displayMenu() {
  system("cls");
  void htpwindow();
  //	printBorder();
  int cp = 1;
  gotoxy(34, 4);
  cout << "PING PONG";
  for (i = 8; i <= 73; i++) {
    gotoxy(i, 6);
    cout << '-';
  }
  gotoxy(34, 10);
  cout << "1. PLAY THE GAME";
  gotoxy(34, 12);
  cout << "2. HOW TO PLAY";
  gotoxy(34, 14);
  cout << "3. EXIT";
  gotoxy(14, 16);
  cout << "Enter Option from Menu: ";

  char op = getche();
  if (op == '1') gameplay();
  if (op == '2') htpwindow();
  if (op == '3') exit(0);

}
void htpwindow() {
  system("cls");
  printBorder();
  gotoxy(4, 3);
  cout << "INSTRUCTIONS";
  gotoxy(4, 4);
  cout << "-------------";
  gotoxy(4, 5);
  cout << "- Press w or Up Arrow to move up.";
  gotoxy(4, 7);
  cout << "- Press s or Down Arrow to move down.";
  gotoxy(4, 9);
  cout << "- Press Spacebar to pause the game.";
  gotoxy(4, 11);
  cout << "- Press Esc to quit the game.";
  gotoxy(4, 15);
  cout << "Press any key to go to menu ...";
  getch();
  displayMenu();
}
int main() {
  setcursor(0, 0);
  srand((unsigned) time(NULL));
  system("cls");
  //	printBorder();

  displayMenu();

  return 0;
}

