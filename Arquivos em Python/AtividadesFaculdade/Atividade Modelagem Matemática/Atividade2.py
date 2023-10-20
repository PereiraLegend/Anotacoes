def metodoBissecao(num, precisao=1e-6):
    if num < 0:
        raise ValueError("A raiz quadrada de números negativos não é real.")
    
    if num == 0:
        return 0
    
    if precisao <= 0:
        raise ValueError("A precisão deve ser um valor positivo.")
    
    a, b = 0, max(num, 1)
    
    while (b - a) > precisao:
        x = (a + b) / 2
        f_x = x * x - num
        
        if abs(f_x) < precisao:
            return x
        
        if f_x < 0:
            a = x
        else:
            b = x
    
    return (a + b) / 2

# Exemplo de uso
num = float(input("Informe um número: "))
raiz = metodoBissecao(num)
print(f'A raiz quadrada do número: {num} é {raiz:.2f}')
