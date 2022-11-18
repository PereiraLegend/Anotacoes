import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

iris_df = pd.read_csv("iris.data")
wine_df = pd.read_csv("wine.data")
accelerometer_df = pd.read_csv("accelerometer.csv")
tetuancity_df = pd.read_csv("Tetuan City power consumption.csv")
pedalmeedges_df = pd.read_csv("pedalme_edges.csv")
"""
# Wine
grafico = np.unique(wine_df['1065'])
atributo_ler = len(wine_df.columns) - 1

atributo0 = np.random.randint(atributo_ler)
atributo1 = np.random.randint(atributo_ler)

while atributo1 == atributo0:
    atributo1 = np.random.randint(atributo_ler)

for x in range(len(grafico)):

    grafico_s = wine_df.loc[wine_df['1065'] == grafico[x]]

    plt.scatter(grafico_s.iloc[:, atributo0], grafico_s.iloc[:, atributo1], marker=".", label=grafico[x])

plt.xlabel(wine_df.columns.values[atributo0])
plt.ylabel(wine_df.columns.values[atributo1])
plt.legend()
plt.show()
"""
# Accelerometer
grafico = np.unique(accelerometer_df['1065'])
atributo_ler = len(accelerometer_df.columns) - 1

atributo0 = np.random.randint(atributo_ler)
atributo1 = np.random.randint(atributo_ler)

while atributo1 == atributo0:
    atributo1 = np.random.randint(atributo_ler)

for x in range(len(grafico)):

    grafico_s = accelerometer_df.loc[accelerometer_df['1065'] == grafico[x]]

    plt.scatter(grafico_s.iloc[:, atributo0], grafico_s.iloc[:, atributo1], marker=".", label=grafico[x])

plt.xlabel(accelerometer_df.columns.values[atributo0])
plt.ylabel(accelerometer_df.columns.values[atributo1])
plt.legend()
plt.show()