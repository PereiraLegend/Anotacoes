import cv2
import numpy as np

imagem = cv2.imread('./dados.png')

imagem_cinza = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
imagens_ao_lado = np.hstack((imagem, cv2.cvtColor(imagem_cinza, cv2.COLOR_GRAY2BGR)))
cv2.imshow('Imagens', imagens_ao_lado)
cv2.waitKey(0)
cv2.destroyAllWindows()
