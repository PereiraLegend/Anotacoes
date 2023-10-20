def funcao(x):
    return x**3 - 2*x**2 - 5

def bissecao(funcao, a, b, precisao=1e-6):
    if funcao(a) * funcao(b) >= 0:
        raise ValueError("A função deve mudar de sinal em [a, b].")
    
    while (b - a) > precisao:
        c = (a + b) / 2
        valor_c = funcao(c)
        
        if valor_c == 0:
            return c
        elif valor_c * funcao(a) < 0:
            b = c
        else:
            a = c
    
    return (a + b) / 2

# Intervalo inicial [a, b] onde a função muda de sinal
a = 1
b = 3

# Precisão desejada
#precisao = 1e-6

# Chame a função de bissecção para encontrar a raiz
raiz = bissecao(funcao, a, b, 1e-6)

print(f'A raiz da função é aproximadamente: {raiz:.6f}')
