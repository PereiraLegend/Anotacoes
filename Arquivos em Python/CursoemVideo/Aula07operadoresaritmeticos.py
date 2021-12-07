"""
#comando para o alinhamento de palavras
nome = input('Qual é o seu nome? ')#se eu quiser eu posso colocar o str mas o input padrão é string
print('Prazer em te conhecer {}!'.format(nome))
print('Prazer em te conhecer {:20}!'.format(nome))
print('Prazer em te conhecer {:>20}!'.format(nome))
print('Prazer em te conhecer {:^20}!'.format(nome))
print('Prazer em te conhecer {:=^20}!'.format(nome))
"""
n1 = int(input('Um valor: '))
n2 = int(input('Outro valor: '))
#posso fazer assim.....: s= n1+n2
#ou posso fazer assim..: print('A soma vale {}'.format(n1+n2))
s = n1+n2
m = n1*n2
d = n1/n2
di = n1//n2
e = n1**n2
print('A soma é {}, \n o produto é {}, e a \ndivisão é {:.3f}'.format(s,m,d), end=' >>> ')#O end= permitwe que a linha de baixo seja executada na linha de cima, e o \n é para quebrar uma linha
print('Divisão inteira é {} e a potência é {}'.format(di,e))