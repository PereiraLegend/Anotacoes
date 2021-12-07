# Obs.: Numa def opu função eu posso colocar dados que serão chamados, assim facilitando os meus trabalhos no código
# Por exemplo o que está escrito abaixo, sem uma def ficaria dessa forma:
print("Exemplo 01")
print("\n\n")
print("-" * 30)
print("   CURSO EM VIDEO   ")
print("-" * 30)
print("-" * 30)
print("   APRENDA PYTHON   ")
print("-" * 30)
print("-" * 30)
print("   PREÇOS   ")
print("-" * 30)
print("\n\n")
# Se eu "Abstrair" utilizando defs
def lin():
    print("-" * 30)


# Obs.: entre a def e o programa principal a IDE sempre pede para para deixar duas linhas de espaço
# No caso o programa principal está logo abaixo:26
print("Exemplo 02")
print("\n\n")
lin()# eu estou sempre chamando o comando lin, que no caso eu criei
print("   CURSO EM VIDEO   ")
lin()
lin()
print("   APRENDA PYTHON   ")
lin()
lin()
print("   PREÇOS   ")
lin()
print("\n\n")
# Como o def é mais poderoso que isso, se você prestar atenção o que muda nos 3 blocos de texto atrás é apenas o miolo, ou seja aquilo que está escrito
# Então eu posso fazer/adaptar as minhas necessidades utilizando parâmetros:
# Isolando o bloco e sabendo que só o texto é quem muda:
def mensagem(msg):
    print("-" * 30)
    print(msg)# assim eu defino um parâmetro qeu será alocado dentro do que foi chamado
    print("-" * 30)


print("Exemplo 03")
print("\n\n")
mensagem("   CURSO EM VÍDEO   ")
mensagem("   APRENDA PYTHON   ")
mensagem("   PREÇOS   ")
print("\n\n")

print("Exemplo 04")
print("\n\n")
#O que você vê logo abaixo é um programa repetitivo:
a = 4
b = 5
s = a + b
print(s)

a = 8
b = 9
s = a + b
print(s)

a = 2
b = 1
s = a + b
print(s) # Se você prestar bem atenção são 3 trechos quase iguais
print("Utilizando função ou def ↓")
# Mas se eu usar rotinas ficará assim:
def soma(a, b):
    print(f"A = {a} e B = {b}")
    s = a + b
    print(f'A soma A + B = {s}')


# Programa Principal
soma(4, 5)
soma(8, 9)
soma(2, 1)# O máximo foi abstraido
# Aqui se eu colocasse soma(4), o programa daria erro pois a soma na def recebe dois parâmetros e não um
# Obs.: também posso colocar as variáveis que não dá erro
soma(a=2, b=1)# Obs.: Se você for explicitar ,é para explicitar anbos, pois apenas um dará erro
# Também posso mudar a ordem:
soma(b=2,a=1)
print("\n\n")

# Empacotamento, opu conceito de passar vários parâmetros mas não saber a quantidade exata deles
# O python possui um suporte para esse tipo de coisa;
# Por exemplo eu quero passar vários valores mas não sei a quantidade exata
print("Exemplo 05")
print("\n\n")
def contador(*num):# aqui eu estaou dizendo ao python que vou receber parãmetros, mas que não sei a quantidade deles; e o *num é um comando para desencapsular o que eu defini como resultado do valor logo baixo
    #print(num)
    # como lá enbaixo após a execução ele cria uma tupla, aqui eu posso tratar os valores como um tupla
    tot = len(num)
    for valor in num:
        print(f"{valor}", end=" ")
    print("Fim!")
    print(f"Recebi os valores {num} e são ao todo {tot} números")

# Obs.: se eu tiver vários números e não saber a quantia certa deles eu "encapsulo" e "desencapsulo"
#Ex.:
contador(2, 1, 7)# se você prestar bem atenção aqui quando ele executa ele cria uma tupla, ou seja eu posso fazer aqui tudo o que eu posso fazer com um tupla
contador(8, 0)
contador(4, 4, 7, 6, 2)
print("\n\n")

print("Exemplo 06")
print("\n\n")
def dobra(lst):
    pos = 0
    while pos < len(lst):
        lst[pos] *= 2 # ou seja, tudo que eu vou fazer em lst vai interferir na lista valores, assim meio que teriamos duas listas guardadas na memória
        pos += 1


valores = [6, 3, 9, 1, 0, 2]
print(valores)
dobra(valores)
print(valores)
