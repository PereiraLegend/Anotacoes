import tkinter as tk
import os
import tkinter.messagebox


#Criando Janela Menu
janelamenu = tk.Tk()
janelamenu.title("Menu")
janelamenu.geometry('300x270+800+300')
janelamenu.minsize(300,270)
janelamenu.maxsize(300,270)

def criarArquivo():
    def btnStitulo(): # Função Criar Arquivo
        print(NomeArquivo.get())
        open(str(NomeArquivo.get()),"w")

    def inserindoDados(): # Função Inserir Dados
        def aprentarDados(): # Função apresentar dados escritos para o usuário
            # Criando Janela Apresentar
            janelaapresentar = tk.Toplevel()
            janelaapresentar.title("Dados Salvos")
            janelaapresentar.geometry('300x270+800+300')
            janelaapresentar.minsize(300, 270)
            janelaapresentar.maxsize(300, 270)

            # Abrindo Arquivo
            Arquivo = NomeArquivo.get()
            with open(Arquivo, 'r+', encoding="utf-8") as Ler:
                Linha = Ler.readlines()
                print(Linha[0])
                print(Linha[1])
                print(Linha[2])
                print(Linha[3])
                print(Linha[4])
                print(Linha[5])
                print(Linha[6])
                print(Linha[7])
                print(Linha[8])
                print(Linha[9])

            # Parte para Apresentação ao usuário
            A = tk.Label(janelaapresentar,text="Os dados foram salvos como:")
            A.grid(row=0,column=0)
            B = tk.Label(janelaapresentar, text="-------------")
            B.grid(row=0, column=1)
            C = tk.Label(janelaapresentar, text="Dados Inseridos:")
            C.grid(row=3, column=0)
            D = tk.Label(janelaapresentar, text="-------------")
            D.grid(row=4, column=0)
            E = tk.Label(janelaapresentar, text="-------------")
            E.grid(row=5, column=0)
            F = tk.Label(janelaapresentar, text="-------------")
            F.grid(row=6, column=0)
            G = tk.Label(janelaapresentar, text="-------------")
            G.grid(row=7, column=0)
            H = tk.Label(janelaapresentar, text="-------------")
            H.grid(row=8, column=0)
            I = tk.Label(janelaapresentar, text="-------------")
            I.grid(row=9, column=0)
            J = tk.Label(janelaapresentar, text="-------------")
            J.grid(row=10, column=0)
            K = tk.Label(janelaapresentar, text="-------------")
            K.grid(row=11, column=0)
            L = tk.Label(janelaapresentar, text="-------------")
            L.grid(row=12, column=0)
            M = tk.Label(janelaapresentar, text="-------------")
            M.grid(row=13, column=0)

            B["text"] = NomeArquivo.get()
            D["text"] = Linha[0].rstrip("\n")
            E["text"] = Linha[1].rstrip("\n")
            F["text"] = Linha[2].rstrip("\n")
            G["text"] = Linha[3].rstrip("\n")
            H["text"] = Linha[4].rstrip("\n")
            I["text"] = Linha[5].rstrip("\n")
            J["text"] = Linha[6].rstrip("\n")
            K["text"] = Linha[7].rstrip("\n")
            L["text"] = Linha[8].rstrip("\n")
            M["text"] = Linha[9].rstrip("\n")

            tk.Button(janelaapresentar, text="Voltar o menu", command=lambda:[janelaapresentar.destroy(),janelacriar.destroy(),janelainserir.destroy()]).grid(row=13, column=1)


        def btnSdados(): # Função salvar dados no arquivo txt criado
            print(f"{cpf_bd.get()}\n{nome_bd.get()}\n{sobrenome_bd.get()}\n{idade_bd.get()}\n{conta_bd.get()}\n{agencia_bd.get()}\n{numero_bd.get()}\n{saldo_bd.get()}\n{gerente_bd.get()}\n{titular_bd.get()}")
            Arquivo = NomeArquivo.get()
            CPF = cpf_bd.get()
            NOME = nome_bd.get()
            SOBRENOME = sobrenome_bd.get()
            IDADE = idade_bd.get()
            CONTA = conta_bd.get()
            AGENCIA = agencia_bd.get()
            NUMERO = numero_bd.get()
            SALDO = saldo_bd.get()
            GERENTE = gerente_bd.get()
            TITULAR = titular_bd.get()
            with open(Arquivo, 'w', encoding="utf-8") as Salvar:
                Salvar.write("|CPF: "+ CPF + "\n")
                Salvar.write("|Nome: " + NOME + "\n")
                Salvar.write("|Sobrenome: " + SOBRENOME + "\n")
                Salvar.write("|Idade: " + IDADE + "\n")
                Salvar.write("|Conta: " + CONTA + "\n")
                Salvar.write("|Agencia: " + AGENCIA + "\n")
                Salvar.write("|Numero: " + NUMERO + "\n")
                Salvar.write("|Saldo: " + SALDO + "\n")
                Salvar.write("|Gerente: " + GERENTE + "\n")
                Salvar.write("|Titular: " + TITULAR + "\n")


        # Criando Janela Inserir
        janelainserir = tk.Toplevel()
        janelainserir.title("Inserindo os Dados")
        janelainserir.geometry('300x270+800+300')
        janelainserir.minsize(300, 270)
        janelainserir.maxsize(300, 270)


        tk.Label(janelainserir, text="--Insira as suas Informações --").grid(row=0, column=0)
        # Parte da Pessoa
        tk.Label(janelainserir, text="Informe o CPF......:").grid(row=1, column=0)
        cpf_bd = tk.Entry(janelainserir, width=18)
        cpf_bd.grid(row=1, column=1)

        tk.Label(janelainserir, text="Informe o Nome.....:").grid(row=2, column=0)
        nome_bd = tk.Entry(janelainserir, width=18)
        nome_bd.grid(row=2, column=1)

        tk.Label(janelainserir, text="Informe o Sobrenome:").grid(row=3, column=0)
        sobrenome_bd = tk.Entry(janelainserir, width=18)
        sobrenome_bd.grid(row=3, column=1)

        tk.Label(janelainserir, text="Informe a Idade....:").grid(row=4, column=0)
        idade_bd = tk.Entry(janelainserir, width=18)
        idade_bd.grid(row=4, column=1)

        tk.Label(janelainserir, text="Informe a Conta....:").grid(row=5, column=0)
        conta_bd = tk.Entry(janelainserir, width=18)
        conta_bd.grid(row=5, column=1)

        # Parte da Conta
        tk.Label(janelainserir, text="Informe a Agência..:").grid(row=6, column=0)
        agencia_bd = tk.Entry(janelainserir, width=18)
        agencia_bd.grid(row=6, column=1)

        tk.Label(janelainserir, text="Informe o Número...:").grid(row=7, column=0)
        numero_bd = tk.Entry(janelainserir, width=18)
        numero_bd.grid(row=7, column=1)

        tk.Label(janelainserir, text="Informe o Saldo....:").grid(row=8, column=0)
        saldo_bd = tk.Entry(janelainserir, width=18)
        saldo_bd.grid(row=8, column=1)

        tk.Label(janelainserir, text="Informe o Gerente..:").grid(row=9, column=0)
        gerente_bd = tk.Entry(janelainserir, width=18)
        gerente_bd.grid(row=9, column=1)

        tk.Label(janelainserir, text="Informe o Titular..:").grid(row=10, column=0)
        titular_bd = tk.Entry(janelainserir, width=18)
        titular_bd.grid(row=10, column=1)

        tk.Button(janelainserir, text="Voltar", command=janelainserir.destroy).grid(row=11, column=0)
        tk.Button(janelainserir, text="Confirmar", command=lambda:[btnSdados(), aprentarDados()]).grid(row=11, column=1)

    # Criando Janela Criar
    janelacriar = tk.Toplevel()
    janelacriar.title("Criar Arquivo")
    janelacriar.geometry('300x270+800+300')
    janelacriar.minsize(300, 270)
    janelacriar.maxsize(300, 270)

    tk.Label(janelacriar, text="  ").grid(row=0, column=0)
    tk.Label(janelacriar,text="Informe o nome do arquivo a ser Criado \n[Obs.: Insira o formato do arquivo ex.: .txt no final]:").grid(row=0, column=1)
    tk.Label(janelacriar).grid(row=1, column=1)
    NomeArquivo = tk.Entry(janelacriar, width=30)
    NomeArquivo.grid(row=2, column= 1)
    tk.Label(janelacriar).grid(row=3, column=1)
    tk.Button(janelacriar, text="Criar Arquivo", command=lambda:[btnStitulo(), inserindoDados()]).grid(row=4, column=1)
    tk.Label(janelacriar).grid(row=5, column=1)
    tk.Button(janelacriar, text="Voltar o menu", command=janelacriar.destroy).grid(row=6, column=1)

