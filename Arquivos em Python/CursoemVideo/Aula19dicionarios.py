# Dicionários podem ser declarados como dict() ou {}
pessoas = {"Nome":"Gustavo","Sexo":"M","Idade":22}
print(pessoas)
#print(pessoas[0]) # Esse comando dará erro, pois o indice zero não existe
print(pessoas["Nome"])# Mostra o nome
print(pessoas["Sexo"])# Mostra o sexo
print(f'O {pessoas["Nome"]} tem {pessoas["Idade"]} anos.') # Preste atenção no referenciamento, a relação entre aspas simples e duplas
print(pessoas.keys())# Mostra as chaves/indices do dicionário
print(pessoas.values())# Mostra os valores dentro dos indices/chaves
print(pessoas.items())# Mostra os valores e os indices/keys
print("-"*20)
# Também posso acessar as chaves, os valores e os itens por laços
for k in pessoas.keys():
    print(k)
print("-"*20)
for k in pessoas.values():
    print(k)
print("-"*20)
# No items posso fazer de duas formmas:
for k in pessoas.items():
    print(k)
print("-"*20)
# E assim:
for k, v in pessoas.items(): # No caso nos dicionários não existe o enumerate, e por isso temos de usar o .items()
    print(f"{k} = {v}")
print("-"*20)
# Outras funções:
veiculo = {"Modelo":"Fiat","Cor":"Prata","Placa":999999}
# Aqui eu peguei e mostrei os dados do veiculo
for k, v in veiculo.items():
    print(f"{k} = {v}")
print("-"*20)
#
# Para deletar um dado utilizamos:
del veiculo['Placa']
for k, v in veiculo.items():
    print(f"{k} = {v}")
print("-"*20)
#
# Para alterar um dado utilizamos:
veiculo["Cor"] = "Azul"
for k,v in veiculo.items():
    print(f"{k} = {v}")
print("-"*20)
#
# Posso também adicionar um elemento:
veiculo["Kilometragem"] = 1000
for k,v in veiculo.items():
    print(f"{k} = {v}")
print("-"*20)
# Agora vou criar um dicionário dentro de uma lista
Brasil = [] # aqui eu criei uma lista
Estado1 = {"Uf":"Rio de Janeiro","Sigla":"RJ"}
Estado2 = {"Uf":"São Paulo","Sigla":"SP"}
Brasil.append(Estado1)
Brasil.append(Estado2)
print(Brasil) # Mostra tudo o que está dentro da lista
print(Brasil[0]) # Mostra apenas o item zero da lista
print(Brasil[1]) # Mostra apenas o itme um da lista
print(Brasil[0]["Uf"]) # Mostra apenas o que está dentro do item Uf na lista 0
print(Brasil[1]["Sigla"]) # Mostra apenas o que está dentro da sigla na lista 1
print("-"*20)

# Indo para o outro lado dos dicionários

usuario = dict()
Iduser = list()
for c in range(0, 3):
    usuario["Nome"] = str(input("Nome Usuário: "))
    usuario["Idade"] = str(input("Idade dele: "))
    #Para armazenar o valor e fazer um especie de ligação entre o dicionário e a lista
    Iduser.append(usuario.copy())# No dicionário para fazer uma copia é necessário o uso do método .copy()  onde diferente de lista que usa [:] para fazer uma cópia, o dicionário tem seu método próprio
print(Iduser)
# Para deixar o de cima de um jeito "Bonito"
print("-"*20)
for e in Iduser:
    print(e)
print("-"*20)
for e in Iduser:
    for k,v in e.items():
        print(f"O campo {k} tem valor {v}.")
print("-"*20)
for e in Iduser:
    for v in e.values():
        print(v)