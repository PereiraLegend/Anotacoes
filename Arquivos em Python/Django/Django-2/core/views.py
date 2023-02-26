from django.shortcuts import render

from .forms import ContatoForm
# Create your views here.
def index(request):
    return render(request, 'index.html')

def contato(request):
    form = ContatoForm()
    context = {
        'form': form
    }
    return render(request, 'contato.html', context)

def produto(request):
    return render(request, 'produto.html')