def abrirArquivo(): # Função Abrir Arquivo
    def apresentarDados(): # Função Apresentar Dados
        # Criando Janela Apresentar
        janelaapresentar = tk.Toplevel()
        janelaapresentar.title("Dados Salvos")
        janelaapresentar.geometry('300x270+800+300')
        janelaapresentar.minsize(300, 270)
        janelaapresentar.maxsize(300, 270)

        # Abrindo Arquivo
        Arquivo = NomeArquivo.get()
        with open(Arquivo, 'r+', encoding="utf-8") as Ler:
            Linha = Ler.readlines()
            print(Linha[0])
            print(Linha[1])
            print(Linha[2])
            print(Linha[3])
            print(Linha[4])
            print(Linha[5])
            print(Linha[6])
            print(Linha[7])
            print(Linha[8])
            print(Linha[9])

        # Parte para apresentar ao usuário
        A = tk.Label(janelaapresentar, text="Os dados foram salvos como:")
        A.grid(row=0, column=0)
        B = tk.Label(janelaapresentar, text="-------------")
        B.grid(row=0, column=1)
        C = tk.Label(janelaapresentar, text="Dados Inseridos:")
        C.grid(row=3, column=0)
        D = tk.Label(janelaapresentar, text="-------------")
        D.grid(row=4, column=0)
        E = tk.Label(janelaapresentar, text="-------------")
        E.grid(row=5, column=0)
        F = tk.Label(janelaapresentar, text="-------------")
        F.grid(row=6, column=0)
        G = tk.Label(janelaapresentar, text="-------------")
        G.grid(row=7, column=0)
        H = tk.Label(janelaapresentar, text="-------------")
        H.grid(row=8, column=0)
        I = tk.Label(janelaapresentar, text="-------------")
        I.grid(row=9, column=0)
        J = tk.Label(janelaapresentar, text="-------------")
        J.grid(row=10, column=0)
        K = tk.Label(janelaapresentar, text="-------------")
        K.grid(row=11, column=0)
        L = tk.Label(janelaapresentar, text="-------------")
        L.grid(row=12, column=0)
        M = tk.Label(janelaapresentar, text="-------------")
        M.grid(row=13, column=0)

        # Alterando os Valores de texto acima
        B["text"] = NomeArquivo.get()
        D["text"] = Linha[0].rstrip("\n")
        E["text"] = Linha[1].rstrip("\n")
        F["text"] = Linha[2].rstrip("\n")
        G["text"] = Linha[3].rstrip("\n")
        H["text"] = Linha[4].rstrip("\n")
        I["text"] = Linha[5].rstrip("\n")
        J["text"] = Linha[6].rstrip("\n")
        K["text"] = Linha[7].rstrip("\n")
        L["text"] = Linha[8].rstrip("\n")
        M["text"] = Linha[9].rstrip("\n")

        tk.Button(janelaapresentar, text="Voltar o menu",command=lambda: [janelaabrir.destroy(), janelaapresentar.destroy()]).grid(row=13, column=1)

    # Criando Janela Abrir
    janelaabrir = tk.Toplevel()
    janelaabrir.title("Abrir Arquivo")
    janelaabrir.geometry('300x270+800+300')
    janelaabrir.minsize(300, 270)
    janelaabrir.maxsize(300, 270)

    tk.Label(janelaabrir, text="  ").grid(row=0, column=0)
    tk.Label(janelaabrir,text="Informe o nome do arquivo a ser Aberto \n[Obs.: Insira o formato do arquivo ex.: .txt no final]:").grid(row=0, column=1)
    tk.Label(janelaabrir).grid(row=1, column=1)
    NomeArquivo = tk.Entry(janelaabrir, width=30)
    NomeArquivo.grid(row=2, column=1)
    tk.Label(janelaabrir).grid(row=3, column=1)
    tk.Button(janelaabrir, text="Abrir", command=lambda:[apresentarDados()]).grid(row=4, column=1)
    tk.Label(janelaabrir).grid(row=5, column=1)
    tk.Button(janelaabrir, text="Voltar o menu", command=janelaabrir.destroy).grid(row=6, column=1)

