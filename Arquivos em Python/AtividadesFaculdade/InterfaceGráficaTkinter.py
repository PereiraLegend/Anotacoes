import tkinter
from tkinter import *
janela = tkinter.Tk() # Criando a janela principal
janela.title("Teste") # Titulo da janela
janela.resizable(True, True) # Serve para fazer o redimensionamento ou não da altura e da largura
janela.minsize(600, 600) # Define um tamanho minimo na hora que a janela abrir
# Adicionando caixa de texto:

#tkinter.Label(janela, text="Testando 1 2 3")#.grid(column=0, row=0) # Por padrão ele sempre começa do zero
#tkinter.Label(janela, text = " Teste 3 2 1")#.grid(column= 10, row = 30)

# Inportando botão:

def contador_lbl(lblRotulo):
    def contar():
        global contador
        contador += 1 # Aqui ele vai ficar contando a cada milissegundos
        lblRotulo.config(text = str(contador)) # Aqui eu defino esse valor para uma string, eu literalmente o converto
        lblRotulo.after(1, contar)
    contar()

lblRotulo = tkinter.Label(janela,fg="green")
lblRotulo.pack()
#contador_lbl(contador_lbl)

botao = tkinter.Button(janela, text = "Aperte aqui",width =50, command=janela.destroy)
botao.pack()

janela.mainloop()

# Adicionando widgets
