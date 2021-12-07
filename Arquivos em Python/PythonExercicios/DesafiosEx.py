# --Desafio001
"""
print('Olá, Mundo!')
"""
# --Ou
import Modulo107moeda
import utilidadesCeV.Dados

"""
msg = 'Olá, Mundo!'
print(msg)
"""
# --Desafio002
"""
nome = input('Qual o seu nome? ')
print('Seja bem vindo', nome,'!')
"""
# --Ou
"""
nome = input('Qual o seu nome? ')
print('Seja bem vindo, {}!'.format(nome))
"""
# --Desafio003
"""
n1 = int(input('Informe o primeiro número..: '))
n2 = int(input('informe o segundo número...: '))
so =n1 + n2
print('A soma entre {} e {} é igual á {}'.format(n1, n2, so))
"""
# --Desafio004
"""
p = input('Digite algo: ')
print('O tipo primitivo desse valor é ', type(p))
print('Só tem espaços.........? ', p.isspace())
print('É alfabético...........? ', p.isalpha())
print('É um numero............? ', p.isnumeric())
print('É alfanumérico.........? ', p.isalnum())
print('Está em maiúsculas.....? ', p.isupper())
print('Está em minúsculas.....? ', p.islower())
print('Etá capitalizada.......? ', p.istitle())#Se tem letras maiúsculas e minúsculas
"""
# --Desafio005
"""
num = int(input('Informe um número: '))
print('O número é {}, o seu antecessor é {}, e o seu sucessor é {}'.format(num, num-1, num+1))
"""
# --Desafio006
"""
n = int(input('Informe um número: '))
print('O número é {}, o seu dobro é {}, o seu triplo é {}, e a sua raiz quadrada é {:.3f}'.format(n, n*2, n*3, n**(1/2)))
"""
# --Desafio007
"""
nota1 = float(input('Digite a sua primeira nota: '))
nota2 = float(input('Digite a sua segunda nota: '))
print('A nota 1 é {}, a nota 2 é {}, e a média das duas é {:.2f}'.format(nota1, nota2, (nota1+nota2)/2))
"""
# --Desafio008
"""
metros = int(input('Informe a metragem: '))
print('O valor em metros é de {}m, em centimetro é de {}cm, e em milimétros é de {}mm'.format(metros,metros*100, metros*1000))
"""
# --Desafio009
"""
numero = int(input('Informe um número inteiro: '))
print('A sua tabuada é de {}X1 = {}, {}X2= {}, {}X3= {}'.format(numero, numero*1, numero, numero*2, numero, numero*3))
"""
# --Desafio010
"""
reais = float(input('Informe o valor de reais na sua carteira para a sua conversão: '))
print('O total de dólares que você pode converter de {} reais é {:.3f} dólares'.format(reais,reais/3.27))
"""
# --Desafio011
"""
altura = float(input('Informe a altura: '))
largura = float(input('Informe a largura: '))
print('A altura é de {:.2f}, e a largura é de {:.2f}, ao todo a área é de {:.2f} será gasto {:.2f} litros de tinta'.format(altura,largura,altura*largura,(altura*largura)/2))
"""
# --Desafio012
"""
preco = float(input('Informe o preço do produto: '))
print('O preço é de {:.2f} reais e com desconto fica {:.2f} reais'.format(preco, preco-preco*0.05))
"""
# --Desafio013
"""
salario = float(input('Informe o seu salário: '))
print('O seu salário é de {:.2f} reais, e sofreu um aumento de 15% ficando {:.2f} reais'.format(salario, salario + salario*0.15))
"""
# --Desafio014
"""
C = float(input('Informe a temperatura em ºC: '))
F = C*(9/5) + 32
print('Esse valor {} em celsius convertido para Farenheith é {} ºF'.format(C,F))
"""
# --Desafio015
"""
Distancia = float(input('Informe a distância percorrida em Km: '))
Dias = float(input('Informe o número de dias que o carro esteve alugado: '))
precofinal = Distancia*0.15 + Dias*60
print('O preço final a pagar pela distância de {}km e {} dias, é de R${:.2f}'.format(Distancia, Dias, precofinal))
"""
# --Desafio016
"""
from math import trunc
num = float(input("informe um número real: "))
print('O número {:.3f} tem a parte inteira {} '.format(num,trunc(num)))
"""
# Ou
"""
num = float(input("informe um número real: "))
print('O número {:.3f} tem a parte inteira {} '.format(num,int(num)))
"""
# --Desafio017
"""
import math
co = float(input("Informe o cateto oposto....: "))
ca = float(input("Informe o cateto adjacente.: "))
h = math.sqrt((ca**2) + (co**2))
print("A hipotenusa vale: {:.2f}".format(h))
"""
# Ou
"""
co = float(input("Informe o cateto oposto....: "))
ca = float(input("Informe o cateto adjacente.: "))
h = (co**2 + ca**2)**(1/2)
print("A hipotenusa vale: {:.2f}".format(h))
"""
# Ou
"""
form math import hypot
co = float(input("Informe o cateto oposto....: "))
ca = float(input("Informe o cateto adjacente.: "))
h = math.hypot(co, ca)
print("A hipotenusa vale: {:.2f}".format(h))
"""
# --Desafio018
"""
import math
angulo = float(input("Informe o ângulo: "))
seno = math.sin(math.radians(angulo))#Aqui eu peguei no valor do ano, converti para radianos, para então retirar o seno
cose = math.cos(math.radians(angulo))
tang = math.tan(math.radians(angulo))
print("O ângulo de {}º tem o Seno de {:.2f}".format(angulo,seno))
print("O ângulo de {}º tem o Cosseno de {:.2f}".format(angulo,cose))
print("O ângulo de {}º tem a Tangente de {:.2f}".format(angulo,tang))
"""
# --Desafio019
"""
import random
# ou pode ser from random inport choice, seguindo das exclusões do choice no resto do código
a1 = str(input("Informe o primeiro aluno..: "))
a2 = str(input("Informe o segundo aluno...: "))
a3 = str(input("Informe o terceiro aluno..: "))
a4 = str(input("Informe o quarto aluno....: "))
escolhido = [a1, a2, a3, a4]
escolha = random.choice(escolhido)
print("O aluno escolhido foi {}".format(escolha))
"""
# --Desafio020
"""
from random import shuffle
al1 = str(input("Primeiro aluno..: "))
al2 = str(input("Segundo aluno...: "))
al3 = str(input("Terceiro aluno..: "))
al4 = str(input("Quarto aluno....: "))
escolher = [al1, al2, al3, al4]
random.shuffle(escolher)#Serve para enbaralhar a ordem dos 4 alunos
print("A ordem de apresentação será de : {}".format(escolher))
"""
# --Desafio021
"""
#Tocando uma música no python
import pygame
pygame.init()
pygame.mixer.music.load('musicateste.mp3')
pygame.mixer.music.play()
pygame.event.wait()
"""
# --Desafio022
"""
nome = str(input("Informe o nome completo: "))
print("Seu nome com todas as letras maiúsculas é: {}".format(nome.upper()))
print("Seu nome com todas as letras minúsculas é: {}".format(nome.lower()))
print("O número de letras do seu nome é: {}".format(len(nome)-nome.count(" ")))
nletras = nome.split()
print("O primeiro nome é {} de um total de letras de: {}".format(nletras[0], len(nletras[0])))
"""
# --Desafio023
"""
num = int(input("Informe o número: "))
u = num//1 % 10
d = num//10 % 10
c = num//100 % 10
m = num//1000 % 10
print("O número {}".format(num))
print("Unidade: {}".format(u))
print("Dezena: {}".format(d))
print("Centena: {}".format(c))
print("Milhar: {}".format(m))
"""
# --Desafio024
"""
cidade = str(input("Informe o nome de uma cidade: ")).strip()
print("A cidade começa com santo no nome? {}".format(cidade[:5].upper() == "SANTO"))
print("A cidade tem santo no nome? {}".format(cidade.upper().find("SANTO")))
"""
# --Desafio025
"""
nome = str(input("Informe o nome da pessoa: ")).strip()#elimina os espaços
print("Ela tem silva no nome? {}".format("silva" in nome.lower()))#ou pode ser "SILVA" in nome.upper()
"""
# --Desafio026
"""
frase = str(input("Digite uma frase qualquer: ")).lower().strip() #elimina os espaços extras
print("Nessa frase aparece a letra a num total de : {} vezes".format(frase.count("a")))
print("Ela aparece pela primeira vez na posiçaõ: {}".format(frase.find("a")+1))
print("Ela aparece pela última vez na posição: {}".format(frase.rfind("a")+1))
"""
# --Desafio027
"""
nome = str(input("Informe o seu nome completo: ")).strip()
n = nome.split()# o split, ele pega o nome e divide em pedaços separadops em espaços
print("O nome completo é : {}".format(nome))
print("A primeira palavra do seu nome: {}".format(n[0]))
print("A ultima palavra do seu nome é: {}".format(n[len(n)-1])) #o len conta, e se o número vai de zero para frente ele será -1 pois o que stá atrás do primeiro nom é o ultimo nome, que no0 caso seria o bloco separado
"""
# --Desafio028
"""
import random
from time import sleep # funciona com a funcionalidade sleep
valor = int(input("Informe um valor de 0 a 5: "))
num = random.randint(0,5)
print("Estou pensando..!")
sleep(3) # aqui faz o programa demorar um pouco só que vagarosamente
if valor==num:
    print("Meus parabéns vc acertou! Eu pensei tbm em {}".format(num))
else:
    print("Vc errou! eu pensei em {}".format(num))
"""
# --Desafio029
"""
velocidade = float(input("Informe a velocidade do carro: "))
if velocidade<= 80:
    print("Está andando corretamente á {} Km!".format(velocidade))
else :
    print("Vc foi multado por estar á {} Km".format(velocidade))
    multa = (velocidade-80)*7
    print("O valor da sua multa é de R$ {:.2f}!".format(multa))
"""
# --Desaio030
"""
num = int(input("Informe um valor: "))
m = num % 2
if m==0:
    print("O número é par!")
else:
    print("O número é impar!")
"""
# --Desafio031
"""
distancia = float(input("informe a distância a ser percorrida: "))
# tudo isso abaixo poderia ser substituido por preco = distancia * 0.50 if distancia <= 200 else distancia * 0.45
if distancia<=200:
    preco = distancia * (1/2)
    print("O valor para a distância de {} Km é de R$ {} ".format(distancia, preco))
else:
    preco = distancia * (0.45)
    print("O valor para a distância de {} Km é de R$ {} ".format(distancia, preco))
"""
# --Desafio032
"""
from datetime import date
ano = int(input("Informe o ano: "))
# Obs.: Um ano bissexto ocorre a cada quatro anos, exceto mútiplos de 100 que não são multiplos de 400
if ano ==0: #Ao digitar 0 ele pega o ano atual
    ano = date.today().year #aqui ele pega este ano
if ano % 4==0 and ano%100 != 0 or ano%400==0:
    print("O ano {} é bissexto".format(ano))
else:
    print("O ano {} não é bissexto".format(ano))
"""
# --Desafio033
"""
num1 = int(input("Informe o primeiro número: "))
num2 = int(input("Informe o segundo número: "))
num3 = int(input("Informe o terceiro número: "))
if num1 > num2 > num3:
    print("O maior é {} e o menor é {}".format(num1, num3))
if num1 > num3 > num2:
    print("O maior é {} e o menor é {}".format(num1, num2))
if num2 > num1 > num3:
    print("O maior é {} e o menor é {}".format(num2, num3))
if num2 > num3 > num1:
    print("O maior é {} e o menor é {}".format(num2, num1))
if num3 > num1 > num2:
    print("O maior é {} e o menor é {}".format(num3, num2))
if num3 > num2 > num1:
    print("O maior é {} e o menor é {}".format(num3, num1))
"""
# --Ou pode ser feito assim
"""
num1 = int(input("Informe o primeiro número: "))
num2 = int(input("Informe o segundo número: "))
num3 = int(input("Informe o terceiro número: "))
menor = num1
if num2 < num1 and num2 < num3:
    menor = num2
if num3 < num1 and  num3 < num2:
    menor = num3
maior = num1
if num2 > num1 and num2 > num3:
    maior = num2
if num3 > num1 and num3 > num2:
    maior = num3
print("O menor valor foi {} e o maior foi {} ".format(menor,maior))
"""
# --Desafio034
"""
salario = int(input("Informe o salário: "))
if salario>1250:
    print("O salário de R$ {} sofreu reajuste de 10% ficando com R$ {}".format(salario, salario + (salario*0.10)))
else:
    print("O salário de R$ {} sofreu reajuste de 15% ficando com R$ {}".format(salario, salario + (salario*(3/20))))
"""
# --Desafio035
"""
print("-=-"*15)
reta1 = float(input("Informe o valor da reta 1: "))
reta2 = float(input("Informe o valor da reta 2: "))
reta3 = float(input("Informe o valor da reta 3: "))
print("-=-"*15)
if reta1 < reta2 + reta3 and reta2 < reta1 + reta3 and reta3 < reta1 + reta2:
    print("Os segmentos acima podem formar triângulos!")
else:
    print("Os segmentos acima não podem formar triângulo")
"""
# --Desafio036
"""
# Ou pode ser import time
from time import sleep
print("Para aprovar um empréstimo bancário informe")
sleep(2)
vcasa = float(input("Informe o valor da casa: R$ "))
salario = float(input("Informe o salário: R$"))
tempo = float(input("Informe o tempo de pagamento: "))
tempom = tempo*12
prestacaom = vcasa/tempom
print("O valor da casa será de: {:.2f}".format(prestacaom))
if prestacaom > (0.3*salario) :
    print("O empréstimo será \033[0:33m negado \033[m!")
else:
    print("O empréstimo será \033[0:33m aprovado \033[m!")
"""
# --Desafio037
"""
num = int(input("Informe um número: "))
escolha = int(input(Escolha a base de conversão #Tem que colocar aqui as tres aspas
|Binário=1|
|Octal=2|
|Hexadecimal=3|
Escolha : ))# Tem que colocar aqui o final das 3 aspas
if escolha == 1:
    print("Em binário : \033[0:35m{}\033[m".format(bin(num)[2:]))
elif escolha == 2:
    print(f"Em octal: \033[0;35m{oct(num)[2:]}\033[m")
elif escolha == 3:
    print(f"Em hexadecimal: \033[0;35m{hex(num)[2:]}\033[m")
else:
    print("Você digitou a escolha \033[0;31merrada\033[m!")
"""
# --Desafio038
"""
v1 = int(input("Informe o primeiro valor: "))
v2 = int(input("Informe o segundo valor: "))
if v1>v2:
    print("O primeiro valor é \033[0:34mmaior!")
elif v1<v2:
    print("O segundo valor é \033[0:34mmaior\033[m!")
else:
    print("Os dois valores são \033[0:34miguais\033[m!")
"""
# --Desafio039
"""
from datetime import date
anoc = int(input("Informa o seu ano de nascimento: "))
atual = date.today().year
idade = atual - anoc
print("Quem nasceu em {} tem {} anos em {}.".format(anoc,idade,atual))
if idade<18:
    alistamento = 18 - idade
    print(f"Você ainda vai se alistar faltam \033[0:31m{alistamento}\033[m anos")
elif idade==18:
    print("É hora de se \033[0:31malistar\033[m!")
else:
    alistamento = idade - 18
    print(f"Vc precisa se alistar! Já passou \033[0:31m{alistamento}\033[m anos do prazo")
    print(f"Ou vc se alistou em \033[0:31m{atual-alistamento}\033[m")
"""
# --Desafio040
"""
nota1 = float(input("Informe a primeira nota: "))
nota2 = float(input("Informe a segunda nota: "))
media =(nota1+nota2)/2
#print(f"A média foi de {media}")
print("A média foi de {:.2f}".format(media))#o format arredonda para cima caso colocado {:.1f}
if media < 5.0 :
    print("\033[0:31mREPROVADO\033[m")
elif 5.0 < media <= 6.9 :
    print("\033[0:33mRECUPERAÇÃO\033[m")
else:
    print("\033[0:32mAPROVADO\033[m")
"""
# --Desafio041
"""
from datetime import date
nasc = int(input("Informe a idade do atleta: "))
esano = date.today().year
idade = esano - nasc
print("O atleta tem {} anos. ".format(idade))
if idade<= 9:
    print("MIRIM")
elif 9 < idade <= 14:
    print("INFANTIL")
elif 14 < idade <= 19:
    print("JUNIOR")
elif 19 < idade <= 25:
    print("SÊNIOR")
else:
    print("MASTER")
"""
# --Desafio042
"""
print("-=-"*15)
reta1 = float(input("Informe o valor da reta 1: "))
reta2 = float(input("Informe o valor da reta 2: "))
reta3 = float(input("Informe o valor da reta 3: "))
print("-=-"*15)
if reta1 < reta2 + reta3 and reta2 < reta1 + reta3 and reta3 < reta1 + reta2:
    print("Os segmentos acima podem formar triângulos!")
    print("Podem formar um triângulo ", end = "")
    if reta1!=reta2!=reta3!=reta1:
        print("Escaleno!")
    elif reta1 == reta2 == reta3:
        print("Equilátero!")
    else:
        print("Isósceles!")

else:
    print("Os segmentos acima não podem formar triângulo")
"""
# --Desafio043
"""
peso = float(input("Informe o seu peso: "))
altura = float(input("Informe a sua altura: "))
imc = peso/(altura*altura)
print("O IMC dessa pessoa é de {:.2f}".format(imc))
print("Status: ", end=" ")
if imc<18.5:
    print("Abaixo do Peso!")
elif 18.5<=imc<25:
    print("Peso ideal!")
elif 25<=imc<30:
    print("Sobrepeso!")
elif 30<=imc<40:
    print("Obesidade!")
else:
    print("Obesidade Mórbida!")
"""
# --Desafio044
"""
print("{:=^40}".format("Loja"))
preconormal = float(input("Preço normal do produto: "))
condicaopagamento = int(input("Escolha a condição de pagamento: a vista-1|a vista no cartão-2|em 2x no cartão-3|3x ou mais-4:"))
if condicaopagamento == 1 :
    pf = preconormal - preconormal*0.1
    print(f"O preço final a vista é de R${pf} descontado 10%")
elif condicaopagamento == 2 :
    pf = preconormal - preconormal*0.05
    print(f"O preço final a vista no cartão é de R${pf} descontado 5%")
elif condicaopagamento == 3:
    print(f"O preço em 2x no cartão sem desconto é de {preconormal}")
elif condicaopagamento == 4:
    pf = preconormal + preconormal*0.2
    print(f"O preço em 3x no cartão é de {pf} com acrécimo de 20%")
else:
    print("Você informou o valor errado!")
"""
# --Desafio045
"""
from time import sleep
import random
print("-=-"*10)
escolha = int(input("Escolha Pedra-1|Papel-2|Tesoura-3: "))
print("PC está pensando", end="")
sleep(1)
print(".", end="")
sleep(1)
print(".", end="")
sleep(1)
print(".")
escolhapc = random.randint(1,3)
sleep(2)
print("JO")
sleep(1)
print("KEN")
sleep(1)
print("PO!")
sleep(1)
print(f"Pc escolhe {escolhapc}")
sleep(1)
print("-=-"*10)
if escolha==escolhapc:
    print("ENPATE!")
elif (escolha==1) and (escolhapc==2):
    print("VITORIA PC!")
elif (escolha==1) and (escolhapc==3):
    print("VITORIA JOGADOR!")

elif (escolha==2) and (escolhapc==1):
    print("VITORIA JOGADOR!")
elif (escolha==2) and (escolhapc==3):
    print("VITORIA PC!")

elif (escolha==3) and (escolhapc==1):
    print("VITORIA PC!")
elif (escolha==3) and (escolhapc==2):
    print("VITORIA JOGADOR!")
#"""
# --Desafio046
"""
from time import sleep
for c in range(10, -1, -1):# o menos 1 define para ele ser ao contrário
    print(c)
    sleep(1)
print("FIM (som de fogos)")
"""
# --Desafio047
"""
for c in range(1, 51):
    if c % 2 ==0:
        print(c, end=" ")
print("Fim")
"""
# --Ou
"""
for c in range(2, 51, 2): # Obs.: aqui ele fica mais otimizado
    print(c, end= " ")
print("Fim")
"""
# --Desafio048
"""
soma = 0 # Isso é um acumulador
cont = 0 # Isso é um contador
for c in range(1, 501, 2): #Soma dos inpares que são múltiplos de 3 no intervalo de 1 a 500
        if c % 3 == 0: # Aqui ele vai selecionar os que são múltiplos de 3
            soma = soma + c # vai somar os termos
            # ou poder ser 
            # soma += c
            cont = cont + 1  # Vai contar os termos
            # ou pode ser
            # soma += 1
            print(c)
print(f"A soma de todos os {cont} valores solicitados é de {soma}")
"""
# --Desafio049
"""
num = int(input("Informe o número para ver sua tabuada: "))
for c in range(1,11):
    print(f" {num} x {c} = {num*c}")
print("-"*15)
for c in range(1,11):
    print(f" {num} / {c} = {num/c}")
print("-"*15)
for c in range(1,11):
    print(f" {num} + {c} = {num+c}")
print("-"*15)
for c in range(1,11):
    print(f" {num} - {c} = {num-c}")
"""
# --Desafio050
"""
soma = 0 # Contador
for c in range(1,7):
    num = int(input(f"Informe o {c} número: "))
    if num % 2 == 0:
       soma = soma + num
print("A soma dos seis valores pares é de: {}".format(soma))
"""
# --Desafio051
"""
ptermo = int(input("Informe o primeiro termo da pa: "))
razao = int(input("Informe a razão da PA: "))
a = ptermo
for c in range(1,10):
    a = a + razao
    print(f"Termo {c} da pa → {a} ")
print("Fim")
"""
# --Ou
"""
ptermo = int(input("Informe o primeiro termo da pa: "))
razao = int(input("Informe a razão da PA: "))
decimo = ptermo + (10 - 1) * razao
for c in range(ptermo, decimo + razao, razao):
    print(f"{c}", end=" → ")
print("Fim")
"""
# --Desafio052
"""
num = int(input("Digite um número: "))
tot = 0
for c in range(1, num + 1):
    if num % c ==0:
        print("\033[34m", end = "")
        tot += 1
    else:
        print("\033[31m", end="")
    print("{} ".format(c), end="")
print("\n\033[m0 número {} foi divisível {} vezes".format(num, tot))
if tot == 2:
    print("É por isso que ele É PRIMO!")
else:
    print("É por isso que ele NÃO É PRIMO!")

"""
# --Desafio053
"""
frase = str(input("Informe uma frase: ")).strip().upper()# Strip elimina espaços inúteis no inicio e no final, upper transforma a frase em maiúscula
palavras = frase.split()# Vai fazer uma divisão dentro dos espaços para criar pedaços diferentes no bloco
junta = "".join(palavras)# Vai fazer a junção do que foi ou o que está separado
inverso = "" #Elimina os espaços
for letra in range (len(junta) - 1, -1, -1): #len conta sem os espaços
    inverso += junta[letra]
print(f"O inverso de {junta} é {inverso}")
if inverso == junta:
    print("É um palíndromo!")
else:
    print("Não é um palíndromo!")
# --Ou
frase = str(input("Informe uma frase: ")).strip().upper()# Strip elimina espaços inúteis no inicio e no final, upper transforma a frase em maiúscula
palavras = frase.split()# Vai fazer uma divisão dentro dos espaços para criar pedaços diferentes no bloco
junta = "".join(palavras)# Vai fazer a junção do que foi ou o que está separado
inverso = junta[::-1] #Elimina os espaços
print(f"O inverso de {junta} é {inverso}")
if inverso == junta:
    print("É um palíndromo!")
else:
    print("Não é um palíndromo!")
"""
# --Desafio054
"""
import datetime
somama = 0
somame = 0
for pessoa in range(1,8):
    ano = int(input(f"Informe o ano em que a {pessoa}º pessoa nasceu: "))
    anonat = datetime.date.today().year
    idade = anonat - ano
    if idade >= 18:
        somama += 1
    else:
        somame += 1
print(f"O número de maiores de idade é de {somama}")
print(f"O número de menores de idade é de {somame}")
"""
# --Desafio055
"""
maior = 0
menor = 0
for c in range(1,6):
    peso = float(input(f"Informe o peso da {c}º pessoa: "))
    if c==1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso
print("O menor peso é {}".format(menor))
print("O maior peso é {}".format(maior))
"""
# --Desafio056
"""
contm =0
mediaidade = 0
maioridadeho = 0
nomemvelho = ''
totmulher = 0 #Contagem de mulheres
for c in range(1,5):
    print("-"*6,"1ª PESSOA","-"*6)
    nome = str(input("Informe o nome: ")).strip()
    idade = int(input("Informe a idade: "))
    sexo = str(input("Informe o sexo [M/F]: ")).strip()
    contm += idade
    if c == 1 and sexo in "Mm":
        maioridadeho = idade
        nomemvelho = nome
    if sexo in "Mm" and idade > maioridadeho:
        maioridadeho = idade
        nomemvelho = nome
    if sexo in "Ff" and idade < 20:
        totmulher += 1 #Contagem de mulheres com menos de 20 anos
print("A média de idade do grupo é de {:.2f} anos".format(contm/4))
print(f"O homen mais velho tem {maioridadeho} anos e se chama {nomemvelho}")
print(f"Ao todo são {totmulher} mulheres com menos de 20 anos")
"""
# --Desafio057
"""
sexo = str(input("Informe o sexo [M/F]: ")).upper().strip()[0] # Aqui é feito o fatiamento mesmo que ele digite Masculino, ele só vai ler o m mesmo ele sendo maiúsculo

while sexo not in "MmFf":
    sexo = str(input("Informe o sexo novamente: ")).upper()
print("Sexo registrado com sucesso!")
"""
# --Desafio058
"""
import random
from time import sleep # funciona com a funcionalidade sleep
valor = 0
num = 1
cont = 0

while valor!=num:
    valor = int(input("Informe um valor de 0 a 10: "))
    num = random.randint(0,10)

    print("Estou pensando..!")
    sleep(3) # aqui faz o programa demorar um pouco só que vagarosamente

    print("Vc errou! eu pensei em {}".format(num))
    cont = cont + 1

print("Meus parabéns vc acertou! Eu pensei tbm em {}".format(num))
print("Foram necessários {} tentativas".format(cont))
#"""
# --Ou
"""
from random import randint
computador = randint(0, 10)
print("Sou seu computador... acabei de pensar em um número entre 0 e 10")
print("Será que você consegue adivinhar qual foi? ")
acertou = False
palpites = 0
while not acertou:
    jogador = int(input("Qual é o seu palpite? "))
    palpites += 1
    if jogador == computador:
        acertou = True
    else:
        if jogador < computador:
            print("Mais...Tente mais uma vez.")
        elif jogador > computador:
            print("Menos...Tente mais uma vez.")
print("Acertou com {} tentativas Parabéns!".format(palpites))
"""
# --Desafio059
"""
from time import sleep
op = 4
#while op == 4:
contma = 0
num1 = float(input("Informe o primerio número: "))
num2 = float(input("informe o segundo número: "))

while op != 5:
    op = int(input("Informe qual o peração deseja fazer: 
        [1]somar [2]multiplicar 
        [3]maior [4]novos números [5]sair
        ----> "))# obs.: adicionar o criador de textos aspas prolongadas
    if op == 1:
        print(f"A soma dos valores é de: {num1} + {num2} = {num1 + num2}")
        sleep(2)
    elif op == 2:
        print(f"A multiplicação dos valores é de: {num1} x {num2} = {num1 * num2}")
        sleep(2)
    elif op == 3:
        if num1 > contma:
            contma = num1
        if num2 > contma:
            contma = num2
        print(f"O maior número é o : {contma}")
    elif op == 4:
        print("Repetindo o programa...")
        sleep(2)
        num1 = float(input("Informe o primerio número: "))
        num2 = float(input("informe o segundo número: "))
    else:
        print("Fim")
    print("-"*25)
print("Fim")
"""
# --Desafio060
"""
from math import factorial
num = int(input("Digite um número para calcular seu Fatorial: "))
fato = factorial(num)
print("O fatorial de {} é {} ".format(num, fato))
"""
# --Ou
"""
num = int(input("Digite um número para calcular seu Fatorial: "))
c = num
f = 1
while c > 0:
    print("{}".format(c), end="")
    print(" x " if c>1 else " = ", end="")
    f = f * c
    c-= 1
print("{}".format(f))
"""
# --Desafio061
"""
ptermo = int(input("Informe o primeiro termo da pa: "))
razao = int(input("Informe a razão da PA: "))
cont = 0
while cont < 11 :
    ptermo = ptermo + razao
    cont += 1
    print(f"Termo {cont}º da pa → {ptermo} ")
print("Fim")
"""
# --Desafio062
"""
ptermo = int(input("Informe o primeiro termo da pa: "))
razao = int(input("Informe a razão da PA: "))
cont = 0
tot = 0
mtermos = 10
while mtermos != 0:
    tot = tot + mtermos
    while cont <= tot :
        ptermo = ptermo + razao
        cont += 1
        print(f"Termo {cont}º da pa → {ptermo} ")
    print("Pausa")
    mtermos = int(input("Quantos termos a mais vc quer? "))
print("Fim")
#"""
# --Desafio063
"""
print("-=-"*10,"Sequência de Fibonacci","-=-"*10)
num = int(input("Informe quantos números você quer mostrar? "))
t1 = 0
t2 = 1
cont = 3
print(f"{t1} → {t2}", end = "")
while cont <= num:
    t3 = t1 + t2
    print(f" → {t3}", end = "")
    t1 = t2
    t2 = t3
    cont += 1
print(" → Fim")
"""
# --Desafio064
"""
num = 1  # Para resumir a linha de baixo eu posso fazer num = cont = soma = 0
cont = 0
soma = 0
while num != 999:
    num = int(input("Informe um número [999 para parar]: "))
    cont = cont + 1
    soma = soma + num
print(f"O números de números digitados foi de {cont - 1}")
print("A soma de todos os números é de {}".format(soma - 999))
print("Fim")
"""
# --Desafio065
"""
maior = 0
menor = 0
cont = 0
contr = 0
num = 0
soma = 0
escolha ="S"
while escolha in "Ss":
    num = int(input("Digite um número [para sair digite 0]: "))
    cont += 1
    soma = soma + num
    # Maior e menor numero
    if cont == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        if num < menor:
            menor = num
    escolha = str(input("Quer continuar [S/N]? ")).strip().upper()[0] # os [] no final sempre consideram apenas a primeira letra

print(f"O número de valores digitados foi {cont}")
print(f"O maior número é {maior}")
print(f"O menor número é {menor}")
print(f"A média é {soma/cont}")
#"""
# --Desafio66
"""
cont = 0
num = 0 # Obs.: mesmo sem essa linha ele funcionaria corretamente, pois não precisa de uma pré definição
soma = 0
while True:
    num = int(input("Digite um valor (999 para parar): "))
    if num == 999:
        break
    cont += 1
    soma += num
print(f"A soma dos {cont} valores foi {soma}!")
#"""
# --Desafio67
"""
cont = 0
num = 1
while True:
    num = int(input("Quer ver a tabuada de qual valor? "))
    if num < 0:
        break
    while cont <= 10:
        cont += 1
        print(f"{num} x {cont} = {num*cont}")
    print("-"*30)
    cont = 0 #Obs quando o segundo loop sai de execução e volta para o primeiro, o cont sai como valor de 10, por isso é necessário zeralo, e isso é o que essa linha faz
print("-"*30)
print("PROGRAMA DE TABUADA ENCERRADO. Volte sempre!")
#"""
# --Desafio68
"""
import random
print("-=-"*20)
print("VAMOS JOGAR PAR OU ÍMPAR")
print("-=-"*20)
cont = 0
valor = 0
escolha = " " # É necessário que este espaço não esteja nulo como escolha = ""
comp = 0
while True:
    valor = int(input("Diga um valor: "))
    while escolha not in "PI": #Serve para caso digite um caracter fora do que foi determinado ele repita o mesmo comando até que o certo seja digitado
        escolha = str(input("Par ou Ímpar? [P/I] ")).strip().upper()[0]
    comp = random.randint(0, 11)
    soma = comp + valor

    print("-"*60)
    print(f"Você jogou {valor} e o computador {comp}. Total de {soma} ", end="")
    if escolha == "P":
        if soma % 2 == 0:
            print("DEU PAR")
            print("-" * 60)
            print("Você VENCEU!")
            print("Vamos jogar novamente...")
            cont += 1
        else:
            print("DEU IMPAR")
            print("-" * 60)
            print("Você PERDEU!")
            print("-=-" * 20)
            print(f"GAME OVER! Você venceu {cont} vezes")
            break
    elif escolha == "I":
        if soma % 2 == 0:
            print("DEU PAR")
            print("-" * 60)
            print("Você PERDEU!")
            print("-=-" * 20)
            print(f"GAME OVER! Você venceu {cont} vezes")
            break
        else:
            print("DEU IMPAR")
            print("-" * 60)
            print("Você VENCEU!")
            print("Vamos jogar novamente...")
            cont += 1
    escolha = " "
    print("-"*60)
#"""
# --Desafio69
"""
print("="*7,"FIM DO PROGRAMA","="*7)
idade = 0
sexo =" "
continuar = " "
conti = 0
contm = 0
contf = 0
while True:
    print("-"*31)
    print("      CADASTRE UMA PESSOA   ")
    print("-"*31)
    idade = int(input("Idade: "))
    while sexo not in "MF":
        sexo = str(input("Sexo: [M/F] ")).strip().upper()[0]
    if idade>18:
        conti += 1
    if sexo == "M":
        contm += 1
    if sexo == "F" and idade < 20:
        contf += 1
    while continuar not in "SN":
        continuar = str(input("Quer continuar? [S/N] ")).strip().upper()[0]
    if continuar == "N":
        break
    sexo = " "
    continuar = " "
print("="*7,"FIM DO PROGRAMA","="*7)
print(f"Total de pessoas com mais de 18 anos : {conti}")
print(f"Ao todo temos {contm} homens cadastrados")
print(f"E temos {contf} mulheres com menos de 20 anos")
#"""
# --Desafio70
"""
print("-"*30)
print("     LOJA SUPER BARATÃO")
print("-"*30)
nomep = " "
preco = 0
continuar = " "
contp = 0
barato = ""
soma = 0
menor = 0
contg = 0
while True:
    nomep = str(input("Nome da Produto: "))
    preco = float(input("Preço: R$"))
    soma += preco #Para ocorrer a soma devida ele tem que estar antes da afirmativa se quer continuar
    contg += 1
    if preco > 1000:
        contp += 1
    if contg == 1 or preco < menor:
        menor = preco
        barato = nomep #Aqui serve para pegr o nomo do produto mais barato

    while continuar not in "SN":
        continuar = str(input("Quer continuar? [S/N] ")).strip().upper()[0]
    if continuar == "N":
        break
    continuar = " "
print(f"O total da compra foi R${soma:.2f}")
print(f"Temos {contp} produtos custando mais de R$1000.00")
print(f"O produto mais barato foi {barato} que custa R${menor:.2f}")
print("{:-^40}".format("FIM DO PROGRAMA"))
#"""
# --Desafio71
"""
print("="*30)
print("{:^30}".format("BANCO P"))
print("="*30)
valor = int(input("Que valor você quer sacar? R$"))
tot = valor
cedula = 50
tcedula = 0
while True:
    if tot >= cedula:
        tot -= cedula
        tcedula += 1 #Ele armazena todos os valores que são subtraidos, no final ele vai pro else e lá os valores são separados entre as condições do if até dar zero
    else:
        if tcedula > 0:
            print(f"Total de {tcedula} cédulas de R${cedula}")
        if cedula == 50:
            cedula = 20
        elif cedula == 20:
            cedula = 10
        elif cedula == 10:
            cedula = 1
        tcedula = 0
        if tot == 0:
            break
print("="*30)
print("Volte sempre ao BANCO P! Tenha um bom dia!")
#"""
# --Desafio72
"""
numeros = ("zero","um","dois","tres","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","quatorze","quinze","deseseis","dezesete","dezoito","dezenove","vinte")
while True:
    num = int(input("Digite um número entre 0 e 20: "))
    if 0<=num<=20:
        break
    print("Tente novamente")
print(f"O numero selecionado foi {numeros[num]}")
#"""
# --Desafio73
"""
Times = ('Flamengo','Internacional','Atlético','São Paulo','Fluminense','Gremio','Palmeiras','Santos','Atleticoparanaense','Bragantino','Ceara','Corinthians','Atléticogo','Bahia','Sport','Fortaleza','Vasco','Goias','Coritiba','Botafogo')
# Nesso funcionalidade abaixo posso fazer assim linear
print(Times)
# Ou para listar na horizontal
#for t in Times:
#    print(t)
print(f"Os 5 primeiros colocados são {Times[0:5]}")
print(f"Os últimos 4 da tabela são {Times[16:]}")# no Times eu poderia tbm ter usado o [-4:]
print("Em ordem alfabética:")
print(sorted(Times))
print("A posição do Fortaleza:")
print(Times.index('Fortaleza')+1)
#"""
# --Desafio74
"""
import random
valor1 = random.randint(0, 10)
valor2 = random.randint(0, 10)
valor3 = random.randint(0, 10)
valor4 = random.randint(0, 10)
valor5 = random.randint(0, 10)
sort = (valor1,valor2,valor3,valor4,valor5)
# Eu poderia ter feito assim tbm: sort = (random.randint(0, 10),random.randint(0, 10),random.randint(0, 10),random.randint(0, 10),random.randint(0, 10))
#Esse de baixo eu posso fazer assim:
print(f"Os valores sorteados foram: {sort}")
#Ou:
#print("Os valores sorteados foram: ", end="")
#for n in sort:
#    print(f"{n}", end=" ")
sort = sorted(sort)
print(f"O maior valor sorteado foi {sort[4]}")
print(f"O menor valor sorteado foi {sort[0]}")
#O de cima tbm pode ser feito dessa forma:
#print(f"O maior valor sorteado foi {max(sort)}")# Obs.: o max e o min são do próprio python
#print(f"O menor valor sorteado foi {min(sort)}")
#"""
# --Desafio75
"""
tupla = (int(input("Digite um número: ")),int(input("Digite um número: ")),int(input("Digite um número: ")),int(input("Digite um número: ")))
print(f"Os valores digitados foram: {tupla}")
print(f"O valor 9 apareceu {tupla.count(9)} vezes")
if 3 in tupla:
    print(f"O primeiro valor 3 foi digitado na posição {tupla.index(3)+1}ª")
else:
    print("O valor 3 não foi digitado em nenhuma posição")
print("Os valores pares digitados foram ",end="")
for t in tupla:
    if t % 2 == 0:
        print(t, end="")
#"""
# --Desafio76
"""
Lista = ("Pão", 1.5, "Frango", 12.8, "Milho", 9.43,"Borracha",1.25)
print("-"*38)
print(f'{"Listagem de Preços":^38}')
print("-"*38)
for pos in range(0,len(Lista)):
    if pos % 2 == 0:
        print(f"{Lista[pos]:.<30}", end="")
    else:
        print(f"R${Lista[pos]:>6.2f}")
print("-"*38)
#"""
# --Desafio77
"""
palavras = ("carro","casa","moto","palacio","cair","pegar","ver","voar","bisbilhotar","baguncar","amolecer","chapeu")
for p in palavras:
    print(f"\nNa palavra {p.upper()} as vogais são: ", end="")
    for letra in p:
        if letra.lower() in 'aeiou':
            print(letra, end=" ")
#"""
# --Desafio78
"""
valores = []
maior = 0
menor = 0
for c in range(0,5):
    valores.append(int(input(f"Digite um número na posição {c}: ")))
    #para determinar o maior valor e o menor valor:
    if c == 0:# Aqui diz respeito ao primeiro número, onde quando digitado ele fica sozinho, logo não da para determinar se ele é maior ou menor
        maior = menor = valores[c]
    else:# Aqui fica a determinação dos maiores valores e dos menores
        if valores[c] > maior:
            maior = valores[c]
        if valores[c] < menor:
            menor = valores[c]
print("Você digitou os valores:",valores)
print(f"O maior é {maior} nas posições ", end="")
for i,v in enumerate(valores):
    if v == maior:
        print(f"{i}...",end="")
print()
print(f"O menor é {menor} nas posições ", end="")
for i,v in enumerate(valores):
    if v == menor:
        print(f"{i}...", end="")
print()
#"""
# --Desafio79
"""
valor = []
while True:
    # Para valores duplicados
    v = int(input("Digite um valor: "))
    if v not in valor:
        valor.append(v)
        print("Valor adicionado com sucesso...")
    else:
        print("Valor duplicado! Não vou adicionar...")
    continuar = str(input("Quer continuar? [S/N] ")).upper().strip()
    if continuar in  "N":
        break
print("----------------------------------------------")
valor.sort()
print(f"Você digitou os valores {valor}")
#"""
# --Desafio80
"""
valor = []
for c in range(0,5):
    n = int(input("Informe um valor: "))
    if c == 0 or n > valor[-1]:
        valor.append(n)
        print("Adicionado ao final da lista")
    else:
        pos = 0
        while pos < len(valor): # enquanto a posição for menor que o tamanho da lista
            if n <= valor[pos]: # eu quero verificar se o número que eu quero inserir é menor ou igual a ele
                valor.insert(pos,n)
                print(f"Adicionado na posição {pos} da lista...")
                break
            pos += 1
print("-"*25)
print(f"O valores em ordem ficam {valor}")
#"""
# --Desafio81
"""
lista = []
cont = 0
while True:
    lista.append(int(input("Informe um valor: ")))
    cont += 1
    continuar = str(input("Você quer continuar? [S/N] ")).strip().upper()
    if "N" in continuar:
        break
print(f"O total de números digitados foi {cont}")#Aqui eu poderia ter digitado len(lista)
lista.sort(reverse=True)
print(f"A lista de valores ordenada de forma decrescente {lista}")
if 5 in lista:
    print("O valor 5 foi digitado!")
else:
    print("O valor 5 não foi digitado")

#"""
# --Desafio82
"""
lista = []
pares = []
impares = []
while True:
    lista.append(int(input("Informe um valor: ")))
    continuar = str(input("Você quer continuar? [S/N]")).strip().upper()
    if "N" in continuar:
        break
for i, v in enumerate(lista):# Obs.: aqui é dado a separação dos números pares e impares da lista geral para as respectivas listas
    if v % 2 == 0:
        pares.append(v)
    elif v % 2 == 1:
        impares.append(v)
print(f"A lista normal é {lista}")
print(f"A lista com os valores pares é {pares}")
print(f"A lista com os valores inpares é {impares}")
#"""
# --Desafio83
"""
# Para o entendimento desse ver video aula curso em video exercicios python 083 minuto 7:00
expr = str(input("Informe a exressão: "))
pilha = []
for simbolo in expr:
    if simbolo == '(':
        pilha.append('(')
    elif simbolo == ')':
        if len(pilha) > 0: # Ele usa a contagemn de pilhas para determinar o parentese
            pilha.pop()
        else:
            pilha.append(')')
            break
if len(pilha) == 0:
    print("Sua expressão está válida!")
else:
    print("Sua expressão está errada!")
#"""