def editarArquivo(): # Função Editar Arquivo
    def btnStitulo(): # Função Editar Arquivo
        print(NomeArquivo.get())
        open(str(NomeArquivo.get()),"w")

    def inserindoDados(): # Função Inserir Dados
        def apresentarDados(): # Função Apresentar Dados
            janelaapresentar = tk.Toplevel()
            janelaapresentar.title("Dados Salvos")
            janelaapresentar.geometry('300x270+800+300')
            janelaapresentar.minsize(300, 270)
            janelaapresentar.maxsize(300, 270)

            # Abrindo Arquivo
            Arquivo = NomeArquivo.get()
            with open(Arquivo, 'r+', encoding="utf-8") as Ler:
                Linha = Ler.readlines()
                print(Linha[0])
                print(Linha[1])
                print(Linha[2])
                print(Linha[3])
                print(Linha[4])
                print(Linha[5])
                print(Linha[6])
                print(Linha[7])
                print(Linha[8])
                print(Linha[9])

            # Parte para apresentar ao usuário
            A = tk.Label(janelaapresentar,text="Os dados foram salvos como:")
            A.grid(row=0,column=0)
            B = tk.Label(janelaapresentar, text="-------------")
            B.grid(row=0, column=1)
            C = tk.Label(janelaapresentar, text="Dados Inseridos:")
            C.grid(row=3, column=0)
            D = tk.Label(janelaapresentar, text="-------------")
            D.grid(row=4, column=0)
            E = tk.Label(janelaapresentar, text="-------------")
            E.grid(row=5, column=0)
            F = tk.Label(janelaapresentar, text="-------------")
            F.grid(row=6, column=0)
            G = tk.Label(janelaapresentar, text="-------------")
            G.grid(row=7, column=0)
            H = tk.Label(janelaapresentar, text="-------------")
            H.grid(row=8, column=0)
            I = tk.Label(janelaapresentar, text="-------------")
            I.grid(row=9, column=0)
            J = tk.Label(janelaapresentar, text="-------------")
            J.grid(row=10, column=0)
            K = tk.Label(janelaapresentar, text="-------------")
            K.grid(row=11, column=0)
            L = tk.Label(janelaapresentar, text="-------------")
            L.grid(row=12, column=0)
            M = tk.Label(janelaapresentar, text="-------------")
            M.grid(row=13, column=0)

            # Alterando os Valores de texto acima
            B["text"] = NomeArquivo.get()
            D["text"] = Linha[0].rstrip("\n")
            E["text"] = Linha[1].rstrip("\n")
            F["text"] = Linha[2].rstrip("\n")
            G["text"] = Linha[3].rstrip("\n")
            H["text"] = Linha[4].rstrip("\n")
            I["text"] = Linha[5].rstrip("\n")
            J["text"] = Linha[6].rstrip("\n")
            K["text"] = Linha[7].rstrip("\n")
            L["text"] = Linha[8].rstrip("\n")
            M["text"] = Linha[9].rstrip("\n")

            tk.Button(janelaapresentar, text="Voltar o menu", command=lambda:[janelaapresentar.destroy(),janelaeditar.destroy(),janelainserir.destroy()]).grid(row=13, column=1)


        def btnSdados(): # Função Salvar Dados
            print(f"{cpf_bd.get()}\n{nome_bd.get()}\n{sobrenome_bd.get()}\n{idade_bd.get()}\n{conta_bd.get()}\n{agencia_bd.get()}\n{numero_bd.get()}\n{saldo_bd.get()}\n{gerente_bd.get()}\n{titular_bd.get()}")
            Arquivo = NomeArquivo.get()
            CPF = cpf_bd.get()
            NOME = nome_bd.get()
            SOBRENOME = sobrenome_bd.get()
            IDADE = idade_bd.get()
            CONTA = conta_bd.get()
            AGENCIA = agencia_bd.get()
            NUMERO = numero_bd.get()
            SALDO = saldo_bd.get()
            GERENTE = gerente_bd.get()
            TITULAR = titular_bd.get()
            with open(Arquivo, 'w', encoding="utf-8") as Salvar:
                Salvar.write("|CPF: "+ CPF + "\n")
                Salvar.write("|Nome: " + NOME + "\n")
                Salvar.write("|Sobrenome: " + SOBRENOME + "\n")
                Salvar.write("|Idade: " + IDADE + "\n")
                Salvar.write("|Conta: " + CONTA + "\n")
                Salvar.write("|Agencia: " + AGENCIA + "\n")
                Salvar.write("|Numero: " + NUMERO + "\n")
                Salvar.write("|Saldo: " + SALDO + "\n")
                Salvar.write("|Gerente: " + GERENTE + "\n")
                Salvar.write("|Titular: " + TITULAR + "\n")


        # Criando a Janela Inserir
        janelainserir = tk.Toplevel()
        janelainserir.title("Inserindo os Dados")
        janelainserir.geometry('300x270+800+300')
        janelainserir.minsize(300, 270)
        janelainserir.maxsize(300, 270)

        tk.Label(janelainserir, text="--Insira as suas Informações --").grid(row=0, column=0)
        # Parte da Pessoa
        tk.Label(janelainserir, text="Informe o CPF......:").grid(row=1, column=0)
        cpf_bd = tk.Entry(janelainserir, width=18)
        cpf_bd.grid(row=1, column=1)

        tk.Label(janelainserir, text="Informe o Nome.....:").grid(row=2, column=0)
        nome_bd = tk.Entry(janelainserir, width=18)
        nome_bd.grid(row=2, column=1)

        tk.Label(janelainserir, text="Informe o Sobrenome:").grid(row=3, column=0)
        sobrenome_bd = tk.Entry(janelainserir, width=18)
        sobrenome_bd.grid(row=3, column=1)

        tk.Label(janelainserir, text="Informe a Idade....:").grid(row=4, column=0)
        idade_bd = tk.Entry(janelainserir, width=18)
        idade_bd.grid(row=4, column=1)

        tk.Label(janelainserir, text="Informe a Conta....:").grid(row=5, column=0)
        conta_bd = tk.Entry(janelainserir, width=18)
        conta_bd.grid(row=5, column=1)

        # Parte da Conta
        tk.Label(janelainserir, text="Informe a Agência..:").grid(row=6, column=0)
        agencia_bd = tk.Entry(janelainserir, width=18)
        agencia_bd.grid(row=6, column=1)

        tk.Label(janelainserir, text="Informe o Número...:").grid(row=7, column=0)
        numero_bd = tk.Entry(janelainserir, width=18)
        numero_bd.grid(row=7, column=1)

        tk.Label(janelainserir, text="Informe o Saldo....:").grid(row=8, column=0)
        saldo_bd = tk.Entry(janelainserir, width=18)
        saldo_bd.grid(row=8, column=1)

        tk.Label(janelainserir, text="Informe o Gerente..:").grid(row=9, column=0)
        gerente_bd = tk.Entry(janelainserir, width=18)
        gerente_bd.grid(row=9, column=1)

        tk.Label(janelainserir, text="Informe o Titular..:").grid(row=10, column=0)
        titular_bd = tk.Entry(janelainserir, width=18)
        titular_bd.grid(row=10, column=1)

        tk.Button(janelainserir, text="Voltar", command=janelainserir.destroy).grid(row=11, column=0)
        tk.Button(janelainserir, text="Confirmar", command=lambda:[btnSdados(), apresentarDados()]).grid(row=11, column=1)

    # Criando a Janela Editar
    janelaeditar = tk.Toplevel()
    janelaeditar.title("Editar Arquivo")
    janelaeditar.geometry('300x270+800+300')
    janelaeditar.minsize(300, 270)
    janelaeditar.maxsize(300, 270)

    tk.Label(janelaeditar, text="  ").grid(row=0, column=0)
    tk.Label(janelaeditar,text="Informe o nome do arquivo a ser Editado \n[Obs.: Insira o formato do arquivo ex.: .txt no final]:").grid(row=0, column=1)
    tk.Label(janelaeditar).grid(row=1, column=1)
    NomeArquivo = tk.Entry(janelaeditar, width=30)
    NomeArquivo.grid(row=2, column=1)
    tk.Label(janelaeditar).grid(row=3, column=1)
    tk.Button(janelaeditar, text="Editar", command=lambda: [btnStitulo(), inserindoDados()]).grid(row=4, column=1)
    tk.Label(janelaeditar).grid(row=5, column=1)
    tk.Button(janelaeditar, text="Voltar o menu", command=janelaeditar.destroy).grid(row=6, column=1)

