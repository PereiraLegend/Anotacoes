"""
for c in range(0,6):# Aqui ele conta de 0 a 6
    print("oi={}".format(c))
print("FIM")
"""
"""
for c in range(0,7,2): # O último número que é o 2 faz ele pular duas casas enquanto faz a contagem
    print("oi={}".format(c))
print("FIM")
"""
"""
n = int(input("Informe um número: "))
for c in range(0,n+1):
    print(c)
print("FIM")
"""
"""
x = int(input("Inicio: "))
f = int(input("Fim: "))
p = int(input("Passo: "))
for c in range(x,f+1,p):
    print(c)
print("FIM")
"""
s=0
for c in range(0,4):
    n = int(input("Digite o valor: "))
    s += n
print("O somatório de todos os valores foi {}".format(s))