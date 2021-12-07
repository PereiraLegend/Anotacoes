#O básico das listas compostas é colocar uma lista dentro de uma lista
# posso fazer / declarar uma lista composta dessa forma:
pessoas = [['Pedro',25],['Maria',19],['João','32']]
#Para declarar
print(pessoas[0][0])# Preste bem atenção que aqui ele seleciona a lista que está com indice 0 e depois ele seleciona o indice dentro da lista
print(pessoas[1][1])
print(pessoas[2][0])
print(pessoas[1]) # aqui coloco apenas um, logo ele vai mostrar tudo que tem dentro do respectivo colchete
print("-----------------------------------------------------")
teste = list()
teste.append('Gustavo')# no teste está os nomes, e no galera está o todo_
teste.append(40)
galera = list()
galera.append(teste[:])
teste[0] = 'Maria'
teste[1] = 22
galera.append(teste[:])
print(galera)
print("-----------------------------------------------------")
#Posso também fazer assim:
pessoas = [['Pedro',25],['Maria',19],['João','32']]
for p in pessoas:# O pessoas determinado aqui no for faz com que o laço se repita conforme o tamanho de pessoas
    print(f'{p[0]} tem {p[1]} anos de idade.')
print("-----------------------------------------------------")
#Posso também adicionar valores:
"""
pess = list()
dado = list()
totmai = totmen = 0
for c in range(0,4):
    dado.append(str(input('Nome: ')))
    dado.append(int(input('Idade: ')))
    pess.append(dado[:])# Aqui no dado[:] ele fez uma cópia, ao tempo que ele é adicionado no pess
    dado.clear()# uma função de excluir
print(galera)
# se eu quiser mostrar os maiores de idade
for p in pess:
    if p[1] >= 21:
        print(f"{p[0]} é maior de idade.")
        totmai += 1
    else:
        print(f"{p[0]} é menor de idade.")
        totmen += 1
print(f"Temos {totmai} maiores e {totmen} menores de idade.")
"""
