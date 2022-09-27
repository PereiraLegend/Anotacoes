# Trabalho RAD em Python AV1

#Remover possivél arquivo txt já criado
import os
if os.path.exists("AtividadesFaculdade/TrabalhoAV1/Arquivo.txt"):
    os.remove("Arquivo.txt")
else:
    print("ESTO NON ECZISTE")

Arquivo = open("Arquivo.txt", "w")
#print(Arquivo.read())

print("Insira as suas Informações:")
Arquivo.write(input("Informe seu cpf:"))
Arquivo.write(input("Informe o seu nome:"))
Arquivo.write(input("Informe o seu sobrenome:"))
Arquivo.write(input("Informe a sua Idade:"))
Arquivo.write(input("Informe a sua Conta:"))


Arquivo.close()