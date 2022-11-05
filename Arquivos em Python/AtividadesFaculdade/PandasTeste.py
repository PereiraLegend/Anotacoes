import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
plt.close("all")
df = pd.Series(np.random.randn(1000)),pd.DataFrame({"id":[1,2,3,4,5,6], "nota": ["a","b","b","a","a","e"]})
# Convertendo para dados Categóricos
# Aqui ele separa os dados pelas suas categorias
df["AV1"] = df["nota"].astype("category")
print(df["AV1"])

print(df.sort_values(by="AV1"))
df = df.cumsum()
print(df.plot())