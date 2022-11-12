# Parte feita por Lucas Pereira Dos Santos
import pandas as pd
import numpy as np
import matplotlib as plt
import plotly.express as px

# Tirando informações de média e moda do iris.data
"""
 Obs.: Mantive o iris data na sua forma original, logo o pandas o lê como coluna 1 = 5.1,
 coluna 2 = 3.5, coluna 3 = 1.4, coluna 4= 0.2, ele os associa como seus respectivos nomes
"""

iris_df = pd.read_csv("iris.data")
wine_df = pd.read_csv("wine.data")

print("#############################################################################################################")
print("#############################################################################################################")
print("USANDO O IRIS DATA")
print("#############################################################################################################")
print("#############################################################################################################")

print("Obs.: Mantive o iris data na sua forma original, logo o pandas o lê como coluna 1 = 5.1, coluna 2 = 3.5, coluna 3 = 1.4, coluna 4= 0.2, ele os associa como seus respectivos nomes")
print("========================================================================")
print("TIPOS DE DADOS DO DATAFRAME:")
print("========================================================================")
print(iris_df.dtypes)

print("========================================================================")
print("TIPOS DE DADOS DE CADA COLUNA:")
print("========================================================================")
print(iris_df.info())

print("========================================================================")
print("DADOS BRUTOS")
print("========================================================================")
print(iris_df)

print("========================================================================")
print("ORDENANDO DE FORMA ASCENDENTE CADA UMA DAS COLUNAS:")
print("========================================================================")
print("COLUNA 1:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('5.1'))
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('3.5'))
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('1.4'))
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('0.2'))

print("========================================================================")
print("ORDENANDO DE FORMA DECRESCENTE CADA UMA DAS COLUNAS:")
print("========================================================================")
print("COLUNA 1:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('5.1', ascending = False))
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('3.5', ascending = False))
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('1.4', ascending = False))
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("------------------------------------------------------------------------")
print(iris_df.sort_values('0.2', ascending = False))

print("========================================================================")
print("DESCRIÇÃO:")
print("========================================================================")
print(iris_df.describe())

print("========================================================================")
print("MÉDIA:")
print("========================================================================")
print(iris_df[["5.1","3.5","1.4","0.2"]].mean()) # Tirando a média

