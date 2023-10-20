print("Hello World!")
def bissecao(f, a, b, precisao=1e-6, max_iter=100):
    if f(a) * f(b) >= 0:
        raise ValueError("A função deve mudar de sinal em [a, b]")
    
    iteracao = 0
    while (b - a) > precisao and iteracao < max_iter:
        c = (a + b) / 2
        if f(c) == 0:
            return c
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
        iteracao += 1

    return (a + b) / 2

# Exemplo de uso:
# Defina a função que você deseja encontrar a raiz
def funcao(x):
    return x**3 - 5*x**2 + 2

# Defina o intervalo inicial [a, b] onde a função muda de sinal
a = 0
b = 2

# Chame a função de bissecção para encontrar a raiz
raiz = bissecao(funcao, a, b)

print(f'A raiz da função é aproximadamente: {raiz:.6f}')
