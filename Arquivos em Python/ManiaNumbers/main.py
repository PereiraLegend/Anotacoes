import random

jogadores = []
cartas = []

def definejogadores(x):
    j = []
    cont = 0
    for i in range(x):
        cont += 1
        aux = {'nome': 'Jogador '+ str(cont), 'pontos': 0}
        j.append(aux)
    return j

def definecartas(n):
    c = []
    cont = 0
    for i in range(n):
        cont += 1
        aux = {'carta': cont, 'situacao': 1}
        c.append(aux)
    return c

def pedirjogadores():
    while True:
        try:
            x = print(int(input('Digite o número de jogadores --> ')))
        except:
            print('Digite um número inteiro!!!')
        else:
            break
            return x


def dezcartas():
    j = pedirjogadores()
    definejogadores(j)
    print(j)
dezcartas()

'''
def brcarta():
'''