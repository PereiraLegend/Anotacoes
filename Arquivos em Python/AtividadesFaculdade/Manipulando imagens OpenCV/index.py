# Aluno: Lucas Pereira

import cv2
import numpy as np

# 1º Questão: Carregar e exibir uma imagem:

imagem = cv2.imread('./dados.png')

cv2.imshow('Imagem', imagem)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 2º Questão: Converter uma imagem para tons de cinza:

imagem = cv2.imread('./dados.png')

imagem_cinza = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
imagens_ao_lado = np.hstack((imagem, cv2.cvtColor(imagem_cinza, cv2.COLOR_GRAY2BGR)))
cv2.imshow('Imagens', imagens_ao_lado)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 3º Questão: Aplicar um filtro de suavização:

imagem = cv2.imread('./dados.png')

imagem_suavizada = cv2.GaussianBlur(imagem, (5, 5), 10)
imagens_ao_lado2 = np.hstack((imagem, imagem_suavizada))
cv2.imshow('Imagem Suavisada', imagens_ao_lado2)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 4º Questão: Detecção de Bordas:

imagem = cv2.imread('./dados.png', cv2.COLOR_GRAY2BGR)

bordas = cv2.Canny(imagem, 100, 200)
cv2.imshow('Deteccao de Bordas', bordas)
cv2.waitKey(0)
cv2.destroyAllWindows()

#5º Questão: Identificar contornos em uma imagem:

imagem_cinza3 = cv2.imread('./dados.png', cv2.IMREAD_GRAYSCALE)

contornando, _ = cv2.findContours(imagem_cinza3, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
imagem_original = cv2.imread('./dados.png')
cv2.drawContours(imagem_original, contornando, -1, (0, 255, 0), 10)
cv2.imshow('Contornando', imagem_original)
cv2.waitKey(0)
cv2.destroyAllWindows()