arquivo = open('testando.txt', 'r') #abre o arquivo
for linha in arquivo:
    codigo = str(linha[7:len()])

    if codigo == 'BANANA':
       print("ACHOU, CODIGO: " + codigo)
       encontrado = True
    else:
       print("NÃO ACHOU, CÓDIGO: " + codigo)
       encontrado = False

    if encontrado:
        new_line = linha[:16] + "22" + linha[17:] #como python utiliza string imutáveis, estou apenas remontando ela
        print(new_line)
        linha = linha.replace(linha, new_line) #substituo a linha antiga pela nova, com a nova informacao
        arquivo = open('testando.txt','w')
        arquivo.write(linha) #adiciono minha nova linha no arquivo

    print(linha)

arquivo.close()