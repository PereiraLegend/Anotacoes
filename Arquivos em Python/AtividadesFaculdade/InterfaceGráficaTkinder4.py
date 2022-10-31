import tkinter as tk

janela = tk.Tk()
janela.title("Checkbox das  parada")
janela.geometry('300x120+800+300') # Setando o tammanho da janela

def escolha_carreira():
    print(f"Gerencial: {var1.get()}\n Técnica: {var2.get()}")

tk.Label(janela, text="Escolha a sua vocaçãao").grid(row = 0, sticky = tk.W)

var1 = tk.IntVar()
var2 = tk.IntVar()

tk.Checkbutton(janela, text = "Gerencial", variable= var1).grid(row=1, sticky=tk.W)
tk.Checkbutton(janela, text = "Técnica", variable = var2).grid(row=2, sticky=tk.W)

def novaJanela():
    newWindow= tk.Tk()
    newWindow.title("NovaJanela")
    newWindow.geometry('300x120+800+300')


tk.Button(janela, text="Sair", command=janela.quit).grid(row=3, sticky=tk.W, pady=4)
tk.Button(janela, text="Mostrar", command=escolha_carreira).grid(row=3, sticky=tk.E, pady=4)
tk.Button(janela, text="Abrir Janela", command=novaJanela()).grid(row=3, sticky=tk.E, pady=4)


janela.mainloop()