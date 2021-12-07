n1 = int(input('Digite um número: '))#Aqui acontece uma conversão
n2 = int(input('Digite mais um número: '))
s = n1+n2
print(type(n1))#Obs.: isso serve para ver o tipo primitivo de uma variavél
print('A soma vale',s)
# --Ou
print('A soma entre {} e {} vale {}'.format(n1, n2, s))

print('===============================')
n = input('Digite um valor: ')
print(n.isnumeric())#Se é um número
print(n.isalpha())#Se é uma letra do alfabeto
print(n.isalnum())#Se é uma letra e um numero
print(n.isupper())#Se ele é todo em letra maiuscula