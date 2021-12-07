# Principal diferença de uma lista para uma tupla é o [] ao invés de ()
# obs.: listas são mutaveis e com itens adicionáveis
# Tentando fazer mudança com uma tupla, e tentando fazer mundança com uma lista
#num = (2,5,9,1)
#num[2] = 3
#print(num)
num = [2,5,9,1]
print(num)
num[2] = 3 # Posso faze facilmente a mudança de valores dentro da lista
print(num)
# num[4] = 7 # Se eu fizer assim vai dar erro pois desse forma eu estaria adicionando mais um termo o 4 na lista e para fazer isso é necessário um comando especial
num.append(7)# assim ele adiciona mais um valor de maneira correta na lista
print(num)
num.sort()# Esse comando serve para ordenar o que foi escrito dentro do num
print(num)
num.sort(reverse=True)# Esse coamdno ordena o que está na lista mas ao contrário
print(num)
print(f"Essa lista tem {len(num)} elementos.")# O comando len indica quantos elementos a lista possui
num.insert(2,0)# Para inserir valores , no caso na posição 2 o valor 0
print(num)
num.pop()# Se eu colocar esse comando vazio ele irá eliminar o ultimo termo
print(num)
num.pop(2)# Se eu colocar esse comando com a especificação dentro ele irá eliminar a especificação
print(num)
# Obs.: Também posso fazer assim| e se eu tiver dois valores iguais dentro da lista e usar o comando remove?
num.insert(2,2)# aqui eu modifico para deixar dois valores iguais dentro da lista
print(num)
num.remove(2)# Aqui eu defino o numero dois para remover, só que ele apenas irá remover o primeiro númeor dois
print(num)
# Se eu tentar remover um valor fora da lista vai dar erro
# Ex.: num.remove(4)# Vaio dar erro
# Mas e se eu verificar a existência dele antes?
if 4 in num:
    num.remove(4)
else:
    print("Não achei o número 4")# Observe que aqui como o 4 não existe ele pula para cá, e mas se existisse ele executaria o if
print(num)# Como o 4 não existe a lista continua a mesma
print('-------------------------------------------')
#Posso criar listas de duas formas
# Assim: valores = []
# Ou assim: valores = list()
valores = []
valores.append(5)
valores.append(9)
valores.append(4)
print(valores)
# Ou para deixar bonito posso fazer assim:
for v in valores:
    print(f"{v}...", end="")
print("")
# Ou pode ser assim:
for c,v in enumerate(valores):
    print(f"Na posição {c} encontrei o valor {v}!")
print("Cheguei ao final da lista.")
"""
print("------------------------------------------")
# Posso também fazer assim:
for cont in range(0,5):
    valores.append(int(input("Digite um valor: ")))
for c,v in enumerate(valores):
    print(f"Na posição {c} encontrei o valor {v}!")
print("Cheguei ao final da lista.")
"""
print("------------------------------------------")
a = [2,3,4,7]
b = a
b[2] = 8 # Aqui supostamente era para tornar apenas o b[2] igual a 8, mas na verdade vai mudar a lista a também, pois anbas form igualadas no começo, e por isso uma fica ligada a outra
print(f"Lista A: {a}")
print(f"Lista B: {b}")
# Para fazer o de cima  sem alterar o A, temos que fazer o B receber todos os valores de A
print("------------------------------------------")
b = a[:] # Assim o b não faz uma ligação, faz simplesmente uma cópia
b[2] = 6
print(f"Lista A: {a}")
print(f"Lista B: {b}")
