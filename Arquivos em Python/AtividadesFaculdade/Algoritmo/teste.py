def algoritmoIn(lista):
    tamlista = len(lista)
    for x in range(1, tamlista): 
        ord = lista[x] 
        y = x - 1
        while y >= 0 and ord < lista[y]:
            lista[y + 1] = lista[y]
            y = y - 1
        lista[y + 1] = ord
lista = [12, 11, 13, 5, 6]
print("Lista Não Ordenada", lista)
algoritmoIn(lista)
print("Lista Ordenada:", lista)
