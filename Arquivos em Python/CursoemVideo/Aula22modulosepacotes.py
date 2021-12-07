# Módulos servem para dividir grandes problemas em problemas menores
# Exemplo:
# inteiro ficaria dessa forma, mas se fosse um programa realmente grande, ou colossal, eu posso pegas as funções

import Aula22uteis

num = int(input("Digite um valor: "))
fat = Aula22uteis.fatorial(num)
print(f"O fatorial de {num} é {fat}")
print(f'O dobro de {num} é {Aula22uteis.dobro(num)}')
#para eu não precisar usar o Aula22uteis. antes de cada var , eu só preciso fazer
# obs.: Não é recomendado usar essa de baixo pois pode dar conflito no sistema
"""
from Aula22uteis import fatorial, dobro

num = int(input("Digite um valor: "))
fat = fatorial(num)
print(f"O fatorial de {num} é {fat}")
print(f'O dobro de {num} é {dobro(num)}')
"""
