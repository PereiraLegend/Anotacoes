"""
tempo = int(input("Qual a idade do seu carro? "))
if tempo <= 3:
    print("Carro novo")
else:
    print("Carro Velho")
print("--FIM--")
"""
# Ou posso fazer assim
"""
tempo = int(input("Quantos anos tem seu carro? "))
print("Carro novo" if tempo<=3 else "Carro velho")
print("--FIM--")
"""
# Outro exemplo
"""
nome = str(input("Qaul é o seu nome? "))
if nome == "Lucas" :
    print("Por favor vá para a passagem vip")
print("Bom dia, {}".format(nome))
"""
# Mais um exemplo
n1 = float(input("Digite a primeira nota: "))
n2 = float(input("Digite a segunda nota: "))
m = (n1 + n2)/2
print("A sua média foi {:.1f}".format(m))
if m>=6.0:
    print("A sua media foi boa, parabéns")
else:
    print("A sua média foi ruim, estude mais")