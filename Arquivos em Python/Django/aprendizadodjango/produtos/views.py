from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def ver_produto(req):
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