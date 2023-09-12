import cv2

imagem_cinza3 = cv2.imread('./dados.png', cv2.IMREAD_GRAYSCALE)

contornando, _ = cv2.findContours(imagem_cinza3, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
imagem_original = cv2.imread('./dados.png')
cv2.drawContours(imagem_original, contornando, -1, (0, 255, 0), 10)
cv2.imshow('Contornando', imagem_original)
cv2.waitKey(0)
cv2.destroyAllWindows()