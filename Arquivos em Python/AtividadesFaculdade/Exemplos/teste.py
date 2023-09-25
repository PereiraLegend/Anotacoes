"""
def conversor(a):
    if a == 0:
        return ''
    valorcon = ''
    while a != 0:
        resto = a % 2
        valorcon = str(resto) + valorcon
        a = a // 2
    return valorcon
print(f'O número 13 em binário é: {conversor(13)}')
"""
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
print(f'O número 0.75 em binário é: 0.{conversor2(0.75)}')
