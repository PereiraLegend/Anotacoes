# Exercicio Prático
import cv2
import numpy as np

# 1º Questão: Carregar e exibir uma imagem
imagem = cv2.imread('./dados.png')

cv2.imshow('Imagem',imagem)
cv2.waitKey(0)
cv2.destroyAllWindows()

#2º Questão: Converter uma imagem para tons de cinza
imagem_cinza = cv2.cvtColor(imagem, cv2.COLOR_BAYER_BG2GRAY)
#imagem_ao_lado = np.hstack((imagem, cv2.ctvColor(imagem_cinza,cv2.COLOR_RGB2GRAY)))
cv2.ctvColor('Cinza', imagem_cinza)
cv2.waitKey(1)