import cv2

imagem = cv2.imread('./dados.png', cv2.COLOR_GRAY2BGR)

bordas = cv2.Canny(imagem, 100, 200)
cv2.imshow('Deteccao de Bordas', bordas)
cv2.waitKey(0)
cv2.destroyAllWindows()
