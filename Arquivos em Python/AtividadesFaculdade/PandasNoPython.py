import numpy as np
import pandas as pd

# Lista:
s = pd.Series([1,3,4,5,np.nan,7,8])
print(s,"\n\n")

# Aqui ele organiza e trata as datas:
dates = pd.date_range("20221021", periods=6)
print(dates,"\n\n")

# Utilizando data frame para retornar um número aleatório em uma forma de lista:
df = pd.DataFrame(np.random.randn(6,4), index = dates, columns=list("ABCD")) # eu digo no random que eu vou ter 6 linhas e quatro colunas, no list eu nomeio as colunas chmando as datas
print(df,"\n\n")

# Brincando com data frame:
df2 = pd.DataFrame(
    {
        "A": 1.0,
        "B": pd.Timestamp("20221021"),
        "C": pd.Series(1,index=list(range(5)), dtype="float32"),
        "D": np.array([3]*5,dtype="int32"),
        "E": pd.Categorical(["terde", "teste", "tiste", "triste", "feliz"]),
        "F": "oloko",
    }
)
print(df2,"\n\n")

# Verificando os tipos de dados em cada coluna:
print(df2.dtypes,"\n\n")

# Verificando os dados:
print(df.head(3)) # Dentro do read defino quais das primeiras linhas eu vou mosytrar
print(df.tail(3)) # Dentro do tail defino quais das ultimas três linhas eu vou mostrar
print("\n\n")

# Imprimindo indices pou colunas:
print(df.index)
print(df.columns)
print("\n\n")

# Para ter um sumário estatistico dos dados:
print(df.describe())
print(df2.describe())
print("\n\n")

#Fazendo uma transposição de matrizes:
print(df.T)
print("\n\n")

#Fazendo uma ordenação:
print(df.sort_index(axis=1,ascending=False))# Vai fazer a ordenação de linhas de cima para baixo
print(df.sort_values(by="B")) # Ordenando por uma coluna, no caso pela coluna B ele irá ordenar e colocar
print("\n\n")

# Ver mais informações no github Evandro, ainda há a metade para anotar
#a