def aumentar(x):
    s = x + 1
    #print(f'Alguém te deu uma moeda, de {x} suas moedas aumentaram para {s}')
    return s


def diminuir(x):
    s = x - 1
    #print(f'Você doou uma moeda, de {x} suas moedas diminuiram para {s}')
    return s



def dobro(x):
    s = x * 2
    #print(f'Você ganhou um sorteio, de {x} suas moedas dobraram para {s}')
    return s



def metade(x):
    s = x/2
    #print(f'Você perdeu uma aposta, de {x} suas moedas foram reduzidas para a metade {s}')
    return s

def moeda(msg, p = False):
    if p == True:
        print(f'R${msg}', end="")
    else:
        print(f'{msg}', end="")
    return


def resumo(x):
    print("-"*30)
    print("RESUMO DO VALOR")
    print(f"Preço analisado: {moeda(x)}")
    print(f"Aumento do valor: {moeda(aumentar(x))}")
    print(f"Diminuição do valor {moeda(diminuir(x))}:")
    print(f"Dobro do valor: {moeda(dobro(x))}")
    print(f"Metade do valor: {moeda(metade(x))}")
    return x