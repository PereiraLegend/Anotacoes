from django.shortcuts import render
from .models import Produto
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
        'produtos': produtos
    }
    return render(request, "index.html", context)  # Aqui defino templates
def contato(request):
    return render(request, "contato.html") # Aqui crio mais uma página html
def produto(request, pk):
    print(f"PK:{pk}")
    return render(request, 'produto.html')