def funcao(x):
    return x**2 + 2*x - 4

def bissecao(funcao, x, y, p=1e-5, max_iter=100):
    if funcao(x) * funcao(y) >= 0:
        print("A função não cumpre os critérios do método da bisseção.")
        return None
    ni = 0
    while (y - x) / 2.0 > p and ni < max_iter:
        c = (x + y) / 2.0
        if funcao(c) == 0:
            return c
        if funcao(x) * funcao(c) < 0:
            y = c
        else:
            x = c
        ni = ni + 1
    return (x + y) / 2.0

x = 0
y = 3
r = bissecao(funcao, x, y)
if r is not None:
    print(f"A raiz é aproximadamente: {r:.5f}")
else:
    print("Raiz não encontrada!")
