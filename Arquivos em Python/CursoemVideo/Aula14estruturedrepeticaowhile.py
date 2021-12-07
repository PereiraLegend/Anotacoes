"""
for c in range(1, 10):
    print(C)
print("Fim")
"""
# O de cima e o de baixo são am mesma coisa
"""
c = 1
while c <10:
    print(c)
    c = c + 1
print("Fim")
"""
# Nesse exemplo de baixo eu tenho um número de vezes definido do que eu quero
"""
for c in range(1,3):
    n = int(input("Digite um valor: "))
print("Fim")
"""
# Mas quando eu não tenho um número de vezes definido o que eu quero eu uso a estrutura de baixo
"""
n = 1
while n != 0: #Condição de parada
    n = int(input("Digite um valor: "))
print("Fim")
"""
# Nesse exemplo enquanto a resposta for igual a sim ele vai ler um valor e vai ler a resposta denovo
"""
r = 'S'
while r == "S":
    n = int(input("Digite um valor: "))
    r =  str(input("Quer continuar[S/N]? ")).upper()
print("Fim")
"""
# Mais um exemplo enquanto um número não for 0
n = 1
par = 0
impar = 0 # Ou pode ser par = impar = 0

while n != 0:
    n = int(input("Digite um valor: "))
    # ao invés de subtrair um número na resposta do par, posso fazer um "if se nõ for 0" aqui
    if n % 2 == 0:
        par = par + 1
    else:
        impar = impar + 1
print(f"Foram digitados {par - 1} número pares e {impar} númeors impares! ")
print("Acabou")