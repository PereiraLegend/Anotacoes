# Trabalho RAD em Python AV1

#Remover possivél arquivo txt já criado
"""
import os
if os.path.exists("AtividadesFaculdade/TrabalhoAV1/Arquivo.txt"):
    os.remove("Arquivo.txt")
else:
    print("ESTO NON ECZISTE")
"""
Arquivo = open("Arquivo.txt", "w") # Colocar para criar arquivos
#print(Arquivo.read())


print("Insira as suas Informações:")

Arquivo.write(input("Informe seu cpf:"))
Arquivo.write(",")
Arquivo.write(input("Informe o seu nome:"))
Arquivo.write(",")
Arquivo.write(input("Informe o seu sobrenome:"))
Arquivo.write(",")
Arquivo.write(input("Informe a sua Idade:"))
Arquivo.write(",")
Arquivo.write(input("Informe a sua Conta:"))
Arquivo.write(",")


Arquivo.close()

# Plano : Tirar o que exclui o ultimo arquivo, colocar tudo o que pergunta em loop com comando para sair do loop e
# encerrar o código, depois perguntar se quer abrir o arquivo gerado