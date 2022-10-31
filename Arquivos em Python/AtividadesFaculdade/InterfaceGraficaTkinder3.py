import tkinter as tk
janela = tk.Tk()

v = tk.IntVar()
tk.Label(janela, text="Escolha uma linguagem de programação", justify=tk.LEFT,padx=20).pack()
tk.Radiobutton(janela, text="Python", padx=25, variable=v,value=1).pack(anchor=tk.W)
tk.Radiobutton(janela, text="Java", padx=25, variable = v, value= 2).pack(anchor=tk.W)
tk.Radiobutton(janela, text="C#", padx=25, variable=v, value=3).pack(anchor=tk.W)
tk.Radiobutton(janela, text="Julia", padx=25, variable=v, value=4).pack(anchor=tk.W)

def Mostrar_Valores():
    print("O valor é: %s"% valor.get())
valor = tk.Entry(janela)
tk.Button(janela, text="Exibir dados", command=Mostrar_Valores()).pack()
tk.Button(janela, text = "Sair", command=janela.quit).pack()
janela.mainloop()