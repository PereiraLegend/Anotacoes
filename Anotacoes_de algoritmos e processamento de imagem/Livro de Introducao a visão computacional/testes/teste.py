import tkinter as tk
import numpy as np
import cv2
import time

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
    
def detectorObj():
    net = cv2.dnn.readNet("yolov4-tiny.cfg", "yolov4-tiny.weights")
    classes = []
    with open("./coco.names", "r") as f:
        classes = f.read().strip().split('\n')
    cam = cv2.VideoCapture(0)  # 0 para a câmera padrão, pode ser alterado para outras câmeras

    while True:
        ret, frame = cam.read()
        if not ret:
            break
        height, width, _ = frame.shape

        # Pré-processamento da imagem
        proIm = cv2.dnn.blobFromImage(frame, 1/255.0, (416, 416), swapRB=True, crop=False)
        net.setInput(proIm)

        # Detecção de objetos
        detectaObj = net.getUnconnectedOutLayersNames()
        outs = net.forward(detectaObj)

        # Listas para armazenar informações sobre detecções
        class_ids = []
        confidences = []
        boxes = []

        # Processando as detecções
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.5:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)

                    # Coordenadas do retângulo
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)

                    class_ids.append(class_id)
                    confidences.append(float(confidence))
                    boxes.append([x, y, w, h])

        indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
        for i in range(len(boxes)):
            if i in indices:
                x, y, w, h = boxes[i]
                label = str(classes[class_ids[i]])
                confidence = confidences[i]
                color = (0, 255, 0)
                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.putText(frame, f'{label} {confidence:.2f}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
        cv2.imshow("YOLO Object Detection", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
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

botao3 = tk.Button(janela, text="Detector De Faces e Objetos (Yolo)", command=detectorObj)
botao3.pack(pady=5)

label = tk.Label(janela, text="Observação: Para fechar as janelas dos detectores\n digite 'ENTER'", fg="red")
label.pack()

janela.mainloop()
