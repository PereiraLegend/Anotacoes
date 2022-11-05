from turtle import width
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
df = pd.read_csv("iris.data")
df.plot.hist("iris.data")
print(df)