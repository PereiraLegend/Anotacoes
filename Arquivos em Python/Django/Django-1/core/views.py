from django.shortcuts import render
from .models import Produto
from django.shortcuts import get_object_or_404 # Serve para mostrar a mensagem 404 pagina não encontrada
from django.http import HttpResponse
from django.template import loader
# Create your views here.
# Quando trocamos o debug para false ele vem direto para essa página e essa função procurado templates
def index(request):

    """
    print(request)
    print(dir(request))
    print(f'User.Agent: {request.headers["User-Agent"]}')
    print(f'User: {request.user}')
    # Se eu quiser passar alguma informação para a página index

    if str(request.user) == "AnonymousUser":
        teste = "Usuário não logado"
    else:
        teste = "Usuário logado"


    context = {
        'curso': 'Programação Web com Django Framework',
        'outro': 'Outro Djkango',
        'logado': teste
    }
    return render(request, "index.html", context) # Aqui defino templates
    """
    produtos = Produto.objects.all()
    context = {
        'curso': 'Programação Web com Django Framework',
        'outro': 'Outro Djkango',
        'produtos': produtos,
    }
    return render(request,"index.html",context)  # Aqui defino templates

def contato(request):
    return render(request, "contato.html") # Aqui crio mais uma página html

def produto(request, pk):
    # prod = Produto.objects.get(id=pk)
    prod = get_object_or_404(Produto, id=pk) 
    context = {
        'produto' : prod
    }
    #print(f"PK:{pk}")
    return render(request, 'produto.html', context)

def error404(request, exception):
    template = loader.get_template('404.html')
    return HttpResponse(content=template.render(), content_type='text/html; charset=utf8', status=404)

def error500(request):
    template = loader.get_template('500.html')
    return HttpResponse(content= template.render(), content_type='text/html; charser=utf8', status=500)