# --Desafio84
"""
pessoas = []
dados = []
cont = 1
maior = menor = 0
while True:
    dados.append(str(input("Informe o Nome: ")))
    dados.append(float(input("Informe o Peso: ")))

    if len(pessoas) == 0:
        maior = menor = dados[1]
    else:
        if dados[1] > maior:
            maior = dados[1]
        if dados[1] < menor:
            menor = dados[1]

    pessoas.append(dados[:])
    dados.clear()
    cont += 1
    continuar = str(input("Quer continuar? [S/N] ")).strip().upper()
    if "N" in continuar:
        break
print(f"Os cadastrados foram {pessoas}")
print(f"Foram cadastradas um total de {cont-1} pessoas")# Ou posso usar len(pessoas)
for c in pessoas:
    if c[1] >= 60:
        print(f"A pessoa {c[0]} é pesada")
    elif c[1] <= 30:
        print(f"A pessoa {c[0]} é leve")
    else:
        print(f"A pessoa {c[0]} está no peso certo")
print("-"*15)
print(f"O maior peso foi {maior} Kg de ", end="")
for p in pessoas:
    if p[1] == maior:
        print(f"[{p[0]}]", end="")
print(f"\nO menor peso foi {menor} Kg de ", end="")
for p in pessoas:
    if p[1] == menor:
        print(f"[{p[0]}]", end="")
#"""
# --Desafio85
"""
valor = []
par = []
impar = []
for c in range(1,8):
    val = int(input(f"Informe o valor {c}º: "))
    if val % 2 == 0:
        par.append(val)
    else:
        impar.append(val)
    valor.append(par[:])
    valor.clear()
print(f"Valores pares : {sorted(par)}")
print(f"Valores impares : {sorted(impar)}")
#"""
# -Ou posso fazer dessa forma:
"""
num = [[],[]]
valor = 0
for c in range(1,8):
    valor = int(input("Digite um valor: "))
    if valor % 2 == 0:
        num[0].append(valor)#Aqui ele seleciona apenas os pares para a posição zero
    else:
        num[1].append(valor)
print("-"*30)
num[0].sort()
num[1].sort()
print(f"Todos os valores: {num}")
print(f"Os valores pares digitados foram: {num[0]}")
print(f"Os valores impares digitados foram: {num[1]}")
#"""
# --Desafio086
"""
matriz = []
a0 = []
a1 = []
a2 = []
print("Informe os termos da Matriz")
a0.append(int(input("A00 : ")))
a0.append(int(input("A01 : ")))
a0.append(int(input("A02 : ")))
print('-'*9)
matriz.append(a0)
a1.append(int(input("A10 : ")))
a1.append(int(input("A11 : ")))
a1.append(int(input("A12 : ")))
print('-'*9)
matriz.append(a1)
a2.append(int(input("A20 : ")))
a2.append(int(input("A21 : ")))
a2.append(int(input("A22 : ")))
print('-'*9)
matriz.append(a2)
print(f"0 | {matriz[0][0]} | {matriz[0][1]} | {matriz[0][2]} |")
print(f"1 | {matriz[1][0]} | {matriz[1][1]} | {matriz[1][2]} |")
print(f"2 | {matriz[2][0]} | {matriz[2][1]} | {matriz[2][2]} |")
print("-"*17)
print("  | 0 | 1 | 2 |")
#"""
# -Ou posso fazer assm:
"""
matriz = [[0,0,0],[0,0,0],[0,0,0]]
for l in range(0,3):
    for  c in range(0,3):
        matriz[l][c] = int(input(f"Digite um valor para [{l}, {c}]: "))
print("-"*30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f"[{matriz[l][c]:^5}]", end="")
    print()
#"""
# --Desafio087
"""
matriz = [[0,0,0],[0,0,0],[0,0,0]]
soma = maior = scol = 0
for l in range(0,3):
    for  c in range(0,3):
        matriz[l][c] = int(input(f"Digite um valor para [{l}, {c}]: "))
print("-"*30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f"[{matriz[l][c]:^5}]", end="")
        if matriz[l][c] % 2 == 0:
            soma += matriz[l][c]
    print()
print("-"*30)
print(f"A soma dos valores pares é {soma}")
for l in range (0, 3):
    scol += matriz[l][2]
print(f"A soma dos valores da terceira coluna é {scol}")
for c in range(0, 3):
    if c == 0:
        maior = matriz[1][c]
    elif matriz[1][c] > maior:
        maior = matriz[1][c]
print(f"O maior valor da segunda linha é {maior}.")
#"""
# --Desafio088
"""
import random
print("Jogando na mega sena")
print("-"*30)
sorteio = int(input("Quantos jogos você quer que eu sorteie? "))
print(f"Sorteando {sorteio} jogos")
for c in range(0, sorteio):
    valores = [random.randint(0, 60), random.randint(0, 60), random.randint(0, 60), random.randint(0, 60),random.randint(0, 60), random.randint(0, 60) ]
    print(f"Jogo {c+1}: {valores}")
print("-"*30)
print("Boa sorte!!!")
#"""
# --Desafio089
# O meu que está errado:
"""
notasg = []
cont = 0
while True:
    notasg.append(str(input("Nome: ")))
    notasg.append(float(input("Nota 1: ")))
    notasg.append(float(input("Nota 2: ")))
    cont += 1
    Escolha = str(input("Quer continuar? [S/N] ")).strip().upper()
    if "N" in Escolha:
        break
print("-"*30)
print("No. NOME        MÈDIA  ")
print("-----------------------")
for c in range(cont):
    print(f"{c} {notasg[cont][0]}        {notasg[cont][1] / 2 + notasg[cont][2] / 2}")
print("40")
#"""
# Resolução:
"""
ficha = list()
while True:
    nome = str(input("Nome: "))
    nota1 = float(input("Nota 1: "))
    nota2 = float(input("Nota 2: "))
    media = (nota1 + nota2) / 2
    ficha.append([nome, [nota1,nota2], media])
    resp = str(input("Quer continuar? [S/N]")).strip().upper()
    if resp in "N":
        break
print("-"*40)
print(f'{"No.":<4}{"NOME":<10}{"MÈDIA":>8}')
print("-"*26)
for i, a in enumerate(ficha):
    print(f"{i:<4}{a[0]:<10}{a[2]:>8.1f}")
while True:
    print("-"*35)
    opc = int(input("Mostrar notas de qual aluno? (999 interrompe): "))
    if opc == 999:
        print("FINALIZANDO...")
        break
    if opc <= len(ficha) - 1:
        print(f"Notas de {ficha[opc][0]} são {ficha[opc][1]}")
print("<<<VOLTE SEMPRE>>>")
#"""
# --Desafio090
"""
nome = str(input("Informe o Nome do Aluno: "))
media = float(input(f"Informe a Media de {nome}: "))
print(f"A media é igual a {media}")
if media < 7:
    print("Situação é igual a Aprovado")
else:
    print("Situação é igula a Reprovado")
#"""
# Ou posso fazer assim através de dicionários
"""
aluno = dict()
aluno['Nome'] = str(input('Nome: '))
aluno['Media'] = float(input(f'Media de {aluno["Nome"]}: '))
if aluno['Media'] >= 7:
    aluno['Situacao'] = 'Aprovado'
elif 5 <= aluno['Media'] < 7:
    aluno['Situacao'] = 'Recuperação'
else:
    aluno['Situacao'] = 'Reprovado'
print("-"*30)
for k,v in aluno.items():
    print(f" - {k} é igual a {v}")
#"""
# --Desafio091
"""
from random import randint
from time import sleep
from operator import itemgetter #Para ordenar os valores do dicionário é necessário importar essa biblioteca
jogo = {'Jogador1':randint(1, 6),'Jogador2':randint(1, 6),'Jogador3':randint(1, 6),'Jogador4':randint(1, 6)}
ranking = dict()# Para fazer a ordenação necessito de um dicionário ou de uma lista
print("Valores Sorteados:")
for k, v in jogo.items():
    print(f"{k} tirou {v} no dado.")
    sleep(1)
ranking = sorted(jogo.items(), key=itemgetter(1), reverse=True)# Nessa linha ocorre a ordenação dos valores em ordem decrecente
print("-"*20)
print("Ranking Dos Jogadores")
print("-"*20)
for i,v in enumerate(ranking):
    print(f"{i+1}º lugar: {v[0]} com {v[1]}.")
    sleep(1)

#"""
# --Desafio092
"""
from datetime import datetime
Pessoa = {}
Pessoa['nome'] = str(input("Nome: "))
AnoNas = int(input("Ano de Nascimento: "))
Pessoa['Idade'] = datetime.now().year - AnoNas
Pessoa['Cdetrabalho'] = int(input("Carteira de Trabalho (0 não tem): "))
if Pessoa['Cdetrabalho'] != 0:
    Pessoa['AnoCon'] = int(input("Ano de Contratação: "))
    Pessoa['Salario'] = int(input("Salário: R$ "))
    Pessoa['Aposentadoria'] = Pessoa['Idade'] + ((Pessoa['AnoCon'] + 35) - datetime.now().year)
print("-"*30)
print(Pessoa)
print("-"*30)
for k, v in Pessoa.items():
    print(f" - {k} tem o valor {v}")

#"""
# --Desafio093
"""
Jogador = {}
Partidas = []# Aqui uma partida é declarada como uma lista
Jogador['Nome'] = str(input("Nome do Jogador: "))
tot = int(input(f"Quantas partidas {Jogador['Nome']} jogou? "))
for c in range(0,tot):
    Partidas.append(int(input(f"Quantos gols na partida {c+1}? ")))
Jogador['Gols'] = Partidas[:] # Aqui o jogador recebe uma copia de partidas
Jogador['Total'] = sum(Partidas) # sum faz a soma, assim não é necessário um método construtor
print("-"*30)
print(Jogador)
print("-"*30)
for k, v in Jogador.items():
    print(f"O campo {k} tem o valor {v}")
print("-"*30)
print(f"O jogador {Jogador['Nome']} jogou {len(Jogador['Gols'])} partidas.")
for i, v in enumerate(Jogador['Gols']):
    print(f" => Na pertida {i}, fez {v} gols.")
print(f"Foi um total de {Jogador['Total']} gols.")
#"""
# --Desafio094
"""
Galera = list()
Pessoa = dict()
soma = media = 0
while True:
    Pessoa['Nome'] = str(input('Nome: '))
    while True:
        Pessoa['Sexo'] = str(input('Sexo: [M/F] ')).strip().upper()[0]
        if Pessoa['Sexo'] in 'MF':
            break
        print('Erro! Por favor, digite apenas M ou F.')
    Pessoa['Idade'] = int(input('Idade: '))
    soma += Pessoa['Idade']
    Galera.append(Pessoa.copy()) # adicionar valores dentro da lista
    while True:
        continuar = str(input('Quer continuar? [S/N] ')).strip().upper()[0]# o [0] serve para ele pegar apenas a primeira letra!
        if continuar in 'SN':
            break
        print('Erro! Por favor insira um valor válido')
    if continuar == 'N':
        break
print("-"*30)
print(f'A) Ao todo temos {len(Galera)} pessoas cadastradas. ')
media = soma / len(Galera)
print(f'B) A média de idade é de {media:5.2f} anos.')
print('C) As mulheres cadastradas foram ', end='')
for p in Galera:
    if p['Sexo'] in 'F':
        print(f'{p["Nome"]} ', end="")
print()
print('D) Lista das pessoas que estão acima da média: ')
for p in Galera:
    if p['Idade'] >= media:
        print('   ')
        for k,v in p.items():
            print(f'{k} = {v}; ', end="")
        print()
print('<<< ENCERRADO >>>')
#"""
# --Desafio095
"""
listagol = []
Jogadores = {}
Time = []

while True:
    Jogadores.clear()# Vou apagar cada laço pois, a cada laço ele acumula valores na variável

    Jogadores['Nome'] = str(input("Nome do Jogador: "))
    Jogadores['Partidas'] = int(input(f"Quantas partidas {Jogadores['Nome']} jogou? "))
    listagol.clear()
    for c in range(0,Jogadores['Partidas']):
        listagol.append(int(input(f"Quantos gols na partida {c+1}? ")))
    Jogadores['Gols'] = listagol[:]
    Jogadores['Total'] = sum(listagol)

    Time.append(Jogadores.copy())
    while True:
        continuar = str(input("Quer continuar? [S/N]")).strip().upper()[0]
        if  continuar in 'SN' :
            break
        print("Por favor insira um valor corretamente!!")
    if continuar == 'N':
        break
print("-"*40)
#Essa parte do código aqui vai mostrar os cabeçalhos
print('Cod ', end="")
for i in Jogadores.keys():
    print(f"{i:<15}", end="")
print()

print("-"*40)
#Essa parte vai mostrar os resultados
for k, v in enumerate(Time):
    print(f"{k:>3} ", end="")
    for d in v.values():
        print(f"{str(d):<15}", end="")
    print()
print("-" * 40)
while True:
    busca = int(input("Mostrar dados de qual jogador? (999 para parar) "))
    if busca == 999:
        break
    if busca >= len(Time):
        print(f"ERRO! Não existe jogador com esse código {busca}")
    else:
        print(f" -- LEVANTAMENTO DO JOGADOR {Time[busca]['Nome']}:")
        for i, g in enumerate(Time[busca]['Gols']):
            print(f'    No jogo {i + 1} fez {g} gols.')
    print('-'*40)
print("<< VOLTE SEMPRE >>")
#"""
# --Desafio096
"""
def area(l,c):
    a = l*c
    print(f'A área de um terreno {l}x{c} é de {a}m².')


print('Controle de Terreno')
print("-"*30)
Largura = float(input('LARGURA (m): '))
Comprimento = float(input('COMPRIMENTO (m): '))
area(Largura,Comprimento)
#"""
# --Desafio097
"""
def escreva(msg): # Obs.: a linha será conpletamente adaptável
    tam = len(msg) + 4
    print("~"*tam)# Linha adapatavél conforme o tamanho da mensagem
    print(f'  {msg}')
    print("~"*tam)


escreva('Olá Mundo')
escreva('Lucas')
escreva('Casa Grande')
#"""
# --Desafio098
"""
from time import sleep
def contagem(i,f,p):
    print(f"Contagem de {i} até {f} de {p} em {p}")
    for t in range(i,f,p):
        print(f"{t} ", end="")
        sleep(0.5)
    print("FIM!")
    print("-=-"*15)


contagem(1,10,1)
contagem(10,0,-2)
print("Agora é a sua vez de personalizar a contagem!")
inicio = int(input("Início: "))
fim = int(input("Fim: "))
passo = int(input("Passo: [Se inicio for maior que o fim informe o -] "))
contagem(inicio,fim,passo)
#"""
# --Ou posso fazer dessa forma:
"""
from time import sleep
def contagem(i,f,p):
    # Esse comando abaixo, os dois primeiros ifs, servem para que o programa se certtifique que não dará erro, pois o p não pode ser zero e nem negativo;
    if p < 0:
        p *= -1
    if p == 0:
        p = 1
    print(f"Contagem de {i} até {f} de {p} em {p}")

    if i < f:
        cont = i
        while cont <= f:
            print(f'{cont} ', end='')
            sleep(0.5)
            cont += p
        print('FIM!')
    else:
        cont = i
        while cont >= f:
            print(f'{cont} ',end='')
            sleep(0.5)
            cont -= p
        print('FIM!')


contagem(1,10,1)
contagem(10,0,2)
print("Agora é a sua vez de personalizar a contagem!")
inicio = int(input("Início: "))
fim = int(input("Fim: "))
passo = int(input("Passo: "))
contagem(inicio,fim,passo)
#"""
# --Desafio099
"""
def analise(*num):
    print("-=-" * 30)
    print("Analisando os valores passados...")
    print(f"{num} Foram informados {len(num)} valores ao todo")
    maior = cont = 0
    for c in num:
        if cont == 0:
            maior = c
        else:
            if c > maior:
                maior = c
        cont += 1
    print(f"O maior valor informado foi {maior}")



analise(2,5,1,8,9,12,0)
analise(4,7,0)
analise(1,2)
analise(6)
analise(0)
#"""
# --Desafio100
"""
from random import randint
def sorteio(lista):
    print('Sortendo 5 valores da lista: ', end="")
    for cont in range(0, 5):
        n = randint(1, 10)
        lista.append(n)
        print(f'{n} ', end="")
    print('PRONTO!')

def somaPar(lista):
    soma = 0
    for valor in lista:
        if valor % 2 == 0:
            soma += valor
    print(f'Somando o valores pares de {lista}, temos {soma}')


numeros = list()
sorteio(numeros)
somaPar(numeros)
#"""
# --Desafio101
"""
from datetime import datetime
print("-"*30)


def voto(ano):
    # Obs.: posso usar o from datetime import aqui dentro, e no caso ela só vai existir aqui dentro, o que economiza memória
    idade = anoat - anonasc
    print(f'Com {idade} anos: ', end="")
    if idade < 16:
        print("NÃO VOTA.")
    if 18 > idade >= 16:
        print("VOTO OPCIONAL.")
    if 65 > idade >= 18:
        print('VOTO OBRIGATÓRIO.')
    if idade >= 65:
        print('VOTO OPCIONAL.')


anoat = datetime.now().year
anonasc = int(input("Em que ano você nasceu? "))
voto(anonasc)
#"""
# --Ou posso fazer assim:
"""
print("-"*30)



def voto(ano):
    from datetime import date
    atual = date.today().year
    idade = atual - ano
    if idade < 16:
        return f'Com {idade} anos: NÃO VOTA.'
    elif 16 <= idade < 18 or idade > 65:
        return f'Com {idade} anos: VOTO OPCIONAL.'
    else:
        return f'Com {idade} anos: VOTO OBRIGATÓRIO.'


an = int(input("Em que ano você nasceu? "))
print(voto(an))
#"""
# --Desafio102
"""
print('-'*30)


def fatorial(num = 0, show = False):
    # Isso aqui em baixo, essa barra de texto é um comentario, colocar aspas quando for para executar o programa
    -> Faz o cálculo da fatorial de um número
    :param num: O número a ser cálculado
    :param show: para mostrar o cálculo
    :return: Não tem retorno
    
    cont = 1
    n = num+1
    if show == True:
        for c in range(1, n):
            if show == True:
                if c == 1:
                    print(f' {c} ', end="")
                else:
                    print(f'x {c} ', end="")
            else:
                print('')

    for c in range(1, n):
        c -= 0
        cont *= c
    print(f"= {cont}", end="")


fatorial(5, show=True)
help(fatorial)
#"""
# --Ou podemos fazar assim:
"""
def fatorial(n, show = False):
    # Isso aqui em baixo, essa barra de texto é um comentario, colocar aspas quando for para executar o programa
    -> Faz o cálculo da fatorial de um número
    :param num: O número a ser cálculado
    :param show: para mostrar o cálculo
    :return: Não tem retorno
    
    f = 1
    for c in range(n, 0, -1):
        if show:
            print(c, end='')
            if c > 1:
                print(' x ', end='')
            else:
                print(' = ', end='')
        f *= c
    return f


#Programa Principal
print(fatorial(5, show = True))
#"""
# --Desafio103
"""


def ficha(nome = '<desconhecido>', gols = '0'):
    print(f"O jogador {nome} fez {gols} gol(s) no campeonato.")


Nome = str(input("Nome do Jogador: "))
ngols = str(input("Número de Gols: "))
if ngols.isnumeric():
    ngols = int(ngols)
else:
    ngols = 0
if Nome.strip() == '':
    ficha(gols=ngols)
else:
    ficha(Nome,ngols)
#"""
# --Desafio104
"""
def leiaInt(msg):
    ok = False
    valor = 0
    while True:
        n = str(input(msg))
        if n.isnumeric():
            valor = int(n)
            ok = True
        else:
            print('\033[0;31mERRO! Digite um número inteiro válido.\033[m')
        if ok:
            break
    return valor


# Programa Principal
n = leiaInt("Digite um número: ")
print(f"Você acabou de digitar o número {n}")
#"""
# --Desafio105
"""
def notas(*num, sit=False):

    # Obs.: Aqui é para ter um comentário para o help

    r = dict()
    r['total'] = len(num)
    r['maior'] = max(num)
    r['menor'] = min(num)
    r['média'] = sum(num) / len(num)
    if sit:
        if r['média'] >= 7:
            r['situação'] = 'BOA'
        elif r['média'] >= 5:
            r['situação'] = 'RAZOÁVEL'
        else:
            r['situação'] = 'RUIM'
    return r

resp = notas(5.5, 2.5, 10, 6.5, sit=True)
print(resp)
help(notas)
#"""
# --Desafio106
"""
from time import sleep
c = ('\033[m', # 0 - sem cores
     '\033[0;30;41m', # 1 - vermelho
     '\033[0;30;42m', # 2 - verde
     '\033[0;30;43m', # 3 - amarelo
     '\033[0;30;44m', # 4 - azul
     '\033[0;30;45m', # 5 - roxo
     '\033[7;40m',    # 6 - branco
    );


def ajuda(com):
    titulo(f'Acessando o manual do comado \'{com}\'', 4)
    print(c[6], end='')
    help(com)
    print(c[0], end='')
    sleep(2)


def titulo(msg, cor = 0):
    tam = len(msg) + 4
    print(c[cor], end='')
    print('~' * tam)
    print(f'  {msg}')
    print('~' * tam)
    print(c[0], end='')
    sleep(1)


#Programa Principal
comando = ''
while True:
    titulo("SISTEMA DE AJUDA PyHELP", 2)
    comando = str(input("Função ou Biblioteca > "))
    if comando.upper() == 'FIM':
        break
    else:
        ajuda(comando)
titulo('ATÉ LOGO!', 1)
#"""
# --Desafio107
"""
#from Modulo107moeda import aumentar, diminuir, dobro, metade
# Ou:
import Modulo107moeda

print("Jogo de moedas")
m = int(input('Informe o número de moedas: '))
#
#aumentar(m)
#diminuir(m)
#dobro(m)
#metade(m)

print('-'*30)
# Obs.: aqui deu duplicada pois dentro da função também insere a frase
print(f'Alguém te deu uma moeda, de {m} suas moedas aumentaram para {Modulo107moeda.aumentar(m)}')
print(f'Você doou uma moeda, de {m} suas moedas diminuiram para {Modulo107moeda.diminuir(m)}')
print(f'Você ganhou um sorteio, de {m} suas moedas dobraram para {Modulo107moeda.dobro(m)}')
print(f'Você perdeu uma aposta, de {m} suas moedas foram reduzidas para a metade {Modulo107moeda.metade(m)}')
#"""
# --Desafio108
"""
#from Modulo107moeda import aumentar, diminuir, dobro, metade, moeda
import Modulo107moeda
print("Jogo de moedas")
m = int(input('Informe o número de moedas: '))

print(f'Alguém te deu uma moeda, de {Modulo107moeda.moeda(m, "US$")} suas moedas aumentaram para {Modulo107moeda.moeda(Modulo107moeda.aumentar(m))}')
print(f'Você doou uma moeda, de {Modulo107moeda.moeda(m)} suas moedas diminuiram para {Modulo107moeda.moeda(Modulo107moeda.diminuir(m))}')
print(f'Você ganhou um sorteio, de {Modulo107moeda.moeda(m)} suas moedas dobraram para {Modulo107moeda.moeda(Modulo107moeda.dobro(m))}')
print(f'Você perdeu uma aposta, de {Modulo107moeda.moeda(m)} suas moedas foram reduzidas para a metade {Modulo107moeda.moeda(Modulo107moeda.metade(m))}')
#"""
# --Desafio109
"""
import Modulo109moeda
print("Jogo de moedas")
m = int(input('Informe o número de moedas: '))

print(f'Alguém te deu uma moeda, de {Modulo109moeda.moeda(m)} suas moedas aumentaram para {Modulo109moeda.aumentar(m)}')
print(f'Você doou uma moeda, de {Modulo109moeda.moeda(m)} suas moedas diminuiram para {Modulo109moeda.diminuir(m, True)}')
print(f'Você ganhou um sorteio, de {Modulo109moeda.moeda(m)} suas moedas dobraram para {Modulo109moeda.dobro(m, True)}')
print(f'Você perdeu uma aposta, de {Modulo109moeda.moeda(m)} suas moedas foram reduzidas para a metade {Modulo109moeda.metade(m, True)}')
#"""
# --Desafio110
"""
from Modulo107moeda import resumo
m = int(input('Informe o número de moedas: '))
resumo(m)
#"""
# --Desafio111
"""
from utilidadesCeV import Numeros
print("Jogo de moedas")
m = int(input('Informe o número de moedas: '))

print(f'Alguém te deu uma moeda, de {Modulo107moeda.moeda(m)} suas moedas aumentaram para {Modulo107moeda.moeda(Modulo107moeda.aumentar(m) , True)}')
print(f'Você doou uma moeda, de {Modulo107moeda.moeda(m)} suas moedas diminuiram para {Modulo107moeda.moeda(Modulo107moeda.diminuir(m) , False)}')
print(f'Você ganhou um sorteio, de {Modulo107moeda.moeda(m)} suas moedas dobraram para {Modulo107moeda.moeda(Modulo107moeda.dobro(m) , False)}')
print(f'Você perdeu uma aposta, de {Modulo107moeda.moeda(m)} suas moedas foram reduzidas para a metade {Modulo107moeda.moeda(Modulo107moeda.metade(m) , True)}')
#"""
# --Desafio112
"""
from utilidadesCeV import Numeros, Dados
print("Jogo de moedas")
m = int(input('Informe o número de moedas: '))
utilidadesCeV.Dados.validação(m)

print(f'Alguém te deu uma moeda, de {Modulo107moeda.moeda(m)} suas moedas aumentaram para {Modulo107moeda.moeda(Modulo107moeda.aumentar(m) , True)}')
print(f'Você doou uma moeda, de {Modulo107moeda.moeda(m)} suas moedas diminuiram para {Modulo107moeda.moeda(Modulo107moeda.diminuir(m) , False)}')
print(f'Você ganhou um sorteio, de {Modulo107moeda.moeda(m)} suas moedas dobraram para {Modulo107moeda.moeda(Modulo107moeda.dobro(m) , False)}')
print(f'Você perdeu uma aposta, de {Modulo107moeda.moeda(m)} suas moedas foram reduzidas para a metade {Modulo107moeda.moeda(Modulo107moeda.metade(m) , True)}')
#"""
# --Desafio113
"""
def leiaInt(msg):
    while True:
        try:
            n = int(input(msg))
        except (ValueError, TypeError):
            print('\033[31mERRO: por favor, digite um número inteiro válido.\033[m')
            continue
        except (KeyboardInterrupt):
            print('\n\033[31mEntrada de dados interrompida pelo usuário.\033[m')
            return 0
        else:
            return n


def leiaFloat(msg):
    while True:
        try:
            n = float(input(msg))
        except (ValueError, TypeError):
            print('\033[31mERRO: por favor, digite um número inteiro válido.\033[m')
            continue
        except (KeyboardInterrupt):
            print('\n\033[31mEntrada de dados interrompida pelo usuário.\033[m')
            return 0
        else:
            return n


# Programa Principal
n = leiaInt("Digite um número inteiro: ")
f = leiaFloat("Digite um número real\t: ")
print(f"Você acabou de digitar o número {n}")
print(f"Você acabou de digitar um númeero real {f}")
#"""
# --Desafio114
"""
# Verificar de um site está acessivél, ou testar a conexão na internet
import urllib
import urllib.request

try:
    site = urllib.request.urlopen('https://www.amazon.com.br')
except:
    print('Deu erro')
else:
    print('Tudo ok')
#"""
# -Ou posso fazer assim:
"""#"""
import urllib
import urllib.request

try:
    site = urllib.request.urlopen('https://www.amazon.com.br')
except urllib.error.URLError:
    print('O site da amazom não está acessivél no momento.')
else:
    print('consegui acessar o site da amazon com sucesso!')
    # Se eu quiser puxar o código do site inteiro:
    print(site.read())