print("========================================================================")
print("VALORES ABAIXO DA MÉDIA EM CADA COLUNA:")
print("========================================================================")
print("COLUNA 1:")
print("MÉDIA:",iris_df[["5.1"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["5.1"]] < iris_df[["5.1"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("MÉDIA:",iris_df[["3.5"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["3.5"]] < iris_df[["3.5"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("MÉDIA:",iris_df[["1.4"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["1.4"]] < iris_df[["1.4"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("MÉDIA:",iris_df[["0.2"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["0.2"]] < iris_df[["0.2"]].mean())

print("========================================================================")
print("VALORES ACIMA DA MÉDIA EM CADA COLUNA:")
print("========================================================================")
print("COLUNA 1:")
print("MÉDIA:",iris_df[["5.1"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["5.1"]] > iris_df[["5.1"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("MÉDIA:",iris_df[["3.5"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["3.5"]] > iris_df[["3.5"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("MÉDIA:",iris_df[["1.4"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["1.4"]] > iris_df[["1.4"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("MÉDIA:",iris_df[["0.2"]].mean())
print("------------------------------------------------------------------------")
print(iris_df[["0.2"]] > iris_df[["0.2"]].mean())

print("========================================================================")
print("MODA:")
print("========================================================================")
print(iris_df.mode()) # Tirando a moda (amostral) [["5.1","3.5","1.4","0.2"]]
print("========================================================================")
print("========================================================================")
print("========================================================================")
# Criando os Gráficos:

iris_dfG = px.data.iris()

grf = px.scatter(iris_dfG, x='sepal_width', y='sepal_length', color='species', symbol='species')

grf.show()

print("#############################################################################################################")
print("#############################################################################################################")
print("USANDO O WINE DATA")
print("#############################################################################################################")
print("#############################################################################################################")

print("Obs.: Mantive o iris data na sua forma original, logo o pandas o lê como coluna 1 = 5.1, coluna 2 = 3.5, coluna 3 = 1.4, coluna 4= 0.2, ele os associa como seus respectivos nomes")
print("========================================================================")
print("TIPOS DE DADOS DO DATAFRAME:")
print("========================================================================")
print(wine_df.dtypes)

print("========================================================================")
print("TIPOS DE DADOS DE CADA COLUNA:")
print("========================================================================")
print(wine_df.info())

print("========================================================================")
print("DADOS BRUTOS")
print("========================================================================")
print(wine_df)

print("========================================================================")
print("ORDENANDO DE FORMA ASCENDENTE CADA UMA DAS COLUNAS:")
print("========================================================================")
print("COLUNA 1:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1'))
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('14.23'))
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1.71'))
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.43'))
print("------------------------------------------------------------------------")
print("COLUNA 5:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('15.6'))
print("------------------------------------------------------------------------")
print("COLUNA 6:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('127'))
print("------------------------------------------------------------------------")
print("COLUNA 7:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.8'))
print("------------------------------------------------------------------------")
print("COLUNA 8:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('3.06'))
print("------------------------------------------------------------------------")
print("COLUNA 9:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('.28'))
print("------------------------------------------------------------------------")
print("COLUNA 10:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.29'))
print("------------------------------------------------------------------------")
print("COLUNA 11:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('5.64'))
print("------------------------------------------------------------------------")
print("COLUNA 12:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1.04'))
print("------------------------------------------------------------------------")
print("COLUNA 13:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('3.92'))
print("------------------------------------------------------------------------")
print("COLUNA 14:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1065'))


print("========================================================================")
print("ORDENANDO DE FORMA DECRESCENTE CADA UMA DAS COLUNAS:")
print("========================================================================")
print("COLUNA 1:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('14.23', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1.71', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.43', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 5:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('15.6', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 6:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('127', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 7:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.8', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 8:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('3.06', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 9:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('.28', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 10:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('2.29', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 11:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('5.64', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 12:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1.04', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 13:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('3.92', ascending= False))
print("------------------------------------------------------------------------")
print("COLUNA 14:")
print("------------------------------------------------------------------------")
print(wine_df.sort_values('1065', ascending= False))

print("========================================================================")
print("DESCRIÇÃO:")
print("========================================================================")
print(wine_df.describe())

print("========================================================================")
print("MÉDIA:")
print("========================================================================")
print(wine_df[["1","14.23",'1.71','2.43','15.6','127','2.8','3.06','.28','2.29','5.64','1.04','3.92','1065']].mean()) # Tirando a média

print("========================================================================")
print("VALORES ABAIXO DA MÉDIA EM CADA COLUNA:")
print("========================================================================")
print("COLUNA 1:")
print("MÉDIA:",wine_df[["1"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1"]] < wine_df[["1"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("MÉDIA:",wine_df[["14.23"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["14.23"]] < wine_df[["14.23"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("MÉDIA:",wine_df[["1.71"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1.71"]] < wine_df[["1.71"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("MÉDIA:",wine_df[["2.43"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.43"]] < wine_df[["2.43"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 5:")
print("MÉDIA:",wine_df[["15.6"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["15.6"]] < wine_df[["15.6"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 6:")
print("MÉDIA:",wine_df[["127"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["127"]] < wine_df[["127"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 7:")
print("MÉDIA:",wine_df[["2.8"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.8"]] < wine_df[["2.8"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 8:")
print("MÉDIA:",wine_df[["3.06"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["3.06"]] < wine_df[["3.06"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 9:")
print("MÉDIA:",wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[[".28"]] < wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 10:")
print("MÉDIA:",wine_df[["2.29"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.29"]] < wine_df[["2.29"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 11:")
print("MÉDIA:",wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[[".28"]] < wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 12:")
print("MÉDIA:",wine_df[["5.64"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["5.64"]] < wine_df[["5.64"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 13:")
print("MÉDIA:",wine_df[["1.04"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1.04"]] < wine_df[["1.04"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 14:")
print("MÉDIA:",wine_df[["3.92"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["3.92"]] < wine_df[["3.92"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 15:")
print("MÉDIA:",wine_df[["1065"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1065"]] < wine_df[["1065"]].mean())
print("------------------------------------------------------------------------")




print("========================================================================")
print("VALORES ACIMA DA MÉDIA EM CADA COLUNA:")
print("========================================================================")
print("COLUNA 1:")
print("MÉDIA:",wine_df[["1"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1"]] > wine_df[["1"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 2:")
print("MÉDIA:",wine_df[["14.23"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["14.23"]] > wine_df[["14.23"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 3:")
print("MÉDIA:",wine_df[["1.71"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1.71"]] > wine_df[["1.71"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 4:")
print("MÉDIA:",wine_df[["2.43"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.43"]] > wine_df[["2.43"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 5:")
print("MÉDIA:",wine_df[["15.6"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["15.6"]] > wine_df[["15.6"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 6:")
print("MÉDIA:",wine_df[["127"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["127"]] > wine_df[["127"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 7:")
print("MÉDIA:",wine_df[["2.8"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.8"]] > wine_df[["2.8"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 8:")
print("MÉDIA:",wine_df[["3.06"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["3.06"]] > wine_df[["3.06"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 9:")
print("MÉDIA:",wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[[".28"]] > wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 10:")
print("MÉDIA:",wine_df[["2.29"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["2.29"]] > wine_df[["2.29"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 11:")
print("MÉDIA:",wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[[".28"]] > wine_df[[".28"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 12:")
print("MÉDIA:",wine_df[["5.64"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["5.64"]] > wine_df[["5.64"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 13:")
print("MÉDIA:",wine_df[["1.04"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1.04"]] > wine_df[["1.04"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 14:")
print("MÉDIA:",wine_df[["3.92"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["3.92"]] > wine_df[["3.92"]].mean())
print("------------------------------------------------------------------------")
print("COLUNA 15:")
print("MÉDIA:",wine_df[["1065"]].mean())
print("------------------------------------------------------------------------")
print(wine_df[["1065"]] > wine_df[["1065"]].mean())
print("------------------------------------------------------------------------")

print("========================================================================")
print("MODA:")
print("========================================================================")
print(wine_df.mode()) # Tirando a moda (amostral)
print("========================================================================")
print("========================================================================")
print("========================================================================")
# Criando os Gráficos:

wine_dfG = px.data.wine()

grf = px.scatter(wine_dfG, x='sepal_width', y='sepal_length', color='species', symbol='species')

grf.show()