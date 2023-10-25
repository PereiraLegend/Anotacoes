import tkinter as tk
import numpy as np
import cv2

def botao_clicado():
    label.config(text="Botão Clicado!")
    
def detectorImgs():
    
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
        if key == 13 or cv2.getWindowProperty('frame', cv2.WND_PROP_VISIBLE) < 1:  # Digite "Enter" para Sair
            break
    cv2.destroyAllWindows()

def detectorCam():
    cam = cv2.VideoCapture(0)
    detectorFaces = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    while(True):
        _, frame = cam.read()
        cinza = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detectorFaces.detectMultiScale(cinza, 1.3, 5)
        for (x,y,w,h) in faces:
            cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),2)
            roi_gray = cinza[y:y+h, x:x+w]
            roi_color = frame[y:y+h, x:x+w]
        cv2.imshow('frame',frame)
        key = cv2.waitKey(1)
        if key == 13 or cv2.getWindowProperty('frame', cv2.WND_PROP_VISIBLE) < 1: # Digite "Enter" para Sair
            break
    cam.release()
    cv2.destroyAllWindows()

janela = tk.Tk()
janela.title("Detector De Imagens e Objetos")
janela.geometry("400x400")

# Criar um rótulo (label) na janela
label = tk.Label(janela, text="\nTrabalho OpenCv ", font=40)
label.pack(pady=5)

botao1 = tk.Button(janela, text="Detector De Faces Em Imagens", command=detectorImgs)
botao1.pack(pady=5)

botao2 = tk.Button(janela, text="Detector De Faces Em Realtime", command=detectorCam)
botao2.pack(pady=5)

botao3 = tk.Button(janela, text="Detector De Faces e Objetos (Yolo)", command=botao_clicado)
botao3.pack(pady=5)

label = tk.Label(janela, text="Observação: Para fechar as janelas dos detectores\n digite 'ENTER'", fg="red")
label.pack()

janela.mainloop()
