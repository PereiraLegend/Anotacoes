"""
import math #aqui ele vai inportar toda a bilbioteca math
num = int(input('Digite um número: '))
raiz = math.sqrt(num)
print('A raiz de {} arredondada para cima é igual a {}'.format(num, math.ceil(raiz)))#O comando ceil serve para arredondar para cima
print('A raiz de {} arredondada para baixo é igual a {}'.format(num, math.floor(raiz)))#Aqui o floor arredonda o número para baixo
print('A raiz de {} é igual a {:.2f}'.format(num, raiz))
"""
"""
from math import sqrt, floor #Aqui ele inporta apenas as bibliotecas  sqrt e floor
num = int(input('Digite um número: '))
raiz = sqrt(num)
print('A raiz de {} é igual a {:.2f}'.format(num, floor(raiz)))
"""
"""
import random
#num = random.random()#nessa forma ele pega aleatóriamente um número entre 0 e 1
num = random.randint(1,10) #Aqui ele pega automáticamente um número aleatóirio entre 1 e 10
print(num)
"""
"""
# Para adicionar emojis no python
import emoji
print(emoji.Emoji("Olá, Mundo :sunglasses:", use_aliases=True))
"""