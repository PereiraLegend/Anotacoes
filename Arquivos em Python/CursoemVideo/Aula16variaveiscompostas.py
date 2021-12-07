#No python podemos fazer de três maneiras uma tupla: (), Uma lista: [], e um dicionário:{}
lanche = ('Hamburger','Suco','Pizza','Pudim')
print(lanche)# Vai aparecer todos, ou mostrar a tupla inteira
print(lanche[1])# Vai aparecer o seleciondo
print(lanche[-2])# Vai mostrar o que está atrás do selecionado
print(lanche[1:3])# Vai mostrar do 1 ao 3 mas ele será ignorado mostrando apenas do 1 ao 2
print(lanche[2:])# Vai do 2 até o final
print(lanche[:2])# Mostra do inicio ao elemento 2 mas ele vai ignorar o ultimo elemento no caso o 2
print(lanche[-2:])# Vai começar na pízza (1) e vai até o final
"""
Obs.: Tuplas são imutáveis dentro do código pois se vc tentar fazer assim para tentar mudalas dará erro, como no exemplo:
lanche[1]='Refrigerante'
print(lanche[1])
"""
print(len(lanche))# Mostra o número de tuplas dentro da variavél
#Posso fazer uma estrutura de repetição assim:
for comida in lanche:# Essa linha é igual a linha 22
    print(f"Eu vou comer {comida}")
print("Comi demais")
print("-----------------------------------------")
#Ou assim:
for cont in range(0,len(lanche)):
    print(cont)#aqui ele enumera a posição das tuplas na variavél
print("-----------------------------------------")
#Ou assim:
for cont in range(0,len(lanche)):# Essa linha é igual a linha 18
    print(lanche[cont])
print("-----------------------------------------")
#fora esses exmplos também posso fazer assim caso eu queira mostrar a posição:
for cont in range(0, len(lanche)):
    print(f"Eu vou comer {lanche[cont]} na posição {cont}")
print("-----------------------------------------")
# Ou posso usar para enumerar assim:
for pos, comida in enumerate(lanche):
    print(f"Eu vou comer {comida} na posição {pos}")
#Saindo das estruturas de repetição
#Se eu quiser organizar as tuplas eu uso sorted, obs.: o método sorted não muda as posições das tuplas, apenas as organiza
print(sorted(lanche)) # Vai deixar os valores da variável em ordem não alterando nada
#Se eu tiver outro exemplo de tupla abaixo e tentar somalas:
a = (2, 5, 4)
b = (5, 8, 1, 2)
c = a + b
print(c)# Se eu tentar somalás ele vai apenas junta-lás
print(len(c))# para ver o tamanho da tupla em c
print(c.count(5))# se eu quiser contar quantos vezes aparece um valor dentro de uma tupla, aqui no caso 5
#Obs.: No caso da de baixo se eu tentar mostrar o index, ou seja a posição em que o valor está como a variavel index, ele vai mostrar a do valor juntado, por exemplo:
print(c)
print(c.index(8))# Aqui ele vai mostrar a posição do valor pós junção, já que a variavél c é uma nova tupla
# Obs.: E como faço caso tenha dois valores iguais dentro de uma tupla?
#Simples
print(c)
print(c.index(5))# Se eu pegar um dos 5 e colocar só ele, ele vai mostrar o primeiro que aparece mas para mostrar o segundo
print(c.index(5, 2))# Isso é o que chamamos de deslocamento; Lenbre que sempre nasce apartir do 0
#Se eu tiver diferentes tipos de dados a tupla aceita sem problemas
pessoa = ('Lucas', 19, 'M', 70.55)
print(pessoa)
# Caso eu queira apagar apenas um valor da tupla vai dar erro, mas eu posso apagar uma tupla inteira
del(pessoa)
#Se eu colocar para um print mostrar o valor dentro de pessoa vai dar erro pois pessoa foi deletado da memoria
