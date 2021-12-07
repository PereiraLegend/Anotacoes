
try: # tentar
    a = int(input('Numerador: '))
    b = int(input('Denominador:'))
    r = a / b
# Esse exception de baixo serve para erros globais
except Exception as erro: # se der problema
    print(f'Infelizmente tivemos um problema :( foi {erro.__class__}')
    # também posso ter quantas except eu quiser

# Para erros especificos:
except (ValueError, TypeError):
    print('Tivemos um problema com os tipos de dados que você digitou.')
except ZeroDivisionError:
    print('Não é possivél dividir um número por zero!')
except KeyboardInterrupt:
    print('O usuário preferiu não informar os dados!')
else: # se não der problema
    print(f'O resultado é {r:.1f}')
finally: # Acontece independente se deu certo ou errado
    print('Volte sempre! Muito obrigado!')