from django.shortcuts import render
from django.http import HttpResponse
from .models import Pessoa 
# Create your views here.

def ver_produto(req):
    # Fazendo requisições:
    if req.method == "GET":
        nome='Lucas'
    elif req.method == "POST": # Aqui eu faço o tratamento e separação dos dados que foram enviados para o formulário
        nome = req.POST.get('nome')
        idade = req.POST.get('idade')
        print(nome)
        print(idade)
        
        pessoa = Pessoa(nome=nome, idade=idade) # Aqui eu atribuo o que foi registrado aos indices criados de 'Pessoa' que está instânciado dentro de 'pessoa'
        pessoa.save() # Aqui o comando '.save' para a instância 'pessoa' salva o que foi adicionado
        
        # pessoas = Pessoa.objects.all() # Aqui eu trago todos os dados
        pessoas = Pessoa.objects.filter(nome=nome) # Aqui eu trago apenas aquelas pessoas com filtro, nesse caso aqueles que possuem o mesmo nome, comm isso posso fazer validações
        print(pessoas[0])
        if pessoas.exists(): # Aquie crio uma "veirificação"
            print('Usuário já cadastrado')
        else:
            print('Usuário Cadastrado')
        return HttpResponse(pessoas)
    
    # return HttpResponse('Olá Mundo!')
    return render(req, 'ver_produto.html', {'nome': 'lucas'}) # Eu apenas chamo o que eu quero renderizar na tela, pois os templates por padrão são reconhecidos pelo python # para passar dados eu passo um context
    # Se eu quiser criar uma variavel com o valor lucas para passar o nome lucas eu posso, como 
    """Exemplo
    nome = 'Lucas'
    return render(req, 'ver_produto.html', {'nome': nome})
    """

def inserir_produto(req):
    # return HttpResponse('Inserir Produtos!')
    return render(req, "inserir_produto.html")