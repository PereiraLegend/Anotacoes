# Trabalho RAD em Python AV1

#Remover possivél arquivo txt já criado
"""
import os
if os.path.exists("AtividadesFaculdade/TrabalhoAV1/Arquivo.txt"):
    os.remove("Arquivo.txt")
else:
    print("ESTO NON ECZISTE")
"""
import os

# Aqui eu entro
n = 1

while n == 1:
    print("====================================================================")
    print("|Você deseja criar um novo arquivo ou abrir um já existente?")
    selecionar = int(input("|Para Criar um Arquivo [1] - Para Abrir um Arquivo [2] - Para Alterar um Arquivo [3] - Para Deletar um arquivo [4] - Para sair [5]:"))

    if selecionar == 1:
        print("====================================================================")
        #nomeArquivo = str(input("Informe o nome do arquivo a ser criado: "))
        Arquivo = open(str(input("|Informe o nome do arquivo a ser criado [Obs.: Insira o formato do arquivo ex.: .txt no final]: ")), "w") # Colocar para criar arquivos
        #print(Arquivo.read()
        print("====================================================================")
        print("|--Insira as suas Informações --")

        # Pessoa

        Arquivo.write("-> Cpf: ")
        Cpf = Arquivo.write(str(input("Informe seu cpf: ")) + "\n")

        Arquivo.write("-> Nome: ")
        Nome = Arquivo.write(str(input("Informe o seu nome: ")) + "\n")

        Arquivo.write("-> Sobrenome: ")
        Sobrenome = Arquivo.write(str(input("Informe o seu sobrenome: ")) + "\n")

        Arquivo.write("-> Idade: ")
        Idade = Arquivo.write(str(input("Informe a sua Idade: ")) + "\n")

        Arquivo.write("-> Conta: ")
        Conta = Arquivo.write(str(input("Informe a sua Conta: ")) + "\n")

        # Conta

        Arquivo.write("-> Agência: ")
        Agência = Arquivo.write(str(input("Informe a sua Agência: ")) + "\n")

        Arquivo.write("-> Número: ")
        Número = Arquivo.write(str(input("Informe o seu Número: ")) + "\n")

        Arquivo.write("-> Saldo: ")
        Saldo = Arquivo.write(str(input("Informe o seu Saldo: ")) + "\n")

        Arquivo.write("-> Gerente: ")
        Gerente = Arquivo.write(str(input("Informe o seu Gerente: ")) + "\n")

        Arquivo.write("-> Titular: ")
        Titular = Arquivo.write(str(input("Informe a sua Titular: ")) + "\n")

        Arquivo.close()

    if selecionar == 2:
        print("====================================================================")
        print("|Informe o arquivo a ser Aberto/Editado: ")
        with open(input("|Informe o nome do arquivo a ser aberto [Obs.: Insira o formato do arquivo ex.: .txt no final]: "), "r+") as abrir: # Colocar para criar arquivos
            for Abrir in abrir:
                print(Abrir)

    if selecionar == 3:

        print("====================================================================")
        # nomeArquivo = str(input("Informe o nome do arquivo a ser criado: "))
        Arquivo = open(str(input("|Informe o nome do arquivo a ser alterado [Obs.: Insira o formato do arquivo ex.: .txt no final]: ")),"w")  # Colocar para criar arquivos
        # print(Arquivo.read()

        print("====================================================================")
        print("|--Insira as suas Informações --")

        # Pessoa

        Arquivo.write("-> Cpf: ")
        Cpf = Arquivo.write(str(input("Informe seu cpf: ")) + "\n")

        Arquivo.write("-> Nome: ")
        Nome = Arquivo.write(str(input("Informe o seu nome: ")) + "\n")

        Arquivo.write("-> Sobrenome: ")
        Sobrenome = Arquivo.write(str(input("Informe o seu sobrenome: ")) + "\n")

        Arquivo.write("-> Idade: ")
        Idade = Arquivo.write(str(input("Informe a sua Idade: ")) + "\n")

        Arquivo.write("-> Conta: ")
        Conta = Arquivo.write(str(input("Informe a sua Conta: ")) + "\n")

        # Conta

        Arquivo.write("-> Agência: ")
        Agência = Arquivo.write(str(input("Informe a sua Agência: ")) + "\n")

        Arquivo.write("-> Número: ")
        Número = Arquivo.write(str(input("Informe o seu Número: ")) + "\n")

        Arquivo.write("-> Saldo: ")
        Saldo = Arquivo.write(str(input("Informe o seu Saldo: ")) + "\n")

        Arquivo.write("-> Gerente: ")
        Gerente = Arquivo.write(str(input("Informe o seu Gerente: ")) + "\n")

        Arquivo.write("-> Titular: ")
        Titular = Arquivo.write(str(input("Informe a sua Titular: ")) + "\n")

        Arquivo.close()

    if selecionar == 4:
        print("====================================================================")
        while p == 1:
            try:
                os.remove(str(input("Informe o nome do arquivo para ser deletado: ")))
                print("Seu arquivo foi deletado com Sucesso!")
                p == 1

            except:
                print("O nome foi escrito de forma incorreta! Digite novamente")

    else:
        print("====================================================================")
        n = int(input("|Você deseja voltar ao menu ou  sair? Menu [1] Sair [2]: "))

# banco de dados, procurar função para deletar os arquivos criados e corrigir o erro do loop


# AVVVAAAAA