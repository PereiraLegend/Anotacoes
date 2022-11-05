import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
plt.close("all")
serie_temporal = pd.Series(np.random.randn(1000), index = pd.date_range("28/10/2022", periods=1000))
serie_temporal = serie_temporal.cumsum()

serie_temporal.plot()
