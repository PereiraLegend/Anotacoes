# No básico ficaria assim:
"""
cont = 1
while cont <=10:
    print(cont, " → ", end = "")
    cont += 1
print("Acabou")
"""
# num loop infinito ficaria assim:
# obs.: ele ficari defeituoso, e rodaria infinitamente
"""
cont = 1
while True:
    print(cont, " → ", end="")
    cont += 1
print("Acabou")
"""
# Outro exemplo:
"""
n = s = 0
while n != 999 :
    n = int (input("Digite um número: "))
    s += n
print(f"A soma vale {s - 999}")
"""
# usando o comando break
""""""
n = s = 0
while True :
    n = int (input("Digite um número: "))
    if n == 999: # Obs.; colocando desse modo o 999 é excluido da soma, fazendo ela depois da regra if, assim não precisando subtrair 999 valores na resposta final
        break
    s += n
print(f"A soma vale {s}")
