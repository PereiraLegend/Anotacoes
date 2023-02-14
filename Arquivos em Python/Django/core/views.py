from django.shortcuts import render

# Create your views here.
# Quando trocamos o debug para false ele vem direto para essa página e essa função procurado templates
def index(request):
    # Se eu quiser passar alguma informação para a página index
    context = {
        'curso': 'Programação Web com Django Framework',
        'outro': 'Outro'
    }
    return render(request, "index.html") # Aqui defino templates

def contato(request):
    return render(request, "contato.html") # Aqui crio mais uma página html