def deletarArquivo(): # Função Deletar Arquivo
    def apagarArquivo(): # Função Apagar Arquivo
        Arquivo = NomeArquivo.get()
        tkinter.messagebox.showinfo(title="Mensagem", message=f"Arquivo {Arquivo} Deletado", options=os.remove(Arquivo))

    # Criar janela Deletar
    janeladeletar = tk.Toplevel()
    janeladeletar.title("Deletar Arquivo")
    janeladeletar.geometry('300x270+800+300')
    janeladeletar.minsize(300, 270)
    janeladeletar.maxsize(300, 270)

    tk.Label(janeladeletar, text="  ").grid(row=0, column=0)
    tk.Label(janeladeletar,text="Informe o nome do arquivo a ser Deletado \n[Obs.: Insira o formato do arquivo ex.: .txt no final]:").grid(row=0, column=1)
    tk.Label(janeladeletar).grid(row=1, column=1)
    NomeArquivo = tk.Entry(janeladeletar, width=30)
    NomeArquivo.grid(row=2, column=1)
    tk.Label(janeladeletar).grid(row=3, column=1)
    tk.Button(janeladeletar, text="Deletar", command=apagarArquivo).grid(row=4,column=1)
    tk.Label(janeladeletar).grid(row=5, column=1)
    tk.Button(janeladeletar, text="Voltar o menu", command=janeladeletar.destroy).grid(row=6, column=1)

#msg = tk.Message(janelamenu, text="Seja Bem Vindo!")
tk.Label(janelamenu, text="              ").grid(row=0, column=1)
tk.Label(janelamenu, text="Por favor escolha o que quer fazer!").grid(row=0,column=3)
tk.Label(janelamenu).grid(row=1, column=3)
tk.Button(janelamenu, text="Criar Arquivo", command=criarArquivo).grid(row=2,column=3)
tk.Label(janelamenu).grid(row=3, column=3)
tk.Button(janelamenu, text="Abrir Arquivo", command=abrirArquivo).grid(row=4, column=3)
tk.Label(janelamenu).grid(row=5, column=3)
tk.Button(janelamenu, text="Editar Arquivo", command=editarArquivo).grid(row=6,column=3)
tk.Label(janelamenu).grid(row=7, column=3)
tk.Button(janelamenu, text="Deletar Arquivo", command=deletarArquivo).grid(row=8,column=3)
tk.Label(janelamenu).grid(row=9, column=3)
tk.Button(janelamenu, text="Sair", command=janelamenu.quit).grid(row=10, column=3)
tk.Label(janelamenu).grid(row=11, column=3)


janelamenu.mainloop()