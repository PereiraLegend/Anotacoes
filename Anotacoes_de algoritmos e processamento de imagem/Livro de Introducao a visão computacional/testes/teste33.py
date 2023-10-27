import tkinter as tk
from tkinter import filedialog

def abrir_explorador_arquivos():
    file_path = filedialog.askopenfilename()
    if file_path:
        print(f"Arquivo selecionado: {file_path}")

# Criar uma instância da classe Tkinter
janela = tk.Tk()
janela.title("Abrir Explorador de Arquivos")

# Botão para abrir o explorador de arquivos
botao_abrir = tk.Button(janela, text="Abrir Explorador de Arquivos", command=abrir_explorador_arquivos)
botao_abrir.pack()

# Iniciar a interface gráfica (loop principal)
janela.mainloop()
