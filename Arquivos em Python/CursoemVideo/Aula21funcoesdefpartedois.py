# Parte dois da aula 20 sobre def
# Função/Método Interactive Help
"""Para acessar o manual das funções basta digitar o comando help no console do python, após isso voce digita o comando
de sua dúvida, como print, input, dentre outros, para sair do comando digite quit;"""
# Fora do console você pode digitar no próprio programa como:
help(print) # Ele irá detalhar a função escolhida
#Também posso mostrar o doc
print("-=-"*30)
print('\n')
print(print.__doc__) # Não necessáriamente será a mesma informação do help, mas poe ser a mesma coisa, só a formatação que é diferente
# Isso que foi mostrado foram DOCSTRINGS, no caso essas DOCSTRINGS mostram os detalhes das funções já criadas o próprio python
# Mas e se usassemos DOCSTRINGS para também detelhar as funções que nós mesmos criamos?
print("-=-"*30)
print('\n')


def contador(i, f, p):
    c = 1
    while c <= f:
        print(f'{c} ', end='')
        c += p
    print('FIM!')


contador(2, 10, 2) # Obs.: aqui vai de 2 a 10 pulando de 2 em 2
help(contador) # Se eu pegar o help do contador para peagar a descrição dele ele só irá mostrar contador(i, f, p)

print("-=-"*30)
print('\n')
# Para mostrar a descrição de uma função usamos DOCSTRING fazendo assim:
# tudo o que é necessário para uma criar uma descrição é """"""


def contador2(i, f, p):
    """
    -> Faz uma contagem e mostra na tela.
    :param i: inicio da contagem
    :param f: fim da contagem
    :param p: passo da contagem
    :return: sem retorno
    """
    c = 1
    while c <= f:
        print(f'{c} ', end='')
        c += p
    print('FIM!')


contador2(2, 10, 2)
help(contador2)

print("-=-"*30)
print('\n')
# Saindo um pouco das funções help e docstring
# Parâmetros opcionais:
# Se eu criar uma função soma com três varaiáveis e depois passar apenas duas ela dará erro


def somar(a,b,c):
    """

    :param a:
    :param b:
    :param c:
    :return:
    """
    s = a + b + c
    print(f"A soma vale {s}")


somar(3,2,5) # Dará certo
#somar (8,4) # não dará certo, mas e se eu colocar parâmetros opcionais?
print("-"*20)


def somar2(a,b,c = 0): # Basta eu adicionar o = 0, e se não passar o valor c, ele automáticamente valerá zero
    """

    :param a:
    :param b:
    :param c:
    :return:
    """
    s = a + b + c
    print(f"A soma vale {s}")


somar2(3,2,5)
somar2(3,2)

# Se eu colocar tudo = 0
print("-"*20)


def somar3(a = 0,b = 0,c = 0): # independente do que for colocado o resultado dará zero
    """

    :param a:
    :param b:
    :param c:
    :return:
    """
    s = a + b + c
    print(f"A soma vale {s}")


somar3(3,2,5)# Em todas as formas de declarar os valores de uma função dará certo
somar3(8,4)
somar3()

print("-=-"*30)
print('\n')
# Saindo das funções opcionais iremos para o escopo de variaveis
# Escopo de variáveis


def teste():
    x = 8
    print(f"Na função teste, n vale {n}")
    print(f"Na função teste, x vale {x}")


#Programa principal
n = 2 # Se você prestar atenção esse n vai estar tanto dentro da variavél abaixo quanto dentro do def teste,l esse escopo se chama escopo global
print(f"No programa principal, n vale {n}")
#print(f"No programa principal, x vale {x}") #Isso aqui, essa função dará erro, pois o x não foi declarado em um escopo global como o n e sim dentro de uma variável
teste()

print("-=-"*30)
print('\n')
# Agora saindo do escopo das variáveis e entrando no campo do retorno de valores
# Retornando Valores


def calculo(a = 0, b = 0, c = 0):
    s = a + b + c
    print(f'A soma vale {s}')


calculo(3, 2, 5)
calculo(2, 2)
calculo(6)
print("-"*20)
#Se eu quiser colocar todos os três calculos juntos em um único print, eu faço assim:


def calculo2(a = 0, b = 0, c = 0):
    s = a + b + c
    return s


r1 = calculo2(3, 2, 5)
r2 = calculo2(2, 2)
r3 = calculo2(6)
print(f"Meus cálculos deram {r1}, {r2} e {r3}.")# Também posso colocar direto sem colocr dentro de um r1, r2 ou r3

print("-=-"*30)
print('\n')
# Exercicio na aula:
print("EXERCICIO NA AULA!:")


def fatorial(num=1):
    f = 1
    for c in range(num, 0, -1):
        f *= c
    return f


f1 = fatorial(5)
f2 = fatorial(4)
f3 = fatorial()
print(f"Os resultados são {f1}, {f2} e {f3}")


def par(n=0):
    if n % 2 == 0:
        return True
    else:
        return  False


num = int(input("Digite um número: "))
print(par(num))
# Ou posso fazer assim:
if par(num):
    print('É par!')
else:
    print('Não é par!')

