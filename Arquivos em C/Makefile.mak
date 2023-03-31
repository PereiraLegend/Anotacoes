CPP    = g++
WINDRES= windres
RM     = rm -f
OBJS   = main.o \
         Exemplo.o \
         AppResource.res

LIBS   = -mwindows -lOpenGL32
CFLAGS =

.PHONY: ProjetoTrabalhoPBC.exe clean clean-after

all: ProjetoTrabalhoPBC.exe

clean:
	$(RM) $(OBJS) ProjetoTrabalhoPBC.exe

clean-after:
	$(RM) $(OBJS)

ProjetoTrabalhoPBC.exe: $(OBJS)
	$(CPP) -Wall -s -o $@ $(OBJS) $(LIBS)

main.o: main.cpp
	$(CPP) -Wall -s -c $< -o $@ $(CFLAGS)

Exemplo.o: Exemplo.c
	$(CPP) -Wall -s -c $< -o $@ $(CFLAGS)

AppResource.res: AppResource.rc
	$(WINDRES) -i AppResource.rc -J rc -o AppResource.res -O coff

