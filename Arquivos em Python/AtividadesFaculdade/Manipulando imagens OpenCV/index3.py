import cv2
import numpy as np

imagem = cv2.imread('./dados.png')

imagem_suavizada = cv2.GaussianBlur(imagem, (5, 5), 10)
imagens_ao_lado2 = np.hstack((imagem, imagem_suavizada))
cv2.imshow('Imagem Suavisada', imagens_ao_lado2)
cv2.waitKey(0)
cv2.destroyAllWindows()

