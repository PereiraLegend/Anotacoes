#No tkinter dá para inserir barras de textos, de mensagens, etc
"""
import tkinter as tk
janela = tk.Tk()
janela.title("Teste em Textos")
janela.geometry('300x120+800+300')

mensagemParaUsuario = "Teste de Mensagem"
msg = tk.Message(janela, text = mensagemParaUsuario)
msg.config(bg='lightgreen', font=('times', 24, 'italic'))#.grid(row=0,sticky=tk.W)

tk.Label(janela, text="Inserindo e editando textos na interface")#.grid(row=1, sticky=tk.W)
T = tk.Text(janela, height = 2, width=30)#.grid(row = 2, sticky=tk.W)# Aqui cria uma barra de texto para a escrita, É editável para o usuário
T.pack()
T.insert(tk.END, "Este é um texto\n Esto Nom Ecziste!") #Aqui insere valores na barra de texto para a escrita ccriada
tk.mainloop()
"""
# Mensagens de erro para o usuário:

import tkinter as tk
from tkinter import messagebox as mb
def resposta():
    mb.showerror("Resposta", "Desculpe, nenhuma resposta disponível!")
def verificacao():
    if mb.askyesno('Verificar', 'Realmente quer sair?'):
        mb.showwarning('Yes', 'Ainda não foi implementado')
    else:
        mb.showinfo('No', 'A opção de Sair foi cancelada')
tk.Button(text='Sair', command=verificacao).pack(fill=tk.X)
tk.Button(text='Resposta', command=resposta).pack(fill=tk.X)

tk.mainloop()