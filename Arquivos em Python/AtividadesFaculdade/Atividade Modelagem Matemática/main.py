# Trabalho 1 (Pontos Fluttuantes)
""" 
    Crie um código em Python que converta os valores abaixo:
    a) 1101 para decimal;
    b) 0,110 para decimal;
    c) 13 para binário;
    d) 0,75 para binário.

    Obs.: A resposta de vererá ser os códigos, pode ser apenas 1 programas para resolver todas as alternativas, se desejar, não precisar declarar entrada no programa, aceito apenas um cálculo direto. Livre para utilizar o Google Colab.

    Exemplo: converter 10001 em decimal: 1*2^4 + 0*2^3 + 0*2^2 + 0*2^1 + 1*2^0 = 17 
"""
import math
print("Código Conversor de Valores:")
print("--------------------------")
print("Convertendo 1101 para decimal: ", 1*2**3 + 1*2**2 + 0*2**1 + 1*2**0)
print("--------------------------")
print("Convertendo 0.110 para decimal: ", 0*2**(-1) + 1*2**(-2) + 1*2**(-3))
print("--------------------------")
print("Convertendo 13 para binário: ",bin(13)[2:]) # Utilizando a biblioteca "bin"
# O binário é o resto da fatoração ou "divisão sucessiva" dessa forma
print(f"Ou Fazendo o Cálculo Direto: {1%2}{3%2}{6%2}{13%2}") # No final é lida de "trás para frente" 
# Programa python para a conversão:
def conversor(a):
    if a == 0:
        return ''
    valorcon = ''
    while a != 0:
        resto = a % 2
        valorcon = str(resto) + valorcon
        a = a // 2
    return valorcon
print(f'Convertendo 13 para binário: {conversor(13)}')
print("--------------------------")
print(f"Convertendo 0.75 para binário: 0.75*2 = {0.75*2} --> (Retiro o bit mais significativo = {1}) --> (Retiro o que sobra) --> \n --> {0.5*2}(Retiro o bit mais significativo do que sobra) --> (Uno os valores) --> {0.11}")
# Programa para conversão em python:
def conversor2(b, casas=4):
    valorcon2 = []
    if b >= 1 or b <= 0:
        return ''
    for _ in range(casas):
        b = b * 2
        if b >= 1:
            valorcon2.append('1')
            b = b - 1
        else:
            valorcon2.append('0')
    return ''.join(valorcon2)
print(f'Convertendo 0.75 para binário: 0.{conversor2(0.75)}')

