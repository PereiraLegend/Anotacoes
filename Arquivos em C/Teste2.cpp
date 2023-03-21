#include "miniwin.h"
using namespace miniwin;
int main() {
 vredimensiona(500, 500);
 float x, y, ux, uy;
 bool inicio = true, esq, dir;
 int t = tecla();
 while (t != ESCAPE) {
 if (raton(x, y)) {
 raton_botones(esq, dir);
 if (esq || dir) {
 if (inicio) {
 ux = x, uy = y;
 inicio = false;
 }
 if (raton_boton_izq()) {
 color(CYAN);
 } else if (raton_boton_der()) {
 color(ROJO);
 }
 linea(ux, uy, x, y);
 ux = x, uy = y;
 refresca();
 } else {
	inicio = true;
 }
 }
 t = tecla();
 }
 vcierra();
 return 0;
}
