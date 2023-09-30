# Algoritmo Insert - Sort
def algoritmoIn(lista):
    tamlista = len(lista)
    for x in range(1, tamlista): # C1 
        ord = lista[x] 
        y = x - 1
        while y >= 0 and ord < lista[y]: #C2
            lista[y + 1] = lista[y]
            y = y - 1
        lista[y + 1] = ord
lista = [46, 3, 100, 23, 20, 37, 8, 62]
print("Lista Não Ordenada: ", lista)
algoritmoIn(lista)
print("Lista Ordenada: ", lista)
