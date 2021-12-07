def aumentar(x=0, formato=False):
    s = x + 1
    #print(f'Alguém te deu uma moeda, de {x} suas moedas aumentaram para {s}')
    return s if formato is False else moeda(s)


def diminuir(x=0, formato=False):
    s = x - 1
    #print(f'Você doou uma moeda, de {x} suas moedas diminuiram para {s}')
    return s if formato is False else moeda(s)


def dobro(x=0, formato=False):
    s = x * 2
    #print(f'Você ganhou um sorteio, de {x} suas moedas dobraram para {s}')
    return s if not formato else moeda(s)


def metade(x=0, formato=False):
    s = x/2
    #print(f'Você perdeu uma aposta, de {x} suas moedas foram reduzidas para a metade {s}')
    return s if not formato else moeda(s)


def moeda(x = 0, moeda = 'R$'):
    return f'{moeda}{x:>8.2f}'.replace('.',',')


def resumo(x):

    print(f"Preço analisado: {moeda(x)}")
    print(f"Aumento do valor: {moeda(aumentar(x))}")
    print(f"Diminuição do valor {moeda(diminuir(x))}:")
    print(f"Dobro do valor: {moeda(dobro(x))}")
    print(f"Metade do valor: {moeda(metade(x))}")
    return x