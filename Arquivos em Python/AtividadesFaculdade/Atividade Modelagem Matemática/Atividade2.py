def metodoBissecao(num, precisao=1e-6):
    #numero = float(numero)  # Converte a entrada em um número de ponto flutuante

    if num < 0:
        raise ValueError("A raiz quadrada de números negativos não é real.")
    
    if num == 0:
        return 0
    
    # Defina os limites iniciais do intervalo
    a, b = 0, max(num, 1)
    
    while (b - a) > precisao:
        # Encontre o ponto médio do intervalo
        x = (a + b) / 2
        
        # Calcule o valor da função no ponto médio
        f_x = x * x - num
        
        if f_x == 0:
            return x  # Encontramos a raiz exata
        
        if f_x < 0:
            a = x
        else:
            b = x
    
    # Retorne o ponto médio como a raiz aproximada
    return (a + b) / 2

# Exemplo de uso
num = float(input("Informe um número: "))
raiz = metodoBissecao(num)
print(f'A raiz quadrada do número: {num} é {raiz:.2f}')