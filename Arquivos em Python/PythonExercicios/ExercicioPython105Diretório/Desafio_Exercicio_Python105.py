from ExercicioPython105Diretório.lib.Interface import *
from time import sleep
from ExercicioPython105Diretório.lib.arquivo import *

arq  = 'cursoemvideo.txt'
if arquivoExiste(arq):
    print('Arquivo encontrado com sucesso!')
else:
    print('Arquivo não encontardo!')
    criarArquivo(arq)
while True:
    resposta = menu(['Ver pessoas cadastradas','Cadastrar nova Pessoas','Sair do Sistema'])
    if resposta == 1:
        #cabecalho('Opção 1')
        #Opção de listar o conteúdo de um arquivo
        lerArquivo(arq)
    elif resposta == 2:
        cabecalho('NOVO CADASTRO')
        nome = str(input('Nome: '))
        idade = leiaInt('Idade: ')
        cadastrar(arq, nome, idade)
    elif resposta == 3:
        # Ao invés do cabecalho eu posso colacar um print
        cabecalho('Saindo do sistema... Até logo!')
        break
    else:
        print('\033[31mERRO! Digte uma opção válida!\033[m')
    sleep(2)