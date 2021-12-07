nome = str(input("Informe o nome: "))

if nome == "Ana":
    print("Que nome bonito!")
elif nome == "Pedro" or nome == "Maria" or nome=="Paulo":
    print("Seu nome é bem popular!")
elif nome in "Ana Cláudia Jéssica Juliana":
    print("Belo Nome Feminino")
else:
    print("Seu nome é bem popular")
print("Tenha um bom dia {} !".format(nome))