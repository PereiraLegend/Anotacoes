#Detectando Faces apartir de Imagens
import numpy as np
import cv2

frame = cv2.imread("imagens/teste4.jpg")
detectorFaces = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
while True:
    cinza = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = detectorFaces.detectMultiScale(cinza, 1.3, 5)
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
        roi_gray = cinza[y:y + h, x:x + w]
        roi_color = frame[y:y + h, x:x + w]
    cv2.imshow('frame', frame)
    key = cv2.waitKey(1)
    if key == 13:  # Digite "Enter" para Sair
        break
cv2.destroyAllWindows()
