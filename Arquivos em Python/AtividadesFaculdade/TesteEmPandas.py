import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

dados = pd.read_csv("winequality-red.csv", sep=';')

"""
A última coluna se refere à classe. Observando os dados é possível ver que as classes são representadas por números
inteiros. Para saber quais são os valores possíveis e únicos, está sendo utilizado o método 'unique' do numpy. Esse
método é aplicado sobre a última coluna, cujo nome é 'quality'.
"""
classes = np.unique(dados['quality'])

# Pegando a quantidade de atributos. O -1 é para retirar o atributo que na verdade é a classe.
num_attr = len(dados.columns) - 1

attr1 = np.random.randint(num_attr)
attr2 = np.random.randint(num_attr)
# Caso o segundo seja igual ao primeiro
while attr2 == attr1:
    attr2 = np.random.randint(num_attr)

# Gerando um plot para cada classe
for i in range(len(classes)):
    # Pegando todas as observações da mesma classe.
    classe = dados.loc[dados['quality']==classes[i]]

    """
    Para ver outros marcadores possíveis: documentação ou tutoriais online: 
    https://www.geeksforgeeks.org/matplotlib-markers-module-in-python/
    Na código abaixo estou selecionando todas as linhas da coluna 'attr1' para o eixo x, e todas as linhas da coluna
    'attr2' como eixo y. O marcador está configurado para ser um ponto, e os rótulos serão os valores das classes.
    """
    plt.scatter(classe.iloc[:, attr1], classe.iloc[:, attr2], marker=".", label=classes[i])

# Configurando para aparecer o attr1 no eixo x, e o attr2 no eixo y
plt.xlabel(dados.columns.values[attr1])
plt.ylabel(dados.columns.values[attr2])
# Para aparecer a legenda. Neste caso será o mapeamento de cada classe para cada cor
plt.legend()
plt.show()