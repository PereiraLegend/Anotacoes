def aumentar(x = 0):
    s = x + 1
    #print(f'Alguém te deu uma moeda, de {x} suas moedas aumentaram para {s}')
    return s


def diminuir(x = 0):
    s = x - 1
    #print(f'Você doou uma moeda, de {x} suas moedas diminuiram para {s}')
    return s



def dobro(x = 0):
    s = x * 2
    #print(f'Você ganhou um sorteio, de {x} suas moedas dobraram para {s}')
    return s



def metade(x = 0):
    s = x/2
    #print(f'Você perdeu uma aposta, de {x} suas moedas foram reduzidas para a metade {s}')
    return s

def moeda(x = 0, moeda = 'R$'):
    return f'{moeda}{x:>8.2f}'.replace('.',',')


def resumo(x):
    print("-"*30)
    print("RESUMO DO VALOR".center(30))
    print("-"*30)
    print(f"Preço analisado: \t\t{moeda(x)}")
    print(f"Aumento do valor: \t\t{moeda(aumentar(x))}")
    print(f"Diminuição do valor: \t{moeda(diminuir(x))}")
    print(f"Dobro do valor: \t\t{moeda(dobro(x))}")
    print(f"Metade do valor: \t\t{moeda(metade(x))}")
    return x