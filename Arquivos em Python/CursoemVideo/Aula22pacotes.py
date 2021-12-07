#Aqui mostra como é dado um pacote
# Do mesmo jeito de módulos, só que com:
from uteispacote import Numeros

num = int(input("Digite um valor: "))
fat = Numeros.fatorial(num)
print(f"O fatorial de {num} é {fat}")
print(f'O dobro de {num} é {Numeros.dobro(num)}')